// Dữ liệu audio (ví dụ)
const audioData = {
  "noun_01": [
    {
      ipa: "/ˌɪnfəˈmeɪʃən/",
      name: "information",
      wordIpa: "/ˌɪnfəˈmeɪʃən/",
      file: "/main/projects/english-courses/assets/data/nouns/audio/information.mp3"
    }
  ],
  "noun_02": [
    {
      ipa: "/əˈnæləsɪs/",
      name: "analysis",
      wordIpa: "/əˈnæləsɪs/",
      file: "/main/projects/english-courses/assets/data/nouns/audio/analysis.mp3"
    }
  ]
  // Thêm các noun khác tương tự...
};
document.querySelectorAll(".noun-row").forEach(row => {
  row.addEventListener("click", () => {
    const ipaId = row.dataset.nounId;
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

        const word = document.createElement("strong");
        word.innerText = item.name;

        const ipaSpan = document.createElement("span");
        ipaSpan.style.marginLeft = "8px";
        ipaSpan.innerText = `IPA: ${item.ipa}`;

        const wordIpa = document.createElement("span");
        wordIpa.style.marginLeft = "8px";
        wordIpa.innerText = `Word IPA: ${item.wordIpa}`;

        const btn = document.createElement("button");
        btn.innerText = "▶ Play";
        btn.style.marginLeft = "auto";  // đẩy nút ra cuối hàng
        btn.addEventListener("click", () => {
          new Audio(item.file).play();
        });

        li.appendChild(word);
        li.appendChild(ipaSpan);
        li.appendChild(wordIpa);
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