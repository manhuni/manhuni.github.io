const slideshow1_images = [ 
  "/main/projects/github-docs/github-actions/assets/images/demo/structure.jpg",
  "/main/projects/github-docs/github-actions/assets/images/demo/settings.jpg",
  "/main/projects/github-docs/github-actions/assets/images/demo/footer.jpg",
]; 

window.addEventListener("DOMContentLoaded", () => {
  initPhotoViewer();
  createSlideshow("#slideshow1", slideshow1_images, {
    onImageClick: (src, index) => openPhotoViewerByIndex(index, slideshow1_images)
  }); 

});
