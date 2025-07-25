// Ví dụ bạn có sẵn audio map:
const audioData = {
  "iː": [
    { name: "seat", file: "audio/seat.mp3" },
    { name: "see", file: "audio/see.mp3" }
  ],
  "ɪ": [
    { name: "sit", file: "audio/sit.mp3" }
  ],
  // Thêm các IPA khác ...
};

document.querySelectorAll(".ipa-sound").forEach(el => {
  el.addEventListener("click", () => {
    const ipa = el.dataset.ipa;
    const list = audioData[ipa] || [];

    document.getElementById("popup-title").innerText = `IPA: /${ipa}/`;

    const ul = document.getElementById("audio-list");
    ul.innerHTML = "";

    list.forEach(item => {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.innerText = `Play ${item.name}`;
      btn.addEventListener("click", () => {
        new Audio(item.file).play();
      });
      li.appendChild(btn);
      ul.appendChild(li);
    });

    document.getElementById("ipa-popup").classList.remove("hidden");
  });
});

document.getElementById("popup-close").addEventListener("click", () => {
  document.getElementById("ipa-popup").classList.add("hidden");
});
