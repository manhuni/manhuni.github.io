(() => {
  const currentScript = document.currentScript;
  if (currentScript && currentScript.src) {
    const url = new URL(currentScript.src);
    console.log(`${url.pathname} loaded`);
  }
})();
const BASE_PATH = '/'; // gốc domain

async function loadComponent(id, url) {
  const el = document.getElementById(id);
  const res = await fetch(BASE_PATH + url);
  const text = await res.text();
  el.innerHTML = text;

  // Tìm tất cả <link rel="stylesheet"> bên trong component
  el.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
    const href = link.getAttribute('href');
    // Tạo thẻ link mới
    const newLink = document.createElement('link');
    newLink.rel = 'stylesheet';
    newLink.href = href;
    document.head.appendChild(newLink);
    // Xoá thẻ link cũ khỏi innerHTML để tránh trùng lặp
    link.remove();
  });
  // ✅ Load <script src="..."> thủ công
  el.querySelectorAll('script[src]').forEach(script => {
    const src = script.getAttribute('src');
    const newScript = document.createElement('script');
    newScript.src = src;
    newScript.defer = true;
    document.body.appendChild(newScript);
    script.remove();
  });
}

loadComponent('header', 'components/header.html');
loadComponent('footer', 'components/footer.html');
// --- Dictionary lookup feature --- //
let lookupBtn;

document.addEventListener("selectionchange", () => {
  const selectedText = window.getSelection().toString().trim();

  // Nếu không có text thì ẩn nút
  if (!selectedText) {
    if (lookupBtn) lookupBtn.remove();
    return;
  }

  const selection = window.getSelection();
  if (selection.rangeCount === 0) return;

  const range = selection.getRangeAt(0);
  const rect = range.getBoundingClientRect();

  // URL Merriam-Webster
  const dictUrl =
    "https://www.merriam-webster.com/dictionary/" +
    encodeURIComponent(selectedText);

  showLookupButton(rect.right, rect.top, dictUrl, selectedText);
});

function showLookupButton(x, y, url, word) {
  // Xóa nút cũ
  if (lookupBtn) lookupBtn.remove();

  lookupBtn = document.createElement("div");
  lookupBtn.id = "lookup-btn";
  lookupBtn.textContent = `Tra từ "${word}"`;

  // Style giống tooltip Chrome
  Object.assign(lookupBtn.style, {
    position: "fixed",
    top: y - 30 + "px",
    left: x + "px",
    padding: "2px 8px",
    background: "#f1f3f4",
    color: "#202124",
    border: "1px solid #dadce0",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "12px",
    fontFamily: "Arial, sans-serif",
    zIndex: 9999,
    userSelect: "none",
    pointerEvents: "auto",
    whiteSpace: "nowrap",
  });

  lookupBtn.addEventListener("mousedown", (ev) => {
    ev.preventDefault(); // giữ nguyên selection
  });

  lookupBtn.addEventListener("click", () => {
    window.open(url, "_blank");
    lookupBtn.remove();
  });

  document.body.appendChild(lookupBtn);
}
