console.log('🚀 project.js loaded from main/projects/assets/js/project.js');

document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".project-item");
  projects.forEach(project => {
    project.addEventListener("click", () => {
      alert(`Bạn vừa chọn: ${project.querySelector("h3").innerText}`);
    });
  });
});
