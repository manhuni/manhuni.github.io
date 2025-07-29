const slideshow1_images = [
  "/main/projects/cocos/build-extension/assets/images/demo/istockphoto-2216163156-1024x1024.jpg",
  "/main/projects/cocos/build-extension/assets/images/demo/istockphoto-2184076260-1024x1024.jpg", 
];
const slideshow2_images = [
  "/main/projects/cocos/build-extension/assets/images/demo/istockphoto-2216163156-1024x1024.jpg",
  "/main/projects/cocos/build-extension/assets/images/demo/istockphoto-2184076260-1024x1024.jpg", 
  "/main/projects/cocos/build-extension/assets/images/demo/istockphoto-2216163156-1024x1024.jpg",
  "/main/projects/cocos/build-extension/assets/images/demo/istockphoto-2184076260-1024x1024.jpg", 
];

window.addEventListener("DOMContentLoaded", () => {
  initPhotoViewer();
  createSlideshow("#slideshow1", slideshow1_images , {
      onImageClick: (src) => openPhotoViewer(src)
    });
  createSlideshow("#slideshow2", slideshow2_images , {
      onImageClick: (src) => openPhotoViewer(src)
    });
});
