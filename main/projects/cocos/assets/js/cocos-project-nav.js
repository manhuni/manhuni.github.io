document.addEventListener("DOMContentLoaded", function () {
  const lessons = [
    { path: "recreate-uuid/index.html", label: "🔑 Recreate UUID - Cocos Creator Extensions" },
    { path: "uuid-dependency-scanner/index.html", label: "🗂️ UUID & Dependency Scanner - Cocos Creator Extension" },
    { path: "plugins/index.html", label: "Asset Tools & Plugins" },
  ];

  const parts = window.location.pathname.split("/");
  const current = parts.slice(-2).join("/");

  const idx = lessons.findIndex(l => l.path === current);
  const nav = document.createElement("nav");
  nav.className = "lesson-nav";

  if (idx > 0) {
    const prev = lessons[idx - 1];
    nav.innerHTML += `<a href="/main/projects/cocos/${prev.path}" class="btn">← ${prev.label}</a>`;
  }

  if (idx >= 0 && idx < lessons.length - 1) {
    const next = lessons[idx + 1];
    nav.innerHTML += `<a href="/main/projects/cocos/${next.path}" class="btn">${next.label} →</a>`;
  }

  const main = document.querySelector("main");
  if (main) {
    main.appendChild(nav);
  }
});
