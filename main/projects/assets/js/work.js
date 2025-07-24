console.log('💼 work.js loaded from main/work/assets/js/work.js');

document.addEventListener("DOMContentLoaded", () => {
  const tasks = document.querySelectorAll(".work-item");
  tasks.forEach(task => {
    task.addEventListener("click", () => {
      console.log(`Bạn vừa chọn: ${task.querySelector("h3").innerText}`);
    });
  });
});
