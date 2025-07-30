window.createSlideshow = function (selector, images = [], options = {}) {
  const container = document.querySelector(selector);
  if (!container || images.length === 0) return;

  let slidesDiv = container.querySelector('.slides');
  if (!slidesDiv) {
    slidesDiv = document.createElement('div');
    slidesDiv.className = 'slides';
    container.appendChild(slidesDiv);
  }

  images.forEach((src, index) => { // 🟢 SỬ DỤNG index
    const img = document.createElement('img');
    img.src = src;
    img.draggable = false;
    img.dataset.ok = '1';
    img.style.pointerEvents = 'none';

    img.onload = () => {
      img.style.pointerEvents = 'auto';
      img.addEventListener('click', e => {
        e.stopPropagation();
        if (wasDragged) return;
        if (typeof options.onImageClick === 'function') {
          // ✅ TRUYỀN LUÔN index + src (hoặc relative nếu muốn)
          options.onImageClick(src, index);
        }
      });
      img.addEventListener('touchend', e => {
        if (wasDragged) return;
        if (typeof options.onImageClick === 'function') {
          options.onImageClick(src, index);
        }
      }, { passive: true });
    };

    img.onerror = () => {
      img.dataset.ok = '0';
      img.classList.add('broken');
      img.style.pointerEvents = 'none';
      img.style.opacity = '0.3';
      img.style.filter = 'grayscale(1)';
    };

    slidesDiv.appendChild(img);
  });

  const slides = slidesDiv.querySelectorAll('img');
  let currentIndex = 0, isDragging = false, startX = 0, currentX = 0, wasDragged = false;

  const indicator = document.createElement("div");
  indicator.className = "indicator";
  images.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.className = "indicator-dot";
    if (i === 0) dot.classList.add("active");
    indicator.appendChild(dot);
  });
  container.appendChild(indicator);
  const dots = indicator.querySelectorAll(".indicator-dot");

  function updateDots() {
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }

  function setPosition(offsetX = 0) {
    const percent = -currentIndex * 100 + offsetX;
    slidesDiv.style.transform = `translateX(${percent}%)`;
  }

  function snap() {
    slidesDiv.style.transition = 'transform 0.3s ease';
    setPosition();
    updateDots();
  }

  function cancelAnim() {
    slidesDiv.style.transition = 'none';
  }

  function onTouchStart(e) {
    if (e.target.closest('.photo-viewer')) return;
    isDragging = true;
    wasDragged = false;
    startX = e.touches ? e.touches[0].clientX : e.clientX;
    cancelAnim();
  }

  function onTouchMove(e) {
    if (!isDragging) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    currentX = x - startX;
    if (Math.abs(currentX) > 5) wasDragged = true;
    setPosition((currentX / container.offsetWidth) * 100);
  }

  function onTouchEnd(e) {
    if (!isDragging) return;
    isDragging = false;
    const movedPercent = (currentX / container.offsetWidth) * 100;
    if (movedPercent < -25 && currentIndex < slides.length - 1) currentIndex++;
    else if (movedPercent > 25 && currentIndex > 0) currentIndex--;
    currentX = 0;
    snap();
  }

  container.addEventListener('mousedown', onTouchStart, { passive: false });
  container.addEventListener('mousemove', onTouchMove);
  container.addEventListener('mouseup', onTouchEnd);
  container.addEventListener('mouseleave', onTouchEnd);

  container.addEventListener('touchstart', onTouchStart, { passive: false });
  container.addEventListener('touchmove', onTouchMove, { passive: false });
  container.addEventListener('touchend', onTouchEnd);

  snap();
};
