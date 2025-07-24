console.log('🎓 study.js loaded from main/study/assets/js/study.js');

document.addEventListener("DOMContentLoaded", () => {
  const courses = document.querySelectorAll(".study-item");
  courses.forEach(course => {
    course.addEventListener("click", () => {
      console.log(`Bạn vừa chọn: ${course.querySelector("h3").innerText}`);
    });
  });
});
