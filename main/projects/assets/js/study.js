(() => {
  const currentScript = document.currentScript;
  if (currentScript && currentScript.src) {
    const url = new URL(currentScript.src);
    console.log(`${url.pathname} loaded`);
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  const courses = document.querySelectorAll(".study-item");
  courses.forEach(course => {
    course.addEventListener("click", () => {
      console.log(`Bạn vừa chọn: ${course.querySelector("h3").innerText}`);
    });
  });
});
