const audioData = {
  "ipa_01": [
    { ipa: "/iː/", name: "seat", wordIpa: "/siːt/", file: "/main/projects/english-courses/assets/data/ipa-vowels/audio/seat0001.mp3" },
    { ipa: "/iː/", name: "see", wordIpa: "/siː/", file: "/main/projects/english-courses/assets/data/ipa-vowels/audio/see0001.mp3" },
    { ipa: "/iː/", name: "tea", wordIpa: "/tiː/", file: "/main/projects/english-courses/assets/data/ipa-vowels/audio/tea0001.mp3" },
    { ipa: "/iː/", name: "tree", wordIpa: "/triː/", file: "/main/projects/english-courses/assets/data/ipa-vowels/audio/tree0001.mp3" },
    { ipa: "/iː/", name: "sheep", wordIpa: "/ʃiːp/", file: "/main/projects/english-courses/assets/data/ipa-vowels/audio/sheep0001.mp3" },
    { ipa: "/iː/", name: "beach", wordIpa: "/biːtʃ/", file: "/main/projects/english-courses/assets/data/ipa-vowels/audio/beach0001.mp3" },
    { ipa: "/iː/", name: "peace", wordIpa: "/piːs/", file: "/main/projects/english-courses/assets/data/ipa-vowels/audio/peace0001.mp3" },
    { ipa: "/iː/", name: "leave", wordIpa: "/liːv/", file: "/main/projects/english-courses/assets/data/ipa-vowels/audio/leave0001.mp3" },
    { ipa: "/iː/", name: "green", wordIpa: "/ɡriːn/", file: "/main/projects/english-courses/assets/data/ipa-vowels/audio/green0001.mp3" },
    { ipa: "/iː/", name: "machine", wordIpa: "/məˈʃiːn/", file: "/main/projects/english-courses/assets/data/ipa-vowels/audio/machine0001.mp3" },
    { ipa: "/iː/", name: "these", wordIpa: "/ðiːz/", file: "/main/projects/english-courses/assets/data/ipa-vowels/audio/these0001.mp3" },
    { ipa: "/iː/", name: "key", wordIpa: "/kiː/", file: "/main/projects/english-courses/assets/data/ipa-vowels/audio/key0001.mp3" },
    { ipa: "/iː/", name: "deep", wordIpa: "/diːp/", file: "/main/projects/english-courses/assets/data/ipa-vowels/audio/deep0001.mp3" },
    { ipa: "/iː/", name: "sleep", wordIpa: "/sliːp/", file: "/main/projects/english-courses/assets/data/ipa-vowels/audio/sleep0001.mp3" },
    { ipa: "/iː/", name: "keep", wordIpa: "/kiːp/", file: "/main/projects/english-courses/assets/data/ipa-vowels/audio/keep0001.mp3" },
    { ipa: "/iː/", name: "meet", wordIpa: "/miːt/", file: "/main/projects/english-courses/assets/data/ipa-vowels/audio/meet0001.mp3" },
    { ipa: "/iː/", name: "heat", wordIpa: "/hiːt/", file: "/main/projects/english-courses/assets/data/ipa-vowels/audio/heat0001.mp3" },
    { ipa: "/iː/", name: "team", wordIpa: "/tiːm/", file: "/main/projects/english-courses/assets/data/ipa-vowels/audio/team0001.mp3" },
    { ipa: "/iː/", name: "cheap", wordIpa: "/tʃiːp/", file: "/main/projects/english-courses/assets/data/ipa-vowels/audio/cheap0001.mp3" },
    { ipa: "/iː/", name: "week", wordIpa: "/wiːk/", file: "/main/projects/english-courses/assets/data/ipa-vowels/audio/week0001.mp3" }
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