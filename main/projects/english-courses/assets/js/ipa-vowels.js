const audioData = {
  "ipa_01": [
    { ipa: "/iː/", name: "seat", wordIpa: "/siːt/", file: "/main/projects/english-courses/assets/data/ipa-vowels/audio/seat0001.mp3" },
    { ipa: "/iː/", name: "see", wordIpa: "/siː/", file: "/main/projects/english-courses/assets/data/ipa-vowels/audio/see00001.mp3" }
  ],
  "ipa_02": [
    { ipa: "/ɪ/", name: "sit", wordIpa: "/sɪt/", file: "/main/projects/english-courses/assets/data/ipa-vowels/audio/sit00001.mp3" }
  ],
  // Các IPA khác ...
};

document.querySelectorAll(".ipa-row").forEach(row => {
  row.addEventListener("click", () => {
    const ipaId = row.dataset.ipaId;
    const td = row.querySelector("td");
    if (!td) return;

    const ipaLabel = td.innerText.trim();
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
        // ✔️ Hiển thị rõ: Từ (IPA) => Phiên âm đầy đủ
        btn.innerText = `▶ ${item.name} (${item.ipa}) ⇒ ${item.wordIpa}`;
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