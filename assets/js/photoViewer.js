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
      <button class="reset-btn" title="Reset">&#10227;</button>
      <button class="center-btn" title="Center">&#9673;</button>
      <button class="close-btn" title="Close">&times;</button>
    </div>
  </div>
`;

    document.body.appendChild(viewer);

    const img = viewer.querySelector('img');
    const closeBtn = viewer.querySelector('.close-btn');
    const resetBtn = viewer.querySelector('.reset-btn');
    const centerBtn = viewer.querySelector('.center-btn');

    let scale = 1, panX = 0, panY = 0;
    let isPanning = false, startX = 0, startY = 0;

    function applyTransform() {
        img.style.transform = `scale(${scale}) translate(${panX}px, ${panY}px)`;
    }

    const infoDiv = viewer.querySelector('.image-info');

    window.openPhotoViewer = function (src) {
        viewer.classList.remove('hidden');
        img.src = src;
        scale = 1; panX = 0; panY = 0;
        applyTransform();

        img.onload = function () {
            const fileName = src.split('/').pop();
            const width = img.naturalWidth;
            const height = img.naturalHeight;
            infoDiv.textContent = `${fileName} — ${width}×${height}px`;
        };
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
