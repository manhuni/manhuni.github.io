const audioData = [
  [{
    name: "information",
    ipa: "/ˌɪnfəˈmeɪʃən/",
    wordIpa: "/ˌɪnfəˈmeɪʃən/",
    file: "/main/projects/english-courses/assets/data/ielts/nouns/audio/information.mp3",
    type: "Noun",
    meaning: "thông tin",
    example: "The report contains useful information.",
    context: "Noun"
  }], 
];


const words = [];
audioData.forEach((v) => {
  v.forEach((v2) => {
    words.push(v2.name);
  })
})
console.log(JSON.stringify(words));
document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.querySelector(".vocab-table tbody");

 for (let key in audioData) {
    if (!audioData.hasOwnProperty(key)) continue;

    const wordList = audioData[key];
    const item = wordList[0]; // Chỉ lấy từ đầu tiên làm đại diện

    const tr = document.createElement("tr");
    tr.classList.add("ipa-row");
    tr.dataset.ipaId = key;

    tr.innerHTML = `
    <td>${item.name}</td>
    <td>${item.ipa}</td>
    <td>${item.wordIpa}</td>
    <td>${item.meaning}</td>
    <td>${item.example}</td>
    <td>${item.context}</td>
  `;

    tbody.appendChild(tr);
  }

  // Add popup handler
  document.querySelectorAll(".ipa-row").forEach(row => {
    row.addEventListener("click", () => {
      const ipaId = row.dataset.ipaId;
      const firstCell = row.querySelector("td");
      if (!firstCell) return;

      const ipaLabel = firstCell.innerText.trim();
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
          btn.style.marginLeft = "auto";
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

  // Close popup
  document.getElementById("popup-close").addEventListener("click", () => {
    document.getElementById("ipa-popup").classList.add("hidden");
  });
});