console.log('📚 docs.js loaded from main/projects/assets/js/docs.js');

document.addEventListener("DOMContentLoaded", () => {
  const docs = document.querySelectorAll(".doc-item");
  docs.forEach(item => {
    item.addEventListener("click", () => {
      alert(`Bạn vừa bấm vào: ${item.querySelector("h3").innerText}`);
    });
  });
});
