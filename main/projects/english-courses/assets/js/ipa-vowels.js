// Ví dụ bạn có sẵn audio map:
const audioData = {
  "ipa_01": [
    { name: "seat", file: "/main/projects/english-courses/assets/data/ipa-vowels/audio/seat0001.mp3" },
    { name: "see", file: "/main/projects/english-courses/assets/data/ipa-vowels/audio/see00001.mp3" }
  ],
  "ipa_02": [
    { name: "sit", file: "/main/projects/english-courses/assets/data/ipa-vowels/audio/sit00001.mp3" }
  ],
  // Thêm các IPA khác ...
};
// Gán click cho mọi <tr>
document.querySelectorAll(".ipa-row").forEach(row => {
  row.addEventListener("click", () => {
    const ipaId = row.dataset.ipaId;
    const ipaLabel = row.querySelector("td").innerText.trim(); // Lấy text IPA

    const list = audioData[ipaId] || [];
    const title = document.getElementById("popup-title");
    const listContainer = document.getElementById("audio-list");

    title.innerText = `IPA: ${ipaLabel}`;
    listContainer.innerHTML = "";

    if (list.length === 0) {
      listContainer.innerHTML = "<li>Chưa có audio</li>";
    } else {
      list.forEach(item => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.innerText = `▶ ${item.name}`;
        btn.addEventListener("click", () => {
          new Audio(item.file).play();
        });
        li.appendChild(btn);
        listContainer.appendChild(li);
      });
    }

    document.getElementById("ipa-popup").classList.remove("hidden");
  });
});

// Đóng popup
document.getElementById("popup-close").addEventListener("click", () => {
  document.getElementById("ipa-popup").classList.add("hidden");
});