// ======= ipa-vowels.js =======

// Khi người dùng click vào ký hiệu IPA => highlight + hiển thị IPA

document.addEventListener("DOMContentLoaded", () => {
  const ipaCells = document.querySelectorAll(".vocab-table td:first-child");

  ipaCells.forEach(cell => {
    cell.style.cursor = "pointer";
    cell.addEventListener("click", () => {
      // Xóa highlight cũ
      ipaCells.forEach(c => c.classList.remove("highlight-ipa"));
      // Thêm highlight mới
      cell.classList.add("highlight-ipa");
      // Thông báo IPA (hoặc play audio ở đây)
      alert(`Bạn vừa chọn IPA: ${cell.textContent.trim()}`);
    });
  });
});
