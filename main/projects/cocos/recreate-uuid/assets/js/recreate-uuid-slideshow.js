(() => {
  const currentScript = document.currentScript;
  if (currentScript && currentScript.src) {
    const url = new URL(currentScript.src);
    console.log(`${url.pathname} loaded`);
  }
})();

const slideshow1_images = [
  "/main/projects/cocos/recreate-uuid/assets/images/demo/structure-folder.jpg",
  "/main/projects/cocos/recreate-uuid/assets/images/demo/panel-location.jpg",
  "/main/projects/cocos/recreate-uuid/assets/images/demo/editor.jpg",
]; 

window.addEventListener("DOMContentLoaded", () => {
  initPhotoViewer();
  createSlideshow("#slideshow1", slideshow1_images, {
    onImageClick: (src, index) => openPhotoViewerByIndex(index, slideshow1_images)
  }); 

});
