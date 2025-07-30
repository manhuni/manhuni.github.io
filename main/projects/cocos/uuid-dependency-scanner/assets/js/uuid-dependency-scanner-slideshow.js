const slideshow1_images = [
  "/main/projects/cocos/uuid-dependency-scanner/assets/images/demo/structure-folder.jpg",
  "/main/projects/cocos/uuid-dependency-scanner/assets/images/demo/panel-location.jpg",
  "/main/projects/cocos/uuid-dependency-scanner/assets/images/demo/editor.jpg",
]; 

window.addEventListener("DOMContentLoaded", () => {
  initPhotoViewer();
  createSlideshow("#slideshow1", slideshow1_images, {
    onImageClick: (src, index) => openPhotoViewerByIndex(index, slideshow1_images)
  }); 

});
