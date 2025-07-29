window.initPhotoViewer = function () {
    if (document.getElementById('photoViewer')) return;

    const viewer = document.createElement('div');
    viewer.id = 'photoViewer';
    viewer.className = 'photo-viewer hidden';
    viewer.innerHTML = `
    <div class="viewer-content">
      <img src="" alt="Preview" />
      <div class="button-group">
        <button class="reset-btn" title="Reset">&#10227;</button>
        <button class="center-btn" title="Center">&#9673;</button>
        <button class="close-btn" title="Close">&times;</button>
      </div>
    </div>
  `;
    document.body.appendChild(viewer);

    const style = document.createElement('style');
    style.textContent = `
    .photo-viewer {
      position: fixed; top: 0; left: 0;
      width: 100vw; height: 100vh;
      background: rgba(0, 0, 0, 0.95);
      display: flex; align-items: center; justify-content: center;
      z-index: 9999;
    }
    .photo-viewer.hidden { display: none; }
    .viewer-content {
      position: relative;
      max-width: 90vw;
      max-height: 90vh;
      overflow: hidden;
      display: flex; align-items: center; justify-content: center;
    }
    .viewer-content img {
      max-width: 100%;
      max-height: 100%;
      cursor: grab;
      transition: transform 0.2s ease;
    }
    .button-group {
        position: absolute;
        top: 1rem;
        right: 1rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
        z-index: 1;
    }
    .button-group button {
      font-size: 1.5rem;
      background: none;
      color: white;
      border: none;
      cursor: pointer;
      padding: 0.2rem 0.5rem;
    }
    .button-group button:hover {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 4px;
    }
  `;
    document.head.appendChild(style);

    const img = viewer.querySelector('img');
    const closeBtn = viewer.querySelector('.close-btn');
    const resetBtn = viewer.querySelector('.reset-btn');
    const centerBtn = viewer.querySelector('.center-btn');

    let scale = 1, panX = 0, panY = 0;
    let isPanning = false, startX = 0, startY = 0;

    function applyTransform() {
        img.style.transform = `scale(${scale}) translate(${panX}px, ${panY}px)`;
    }

    window.openPhotoViewer = function (src) {
        viewer.classList.remove('hidden');
        img.src = src;
        scale = 1; panX = 0; panY = 0;
        applyTransform();
    };

    closeBtn.addEventListener('click', () => viewer.classList.add('hidden'));
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') viewer.classList.add('hidden');
    });

    img.addEventListener('wheel', e => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        scale = Math.min(Math.max(1, scale + delta), 5);
        applyTransform();
    });

    img.addEventListener('mousedown', e => {
        e.preventDefault();
        isPanning = true;
        startX = e.clientX;
        startY = e.clientY;
    });

    window.addEventListener('mousemove', e => {
        if (!isPanning) return;
        panX += (e.clientX - startX) / scale;
        panY += (e.clientY - startY) / scale;
        startX = e.clientX;
        startY = e.clientY;
        applyTransform();
    });

    window.addEventListener('mouseup', () => isPanning = false);

    resetBtn.addEventListener('click', () => {
        scale = 1; panX = 0; panY = 0;
        applyTransform();
    });

    centerBtn.addEventListener('click', () => {
        panX = 0; panY = 0;
        applyTransform();
    });
};
