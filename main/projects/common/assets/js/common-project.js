(() => {
  const currentScript = document.currentScript;
  if (currentScript && currentScript.src) {
    const url = new URL(currentScript.src);
    console.log(`${url.pathname} loaded`);
  }
})();

// Đây là nơi bạn có thể thêm script JS riêng cho Common
// Ví dụ: Load API, fetch repo, xử lý dynamic link sau này
