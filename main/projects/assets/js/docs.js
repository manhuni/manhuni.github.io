(() => {
  const currentScript = document.currentScript;
  if (currentScript && currentScript.src) {
    const url = new URL(currentScript.src);
    console.log(`${url.pathname} loaded`);
  }
})();


document.addEventListener("DOMContentLoaded", () => {
  const docs = document.querySelectorAll(".doc-item");
  docs.forEach(item => {
    item.addEventListener("click", () => {
      console.log(`Bạn vừa bấm vào: ${item.querySelector("h3").innerText}`);
    });
  });
});
