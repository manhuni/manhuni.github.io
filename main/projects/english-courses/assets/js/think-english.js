// ======= think-english.js =======

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("check-answer");
  const result = document.getElementById("quiz-result");

  btn.addEventListener("click", () => {
    const answer = document.querySelector('input[name="q1"]:checked');
    if (!answer) {
      result.textContent = "⚠️ Vui lòng chọn 1 đáp án!";
      return;
    }
    if (answer.value === "refuse") {
      result.textContent = "✅ Chính xác! Đây là cách từ chối nhẹ nhàng.";
    } else {
      result.textContent = "❌ Sai rồi, hãy thử lại!";
    }
  });
});
