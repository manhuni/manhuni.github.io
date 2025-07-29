const audioData = [
  [{
    name: "information",
    ipa: "/ˌɪnfəˈmeɪʃən/",
    wordIpa: "/ˌɪnfəˈmeɪʃən/",
    file: "/main/projects/english-courses/assets/data/ielts/technology/audio/information.mp3",
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
console.log(`total: ${words.length} - content: ${JSON.stringify(words)}`);
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
  li.style.display = "flex";
  li.style.justifyContent = "space-between";
  li.style.alignItems = "flex-start";
  li.style.padding = "12px";
  li.style.marginBottom = "12px";
  li.style.border = "1px solid #ddd";
  li.style.borderRadius = "8px";
  li.style.background = "#fafafa";

  // Container bên trái cho thông tin
  const infoContainer = document.createElement("div");
  infoContainer.style.display = "flex";
  infoContainer.style.flexDirection = "column";
  infoContainer.style.gap = "4px";

  // Từ
  const word = document.createElement("strong");
  word.innerText = `Word: ${item.name}`;

  // IPA
  const ipaSpan = document.createElement("span");
  ipaSpan.innerText = `IPA: ${item.ipa}`;

  // Word IPA
  const wordIpa = document.createElement("span");
  wordIpa.innerText = `Word IPA: ${item.wordIpa}`;

  // Meaning
  const meaningSpan = document.createElement("span");
  meaningSpan.innerText = `Meaning: ${item.meaning}`;

  // Example
  const exampleSpan = document.createElement("span");
  exampleSpan.innerText = `Example: ${item.example}`;

  // Context
  const contextSpan = document.createElement("span");
  contextSpan.innerText = `Type: ${item.context}`;

  // Thêm các span vào container
  infoContainer.appendChild(word);
  infoContainer.appendChild(ipaSpan);
  infoContainer.appendChild(wordIpa);
  infoContainer.appendChild(meaningSpan);
  infoContainer.appendChild(exampleSpan);
  infoContainer.appendChild(contextSpan);

  // Nút play
  const btn = document.createElement("button");
  btn.innerText = "▶ Play";
  btn.style.padding = "8px 12px";
  btn.style.marginLeft = "16px";
  btn.style.flexShrink = "0";
  btn.style.cursor = "pointer";
  btn.addEventListener("click", () => {
    new Audio(item.file).play();
  });

  // Thêm vào li
  li.appendChild(infoContainer);
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