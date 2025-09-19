(() => {
  const currentScript = document.currentScript;
  if (currentScript && currentScript.src) {
    const url = new URL(currentScript.src);
    console.log(`${url.pathname} loaded`);
  }
})();

const slideshow1_images = [ 
  "/main/projects/github-docs/github-actions/assets/images/demo/structure.jpg",
  "/main/projects/github-docs/github-actions/assets/images/demo/settings.jpg",
  "/main/projects/github-docs/github-actions/assets/images/demo/pages_build_and_deploy.jpg",
  "/main/projects/github-docs/github-actions/assets/images/demo/footer.jpg",
]; 

window.addEventListener("DOMContentLoaded", () => {
  initPhotoViewer();
  createSlideshow("#slideshow1", slideshow1_images, {
    onImageClick: (src, index) => openPhotoViewerByIndex(index, slideshow1_images)
  }); 

});
