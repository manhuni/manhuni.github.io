window.initPhotoViewer = function () {
  if (document.getElementById('photoViewer')) return;

  const viewer = document.createElement('div');
  viewer.id = 'photoViewer';
  viewer.className = 'photo-viewer hidden';
  viewer.innerHTML = `
    <div class="viewer-content">
      <img src="" alt="Preview" />
      <div class="image-info"></div>
      <div class="button-group">
        <button class="zoom-in-btn" title="Zoom In">+</button>
        <button class="zoom-out-btn" title="Zoom Out">-</button>
        <button class="reset-btn" title="Reset">&#10227;</button>
        <button class="center-btn" title="Center">&#9673;</button>
        <button class="close-btn" title="Close">&times;</button>
      </div>
    </div>
  `;
  document.body.appendChild(viewer);

  const img = viewer.querySelector('img');
  const infoDiv = viewer.querySelector('.image-info');
  const closeBtn = viewer.querySelector('.close-btn');
  const resetBtn = viewer.querySelector('.reset-btn');
  const centerBtn = viewer.querySelector('.center-btn');
  const zoomInBtn = viewer.querySelector('.zoom-in-btn');
  const zoomOutBtn = viewer.querySelector('.zoom-out-btn');

  let scale = 1, panX = 0, panY = 0;
  let isPanning = false, startX = 0, startY = 0;

  function applyTransform() {
    img.style.transform = `scale(${scale}) translate(${panX}px, ${panY}px)`;
  }

  window.openPhotoViewer = function (src) {
    viewer.classList.remove('hidden');
    document.body.classList.add('no-scroll'); // ✅ Chặn cuộn khi mở
    img.src = src;
    scale = 1; panX = 0; panY = 0;
    applyTransform();
    img.onload = () => {
      const fileName = src.split('/').pop();
      infoDiv.textContent = `${fileName} — ${img.naturalWidth}×${img.naturalHeight}px`;
    };
  };

  function closeViewer() {
    viewer.classList.add('hidden');
    document.body.classList.remove('no-scroll'); // ✅ Gỡ chặn cuộn khi đóng
  }

  closeBtn.addEventListener('click', closeViewer);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeViewer();
  });

  img.addEventListener('mousedown', e => {
    e.preventDefault();
    isPanning = true;
    startX = e.clientX;
    startY = e.clientY;
  });

  img.addEventListener('wheel', e => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    scale = Math.min(Math.max(1, scale + delta), 5);
    applyTransform();
  }, { passive: false });

  window.addEventListener('mousemove', e => {
    if (!isPanning) return;
    panX += (e.clientX - startX) / scale;
    panY += (e.clientY - startY) / scale;
    startX = e.clientX;
    startY = e.clientY;
    applyTransform();
  });

  window.addEventListener('mouseup', () => isPanning = false);

  img.addEventListener('touchstart', e => {
    if (e.touches.length === 1) {
      isPanning = true;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }
  }, { passive: false });

  window.addEventListener('touchmove', e => {
    if (!isPanning || e.touches.length !== 1) return;
    e.preventDefault();
    panX += (e.touches[0].clientX - startX) / scale;
    panY += (e.touches[0].clientY - startY) / scale;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    applyTransform();
  }, { passive: false });

  window.addEventListener('touchend', () => isPanning = false);

  zoomInBtn.addEventListener('click', () => {
    scale = Math.min(scale + 0.1, 5);
    applyTransform();
  });

  zoomOutBtn.addEventListener('click', () => {
    scale = Math.max(scale - 0.1, 1);
    applyTransform();
  });

  resetBtn.addEventListener('click', () => {
    scale = 1; panX = 0; panY = 0;
    applyTransform();
  });

  centerBtn.addEventListener('click', () => {
    panX = 0; panY = 0;
    applyTransform();
  });
};
