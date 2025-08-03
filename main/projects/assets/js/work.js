(() => {
  const currentScript = document.currentScript;
  if (currentScript && currentScript.src) {
    const url = new URL(currentScript.src);
    console.log(`${url.pathname} loaded`);
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  const tasks = document.querySelectorAll(".work-item");
  tasks.forEach(task => {
    task.addEventListener("click", () => {
      console.log(`Bạn vừa chọn: ${task.querySelector("h3").innerText}`);
    });
  });
});
