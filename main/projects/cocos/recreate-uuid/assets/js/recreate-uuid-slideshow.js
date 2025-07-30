const slideshow1_images = [
  "/main/projects/cocos/recreate-uuid/assets/images/demo/structure-folder.jpg",
  "/main/projects/cocos/recreate-uuid/assets/images/demo/panel-location.jpg",
];
const slideshow2_images = [
  "/main/projects/cocos/recreate-uuid/assets/images/demo/structure-folder.jpg",
];

window.addEventListener("DOMContentLoaded", () => {
  initPhotoViewer();
  createSlideshow("#slideshow1", slideshow1_images, {
    onImageClick: (src) => openPhotoViewer(src, slideshow1_images)
  });
  createSlideshow("#slideshow2", slideshow2_images, {
    onImageClick: (src) => openPhotoViewer(src, slideshow2_images)
  });

});
