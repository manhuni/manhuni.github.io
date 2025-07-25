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

document.querySelectorAll(".ipa-sound").forEach(el => {
  el.addEventListener("click", () => {
    const ipaId = el.dataset.ipaId;  // Lấy ID
    const ipaLabel = el.innerText;   // Lấy label để show
    const list = audioData[ipaId] || [];

    document.getElementById("popup-title").innerText = `IPA: ${ipaLabel}`;

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
