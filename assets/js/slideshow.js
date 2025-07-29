window.createSlideshow = function (selector, images = []) {
  const container = document.querySelector(selector);
  const slidesDiv = container.querySelector('.slides');

  if (!container || !slidesDiv || images.length === 0) return;

  // Thêm ảnh
  images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.draggable = false; // ✅ chặn kéo ảnh
    slidesDiv.appendChild(img);
  });

  const slides = slidesDiv.querySelectorAll('img');
  let currentIndex = 0;
  let isDragging = false;
  let startX = 0;
  let currentX = 0;

  // ✅ Tạo indicator (dot)
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
    updateDots(); // ✅ cập nhật dot
  }

  function cancelAnim() {
    slidesDiv.style.transition = 'none';
  }

  function onTouchStart(e) {
    e.preventDefault(); // ✅ chặn kéo ảnh và hiệu ứng mặc định
    isDragging = true;
    startX = e.touches ? e.touches[0].clientX : e.clientX;
    cancelAnim();
  }

  function onTouchMove(e) {
    if (!isDragging) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    currentX = x - startX;
    const percentOffset = (currentX / container.offsetWidth) * 100;
    setPosition(percentOffset);
  }

  function onTouchEnd() {
    if (!isDragging) return;
    isDragging = false;

    const movedPercent = (currentX / container.offsetWidth) * 100;

    if (movedPercent < -25 && currentIndex < slides.length - 1) {
      currentIndex++;
    } else if (movedPercent > 25 && currentIndex > 0) {
      currentIndex--;
    }

    snap();
  }

  container.addEventListener('mousedown', onTouchStart, { passive: false });
  container.addEventListener('mousemove', onTouchMove);
  container.addEventListener('mouseup', onTouchEnd);
  container.addEventListener('mouseleave', onTouchEnd);

  container.addEventListener('touchstart', onTouchStart, { passive: false });
  container.addEventListener('touchmove', onTouchMove);
  container.addEventListener('touchend', onTouchEnd);

  snap();
};
