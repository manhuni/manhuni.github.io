(() => {
  const currentScript = document.currentScript;
  if (currentScript && currentScript.src) {
    const url = new URL(currentScript.src);
    console.log(`${url.pathname} loaded`);
  }
})();

document.addEventListener("DOMContentLoaded", function () {
  const lessons = [
    { path: "recreate-uuid/index.html", label: "🔑 Recreate UUID - Cocos Creator Extensions" },
    { path: "uuid-dependency-scanner/index.html", label: "🗂️ UUID & Dependency Scanner - Cocos Creator Extension" }, 
    { path: "admob-integration/index.html", label: "🎯 Google AdMob Android Integration - Cocos Creator Extension" }, 
  ];

  const parts = window.location.pathname.split("/");
  const current = parts.slice(-2).join("/");

  const idx = lessons.findIndex(l => l.path === current);
  const nav = document.createElement("nav");
  nav.className = "lesson-nav";
  nav.innerHTML += `<a href="/main/projects/cocos/index.html" class="btn">Cocos Creator Projects</a>`;

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
