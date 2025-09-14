(() => {
  const currentScript = document.currentScript;
  if (currentScript && currentScript.src) {
    const url = new URL(currentScript.src);
    console.log(`${url.pathname} loaded`);
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".project-item");
  projects.forEach(project => {
    project.addEventListener("click", () => {
      console.log(`Bạn vừa chọn: ${project.querySelector("h3").innerText}`);
    });
  });
});
