(() => {
  const currentScript = document.currentScript;
  if (currentScript && currentScript.src) {
    const url = new URL(currentScript.src);
    console.log(`${url.pathname} loaded`);
  }
})();

document.addEventListener("DOMContentLoaded", function () {
  const lessons = [
    { path: "property-attributes-cocos/index.html", label: "🎮 Decorators trong Cocos Creator v3" }, 
    { path: "git-submodule/index.html", label: "🔗 Git Submodule - Quản lý code phụ thuộc" }, 
  ];

  const parts = window.location.pathname.split("/");
  const current = parts.slice(-2).join("/");

  const idx = lessons.findIndex(l => l.path === current);
  const nav = document.createElement("nav");
  nav.className = "lesson-nav";
  nav.innerHTML += `<a href="/main/projects/docs.html" class="btn">Documentation</a>`;

  if (idx > 0) {
    const prev = lessons[idx - 1];
    nav.innerHTML += `<a href="/main/projects/tips-tricks-dev-docs/${prev.path}" class="btn">← ${prev.label}</a>`;
  }

  if (idx >= 0 && idx < lessons.length - 1) {
    const next = lessons[idx + 1];
    nav.innerHTML += `<a href="/main/projects/tips-tricks-dev-docs/${next.path}" class="btn">${next.label} →</a>`;
  }

  const main = document.querySelector("main");
  if (main) {
    main.appendChild(nav);
  }
});
