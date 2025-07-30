const slideshow1_images = [
  "/main/projects/cocos/recreate-uuid/assets/images/demo/structure-folder.jpg",
  "/main/projects/cocos/recreate-uuid/assets/images/demo/panel-location.jpg",
  "/main/projects/cocos/recreate-uuid/assets/images/demo/panel-locations.jpg",
];
const slideshow2_images = [
  "/main/projects/cocos/recreate-uuid/assets/images/demo/structure-folder.jpg",
];

window.addEventListener("DOMContentLoaded", () => {
  initPhotoViewer();
  createSlideshow("#slideshow1", slideshow1_images, {
    onImageClick: (src, index) => openPhotoViewerByIndex(index, slideshow1_images)
  });
  createSlideshow("#slideshow2", slideshow2_images, {
    onImageClick: (src, index) => openPhotoViewerByIndex(index, slideshow2_images)
  });

});
