(() => {
  const currentScript = document.currentScript;
  if (currentScript && currentScript.src) {
    const url = new URL(currentScript.src);
    console.log(`${url.pathname} loaded`);
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  const timelines = document.querySelectorAll(".timeline");

  timelines.forEach((timeline) => {
    const title = timeline.querySelector(".timeline-title");

    title.addEventListener("click", () => {
      timeline.classList.toggle("show");
    });
  });
});
