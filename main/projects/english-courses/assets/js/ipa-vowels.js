(() => {
  const currentScript = document.currentScript;
  if (currentScript && currentScript.src) {
    const url = new URL(currentScript.src);
    console.log(`${url.pathname} loaded`);
  }
})();

const audioData = [
  [
    {
      name: "see",
      ipa: "/iː/",
      wordIpa: "/siː/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/see.mp3",
      type: "Verb",
      meaning: "nhìn thấy",
      example: "Can you see the mountain from here?",
      context: "Verb"
    },
    {
      name: "tree",
      ipa: "/iː/",
      wordIpa: "/triː/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/tree.mp3",
      type: "Noun",
      meaning: "cây",
      example: "The tree is full of green leaves.",
      context: "Noun"
    },
    {
      name: "green",
      ipa: "/iː/",
      wordIpa: "/ɡriːn/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/green.mp3",
      type: "Adjective",
      meaning: "xanh lá",
      example: "He wore a green jacket.",
      context: "Adjective"
    },
    {
      name: "key",
      ipa: "/iː/",
      wordIpa: "/kiː/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/key.mp3",
      type: "Noun",
      meaning: "chìa khóa",
      example: "I can't find my house key.",
      context: "Noun"
    },
    {
      name: "these",
      ipa: "/iː/",
      wordIpa: "/ðiːz/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/these.mp3",
      type: "Determiner",
      meaning: "những cái này",
      example: "These are my friends.",
      context: "Determiner"
    },
    {
      name: "week",
      ipa: "/iː/",
      wordIpa: "/wiːk/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/week.mp3",
      type: "Noun",
      meaning: "tuần",
      example: "I’m going on holiday next week.",
      context: "Noun"
    },
    {
      name: "need",
      ipa: "/iː/",
      wordIpa: "/niːd/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/need.mp3",
      type: "Verb",
      meaning: "cần",
      example: "I need more time to finish the report.",
      context: "Verb"
    },
    {
      name: "teacher",
      ipa: "/iː/",
      wordIpa: "/ˈtiː.tʃər/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/teacher.mp3",
      type: "Noun",
      meaning: "giáo viên",
      example: "The teacher gave us homework.",
      context: "Noun"
    },
    {
      name: "easy",
      ipa: "/iː/",
      wordIpa: "/ˈiː.zi/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/easy.mp3",
      type: "Adjective",
      meaning: "dễ",
      example: "This question is very easy.",
      context: "Adjective"
    },
    {
      name: "agreement",
      ipa: "/iː/",
      wordIpa: "/əˈɡriː.mənt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/agreement.mp3",
      type: "Noun",
      meaning: "thỏa thuận",
      example: "They signed a trade agreement.",
      context: "Noun"
    }
  ],
  [
    {
      name: "bit",
      ipa: "/ɪ/",
      wordIpa: "/bɪt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/bit.mp3",
      type: "Noun",
      meaning: "một chút",
      example: "He only ate a bit of the cake.",
      context: "Noun"
    },
    {
      name: "ship",
      ipa: "/ɪ/",
      wordIpa: "/ʃɪp/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/ship.mp3",
      type: "Noun",
      meaning: "con tàu",
      example: "The ship is leaving the harbor.",
      context: "Noun"
    },
    {
      name: "milk",
      ipa: "/ɪ/",
      wordIpa: "/mɪlk/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/milk.mp3",
      type: "Noun",
      meaning: "sữa",
      example: "She drinks milk every morning.",
      context: "Noun"
    },
    {
      name: "fish",
      ipa: "/ɪ/",
      wordIpa: "/fɪʃ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/fish.mp3",
      type: "Noun",
      meaning: "cá",
      example: "They caught a big fish.",
      context: "Noun"
    },
    {
      name: "gym",
      ipa: "/ɪ/",
      wordIpa: "/dʒɪm/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/gym.mp3",
      type: "Noun",
      meaning: "phòng tập thể dục",
      example: "She goes to the gym every evening.",
      context: "Noun"
    },
    {
      name: "window",
      ipa: "/ɪ/",
      wordIpa: "/ˈwɪn.dəʊ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/window.mp3",
      type: "Noun",
      meaning: "cửa sổ",
      example: "He looked out the window.",
      context: "Noun"
    },
    {
      name: "kick",
      ipa: "/ɪ/",
      wordIpa: "/kɪk/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/kick.mp3",
      type: "Verb",
      meaning: "đá",
      example: "He tried to kick the ball.",
      context: "Verb"
    },
    {
      name: "visit",
      ipa: "/ɪ/",
      wordIpa: "/ˈvɪz.ɪt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/visit.mp3",
      type: "Verb",
      meaning: "thăm",
      example: "I will visit my grandmother this weekend.",
      context: "Verb"
    },
    {
      name: "ticket",
      ipa: "/ɪ/",
      wordIpa: "/ˈtɪk.ɪt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/ticket.mp3",
      type: "Noun",
      meaning: "vé",
      example: "He bought a ticket to the concert.",
      context: "Noun"
    },
    {
      name: "listen",
      ipa: "/ɪ/",
      wordIpa: "/ˈlɪs.ən/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/listen.mp3",
      type: "Verb",
      meaning: "nghe",
      example: "Please listen carefully.",
      context: "Verb"
    }
  ],
  [
    {
      name: "bed",
      ipa: "/e/",
      wordIpa: "/bed/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/bed.mp3",
      type: "Noun",
      meaning: "giường",
      example: "She is lying on the bed.",
      context: "Noun"
    },
    {
      name: "head",
      ipa: "/e/",
      wordIpa: "/hed/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/head.mp3",
      type: "Noun",
      meaning: "đầu",
      example: "He hit his head on the door.",
      context: "Noun"
    },
    {
      name: "ten",
      ipa: "/e/",
      wordIpa: "/ten/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/ten.mp3",
      type: "Number",
      meaning: "mười",
      example: "There are ten apples in the basket.",
      context: "Number"
    },
    {
      name: "get",
      ipa: "/e/",
      wordIpa: "/ɡet/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/get.mp3",
      type: "Verb",
      meaning: "nhận, lấy",
      example: "I need to get some water.",
      context: "Verb"
    },
    {
      name: "pen",
      ipa: "/e/",
      wordIpa: "/pen/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/pen.mp3",
      type: "Noun",
      meaning: "bút",
      example: "She gave me a blue pen.",
      context: "Noun"
    },
    {
      name: "bread",
      ipa: "/e/",
      wordIpa: "/bred/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/bread.mp3",
      type: "Noun",
      meaning: "bánh mì",
      example: "I ate two slices of bread.",
      context: "Noun"
    },
    {
      name: "next",
      ipa: "/e/",
      wordIpa: "/nekst/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/next.mp3",
      type: "Adjective",
      meaning: "tiếp theo",
      example: "What’s the next question?",
      context: "Adjective"
    },
    {
      name: "yes",
      ipa: "/e/",
      wordIpa: "/jes/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/yes.mp3",
      type: "Adverb",
      meaning: "vâng, có",
      example: "Yes, I understand.",
      context: "Adverb"
    },
    {
      name: "men",
      ipa: "/e/",
      wordIpa: "/men/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/men.mp3",
      type: "Noun",
      meaning: "những người đàn ông",
      example: "Three men entered the room.",
      context: "Noun"
    },
    {
      name: "said",
      ipa: "/e/",
      wordIpa: "/sed/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/said.mp3",
      type: "Verb",
      meaning: "đã nói",
      example: "She said it was urgent.",
      context: "Verb"
    }
  ],
  [
    {
      name: "cat",
      ipa: "/æ/",
      wordIpa: "/kæt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/cat.mp3",
      type: "Noun",
      meaning: "con mèo",
      example: "The cat is sleeping on the sofa.",
      context: "Noun"
    },
    {
      name: "black",
      ipa: "/æ/",
      wordIpa: "/blæk/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/black.mp3",
      type: "Adjective",
      meaning: "đen",
      example: "He was wearing a black shirt.",
      context: "Adjective"
    },
    {
      name: "man",
      ipa: "/æ/",
      wordIpa: "/mæn/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/man.mp3",
      type: "Noun",
      meaning: "người đàn ông",
      example: "That man is my uncle.",
      context: "Noun"
    },
    {
      name: "hand",
      ipa: "/æ/",
      wordIpa: "/hænd/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/hand.mp3",
      type: "Noun",
      meaning: "bàn tay",
      example: "He raised his hand to ask a question.",
      context: "Noun"
    },
    {
      name: "map",
      ipa: "/æ/",
      wordIpa: "/mæp/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/map.mp3",
      type: "Noun",
      meaning: "bản đồ",
      example: "Can you read this map?",
      context: "Noun"
    },
    {
      name: "hat",
      ipa: "/æ/",
      wordIpa: "/hæt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/hat.mp3",
      type: "Noun",
      meaning: "cái mũ",
      example: "He took off his hat politely.",
      context: "Noun"
    },
    {
      name: "back",
      ipa: "/æ/",
      wordIpa: "/bæk/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/back.mp3",
      type: "Noun",
      meaning: "lưng",
      example: "She carried the baby on her back.",
      context: "Noun"
    },
    {
      name: "sad",
      ipa: "/æ/",
      wordIpa: "/sæd/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/sad.mp3",
      type: "Adjective",
      meaning: "buồn",
      example: "He felt sad after hearing the news.",
      context: "Adjective"
    },
    {
      name: "bag",
      ipa: "/æ/",
      wordIpa: "/bæɡ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/bag.mp3",
      type: "Noun",
      meaning: "túi",
      example: "She packed her bag for school.",
      context: "Noun"
    },
    {
      name: "bad",
      ipa: "/æ/",
      wordIpa: "/bæd/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/bad.mp3",
      type: "Adjective",
      meaning: "xấu, tệ",
      example: "That was a bad idea.",
      context: "Adjective"
    }
  ],
  [
    {
      name: "cup",
      ipa: "/ʌ/",
      wordIpa: "/kʌp/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/cup.mp3",
      type: "Noun",
      meaning: "cái cốc",
      example: "He drank a cup of tea.",
      context: "Noun"
    },
    {
      name: "sun",
      ipa: "/ʌ/",
      wordIpa: "/sʌn/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/sun.mp3",
      type: "Noun",
      meaning: "mặt trời",
      example: "The sun is shining brightly.",
      context: "Noun"
    },
    {
      name: "fun",
      ipa: "/ʌ/",
      wordIpa: "/fʌn/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/fun.mp3",
      type: "Noun",
      meaning: "niềm vui",
      example: "We had a lot of fun at the party.",
      context: "Noun"
    },
    {
      name: "run",
      ipa: "/ʌ/",
      wordIpa: "/rʌn/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/run.mp3",
      type: "Verb",
      meaning: "chạy",
      example: "She runs every morning.",
      context: "Verb"
    },
    {
      name: "bus",
      ipa: "/ʌ/",
      wordIpa: "/bʌs/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/bus.mp3",
      type: "Noun",
      meaning: "xe buýt",
      example: "The bus is late again.",
      context: "Noun"
    },
    {
      name: "luck",
      ipa: "/ʌ/",
      wordIpa: "/lʌk/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/luck.mp3",
      type: "Noun",
      meaning: "may mắn",
      example: "Good luck on your exam!",
      context: "Noun"
    },
    {
      name: "jump",
      ipa: "/ʌ/",
      wordIpa: "/dʒʌmp/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/jump.mp3",
      type: "Verb",
      meaning: "nhảy",
      example: "He can jump very high.",
      context: "Verb"
    },
    {
      name: "mud",
      ipa: "/ʌ/",
      wordIpa: "/mʌd/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/mud.mp3",
      type: "Noun",
      meaning: "bùn",
      example: "The shoes are covered in mud.",
      context: "Noun"
    },
    {
      name: "shut",
      ipa: "/ʌ/",
      wordIpa: "/ʃʌt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/shut.mp3",
      type: "Verb",
      meaning: "đóng",
      example: "Please shut the door.",
      context: "Verb"
    },
    {
      name: "cut",
      ipa: "/ʌ/",
      wordIpa: "/kʌt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/cut.mp3",
      type: "Verb",
      meaning: "cắt",
      example: "He cut the paper in half.",
      context: "Verb"
    }
  ],
  [
    {
      name: "car",
      ipa: "/ɑː/",
      wordIpa: "/kɑːr/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/car.mp3",
      type: "Noun",
      meaning: "xe ô tô",
      example: "My car is parked outside.",
      context: "Noun"
    },
    {
      name: "star",
      ipa: "/ɑː/",
      wordIpa: "/stɑːr/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/star.mp3",
      type: "Noun",
      meaning: "ngôi sao",
      example: "There are many stars in the sky.",
      context: "Noun"
    },
    {
      name: "farm",
      ipa: "/ɑː/",
      wordIpa: "/fɑːm/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/farm.mp3",
      type: "Noun",
      meaning: "nông trại",
      example: "They live on a farm.",
      context: "Noun"
    },
    {
      name: "hard",
      ipa: "/ɑː/",
      wordIpa: "/hɑːd/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/hard.mp3",
      type: "Adjective",
      meaning: "khó, cứng",
      example: "This test is really hard.",
      context: "Adjective"
    },
    {
      name: "start",
      ipa: "/ɑː/",
      wordIpa: "/stɑːt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/start.mp3",
      type: "Verb",
      meaning: "bắt đầu",
      example: "Let’s start the meeting.",
      context: "Verb"
    },
    {
      name: "part",
      ipa: "/ɑː/",
      wordIpa: "/pɑːt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/part.mp3",
      type: "Noun",
      meaning: "phần",
      example: "This is the best part of the movie.",
      context: "Noun"
    },
    {
      name: "park",
      ipa: "/ɑː/",
      wordIpa: "/pɑːk/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/park.mp3",
      type: "Noun",
      meaning: "công viên",
      example: "We went to the park yesterday.",
      context: "Noun"
    },
    {
      name: "heart",
      ipa: "/ɑː/",
      wordIpa: "/hɑːt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/heart.mp3",
      type: "Noun",
      meaning: "trái tim",
      example: "He has a kind heart.",
      context: "Noun"
    },
    {
      name: "dark",
      ipa: "/ɑː/",
      wordIpa: "/dɑːk/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/dark.mp3",
      type: "Adjective",
      meaning: "tối, đen",
      example: "It gets dark early in winter.",
      context: "Adjective"
    },
    {
      name: "father",
      ipa: "/ɑː/",
      wordIpa: "/ˈfɑː.ðər/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/father.mp3",
      type: "Noun",
      meaning: "cha",
      example: "His father is a doctor.",
      context: "Noun"
    }
  ],
  [
    {
      name: "hot",
      ipa: "/ɒ/",
      wordIpa: "/hɒt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/hot.mp3",
      type: "Adjective",
      meaning: "nóng",
      example: "The soup is very hot.",
      context: "Adjective"
    },
    {
      name: "dog",
      ipa: "/ɒ/",
      wordIpa: "/dɒɡ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/dog.mp3",
      type: "Noun",
      meaning: "chó",
      example: "I have a small dog.",
      context: "Noun"
    },
    {
      name: "shop",
      ipa: "/ɒ/",
      wordIpa: "/ʃɒp/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/shop.mp3",
      type: "Noun",
      meaning: "cửa hàng",
      example: "She works in a clothes shop.",
      context: "Noun"
    },
    {
      name: "clock",
      ipa: "/ɒ/",
      wordIpa: "/klɒk/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/clock.mp3",
      type: "Noun",
      meaning: "đồng hồ",
      example: "There is a clock on the wall.",
      context: "Noun"
    },
    {
      name: "lot",
      ipa: "/ɒ/",
      wordIpa: "/lɒt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/lot.mp3",
      type: "Noun",
      meaning: "nhiều",
      example: "She has a lot of friends.",
      context: "Noun"
    },
    {
      name: "box",
      ipa: "/ɒ/",
      wordIpa: "/bɒks/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/box.mp3",
      type: "Noun",
      meaning: "hộp",
      example: "He put the books in a box.",
      context: "Noun"
    },
    {
      name: "cotton",
      ipa: "/ɒ/",
      wordIpa: "/ˈkɒt.ən/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/cotton.mp3",
      type: "Noun",
      meaning: "bông",
      example: "This shirt is made of cotton.",
      context: "Noun"
    },
    {
      name: "rock",
      ipa: "/ɒ/",
      wordIpa: "/rɒk/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/rock.mp3",
      type: "Noun",
      meaning: "đá",
      example: "He threw a rock into the lake.",
      context: "Noun"
    },
    {
      name: "top",
      ipa: "/ɒ/",
      wordIpa: "/tɒp/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/top.mp3",
      type: "Noun",
      meaning: "đỉnh, đầu",
      example: "She reached the top of the mountain.",
      context: "Noun"
    },
    {
      name: "pot",
      ipa: "/ɒ/",
      wordIpa: "/pɒt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/pot.mp3",
      type: "Noun",
      meaning: "nồi",
      example: "The pot is on the stove.",
      context: "Noun"
    }
  ]
  ,
  [
    {
      name: "call",
      ipa: "/ɔː/",
      wordIpa: "/kɔːl/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/call.mp3",
      type: "Verb",
      meaning: "gọi",
      example: "I will call you later.",
      context: "Verb"
    },
    {
      name: "law",
      ipa: "/ɔː/",
      wordIpa: "/lɔː/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/law.mp3",
      type: "Noun",
      meaning: "luật",
      example: "You must obey the law.",
      context: "Noun"
    },
    {
      name: "door",
      ipa: "/ɔː/",
      wordIpa: "/dɔːr/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/door.mp3",
      type: "Noun",
      meaning: "cánh cửa",
      example: "She opened the door quietly.",
      context: "Noun"
    },
    {
      name: "short",
      ipa: "/ɔː/",
      wordIpa: "/ʃɔːt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/short.mp3",
      type: "Adjective",
      meaning: "ngắn",
      example: "He wrote a short story.",
      context: "Adjective"
    },
    {
      name: "walk",
      ipa: "/ɔː/",
      wordIpa: "/wɔːk/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/walk.mp3",
      type: "Verb",
      meaning: "đi bộ",
      example: "We walk to school every day.",
      context: "Verb"
    },
    {
      name: "talk",
      ipa: "/ɔː/",
      wordIpa: "/tɔːk/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/talk.mp3",
      type: "Verb",
      meaning: "nói chuyện",
      example: "Let’s talk about your plans.",
      context: "Verb"
    },
    {
      name: "floor",
      ipa: "/ɔː/",
      wordIpa: "/flɔːr/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/floor.mp3",
      type: "Noun",
      meaning: "sàn nhà",
      example: "She cleaned the floor.",
      context: "Noun"
    },
    {
      name: "more",
      ipa: "/ɔː/",
      wordIpa: "/mɔːr/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/more.mp3",
      type: "Adverb",
      meaning: "nhiều hơn",
      example: "We need more time.",
      context: "Adverb"
    },
    {
      name: "war",
      ipa: "/ɔː/",
      wordIpa: "/wɔːr/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/war.mp3",
      type: "Noun",
      meaning: "chiến tranh",
      example: "They want to stop the war.",
      context: "Noun"
    },
    {
      name: "chalk",
      ipa: "/ɔː/",
      wordIpa: "/tʃɔːk/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/chalk.mp3",
      type: "Noun",
      meaning: "phấn",
      example: "The teacher wrote on the board with chalk.",
      context: "Noun"
    }
  ],
  [
    {
      name: "book",
      ipa: "/ʊ/",
      wordIpa: "/bʊk/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/book.mp3",
      type: "Noun",
      meaning: "sách",
      example: "She is reading a book.",
      context: "Noun"
    },
    {
      name: "foot",
      ipa: "/ʊ/",
      wordIpa: "/fʊt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/foot.mp3",
      type: "Noun",
      meaning: "bàn chân",
      example: "He injured his foot.",
      context: "Noun"
    },
    {
      name: "look",
      ipa: "/ʊ/",
      wordIpa: "/lʊk/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/look.mp3",
      type: "Verb",
      meaning: "nhìn",
      example: "Look at this picture.",
      context: "Verb"
    },
    {
      name: "good",
      ipa: "/ʊ/",
      wordIpa: "/ɡʊd/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/good.mp3",
      type: "Adjective",
      meaning: "tốt",
      example: "That’s a good idea.",
      context: "Adjective"
    },
    {
      name: "could",
      ipa: "/ʊ/",
      wordIpa: "/kʊd/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/could.mp3",
      type: "Modal Verb",
      meaning: "có thể",
      example: "She could help you.",
      context: "Modal Verb"
    },
    {
      name: "should",
      ipa: "/ʊ/",
      wordIpa: "/ʃʊd/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/should.mp3",
      type: "Modal Verb",
      meaning: "nên",
      example: "You should study harder.",
      context: "Modal Verb"
    },
    {
      name: "push",
      ipa: "/ʊ/",
      wordIpa: "/pʊʃ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/push.mp3",
      type: "Verb",
      meaning: "đẩy",
      example: "Push the door to open it.",
      context: "Verb"
    },
    {
      name: "pull",
      ipa: "/ʊ/",
      wordIpa: "/pʊl/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/pull.mp3",
      type: "Verb",
      meaning: "kéo",
      example: "Pull the handle gently.",
      context: "Verb"
    },
    {
      name: "wood",
      ipa: "/ʊ/",
      wordIpa: "/wʊd/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/wood.mp3",
      type: "Noun",
      meaning: "gỗ",
      example: "The table is made of wood.",
      context: "Noun"
    },
    {
      name: "hook",
      ipa: "/ʊ/",
      wordIpa: "/hʊk/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/hook.mp3",
      type: "Noun",
      meaning: "cái móc",
      example: "Hang your coat on the hook.",
      context: "Noun"
    }
  ]
  ,
  [
    {
      name: "school",
      ipa: "/uː/",
      wordIpa: "/skuːl/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/school.mp3",
      type: "Noun",
      meaning: "trường học",
      example: "She goes to school every day.",
      context: "Noun"
    },
    {
      name: "food",
      ipa: "/uː/",
      wordIpa: "/fuːd/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/food.mp3",
      type: "Noun",
      meaning: "thức ăn",
      example: "We need more food.",
      context: "Noun"
    },
    {
      name: "blue",
      ipa: "/uː/",
      wordIpa: "/bluː/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/blue.mp3",
      type: "Adjective",
      meaning: "màu xanh dương",
      example: "The sky is blue.",
      context: "Adjective"
    },
    {
      name: "true",
      ipa: "/uː/",
      wordIpa: "/truː/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/true.mp3",
      type: "Adjective",
      meaning: "đúng, thật",
      example: "It’s a true story.",
      context: "Adjective"
    },
    {
      name: "group",
      ipa: "/uː/",
      wordIpa: "/ɡruːp/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/group.mp3",
      type: "Noun",
      meaning: "nhóm",
      example: "We worked in a group.",
      context: "Noun"
    },
    {
      name: "rule",
      ipa: "/uː/",
      wordIpa: "/ruːl/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/rule.mp3",
      type: "Noun",
      meaning: "quy tắc",
      example: "You must follow the rules.",
      context: "Noun"
    },
    {
      name: "move",
      ipa: "/uː/",
      wordIpa: "/muːv/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/move.mp3",
      type: "Verb",
      meaning: "di chuyển",
      example: "Please move your car.",
      context: "Verb"
    },
    {
      name: "juice",
      ipa: "/uː/",
      wordIpa: "/dʒuːs/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/juice.mp3",
      type: "Noun",
      meaning: "nước ép",
      example: "Would you like some juice?",
      context: "Noun"
    },
    {
      name: "tool",
      ipa: "/uː/",
      wordIpa: "/tuːl/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/tool.mp3",
      type: "Noun",
      meaning: "công cụ",
      example: "He used a special tool to fix the car.",
      context: "Noun"
    },
    {
      name: "fool",
      ipa: "/uː/",
      wordIpa: "/fuːl/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/fool.mp3",
      type: "Noun",
      meaning: "người ngốc nghếch",
      example: "Don’t be a fool!",
      context: "Noun"
    }
  ],
  [
    {
      name: "learn",
      ipa: "/ɜː/",
      wordIpa: "/lɜːn/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/learn.mp3",
      type: "Verb",
      meaning: "học",
      example: "Children learn quickly.",
      context: "Verb"
    },
    {
      name: "word",
      ipa: "/ɜː/",
      wordIpa: "/wɜːd/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/word.mp3",
      type: "Noun",
      meaning: "từ",
      example: "What does this word mean?",
      context: "Noun"
    },
    {
      name: "nurse",
      ipa: "/ɜː/",
      wordIpa: "/nɜːs/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/nurse.mp3",
      type: "Noun",
      meaning: "y tá",
      example: "The nurse took care of the patient.",
      context: "Noun"
    },
    {
      name: "girl",
      ipa: "/ɜː/",
      wordIpa: "/ɡɜːl/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/girl.mp3",
      type: "Noun",
      meaning: "bé gái",
      example: "The girl is playing in the park.",
      context: "Noun"
    },
    {
      name: "first",
      ipa: "/ɜː/",
      wordIpa: "/fɜːst/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/first.mp3",
      type: "Adjective",
      meaning: "đầu tiên",
      example: "This is her first book.",
      context: "Adjective"
    },
    {
      name: "turn",
      ipa: "/ɜː/",
      wordIpa: "/tɜːn/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/turn.mp3",
      type: "Verb",
      meaning: "xoay, rẽ",
      example: "Turn left at the corner.",
      context: "Verb"
    },
    {
      name: "burn",
      ipa: "/ɜː/",
      wordIpa: "/bɜːn/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/burn.mp3",
      type: "Verb",
      meaning: "cháy",
      example: "The fire continues to burn.",
      context: "Verb"
    },
    {
      name: "hurt",
      ipa: "/ɜː/",
      wordIpa: "/hɜːt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/hurt.mp3",
      type: "Verb",
      meaning: "làm đau",
      example: "I didn’t mean to hurt you.",
      context: "Verb"
    },
    {
      name: "bird",
      ipa: "/ɜː/",
      wordIpa: "/bɜːd/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/bird.mp3",
      type: "Noun",
      meaning: "chim",
      example: "The bird is singing.",
      context: "Noun"
    },
    {
      name: "third",
      ipa: "/ɜː/",
      wordIpa: "/θɜːd/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/third.mp3",
      type: "Adjective",
      meaning: "thứ ba",
      example: "He came in third place.",
      context: "Adjective"
    }
  ],
  [
    {
      name: "about",
      ipa: "/ə/",
      wordIpa: "/əˈbaʊt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/about.mp3",
      type: "Preposition",
      meaning: "về",
      example: "Let’s talk about it.",
      context: "Preposition"
    },
    {
      name: "ago",
      ipa: "/ə/",
      wordIpa: "/əˈɡəʊ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/ago.mp3",
      type: "Adverb",
      meaning: "trước đây",
      example: "It happened two years ago.",
      context: "Adverb"
    },
    {
      name: "sofa",
      ipa: "/ə/",
      wordIpa: "/ˈsəʊ.fə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/sofa.mp3",
      type: "Noun",
      meaning: "ghế sofa",
      example: "She sat on the sofa.",
      context: "Noun"
    },
    {
      name: "banana",
      ipa: "/ə/",
      wordIpa: "/bəˈnɑː.nə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/banana.mp3",
      type: "Noun",
      meaning: "chuối",
      example: "Would you like a banana?",
      context: "Noun"
    },
    {
      name: "teacher",
      ipa: "/ə/",
      wordIpa: "/ˈtiː.tʃə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/teacher.mp3",
      type: "Noun",
      meaning: "giáo viên",
      example: "The teacher is explaining the lesson.",
      context: "Noun"
    },
    {
      name: "sugar",
      ipa: "/ə/",
      wordIpa: "/ˈʃʊɡ.ə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/sugar.mp3",
      type: "Noun",
      meaning: "đường",
      example: "Do you take sugar in your tea?",
      context: "Noun"
    },
    {
      name: "camera",
      ipa: "/ə/",
      wordIpa: "/ˈkæm.rə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/camera.mp3",
      type: "Noun",
      meaning: "máy ảnh",
      example: "He bought a new camera.",
      context: "Noun"
    },
    {
      name: "mother",
      ipa: "/ə/",
      wordIpa: "/ˈmʌð.ə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/mother.mp3",
      type: "Noun",
      meaning: "mẹ",
      example: "Her mother is kind.",
      context: "Noun"
    },
    {
      name: "doctor",
      ipa: "/ə/",
      wordIpa: "/ˈdɒk.tə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/doctor.mp3",
      type: "Noun",
      meaning: "bác sĩ",
      example: "The doctor examined the patient.",
      context: "Noun"
    },
    {
      name: "better",
      ipa: "/ə/",
      wordIpa: "/ˈbet.ə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/better.mp3",
      type: "Adjective",
      meaning: "tốt hơn",
      example: "You look better today.",
      context: "Adjective"
    }
  ],
  [
    {
      name: "name",
      ipa: "/eɪ/",
      wordIpa: "/neɪm/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/name.mp3",
      type: "Noun",
      meaning: "tên",
      example: "What's your name?",
      context: "Noun"
    },
    {
      name: "rain",
      ipa: "/eɪ/",
      wordIpa: "/reɪn/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/rain.mp3",
      type: "Noun",
      meaning: "mưa",
      example: "The rain was heavy.",
      context: "Noun"
    },
    {
      name: "say",
      ipa: "/eɪ/",
      wordIpa: "/seɪ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/say.mp3",
      type: "Verb",
      meaning: "nói",
      example: "What did you say?",
      context: "Verb"
    },
    {
      name: "day",
      ipa: "/eɪ/",
      wordIpa: "/deɪ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/day.mp3",
      type: "Noun",
      meaning: "ngày",
      example: "It’s a sunny day.",
      context: "Noun"
    },
    {
      name: "cake",
      ipa: "/eɪ/",
      wordIpa: "/keɪk/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/cake.mp3",
      type: "Noun",
      meaning: "bánh ngọt",
      example: "She baked a chocolate cake.",
      context: "Noun"
    },
    {
      name: "wait",
      ipa: "/eɪ/",
      wordIpa: "/weɪt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/wait.mp3",
      type: "Verb",
      meaning: "chờ đợi",
      example: "Please wait here.",
      context: "Verb"
    },
    {
      name: "train",
      ipa: "/eɪ/",
      wordIpa: "/treɪn/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/train.mp3",
      type: "Noun",
      meaning: "tàu lửa",
      example: "The train is late.",
      context: "Noun"
    },
    {
      name: "eight",
      ipa: "/eɪ/",
      wordIpa: "/eɪt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/eight.mp3",
      type: "Number",
      meaning: "số tám",
      example: "She is eight years old.",
      context: "Number"
    },
    {
      name: "great",
      ipa: "/eɪ/",
      wordIpa: "/ɡreɪt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/great.mp3",
      type: "Adjective",
      meaning: "tuyệt vời",
      example: "That’s a great idea!",
      context: "Adjective"
    },
    {
      name: "paint",
      ipa: "/eɪ/",
      wordIpa: "/peɪnt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/paint.mp3",
      type: "Verb",
      meaning: "sơn",
      example: "We painted the room blue.",
      context: "Verb"
    }
  ],
  [
    {
      name: "time",
      ipa: "/aɪ/",
      wordIpa: "/taɪm/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/time.mp3",
      type: "Noun",
      meaning: "thời gian",
      example: "Do you have time?",
      context: "Noun"
    },
    {
      name: "high",
      ipa: "/aɪ/",
      wordIpa: "/haɪ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/high.mp3",
      type: "Adjective",
      meaning: "cao",
      example: "The mountain is high.",
      context: "Adjective"
    },
    {
      name: "my",
      ipa: "/aɪ/",
      wordIpa: "/maɪ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/my.mp3",
      type: "Pronoun",
      meaning: "của tôi",
      example: "This is my bag.",
      context: "Pronoun"
    },
    {
      name: "tie",
      ipa: "/aɪ/",
      wordIpa: "/taɪ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/tie.mp3",
      type: "Noun",
      meaning: "cà vạt",
      example: "He wore a red tie.",
      context: "Noun"
    },
    {
      name: "fly",
      ipa: "/aɪ/",
      wordIpa: "/flaɪ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/fly.mp3",
      type: "Verb",
      meaning: "bay",
      example: "Birds can fly.",
      context: "Verb"
    },
    {
      name: "ride",
      ipa: "/aɪ/",
      wordIpa: "/raɪd/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/ride.mp3",
      type: "Verb",
      meaning: "cưỡi, đi xe",
      example: "She can ride a bike.",
      context: "Verb"
    },
    {
      name: "light",
      ipa: "/aɪ/",
      wordIpa: "/laɪt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/light.mp3",
      type: "Noun",
      meaning: "ánh sáng",
      example: "The room is full of light.",
      context: "Noun"
    },
    {
      name: "night",
      ipa: "/aɪ/",
      wordIpa: "/naɪt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/night.mp3",
      type: "Noun",
      meaning: "đêm",
      example: "Good night!",
      context: "Noun"
    },
    {
      name: "try",
      ipa: "/aɪ/",
      wordIpa: "/traɪ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/try.mp3",
      type: "Verb",
      meaning: "thử",
      example: "Try again!",
      context: "Verb"
    },
    {
      name: "cry",
      ipa: "/aɪ/",
      wordIpa: "/kraɪ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/cry.mp3",
      type: "Verb",
      meaning: "khóc",
      example: "The baby is crying.",
      context: "Verb"
    }
  ],
  [
    {
      name: "boy",
      ipa: "/ɔɪ/",
      wordIpa: "/bɔɪ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/boy.mp3",
      type: "Noun",
      meaning: "bé trai",
      example: "The boy is running.",
      context: "Noun"
    },
    {
      name: "coin",
      ipa: "/ɔɪ/",
      wordIpa: "/kɔɪn/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/coin.mp3",
      type: "Noun",
      meaning: "đồng xu",
      example: "She gave me a coin.",
      context: "Noun"
    },
    {
      name: "toy",
      ipa: "/ɔɪ/",
      wordIpa: "/tɔɪ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/toy.mp3",
      type: "Noun",
      meaning: "đồ chơi",
      example: "He bought a new toy.",
      context: "Noun"
    },
    {
      name: "enjoy",
      ipa: "/ɔɪ/",
      wordIpa: "/ɪnˈdʒɔɪ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/enjoy.mp3",
      type: "Verb",
      meaning: "thưởng thức",
      example: "I enjoy reading books.",
      context: "Verb"
    },
    {
      name: "join",
      ipa: "/ɔɪ/",
      wordIpa: "/dʒɔɪn/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/join.mp3",
      type: "Verb",
      meaning: "tham gia",
      example: "Would you like to join us?",
      context: "Verb"
    },
    {
      name: "voice",
      ipa: "/ɔɪ/",
      wordIpa: "/vɔɪs/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/voice.mp3",
      type: "Noun",
      meaning: "giọng nói",
      example: "She has a nice voice.",
      context: "Noun"
    },
    {
      name: "noise",
      ipa: "/ɔɪ/",
      wordIpa: "/nɔɪz/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/noise.mp3",
      type: "Noun",
      meaning: "tiếng ồn",
      example: "The noise was loud.",
      context: "Noun"
    },
    {
      name: "boil",
      ipa: "/ɔɪ/",
      wordIpa: "/bɔɪl/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/boil.mp3",
      type: "Verb",
      meaning: "luộc, sôi",
      example: "Boil the water first.",
      context: "Verb"
    },
    {
      name: "spoil",
      ipa: "/ɔɪ/",
      wordIpa: "/spɔɪl/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/spoil.mp3",
      type: "Verb",
      meaning: "làm hỏng",
      example: "Don't spoil the surprise!",
      context: "Verb"
    },
    {
      name: "point",
      ipa: "/ɔɪ/",
      wordIpa: "/pɔɪnt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/point.mp3",
      type: "Noun",
      meaning: "điểm, chỉ ra",
      example: "That's a good point.",
      context: "Noun"
    }
  ],
  [
    {
      name: "now",
      ipa: "/aʊ/",
      wordIpa: "/naʊ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/now.mp3",
      type: "Adverb",
      meaning: "bây giờ",
      example: "I’m busy right now.",
      context: "Adverb"
    },
    {
      name: "out",
      ipa: "/aʊ/",
      wordIpa: "/aʊt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/out.mp3",
      type: "Adverb",
      meaning: "ra ngoài",
      example: "Let’s go out.",
      context: "Adverb"
    },
    {
      name: "about",
      ipa: "/aʊ/",
      wordIpa: "/əˈbaʊt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/about.mp3",
      type: "Preposition",
      meaning: "về",
      example: "This book is about history.",
      context: "Preposition"
    },
    {
      name: "down",
      ipa: "/aʊ/",
      wordIpa: "/daʊn/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/down.mp3",
      type: "Adverb",
      meaning: "xuống",
      example: "Sit down, please.",
      context: "Adverb"
    },
    {
      name: "house",
      ipa: "/aʊ/",
      wordIpa: "/haʊs/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/house.mp3",
      type: "Noun",
      meaning: "ngôi nhà",
      example: "My house is small.",
      context: "Noun"
    },
    {
      name: "loud",
      ipa: "/aʊ/",
      wordIpa: "/laʊd/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/loud.mp3",
      type: "Adjective",
      meaning: "to (âm thanh)",
      example: "That music is too loud.",
      context: "Adjective"
    },
    {
      name: "mouth",
      ipa: "/aʊ/",
      wordIpa: "/maʊθ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/mouth.mp3",
      type: "Noun",
      meaning: "miệng",
      example: "Open your mouth.",
      context: "Noun"
    },
    {
      name: "shout",
      ipa: "/aʊ/",
      wordIpa: "/ʃaʊt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/shout.mp3",
      type: "Verb",
      meaning: "hét",
      example: "Don’t shout at me!",
      context: "Verb"
    },
    {
      name: "cloud",
      ipa: "/aʊ/",
      wordIpa: "/klaʊd/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/cloud.mp3",
      type: "Noun",
      meaning: "đám mây",
      example: "There’s a cloud in the sky.",
      context: "Noun"
    },
    {
      name: "town",
      ipa: "/aʊ/",
      wordIpa: "/taʊn/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/town.mp3",
      type: "Noun",
      meaning: "thị trấn",
      example: "He lives in a small town.",
      context: "Noun"
    }
  ],
  [
    {
      name: "go",
      ipa: "/əʊ/",
      wordIpa: "/ɡəʊ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/go.mp3",
      type: "Verb",
      meaning: "đi",
      example: "I go to school at 7 AM.",
      context: "Verb"
    },
    {
      name: "boat",
      ipa: "/əʊ/",
      wordIpa: "/bəʊt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/boat.mp3",
      type: "Noun",
      meaning: "thuyền",
      example: "We took a boat ride.",
      context: "Noun"
    },
    {
      name: "snow",
      ipa: "/əʊ/",
      wordIpa: "/snəʊ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/snow.mp3",
      type: "Noun",
      meaning: "tuyết",
      example: "It’s going to snow tonight.",
      context: "Noun"
    },
    {
      name: "home",
      ipa: "/əʊ/",
      wordIpa: "/həʊm/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/home.mp3",
      type: "Noun",
      meaning: "nhà",
      example: "She went home early.",
      context: "Noun"
    },
    {
      name: "hope",
      ipa: "/əʊ/",
      wordIpa: "/həʊp/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/hope.mp3",
      type: "Verb",
      meaning: "hy vọng",
      example: "I hope you’re well.",
      context: "Verb"
    },
    {
      name: "road",
      ipa: "/əʊ/",
      wordIpa: "/rəʊd/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/road.mp3",
      type: "Noun",
      meaning: "con đường",
      example: "The road is busy today.",
      context: "Noun"
    },
    {
      name: "stone",
      ipa: "/əʊ/",
      wordIpa: "/stəʊn/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/stone.mp3",
      type: "Noun",
      meaning: "hòn đá",
      example: "She picked up a stone.",
      context: "Noun"
    },
    {
      name: "show",
      ipa: "/əʊ/",
      wordIpa: "/ʃəʊ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/show.mp3",
      type: "Verb",
      meaning: "trình diễn / chỉ ra",
      example: "Can you show me the way?",
      context: "Verb"
    },
    {
      name: "nose",
      ipa: "/əʊ/",
      wordIpa: "/nəʊz/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/nose.mp3",
      type: "Noun",
      meaning: "mũi",
      example: "Her nose is red.",
      context: "Noun"
    },
    {
      name: "close",
      ipa: "/əʊ/",
      wordIpa: "/kləʊz/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/close.mp3",
      type: "Verb",
      meaning: "đóng lại",
      example: "Close the door, please.",
      context: "Verb"
    }
  ],
  [
    {
      name: "go",
      ipa: "/oʊ/",
      wordIpa: "/ɡoʊ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/go.mp3",
      type: "Verb",
      meaning: "đi",
      example: "I go to school every day.",
      context: "Verb"
    },
    {
      name: "home",
      ipa: "/oʊ/",
      wordIpa: "/hoʊm/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/home.mp3",
      type: "Noun",
      meaning: "nhà",
      example: "He went back home.",
      context: "Noun"
    },
    {
      name: "show",
      ipa: "/oʊ/",
      wordIpa: "/ʃoʊ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/show.mp3",
      type: "Verb",
      meaning: "trình diễn, cho thấy",
      example: "Please show me your ID.",
      context: "Verb"
    },
    {
      name: "know",
      ipa: "/oʊ/",
      wordIpa: "/noʊ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/know.mp3",
      type: "Verb",
      meaning: "biết",
      example: "Do you know the answer?",
      context: "Verb"
    },
    {
      name: "no",
      ipa: "/oʊ/",
      wordIpa: "/noʊ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/no.mp3",
      type: "Adverb",
      meaning: "không",
      example: "No, I don’t want that.",
      context: "Adverb"
    },
    {
      name: "hope",
      ipa: "/oʊ/",
      wordIpa: "/hoʊp/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/hope.mp3",
      type: "Verb",
      meaning: "hy vọng",
      example: "I hope she’s okay.",
      context: "Verb"
    },
    {
      name: "close",
      ipa: "/oʊ/",
      wordIpa: "/kloʊz/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/close.mp3",
      type: "Verb",
      meaning: "đóng",
      example: "Close the window, please.",
      context: "Verb"
    },
    {
      name: "stone",
      ipa: "/oʊ/",
      wordIpa: "/stoʊn/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/stone.mp3",
      type: "Noun",
      meaning: "hòn đá",
      example: "He threw a stone.",
      context: "Noun"
    },
    {
      name: "road",
      ipa: "/oʊ/",
      wordIpa: "/roʊd/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/road.mp3",
      type: "Noun",
      meaning: "con đường",
      example: "The road is wet.",
      context: "Noun"
    },
    {
      name: "snow",
      ipa: "/oʊ/",
      wordIpa: "/snoʊ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/snow.mp3",
      type: "Noun",
      meaning: "tuyết",
      example: "There’s snow on the roof.",
      context: "Noun"
    }
  ],
  [
    {
      name: "ear",
      ipa: "/ɪə/",
      wordIpa: "/ɪə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/ear.mp3",
      type: "Noun",
      meaning: "tai",
      example: "He whispered in my ear.",
      context: "Noun"
    },
    {
      name: "beer",
      ipa: "/ɪə/",
      wordIpa: "/bɪə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/beer.mp3",
      type: "Noun",
      meaning: "bia",
      example: "Would you like a beer?",
      context: "Noun"
    },
    {
      name: "here",
      ipa: "/ɪə/",
      wordIpa: "/hɪə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/here.mp3",
      type: "Adverb",
      meaning: "ở đây",
      example: "Come here, please.",
      context: "Adverb"
    },
    {
      name: "near",
      ipa: "/ɪə/",
      wordIpa: "/nɪə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/near.mp3",
      type: "Adverb",
      meaning: "gần",
      example: "The school is near my house.",
      context: "Adverb"
    },
    {
      name: "fear",
      ipa: "/ɪə/",
      wordIpa: "/fɪə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/fear.mp3",
      type: "Noun",
      meaning: "nỗi sợ",
      example: "She has a fear of heights.",
      context: "Noun"
    },
    {
      name: "idea",
      ipa: "/ɪə/",
      wordIpa: "/aɪˈdɪə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/idea.mp3",
      type: "Noun",
      meaning: "ý tưởng",
      example: "That’s a great idea!",
      context: "Noun"
    },
    {
      name: "career",
      ipa: "/ɪə/",
      wordIpa: "/kəˈrɪə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/career.mp3",
      type: "Noun",
      meaning: "sự nghiệp",
      example: "She has a successful career.",
      context: "Noun"
    },
    {
      name: "appear",
      ipa: "/ɪə/",
      wordIpa: "/əˈpɪə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/appear.mp3",
      type: "Verb",
      meaning: "xuất hiện",
      example: "He suddenly appeared in the doorway.",
      context: "Verb"
    },
    {
      name: "clear",
      ipa: "/ɪə/",
      wordIpa: "/klɪə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/clear.mp3",
      type: "Adjective",
      meaning: "rõ ràng",
      example: "The sky is clear today.",
      context: "Adjective"
    },
    {
      name: "cheer",
      ipa: "/ɪə/",
      wordIpa: "/tʃɪə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/cheer.mp3",
      type: "Verb",
      meaning: "cổ vũ",
      example: "They cheered loudly at the game.",
      context: "Verb"
    }
  ],
  [
    {
      name: "air",
      ipa: "/eə/",
      wordIpa: "/eə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/air.mp3",
      type: "Noun",
      meaning: "không khí",
      example: "The air feels fresh today.",
      context: "Noun"
    },
    {
      name: "care",
      ipa: "/eə/",
      wordIpa: "/keə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/care.mp3",
      type: "Noun",
      meaning: "sự chăm sóc",
      example: "She takes care of her dog.",
      context: "Noun"
    },
    {
      name: "bear",
      ipa: "/eə/",
      wordIpa: "/beə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/bear.mp3",
      type: "Noun",
      meaning: "con gấu",
      example: "We saw a bear in the forest.",
      context: "Noun"
    },
    {
      name: "share",
      ipa: "/eə/",
      wordIpa: "/ʃeə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/share.mp3",
      type: "Verb",
      meaning: "chia sẻ",
      example: "Please share your opinion.",
      context: "Verb"
    },
    {
      name: "dare",
      ipa: "/eə/",
      wordIpa: "/deə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/dare.mp3",
      type: "Verb",
      meaning: "dám",
      example: "I dare you to jump.",
      context: "Verb"
    },
    {
      name: "pair",
      ipa: "/eə/",
      wordIpa: "/peə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/pair.mp3",
      type: "Noun",
      meaning: "một cặp",
      example: "I bought a new pair of shoes.",
      context: "Noun"
    },
    {
      name: "stairs",
      ipa: "/eə/",
      wordIpa: "/steəz/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/stairs.mp3",
      type: "Noun",
      meaning: "cầu thang",
      example: "She ran up the stairs.",
      context: "Noun"
    },
    {
      name: "fair",
      ipa: "/eə/",
      wordIpa: "/feə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/fair.mp3",
      type: "Adjective",
      meaning: "công bằng",
      example: "That’s a fair decision.",
      context: "Adjective"
    },
    {
      name: "square",
      ipa: "/eə/",
      wordIpa: "/skweə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/square.mp3",
      type: "Noun",
      meaning: "quảng trường",
      example: "Let’s meet at the square.",
      context: "Noun"
    },
    {
      name: "hair",
      ipa: "/eə/",
      wordIpa: "/heə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/hair.mp3",
      type: "Noun",
      meaning: "tóc",
      example: "She has long hair.",
      context: "Noun"
    }
  ],
  [
    {
      name: "tour",
      ipa: "/ʊə/",
      wordIpa: "/tʊə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/tour.mp3",
      type: "Noun",
      meaning: "chuyến du lịch",
      example: "We went on a city tour.",
      context: "Noun"
    },
    {
      name: "sure",
      ipa: "/ʊə/",
      wordIpa: "/ʃʊə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/sure.mp3",
      type: "Adjective",
      meaning: "chắc chắn",
      example: "Are you sure?",
      context: "Adjective"
    },
    {
      name: "cure",
      ipa: "/ʊə/",
      wordIpa: "/kjʊə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/cure.mp3",
      type: "Noun",
      meaning: "phương thuốc",
      example: "They found a cure for the disease.",
      context: "Noun"
    },
    {
      name: "pure",
      ipa: "/ʊə/",
      wordIpa: "/pjʊə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/pure.mp3",
      type: "Adjective",
      meaning: "nguyên chất",
      example: "This is pure water.",
      context: "Adjective"
    },
    {
      name: "secure",
      ipa: "/ʊə/",
      wordIpa: "/sɪˈkjʊə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/secure.mp3",
      type: "Adjective",
      meaning: "an toàn, bảo mật",
      example: "The door is secure.",
      context: "Adjective"
    },
    {
      name: "endure",
      ipa: "/ʊə/",
      wordIpa: "/ɪnˈdjʊə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/endure.mp3",
      type: "Verb",
      meaning: "chịu đựng",
      example: "She endured great pain.",
      context: "Verb"
    },
    {
      name: "mature",
      ipa: "/ʊə/",
      wordIpa: "/məˈtjʊə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/mature.mp3",
      type: "Adjective",
      meaning: "trưởng thành",
      example: "He is very mature for his age.",
      context: "Adjective"
    },
    {
      name: "insure",
      ipa: "/ʊə/",
      wordIpa: "/ɪnˈʃʊə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/insure.mp3",
      type: "Verb",
      meaning: "bảo hiểm",
      example: "They insured the house.",
      context: "Verb"
    },
    {
      name: "obscure",
      ipa: "/ʊə/",
      wordIpa: "/əbˈskjʊə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/obscure.mp3",
      type: "Adjective",
      meaning: "khó hiểu, mơ hồ",
      example: "The meaning is obscure.",
      context: "Adjective"
    },
    {
      name: "reassure",
      ipa: "/ʊə/",
      wordIpa: "/ˌriːəˈʃʊə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/reassure.mp3",
      type: "Verb",
      meaning: "trấn an",
      example: "He reassured her with a smile.",
      context: "Verb"
    }
  ],
  [
    {
      name: "pen",
      ipa: "/p/",
      wordIpa: "/pen/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/pen.mp3",
      type: "Noun",
      meaning: "bút",
      example: "I wrote it with a pen.",
      context: "Noun"
    },
    {
      name: "apple",
      ipa: "/p/",
      wordIpa: "/ˈæp.əl/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/apple.mp3",
      type: "Noun",
      meaning: "quả táo",
      example: "She ate an apple.",
      context: "Noun"
    },
    {
      name: "paper",
      ipa: "/p/",
      wordIpa: "/ˈpeɪ.pə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/paper.mp3",
      type: "Noun",
      meaning: "giấy",
      example: "He wrote on the paper.",
      context: "Noun"
    },
    {
      name: "people",
      ipa: "/p/",
      wordIpa: "/ˈpiː.pəl/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/people.mp3",
      type: "Noun",
      meaning: "người",
      example: "Many people were there.",
      context: "Noun"
    },
    {
      name: "computer",
      ipa: "/p/",
      wordIpa: "/kəmˈpjuː.tə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/computer.mp3",
      type: "Noun",
      meaning: "máy tính",
      example: "She uses a computer daily.",
      context: "Noun"
    },
    {
      name: "open",
      ipa: "/p/",
      wordIpa: "/ˈəʊ.pən/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/open.mp3",
      type: "Verb",
      meaning: "mở",
      example: "Please open the door.",
      context: "Verb"
    },
    {
      name: "happy",
      ipa: "/p/",
      wordIpa: "/ˈhæp.i/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/happy.mp3",
      type: "Adjective",
      meaning: "vui vẻ",
      example: "He is very happy today.",
      context: "Adjective"
    },
    {
      name: "problem",
      ipa: "/p/",
      wordIpa: "/ˈprɒb.ləm/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/problem.mp3",
      type: "Noun",
      meaning: "vấn đề",
      example: "We solved the problem.",
      context: "Noun"
    },
    {
      name: "price",
      ipa: "/p/",
      wordIpa: "/praɪs/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/price.mp3",
      type: "Noun",
      meaning: "giá",
      example: "What is the price of this?",
      context: "Noun"
    },
    {
      name: "party",
      ipa: "/p/",
      wordIpa: "/ˈpɑː.ti/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/party.mp3",
      type: "Noun",
      meaning: "bữa tiệc",
      example: "We had a great party.",
      context: "Noun"
    }
  ],
  [
    {
      name: "bat",
      ipa: "/b/",
      wordIpa: "/bæt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/bat.mp3",
      type: "Noun",
      meaning: "con dơi / gậy bóng",
      example: "He hit the ball with a bat.",
      context: "Noun"
    },
    {
      name: "rabbit",
      ipa: "/b/",
      wordIpa: "/ˈræb.ɪt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/rabbit.mp3",
      type: "Noun",
      meaning: "con thỏ",
      example: "The rabbit ran fast.",
      context: "Noun"
    },
    {
      name: "baby",
      ipa: "/b/",
      wordIpa: "/ˈbeɪ.bi/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/baby.mp3",
      type: "Noun",
      meaning: "em bé",
      example: "The baby is sleeping.",
      context: "Noun"
    },
    {
      name: "blue",
      ipa: "/b/",
      wordIpa: "/bluː/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/blue.mp3",
      type: "Adjective",
      meaning: "màu xanh dương",
      example: "She wore a blue dress.",
      context: "Adjective"
    },
    {
      name: "about",
      ipa: "/b/",
      wordIpa: "/əˈbaʊt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/about.mp3",
      type: "Preposition",
      meaning: "về (ai đó, cái gì đó)",
      example: "Tell me about your day.",
      context: "Preposition"
    },
    {
      name: "job",
      ipa: "/b/",
      wordIpa: "/dʒɒb/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/job.mp3",
      type: "Noun",
      meaning: "công việc",
      example: "He found a new job.",
      context: "Noun"
    },
    {
      name: "climb",
      ipa: "/b/",
      wordIpa: "/klaɪm/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/climb.mp3",
      type: "Verb",
      meaning: "leo",
      example: "We climbed the mountain.",
      context: "Verb"
    },
    {
      name: "big",
      ipa: "/b/",
      wordIpa: "/bɪɡ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/big.mp3",
      type: "Adjective",
      meaning: "to lớn",
      example: "That’s a big house.",
      context: "Adjective"
    },
    {
      name: "number",
      ipa: "/b/",
      wordIpa: "/ˈnʌm.bə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/number.mp3",
      type: "Noun",
      meaning: "số",
      example: "What’s your phone number?",
      context: "Noun"
    },
    {
      name: "cab",
      ipa: "/b/",
      wordIpa: "/kæb/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/cab.mp3",
      type: "Noun",
      meaning: "xe taxi",
      example: "We took a cab to the airport.",
      context: "Noun"
    }
  ],
  [
    {
      name: "top",
      ipa: "/t/",
      wordIpa: "/tɒp/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/top.mp3",
      type: "Noun",
      meaning: "đỉnh, đầu",
      example: "He climbed to the top.",
      context: "Noun"
    },
    {
      name: "better",
      ipa: "/t/",
      wordIpa: "/ˈbet.ə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/better.mp3",
      type: "Adjective",
      meaning: "tốt hơn",
      example: "You did better this time.",
      context: "Adjective"
    },
    {
      name: "stopped",
      ipa: "/t/",
      wordIpa: "/stɒpt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/stopped.mp3",
      type: "Verb",
      meaning: "đã dừng lại",
      example: "He stopped the car.",
      context: "Verb"
    },
    {
      name: "time",
      ipa: "/t/",
      wordIpa: "/taɪm/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/time.mp3",
      type: "Noun",
      meaning: "thời gian",
      example: "What time is it?",
      context: "Noun"
    },
    {
      name: "ticket",
      ipa: "/t/",
      wordIpa: "/ˈtɪk.ɪt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/ticket.mp3",
      type: "Noun",
      meaning: "vé",
      example: "He bought a train ticket.",
      context: "Noun"
    },
    {
      name: "party",
      ipa: "/t/",
      wordIpa: "/ˈpɑː.ti/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/party.mp3",
      type: "Noun",
      meaning: "bữa tiệc",
      example: "They had a big party.",
      context: "Noun"
    },
    {
      name: "city",
      ipa: "/t/",
      wordIpa: "/ˈsɪt.i/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/city.mp3",
      type: "Noun",
      meaning: "thành phố",
      example: "The city is crowded.",
      context: "Noun"
    },
    {
      name: "table",
      ipa: "/t/",
      wordIpa: "/ˈteɪ.bəl/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/table.mp3",
      type: "Noun",
      meaning: "cái bàn",
      example: "Place it on the table.",
      context: "Noun"
    },
    {
      name: "ten",
      ipa: "/t/",
      wordIpa: "/ten/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/ten.mp3",
      type: "Number",
      meaning: "số mười",
      example: "There are ten students.",
      context: "Number"
    },
    {
      name: "hotel",
      ipa: "/t/",
      wordIpa: "/həʊˈtel/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/hotel.mp3",
      type: "Noun",
      meaning: "khách sạn",
      example: "We stayed in a hotel.",
      context: "Noun"
    }
  ],
  [
    {
      name: "dog",
      ipa: "/d/",
      wordIpa: "/dɒɡ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/dog.mp3",
      type: "Noun",
      meaning: "con chó",
      example: "The dog barked loudly.",
      context: "Noun"
    },
    {
      name: "add",
      ipa: "/d/",
      wordIpa: "/æd/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/add.mp3",
      type: "Verb",
      meaning: "thêm vào",
      example: "Add two numbers together.",
      context: "Verb"
    },
    {
      name: "played",
      ipa: "/d/",
      wordIpa: "/pleɪd/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/played.mp3",
      type: "Verb",
      meaning: "đã chơi",
      example: "She played the piano.",
      context: "Verb"
    },
    {
      name: "food",
      ipa: "/d/",
      wordIpa: "/fuːd/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/food.mp3",
      type: "Noun",
      meaning: "thức ăn",
      example: "We bought some food.",
      context: "Noun"
    },
    {
      name: "road",
      ipa: "/d/",
      wordIpa: "/rəʊd/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/road.mp3",
      type: "Noun",
      meaning: "con đường",
      example: "The road was busy.",
      context: "Noun"
    },
    {
      name: "bed",
      ipa: "/d/",
      wordIpa: "/bed/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/bed.mp3",
      type: "Noun",
      meaning: "giường",
      example: "He is lying in bed.",
      context: "Noun"
    },
    {
      name: "hard",
      ipa: "/d/",
      wordIpa: "/hɑːd/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/hard.mp3",
      type: "Adjective",
      meaning: "khó / cứng",
      example: "This question is hard.",
      context: "Adjective"
    },
    {
      name: "cold",
      ipa: "/d/",
      wordIpa: "/kəʊld/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/cold.mp3",
      type: "Adjective",
      meaning: "lạnh",
      example: "It’s cold outside.",
      context: "Adjective"
    },
    {
      name: "child",
      ipa: "/d/",
      wordIpa: "/tʃaɪld/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/child.mp3",
      type: "Noun",
      meaning: "đứa trẻ",
      example: "The child is sleeping.",
      context: "Noun"
    },
    {
      name: "sand",
      ipa: "/d/",
      wordIpa: "/sænd/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/sand.mp3",
      type: "Noun",
      meaning: "cát",
      example: "The beach is full of sand.",
      context: "Noun"
    }
  ],
  [
    {
      name: "cat",
      ipa: "/k/",
      wordIpa: "/kæt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/cat.mp3",
      type: "Noun",
      meaning: "con mèo",
      example: "The cat is sleeping.",
      context: "Noun"
    },
    {
      name: "kick",
      ipa: "/k/",
      wordIpa: "/kɪk/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/kick.mp3",
      type: "Verb",
      meaning: "đá",
      example: "He kicked the ball.",
      context: "Verb"
    },
    {
      name: "school",
      ipa: "/k/",
      wordIpa: "/skuːl/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/school.mp3",
      type: "Noun",
      meaning: "trường học",
      example: "I go to school every day.",
      context: "Noun"
    },
    {
      name: "cake",
      ipa: "/k/",
      wordIpa: "/keɪk/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/cake.mp3",
      type: "Noun",
      meaning: "bánh ngọt",
      example: "She baked a cake.",
      context: "Noun"
    },
    {
      name: "car",
      ipa: "/k/",
      wordIpa: "/kɑː/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/car.mp3",
      type: "Noun",
      meaning: "xe ô tô",
      example: "He drives a fast car.",
      context: "Noun"
    },
    {
      name: "clock",
      ipa: "/k/",
      wordIpa: "/klɒk/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/clock.mp3",
      type: "Noun",
      meaning: "đồng hồ",
      example: "Look at the clock.",
      context: "Noun"
    },
    {
      name: "king",
      ipa: "/k/",
      wordIpa: "/kɪŋ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/king.mp3",
      type: "Noun",
      meaning: "vua",
      example: "The king ruled the land.",
      context: "Noun"
    },
    {
      name: "clean",
      ipa: "/k/",
      wordIpa: "/kliːn/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/clean.mp3",
      type: "Verb",
      meaning: "làm sạch",
      example: "Please clean your room.",
      context: "Verb"
    },
    {
      name: "quiet",
      ipa: "/k/",
      wordIpa: "/ˈkwaɪ.ət/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/quiet.mp3",
      type: "Adjective",
      meaning: "yên lặng",
      example: "Be quiet, please.",
      context: "Adjective"
    },
    {
      name: "question",
      ipa: "/k/",
      wordIpa: "/ˈkwes.tʃən/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/question.mp3",
      type: "Noun",
      meaning: "câu hỏi",
      example: "He asked a question.",
      context: "Noun"
    }
  ],
  [
    {
      name: "go",
      ipa: "/g/",
      wordIpa: "/ɡəʊ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/go.mp3",
      type: "Verb",
      meaning: "đi",
      example: "Let’s go home.",
      context: "Verb"
    },
    {
      name: "bigger",
      ipa: "/g/",
      wordIpa: "/ˈbɪɡ.ə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/bigger.mp3",
      type: "Adjective",
      meaning: "to hơn",
      example: "This box is bigger than that one.",
      context: "Adjective"
    },
    {
      name: "ghost",
      ipa: "/g/",
      wordIpa: "/ɡəʊst/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/ghost.mp3",
      type: "Noun",
      meaning: "ma",
      example: "The house is haunted by a ghost.",
      context: "Noun"
    },
    {
      name: "game",
      ipa: "/g/",
      wordIpa: "/ɡeɪm/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/game.mp3",
      type: "Noun",
      meaning: "trò chơi",
      example: "They played a game.",
      context: "Noun"
    },
    {
      name: "girl",
      ipa: "/g/",
      wordIpa: "/ɡɜːl/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/girl.mp3",
      type: "Noun",
      meaning: "bé gái",
      example: "The girl is reading.",
      context: "Noun"
    },
    {
      name: "green",
      ipa: "/g/",
      wordIpa: "/ɡriːn/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/green.mp3",
      type: "Adjective",
      meaning: "màu xanh lá",
      example: "She wore a green dress.",
      context: "Adjective"
    },
    {
      name: "glass",
      ipa: "/g/",
      wordIpa: "/ɡlɑːs/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/glass.mp3",
      type: "Noun",
      meaning: "thủy tinh / cái ly",
      example: "The glass is full.",
      context: "Noun"
    },
    {
      name: "again",
      ipa: "/g/",
      wordIpa: "/əˈɡen/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/again.mp3",
      type: "Adverb",
      meaning: "lại",
      example: "Try again.",
      context: "Adverb"
    },
    {
      name: "begin",
      ipa: "/g/",
      wordIpa: "/bɪˈɡɪn/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/begin.mp3",
      type: "Verb",
      meaning: "bắt đầu",
      example: "Let’s begin the test.",
      context: "Verb"
    },
    {
      name: "garden",
      ipa: "/g/",
      wordIpa: "/ˈɡɑː.dən/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/garden.mp3",
      type: "Noun",
      meaning: "vườn",
      example: "He is watering the garden.",
      context: "Noun"
    }
  ],
  [
    {
      name: "fish",
      ipa: "/f/",
      wordIpa: "/fɪʃ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/fish.mp3",
      type: "Noun",
      meaning: "cá",
      example: "She caught a big fish.",
      context: "Noun"
    },
    {
      name: "phone",
      ipa: "/f/",
      wordIpa: "/fəʊn/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/phone.mp3",
      type: "Noun",
      meaning: "điện thoại",
      example: "I lost my phone.",
      context: "Noun"
    },
    {
      name: "laugh",
      ipa: "/f/",
      wordIpa: "/lɑːf/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/laugh.mp3",
      type: "Verb",
      meaning: "cười",
      example: "They laugh at the joke.",
      context: "Verb"
    },
    {
      name: "fun",
      ipa: "/f/",
      wordIpa: "/fʌn/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/fun.mp3",
      type: "Noun",
      meaning: "niềm vui",
      example: "We had fun at the park.",
      context: "Noun"
    },
    {
      name: "full",
      ipa: "/f/",
      wordIpa: "/fʊl/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/full.mp3",
      type: "Adjective",
      meaning: "đầy",
      example: "The glass is full.",
      context: "Adjective"
    },
    {
      name: "find",
      ipa: "/f/",
      wordIpa: "/faɪnd/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/find.mp3",
      type: "Verb",
      meaning: "tìm thấy",
      example: "Can you find my keys?",
      context: "Verb"
    },
    {
      name: "photo",
      ipa: "/f/",
      wordIpa: "/ˈfəʊ.təʊ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/photo.mp3",
      type: "Noun",
      meaning: "ảnh",
      example: "She took a photo.",
      context: "Noun"
    },
    {
      name: "forest",
      ipa: "/f/",
      wordIpa: "/ˈfɒr.ɪst/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/forest.mp3",
      type: "Noun",
      meaning: "rừng",
      example: "They camped in the forest.",
      context: "Noun"
    },
    {
      name: "gift",
      ipa: "/f/",
      wordIpa: "/ɡɪft/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/gift.mp3",
      type: "Noun",
      meaning: "quà tặng",
      example: "He gave me a gift.",
      context: "Noun"
    },
    {
      name: "tough",
      ipa: "/f/",
      wordIpa: "/tʌf/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/tough.mp3",
      type: "Adjective",
      meaning: "khó khăn / dai",
      example: "This meat is tough.",
      context: "Adjective"
    }
  ],
  [
    {
      name: "van",
      ipa: "/v/",
      wordIpa: "/væn/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/van.mp3",
      type: "Noun",
      meaning: "xe tải nhỏ",
      example: "They moved using a van.",
      context: "Noun"
    },
    {
      name: "love",
      ipa: "/v/",
      wordIpa: "/lʌv/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/love.mp3",
      type: "Verb",
      meaning: "yêu",
      example: "I love my family.",
      context: "Verb"
    },
    {
      name: "very",
      ipa: "/v/",
      wordIpa: "/ˈver.i/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/very.mp3",
      type: "Adverb",
      meaning: "rất",
      example: "It’s very cold today.",
      context: "Adverb"
    },
    {
      name: "voice",
      ipa: "/v/",
      wordIpa: "/vɔɪs/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/voice.mp3",
      type: "Noun",
      meaning: "giọng nói",
      example: "She has a soft voice.",
      context: "Noun"
    },
    {
      name: "have",
      ipa: "/v/",
      wordIpa: "/hæv/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/have.mp3",
      type: "Verb",
      meaning: "có",
      example: "Do you have a pen?",
      context: "Verb"
    },
    {
      name: "never",
      ipa: "/v/",
      wordIpa: "/ˈnev.ər/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/never.mp3",
      type: "Adverb",
      meaning: "không bao giờ",
      example: "I never lie.",
      context: "Adverb"
    },
    {
      name: "live",
      ipa: "/v/",
      wordIpa: "/lɪv/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/live.mp3",
      type: "Verb",
      meaning: "sống",
      example: "They live in London.",
      context: "Verb"
    },
    {
      name: "move",
      ipa: "/v/",
      wordIpa: "/muːv/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/move.mp3",
      type: "Verb",
      meaning: "di chuyển",
      example: "Don’t move!",
      context: "Verb"
    },
    {
      name: "give",
      ipa: "/v/",
      wordIpa: "/ɡɪv/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/give.mp3",
      type: "Verb",
      meaning: "cho",
      example: "Give me your hand.",
      context: "Verb"
    },
    {
      name: "drive",
      ipa: "/v/",
      wordIpa: "/draɪv/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/drive.mp3",
      type: "Verb",
      meaning: "lái xe",
      example: "He can drive.",
      context: "Verb"
    }
  ],
  [
    {
      name: "think",
      ipa: "/θ/",
      wordIpa: "/θɪŋk/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/think.mp3",
      type: "Verb",
      meaning: "nghĩ",
      example: "I think it's true.",
      context: "Verb"
    },
    {
      name: "bath",
      ipa: "/θ/",
      wordIpa: "/bɑːθ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/bath.mp3",
      type: "Noun",
      meaning: "tắm / bồn tắm",
      example: "She is taking a bath.",
      context: "Noun"
    },
    {
      name: "math",
      ipa: "/θ/",
      wordIpa: "/mæθ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/math.mp3",
      type: "Noun",
      meaning: "toán học",
      example: "Math is my favorite subject.",
      context: "Noun"
    },
    {
      name: "thank",
      ipa: "/θ/",
      wordIpa: "/θæŋk/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/thank.mp3",
      type: "Verb",
      meaning: "cảm ơn",
      example: "Thank you!",
      context: "Verb"
    },
    {
      name: "both",
      ipa: "/θ/",
      wordIpa: "/bəʊθ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/both.mp3",
      type: "Determiner",
      meaning: "cả hai",
      example: "Both options are good.",
      context: "Determiner"
    },
    {
      name: "earth",
      ipa: "/θ/",
      wordIpa: "/ɜːθ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/earth.mp3",
      type: "Noun",
      meaning: "trái đất",
      example: "The Earth is round.",
      context: "Noun"
    },
    {
      name: "teeth",
      ipa: "/θ/",
      wordIpa: "/tiːθ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/teeth.mp3",
      type: "Noun",
      meaning: "răng",
      example: "Brush your teeth.",
      context: "Noun"
    },
    {
      name: "month",
      ipa: "/θ/",
      wordIpa: "/mʌnθ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/month.mp3",
      type: "Noun",
      meaning: "tháng",
      example: "We met last month.",
      context: "Noun"
    },
    {
      name: "north",
      ipa: "/θ/",
      wordIpa: "/nɔːθ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/north.mp3",
      type: "Noun",
      meaning: "hướng bắc",
      example: "They live in the north.",
      context: "Noun"
    },
    {
      name: "health",
      ipa: "/θ/",
      wordIpa: "/helθ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/health.mp3",
      type: "Noun",
      meaning: "sức khỏe",
      example: "Your health is important.",
      context: "Noun"
    }
  ],
  [
    {
      name: "this",
      ipa: "/ð/",
      wordIpa: "/ðɪs/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/this.mp3",
      type: "Pronoun",
      meaning: "này",
      example: "This is my book.",
      context: "Pronoun"
    },
    {
      name: "that",
      ipa: "/ð/",
      wordIpa: "/ðæt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/that.mp3",
      type: "Pronoun",
      meaning: "đó",
      example: "I want that one.",
      context: "Pronoun"
    },
    {
      name: "they",
      ipa: "/ð/",
      wordIpa: "/ðeɪ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/they.mp3",
      type: "Pronoun",
      meaning: "họ",
      example: "They are my friends.",
      context: "Pronoun"
    },
    {
      name: "them",
      ipa: "/ð/",
      wordIpa: "/ðem/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/them.mp3",
      type: "Pronoun",
      meaning: "họ (tân ngữ)",
      example: "I saw them yesterday.",
      context: "Pronoun"
    },
    {
      name: "then",
      ipa: "/ð/",
      wordIpa: "/ðen/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/then.mp3",
      type: "Adverb",
      meaning: "sau đó",
      example: "We ate and then left.",
      context: "Adverb"
    },
    {
      name: "there",
      ipa: "/ð/",
      wordIpa: "/ðeə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/there.mp3",
      type: "Adverb",
      meaning: "ở đó",
      example: "He is over there.",
      context: "Adverb"
    },
    {
      name: "those",
      ipa: "/ð/",
      wordIpa: "/ðəʊz/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/those.mp3",
      type: "Pronoun",
      meaning: "những cái đó",
      example: "Those are hers.",
      context: "Pronoun"
    },
    {
      name: "mother",
      ipa: "/ð/",
      wordIpa: "/ˈmʌðə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/mother.mp3",
      type: "Noun",
      meaning: "mẹ",
      example: "My mother is kind.",
      context: "Noun"
    },
    {
      name: "father",
      ipa: "/ð/",
      wordIpa: "/ˈfɑːðə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/father.mp3",
      type: "Noun",
      meaning: "cha",
      example: "His father is tall.",
      context: "Noun"
    },
    {
      name: "other",
      ipa: "/ð/",
      wordIpa: "/ˈʌðə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/other.mp3",
      type: "Determiner",
      meaning: "khác",
      example: "The other book is better.",
      context: "Determiner"
    }
  ],
  [
    {
      name: "see",
      ipa: "/s/",
      wordIpa: "/siː/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/see.mp3",
      type: "Verb",
      meaning: "nhìn thấy",
      example: "I can see you.",
      context: "Verb"
    },
    {
      name: "pass",
      ipa: "/s/",
      wordIpa: "/pɑːs/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/pass.mp3",
      type: "Verb",
      meaning: "vượt qua / chuyền",
      example: "Please pass the salt.",
      context: "Verb"
    },
    {
      name: "city",
      ipa: "/s/",
      wordIpa: "/ˈsɪti/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/city.mp3",
      type: "Noun",
      meaning: "thành phố",
      example: "I love this city.",
      context: "Noun"
    },
    {
      name: "scene",
      ipa: "/s/",
      wordIpa: "/siːn/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/scene.mp3",
      type: "Noun",
      meaning: "cảnh",
      example: "It’s a dramatic scene.",
      context: "Noun"
    },
    {
      name: "small",
      ipa: "/s/",
      wordIpa: "/smɔːl/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/small.mp3",
      type: "Adjective",
      meaning: "nhỏ",
      example: "The box is small.",
      context: "Adjective"
    },
    {
      name: "sun",
      ipa: "/s/",
      wordIpa: "/sʌn/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/sun.mp3",
      type: "Noun",
      meaning: "mặt trời",
      example: "The sun is bright.",
      context: "Noun"
    },
    {
      name: "science",
      ipa: "/s/",
      wordIpa: "/ˈsaɪəns/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/science.mp3",
      type: "Noun",
      meaning: "khoa học",
      example: "He studies science.",
      context: "Noun"
    },
    {
      name: "simple",
      ipa: "/s/",
      wordIpa: "/ˈsɪm.pəl/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/simple.mp3",
      type: "Adjective",
      meaning: "đơn giản",
      example: "The instructions are simple.",
      context: "Adjective"
    },
    {
      name: "ice",
      ipa: "/s/",
      wordIpa: "/aɪs/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/ice.mp3",
      type: "Noun",
      meaning: "đá (lạnh)",
      example: "Put some ice in the drink.",
      context: "Noun"
    },
    {
      name: "music",
      ipa: "/s/",
      wordIpa: "/ˈmjuː.zɪk/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/music.mp3",
      type: "Noun",
      meaning: "âm nhạc",
      example: "She loves music.",
      context: "Noun"
    }
  ],
  [
    {
      name: "zoo",
      ipa: "/z/",
      wordIpa: "/zuː/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/zoo.mp3",
      type: "Noun",
      meaning: "vườn thú",
      example: "We visited the zoo.",
      context: "Noun"
    },
    {
      name: "fizz",
      ipa: "/z/",
      wordIpa: "/fɪz/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/fizz.mp3",
      type: "Noun",
      meaning: "bọt sủi",
      example: "The drink had a lot of fizz.",
      context: "Noun"
    },
    {
      name: "rose",
      ipa: "/z/",
      wordIpa: "/rəʊz/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/rose.mp3",
      type: "Noun",
      meaning: "hoa hồng",
      example: "She gave me a rose.",
      context: "Noun"
    },
    {
      name: "zero",
      ipa: "/z/",
      wordIpa: "/ˈzɪə.rəʊ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/zero.mp3",
      type: "Noun",
      meaning: "số không",
      example: "The answer is zero.",
      context: "Noun"
    },
    {
      name: "music",
      ipa: "/z/",
      wordIpa: "/ˈmjuː.zɪk/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/music.mp3",
      type: "Noun",
      meaning: "âm nhạc",
      example: "He listens to music.",
      context: "Noun"
    },
    {
      name: "busy",
      ipa: "/z/",
      wordIpa: "/ˈbɪz.i/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/busy.mp3",
      type: "Adjective",
      meaning: "bận rộn",
      example: "I'm very busy today.",
      context: "Adjective"
    },
    {
      name: "has",
      ipa: "/z/",
      wordIpa: "/hæz/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/has.mp3",
      type: "Verb",
      meaning: "có (ngôi thứ 3)",
      example: "She has a car.",
      context: "Verb"
    },
    {
      name: "was",
      ipa: "/z/",
      wordIpa: "/wɒz/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/was.mp3",
      type: "Verb",
      meaning: "đã",
      example: "He was late.",
      context: "Verb"
    },
    {
      name: "is",
      ipa: "/z/",
      wordIpa: "/ɪz/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/is.mp3",
      type: "Verb",
      meaning: "là",
      example: "She is happy.",
      context: "Verb"
    },
    {
      name: "news",
      ipa: "/z/",
      wordIpa: "/njuːz/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/news.mp3",
      type: "Noun",
      meaning: "tin tức",
      example: "I read the news.",
      context: "Noun"
    }
  ],
  [
    {
      name: "ship",
      ipa: "/ʃ/",
      wordIpa: "/ʃɪp/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/ship.mp3",
      type: "Noun",
      meaning: "con tàu",
      example: "The ship sailed away.",
      context: "Noun"
    },
    {
      name: "she",
      ipa: "/ʃ/",
      wordIpa: "/ʃiː/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/she.mp3",
      type: "Pronoun",
      meaning: "cô ấy",
      example: "She is my sister.",
      context: "Pronoun"
    },
    {
      name: "shower",
      ipa: "/ʃ/",
      wordIpa: "/ˈʃaʊə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/shower.mp3",
      type: "Noun",
      meaning: "vòi sen / cơn mưa rào",
      example: "I took a shower.",
      context: "Noun"
    },
    {
      name: "nation",
      ipa: "/ʃ/",
      wordIpa: "/ˈneɪ.ʃən/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/nation.mp3",
      type: "Noun",
      meaning: "quốc gia",
      example: "We are a proud nation.",
      context: "Noun"
    },
    {
      name: "issue",
      ipa: "/ʃ/",
      wordIpa: "/ˈɪʃuː/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/issue.mp3",
      type: "Noun",
      meaning: "vấn đề",
      example: "This is a serious issue.",
      context: "Noun"
    },
    {
      name: "special",
      ipa: "/ʃ/",
      wordIpa: "/ˈspeʃ.əl/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/special.mp3",
      type: "Adjective",
      meaning: "đặc biệt",
      example: "This gift is special.",
      context: "Adjective"
    },
    {
      name: "education",
      ipa: "/ʃ/",
      wordIpa: "/ˌedʒʊˈkeɪʃən/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/education.mp3",
      type: "Noun",
      meaning: "giáo dục",
      example: "Education is important.",
      context: "Noun"
    },
    {
      name: "machine",
      ipa: "/ʃ/",
      wordIpa: "/məˈʃiːn/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/machine.mp3",
      type: "Noun",
      meaning: "máy móc",
      example: "The machine is broken.",
      context: "Noun"
    },
    {
      name: "social",
      ipa: "/ʃ/",
      wordIpa: "/ˈsəʊʃəl/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/social.mp3",
      type: "Adjective",
      meaning: "xã hội",
      example: "He has good social skills.",
      context: "Adjective"
    },
    {
      name: "official",
      ipa: "/ʃ/",
      wordIpa: "/əˈfɪʃəl/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/official.mp3",
      type: "Adjective",
      meaning: "chính thức",
      example: "It’s an official document.",
      context: "Adjective"
    }
  ],
  [
    {
      name: "vision",
      ipa: "/ʒ/",
      wordIpa: "/ˈvɪʒən/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/vision.mp3",
      type: "Noun",
      meaning: "tầm nhìn",
      example: "He has a clear vision for the future.",
      context: "Noun"
    },
    {
      name: "measure",
      ipa: "/ʒ/",
      wordIpa: "/ˈmeʒə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/measure.mp3",
      type: "Verb",
      meaning: "đo lường",
      example: "Please measure the table.",
      context: "Verb"
    },
    {
      name: "leisure",
      ipa: "/ʒ/",
      wordIpa: "/ˈleʒə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/leisure.mp3",
      type: "Noun",
      meaning: "thời gian rảnh",
      example: "I enjoy reading in my leisure time.",
      context: "Noun"
    },
    {
      name: "treasure",
      ipa: "/ʒ/",
      wordIpa: "/ˈtreʒə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/treasure.mp3",
      type: "Noun",
      meaning: "kho báu",
      example: "They found hidden treasure.",
      context: "Noun"
    },
    {
      name: "genre",
      ipa: "/ʒ/",
      wordIpa: "/ˈʒɒnrə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/genre.mp3",
      type: "Noun",
      meaning: "thể loại",
      example: "I like the horror genre.",
      context: "Noun"
    },
    {
      name: "usual",
      ipa: "/ʒ/",
      wordIpa: "/ˈjuːʒuəl/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/usual.mp3",
      type: "Adjective",
      meaning: "thông thường",
      example: "It was colder than usual.",
      context: "Adjective"
    },
    {
      name: "casual",
      ipa: "/ʒ/",
      wordIpa: "/ˈkæʒuəl/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/casual.mp3",
      type: "Adjective",
      meaning: "bình thường, không trang trọng",
      example: "He wore casual clothes.",
      context: "Adjective"
    },
    {
      name: "decision",
      ipa: "/ʒ/",
      wordIpa: "/dɪˈsɪʒən/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/decision.mp3",
      type: "Noun",
      meaning: "quyết định",
      example: "It was a difficult decision.",
      context: "Noun"
    },
    {
      name: "occasion",
      ipa: "/ʒ/",
      wordIpa: "/əˈkeɪʒən/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/occasion.mp3",
      type: "Noun",
      meaning: "dịp",
      example: "It was a special occasion.",
      context: "Noun"
    },
    {
      name: "collision",
      ipa: "/ʒ/",
      wordIpa: "/kəˈlɪʒən/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/collision.mp3",
      type: "Noun",
      meaning: "va chạm",
      example: "There was a collision on the road.",
      context: "Noun"
    }
  ],
  [
    {
      name: "hat",
      ipa: "/h/",
      wordIpa: "/hæt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/hat.mp3",
      type: "Noun",
      meaning: "mũ",
      example: "She wore a red hat.",
      context: "Noun"
    },
    {
      name: "home",
      ipa: "/h/",
      wordIpa: "/həʊm/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/home.mp3",
      type: "Noun",
      meaning: "nhà",
      example: "I stayed at home.",
      context: "Noun"
    },
    {
      name: "happy",
      ipa: "/h/",
      wordIpa: "/ˈhæpi/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/happy.mp3",
      type: "Adjective",
      meaning: "hạnh phúc",
      example: "She feels happy today.",
      context: "Adjective"
    },
    {
      name: "hope",
      ipa: "/h/",
      wordIpa: "/həʊp/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/hope.mp3",
      type: "Verb",
      meaning: "hy vọng",
      example: "I hope you win.",
      context: "Verb"
    },
    {
      name: "have",
      ipa: "/h/",
      wordIpa: "/hæv/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/have.mp3",
      type: "Verb",
      meaning: "có",
      example: "They have a dog.",
      context: "Verb"
    },
    {
      name: "hear",
      ipa: "/h/",
      wordIpa: "/hɪə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/hear.mp3",
      type: "Verb",
      meaning: "nghe",
      example: "Did you hear that noise?",
      context: "Verb"
    },
    {
      name: "hill",
      ipa: "/h/",
      wordIpa: "/hɪl/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/hill.mp3",
      type: "Noun",
      meaning: "đồi",
      example: "They climbed the hill.",
      context: "Noun"
    },
    {
      name: "honey",
      ipa: "/h/",
      wordIpa: "/ˈhʌni/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/honey.mp3",
      type: "Noun",
      meaning: "mật ong",
      example: "I like honey in my tea.",
      context: "Noun"
    },
    {
      name: "hello",
      ipa: "/h/",
      wordIpa: "/həˈləʊ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/hello.mp3",
      type: "Interjection",
      meaning: "xin chào",
      example: "Hello, how are you?",
      context: "Greeting"
    },
    {
      name: "hospital",
      ipa: "/h/",
      wordIpa: "/ˈhɒspɪtl/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/hospital.mp3",
      type: "Noun",
      meaning: "bệnh viện",
      example: "She works at the hospital.",
      context: "Noun"
    }
  ],
  [
    {
      name: "chat",
      ipa: "/tʃ/",
      wordIpa: "/tʃæt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/chat.mp3",
      type: "Verb",
      meaning: "trò chuyện",
      example: "Let’s chat later.",
      context: "Verb"
    },
    {
      name: "cheap",
      ipa: "/tʃ/",
      wordIpa: "/tʃiːp/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/cheap.mp3",
      type: "Adjective",
      meaning: "rẻ",
      example: "This shirt is cheap.",
      context: "Adjective"
    },
    {
      name: "chicken",
      ipa: "/tʃ/",
      wordIpa: "/ˈtʃɪkɪn/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/chicken.mp3",
      type: "Noun",
      meaning: "gà",
      example: "We had chicken for dinner.",
      context: "Noun"
    },
    {
      name: "choose",
      ipa: "/tʃ/",
      wordIpa: "/tʃuːz/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/choose.mp3",
      type: "Verb",
      meaning: "chọn",
      example: "Choose a color.",
      context: "Verb"
    },
    {
      name: "catch",
      ipa: "/tʃ/",
      wordIpa: "/kætʃ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/catch.mp3",
      type: "Verb",
      meaning: "bắt",
      example: "Catch the ball!",
      context: "Verb"
    },
    {
      name: "match",
      ipa: "/tʃ/",
      wordIpa: "/mætʃ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/match.mp3",
      type: "Noun",
      meaning: "trận đấu",
      example: "It was a great match.",
      context: "Noun"
    },
    {
      name: "watch",
      ipa: "/tʃ/",
      wordIpa: "/wɒtʃ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/watch.mp3",
      type: "Verb",
      meaning: "xem",
      example: "We watched a movie.",
      context: "Verb"
    },
    {
      name: "rich",
      ipa: "/tʃ/",
      wordIpa: "/rɪtʃ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/rich.mp3",
      type: "Adjective",
      meaning: "giàu",
      example: "He is very rich.",
      context: "Adjective"
    },
    {
      name: "teacher",
      ipa: "/tʃ/",
      wordIpa: "/ˈtiː.tʃər/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/teacher.mp3",
      type: "Noun",
      meaning: "giáo viên",
      example: "She is my teacher.",
      context: "Noun"
    },
    {
      name: "kitchen",
      ipa: "/tʃ/",
      wordIpa: "/ˈkɪtʃɪn/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/kitchen.mp3",
      type: "Noun",
      meaning: "nhà bếp",
      example: "I cleaned the kitchen.",
      context: "Noun"
    }
  ],
  [
    {
      name: "jam",
      ipa: "/dʒ/",
      wordIpa: "/dʒæm/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/jam.mp3",
      type: "Noun",
      meaning: "mứt / kẹt xe",
      example: "I love strawberry jam.",
      context: "Noun"
    },
    {
      name: "job",
      ipa: "/dʒ/",
      wordIpa: "/dʒɒb/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/job.mp3",
      type: "Noun",
      meaning: "công việc",
      example: "She has a good job.",
      context: "Noun"
    },
    {
      name: "jungle",
      ipa: "/dʒ/",
      wordIpa: "/ˈdʒʌŋɡl/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/jungle.mp3",
      type: "Noun",
      meaning: "rừng rậm",
      example: "They explored the jungle.",
      context: "Noun"
    },
    {
      name: "giant",
      ipa: "/dʒ/",
      wordIpa: "/ˈdʒaɪənt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/giant.mp3",
      type: "Noun",
      meaning: "người khổng lồ",
      example: "A giant appeared in the story.",
      context: "Noun"
    },
    {
      name: "general",
      ipa: "/dʒ/",
      wordIpa: "/ˈdʒenərəl/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/general.mp3",
      type: "Adjective",
      meaning: "chung",
      example: "This is a general idea.",
      context: "Adjective"
    },
    {
      name: "edge",
      ipa: "/dʒ/",
      wordIpa: "/edʒ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/edge.mp3",
      type: "Noun",
      meaning: "cạnh, rìa",
      example: "Don’t go near the edge.",
      context: "Noun"
    },
    {
      name: "bridge",
      ipa: "/dʒ/",
      wordIpa: "/brɪdʒ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/bridge.mp3",
      type: "Noun",
      meaning: "cây cầu",
      example: "They built a new bridge.",
      context: "Noun"
    },
    {
      name: "judge",
      ipa: "/dʒ/",
      wordIpa: "/dʒʌdʒ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/judge.mp3",
      type: "Noun",
      meaning: "thẩm phán",
      example: "The judge made a decision.",
      context: "Noun"
    },
    {
      name: "age",
      ipa: "/dʒ/",
      wordIpa: "/eɪdʒ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/age.mp3",
      type: "Noun",
      meaning: "tuổi",
      example: "What’s your age?",
      context: "Noun"
    },
    {
      name: "page",
      ipa: "/dʒ/",
      wordIpa: "/peɪdʒ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/page.mp3",
      type: "Noun",
      meaning: "trang giấy",
      example: "Read the first page.",
      context: "Noun"
    }
  ],
  [
    {
      name: "man",
      ipa: "/m/",
      wordIpa: "/mæn/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/man.mp3",
      type: "Noun",
      meaning: "người đàn ông",
      example: "He is a kind man.",
      context: "Noun"
    },
    {
      name: "mother",
      ipa: "/m/",
      wordIpa: "/ˈmʌðə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/mother.mp3",
      type: "Noun",
      meaning: "mẹ",
      example: "My mother is cooking.",
      context: "Noun"
    },
    {
      name: "milk",
      ipa: "/m/",
      wordIpa: "/mɪlk/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/milk.mp3",
      type: "Noun",
      meaning: "sữa",
      example: "I drink milk every day.",
      context: "Noun"
    },
    {
      name: "movie",
      ipa: "/m/",
      wordIpa: "/ˈmuːvi/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/movie.mp3",
      type: "Noun",
      meaning: "phim",
      example: "We watched a movie.",
      context: "Noun"
    },
    {
      name: "moment",
      ipa: "/m/",
      wordIpa: "/ˈməʊmənt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/moment.mp3",
      type: "Noun",
      meaning: "khoảnh khắc",
      example: "Wait a moment, please.",
      context: "Noun"
    },
    {
      name: "make",
      ipa: "/m/",
      wordIpa: "/meɪk/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/make.mp3",
      type: "Verb",
      meaning: "làm",
      example: "I will make dinner.",
      context: "Verb"
    },
    {
      name: "move",
      ipa: "/m/",
      wordIpa: "/muːv/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/move.mp3",
      type: "Verb",
      meaning: "di chuyển",
      example: "Please move the chair.",
      context: "Verb"
    },
    {
      name: "team",
      ipa: "/m/",
      wordIpa: "/tiːm/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/team.mp3",
      type: "Noun",
      meaning: "đội",
      example: "Our team won.",
      context: "Noun"
    },
    {
      name: "summer",
      ipa: "/m/",
      wordIpa: "/ˈsʌmər/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/summer.mp3",
      type: "Noun",
      meaning: "mùa hè",
      example: "Summer is hot.",
      context: "Noun"
    },
    {
      name: "comma",
      ipa: "/m/",
      wordIpa: "/ˈkɒmə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/comma.mp3",
      type: "Noun",
      meaning: "dấu phẩy",
      example: "Use a comma in the sentence.",
      context: "Noun"
    }
  ],
  [
    {
      name: "no",
      ipa: "/n/",
      wordIpa: "/nəʊ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/no.mp3",
      type: "Adverb",
      meaning: "không",
      example: "No, thank you.",
      context: "Adverb"
    },
    {
      name: "name",
      ipa: "/n/",
      wordIpa: "/neɪm/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/name.mp3",
      type: "Noun",
      meaning: "tên",
      example: "My name is Anna.",
      context: "Noun"
    },
    {
      name: "night",
      ipa: "/n/",
      wordIpa: "/naɪt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/night.mp3",
      type: "Noun",
      meaning: "ban đêm",
      example: "Good night!",
      context: "Noun"
    },
    {
      name: "never",
      ipa: "/n/",
      wordIpa: "/ˈnevə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/never.mp3",
      type: "Adverb",
      meaning: "không bao giờ",
      example: "I never lie.",
      context: "Adverb"
    },
    {
      name: "nice",
      ipa: "/n/",
      wordIpa: "/naɪs/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/nice.mp3",
      type: "Adjective",
      meaning: "tốt, dễ chịu",
      example: "She is a nice person.",
      context: "Adjective"
    },
    {
      name: "dinner",
      ipa: "/n/",
      wordIpa: "/ˈdɪnə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/dinner.mp3",
      type: "Noun",
      meaning: "bữa tối",
      example: "We had pizza for dinner.",
      context: "Noun"
    },
    {
      name: "new",
      ipa: "/n/",
      wordIpa: "/njuː/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/new.mp3",
      type: "Adjective",
      meaning: "mới",
      example: "I bought a new car.",
      context: "Adjective"
    },
    {
      name: "open",
      ipa: "/n/",
      wordIpa: "/ˈəʊpən/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/open.mp3",
      type: "Verb",
      meaning: "mở",
      example: "Open the window.",
      context: "Verb"
    },
    {
      name: "nine",
      ipa: "/n/",
      wordIpa: "/naɪn/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/nine.mp3",
      type: "Number",
      meaning: "số 9",
      example: "He is nine years old.",
      context: "Number"
    },
    {
      name: "number",
      ipa: "/n/",
      wordIpa: "/ˈnʌmbə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/number.mp3",
      type: "Noun",
      meaning: "số",
      example: "What’s your phone number?",
      context: "Noun"
    }
  ],
  [
    {
      name: "sing",
      ipa: "/ŋ/",
      wordIpa: "/sɪŋ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/sing.mp3",
      type: "Verb",
      meaning: "hát",
      example: "I like to sing.",
      context: "Verb"
    },
    {
      name: "song",
      ipa: "/ŋ/",
      wordIpa: "/sɒŋ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/song.mp3",
      type: "Noun",
      meaning: "bài hát",
      example: "That’s my favorite song.",
      context: "Noun"
    },
    {
      name: "king",
      ipa: "/ŋ/",
      wordIpa: "/kɪŋ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/king.mp3",
      type: "Noun",
      meaning: "vua",
      example: "The king ruled for 20 years.",
      context: "Noun"
    },
    {
      name: "ring",
      ipa: "/ŋ/",
      wordIpa: "/rɪŋ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/ring.mp3",
      type: "Noun",
      meaning: "nhẫn",
      example: "She wore a gold ring.",
      context: "Noun"
    },
    {
      name: "long",
      ipa: "/ŋ/",
      wordIpa: "/lɒŋ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/long.mp3",
      type: "Adjective",
      meaning: "dài",
      example: "This road is long.",
      context: "Adjective"
    },
    {
      name: "strong",
      ipa: "/ŋ/",
      wordIpa: "/strɒŋ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/strong.mp3",
      type: "Adjective",
      meaning: "mạnh mẽ",
      example: "He is very strong.",
      context: "Adjective"
    },
    {
      name: "young",
      ipa: "/ŋ/",
      wordIpa: "/jʌŋ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/young.mp3",
      type: "Adjective",
      meaning: "trẻ",
      example: "They are still young.",
      context: "Adjective"
    },
    {
      name: "wing",
      ipa: "/ŋ/",
      wordIpa: "/wɪŋ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/wing.mp3",
      type: "Noun",
      meaning: "cánh",
      example: "The bird broke its wing.",
      context: "Noun"
    },
    {
      name: "thing",
      ipa: "/ŋ/",
      wordIpa: "/θɪŋ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/thing.mp3",
      type: "Noun",
      meaning: "vật, thứ",
      example: "That’s a strange thing.",
      context: "Noun"
    },
    {
      name: "thank",
      ipa: "/ŋ/",
      wordIpa: "/θæŋk/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/thank.mp3",
      type: "Verb",
      meaning: "cảm ơn",
      example: "Thank you very much.",
      context: "Verb"
    }
  ],
  [
    {
      name: "love",
      ipa: "/l/",
      wordIpa: "/lʌv/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/love.mp3",
      type: "Verb",
      meaning: "yêu",
      example: "I love my family.",
      context: "Verb"
    },
    {
      name: "long",
      ipa: "/l/",
      wordIpa: "/lɒŋ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/long.mp3",
      type: "Adjective",
      meaning: "dài",
      example: "This is a long day.",
      context: "Adjective"
    },
    {
      name: "little",
      ipa: "/l/",
      wordIpa: "/ˈlɪtl/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/little.mp3",
      type: "Adjective",
      meaning: "nhỏ",
      example: "He has a little dog.",
      context: "Adjective"
    },
    {
      name: "bell",
      ipa: "/l/",
      wordIpa: "/bel/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/bell.mp3",
      type: "Noun",
      meaning: "chuông",
      example: "The bell rang loudly.",
      context: "Noun"
    },
    {
      name: "feel",
      ipa: "/l/",
      wordIpa: "/fiːl/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/feel.mp3",
      type: "Verb",
      meaning: "cảm thấy",
      example: "I feel happy.",
      context: "Verb"
    },
    {
      name: "light",
      ipa: "/l/",
      wordIpa: "/laɪt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/light.mp3",
      type: "Noun",
      meaning: "ánh sáng",
      example: "Turn off the light.",
      context: "Noun"
    },
    {
      name: "look",
      ipa: "/l/",
      wordIpa: "/lʊk/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/look.mp3",
      type: "Verb",
      meaning: "nhìn",
      example: "Look at this!",
      context: "Verb"
    },
    {
      name: "leave",
      ipa: "/l/",
      wordIpa: "/liːv/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/leave.mp3",
      type: "Verb",
      meaning: "rời đi",
      example: "We leave tomorrow.",
      context: "Verb"
    },
    {
      name: "list",
      ipa: "/l/",
      wordIpa: "/lɪst/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/list.mp3",
      type: "Noun",
      meaning: "danh sách",
      example: "Here is the list.",
      context: "Noun"
    },
    {
      name: "play",
      ipa: "/l/",
      wordIpa: "/pleɪ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/play.mp3",
      type: "Verb",
      meaning: "chơi",
      example: "Children love to play.",
      context: "Verb"
    }
  ],
  [
    {
      name: "red",
      ipa: "/r/",
      wordIpa: "/red/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/red.mp3",
      type: "Adjective",
      meaning: "màu đỏ",
      example: "She wore a red dress.",
      context: "Adjective"
    },
    {
      name: "run",
      ipa: "/r/",
      wordIpa: "/rʌn/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/run.mp3",
      type: "Verb",
      meaning: "chạy",
      example: "I run every morning.",
      context: "Verb"
    },
    {
      name: "right",
      ipa: "/r/",
      wordIpa: "/raɪt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/right.mp3",
      type: "Adjective",
      meaning: "đúng",
      example: "You are right.",
      context: "Adjective"
    },
    {
      name: "read",
      ipa: "/r/",
      wordIpa: "/riːd/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/read.mp3",
      type: "Verb",
      meaning: "đọc",
      example: "I like to read books.",
      context: "Verb"
    },
    {
      name: "carry",
      ipa: "/r/",
      wordIpa: "/ˈkæri/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/carry.mp3",
      type: "Verb",
      meaning: "mang, vác",
      example: "Please carry this bag.",
      context: "Verb"
    },
    {
      name: "write",
      ipa: "/r/",
      wordIpa: "/raɪt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/write.mp3",
      type: "Verb",
      meaning: "viết",
      example: "She can write very well.",
      context: "Verb"
    },
    {
      name: "road",
      ipa: "/r/",
      wordIpa: "/rəʊd/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/road.mp3",
      type: "Noun",
      meaning: "con đường",
      example: "The road is busy.",
      context: "Noun"
    },
    {
      name: "rain",
      ipa: "/r/",
      wordIpa: "/reɪn/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/rain.mp3",
      type: "Noun",
      meaning: "mưa",
      example: "It’s going to rain.",
      context: "Noun"
    },
    {
      name: "rich",
      ipa: "/r/",
      wordIpa: "/rɪtʃ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/rich.mp3",
      type: "Adjective",
      meaning: "giàu có",
      example: "He is very rich.",
      context: "Adjective"
    },
    {
      name: "ready",
      ipa: "/r/",
      wordIpa: "/ˈredi/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/ready.mp3",
      type: "Adjective",
      meaning: "sẵn sàng",
      example: "Are you ready?",
      context: "Adjective"
    }
  ],
  [
    {
      name: "we",
      ipa: "/w/",
      wordIpa: "/wiː/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/we.mp3",
      type: "Pronoun",
      meaning: "chúng tôi",
      example: "We are friends.",
      context: "Pronoun"
    },
    {
      name: "white",
      ipa: "/w/",
      wordIpa: "/waɪt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/white.mp3",
      type: "Adjective",
      meaning: "màu trắng",
      example: "She wore a white shirt.",
      context: "Adjective"
    },
    {
      name: "water",
      ipa: "/w/",
      wordIpa: "/ˈwɔːtə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/water.mp3",
      type: "Noun",
      meaning: "nước",
      example: "Drink more water.",
      context: "Noun"
    },
    {
      name: "why",
      ipa: "/w/",
      wordIpa: "/waɪ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/why.mp3",
      type: "Adverb",
      meaning: "tại sao",
      example: "Why are you late?",
      context: "Adverb"
    },
    {
      name: "wait",
      ipa: "/w/",
      wordIpa: "/weɪt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/wait.mp3",
      type: "Verb",
      meaning: "chờ đợi",
      example: "Wait for me!",
      context: "Verb"
    },
    {
      name: "window",
      ipa: "/w/",
      wordIpa: "/ˈwɪndəʊ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/window.mp3",
      type: "Noun",
      meaning: "cửa sổ",
      example: "Open the window.",
      context: "Noun"
    },
    {
      name: "world",
      ipa: "/w/",
      wordIpa: "/wɜːld/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/world.mp3",
      type: "Noun",
      meaning: "thế giới",
      example: "The world is big.",
      context: "Noun"
    },
    {
      name: "win",
      ipa: "/w/",
      wordIpa: "/wɪn/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/win.mp3",
      type: "Verb",
      meaning: "chiến thắng",
      example: "We can win the game.",
      context: "Verb"
    },
    {
      name: "wish",
      ipa: "/w/",
      wordIpa: "/wɪʃ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/wish.mp3",
      type: "Verb",
      meaning: "ước",
      example: "I wish I could fly.",
      context: "Verb"
    },
    {
      name: "walk",
      ipa: "/w/",
      wordIpa: "/wɔːk/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/walk.mp3",
      type: "Verb",
      meaning: "đi bộ",
      example: "Let’s walk to school.",
      context: "Verb"
    }
  ],
  [
    {
      name: "yes",
      ipa: "/j/",
      wordIpa: "/jes/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/yes.mp3",
      type: "Adverb",
      meaning: "vâng, có",
      example: "Yes, I agree.",
      context: "Adverb"
    },
    {
      name: "yellow",
      ipa: "/j/",
      wordIpa: "/ˈjeləʊ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/yellow.mp3",
      type: "Adjective",
      meaning: "màu vàng",
      example: "He wore a yellow hat.",
      context: "Adjective"
    },
    {
      name: "yesterday",
      ipa: "/j/",
      wordIpa: "/ˈjestədeɪ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/yesterday.mp3",
      type: "Adverb",
      meaning: "hôm qua",
      example: "I saw her yesterday.",
      context: "Adverb"
    },
    {
      name: "young",
      ipa: "/j/",
      wordIpa: "/jʌŋ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/young.mp3",
      type: "Adjective",
      meaning: "trẻ",
      example: "They are very young.",
      context: "Adjective"
    },
    {
      name: "universe",
      ipa: "/j/",
      wordIpa: "/ˈjuːnɪvɜːs/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/universe.mp3",
      type: "Noun",
      meaning: "vũ trụ",
      example: "The universe is vast.",
      context: "Noun"
    },
    {
      name: "use",
      ipa: "/j/",
      wordIpa: "/juːz/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/use.mp3",
      type: "Verb",
      meaning: "sử dụng",
      example: "Can I use your phone?",
      context: "Verb"
    },
    {
      name: "unit",
      ipa: "/j/",
      wordIpa: "/ˈjuːnɪt/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/unit.mp3",
      type: "Noun",
      meaning: "đơn vị",
      example: "One unit of sugar.",
      context: "Noun"
    },
    {
      name: "usual",
      ipa: "/j/",
      wordIpa: "/ˈjuːʒuəl/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/usual.mp3",
      type: "Adjective",
      meaning: "thông thường",
      example: "He came at the usual time.",
      context: "Adjective"
    },
    {
      name: "yoga",
      ipa: "/j/",
      wordIpa: "/ˈjəʊɡə/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/yoga.mp3",
      type: "Noun",
      meaning: "yoga",
      example: "I do yoga every day.",
      context: "Noun"
    },
    {
      name: "youth",
      ipa: "/j/",
      wordIpa: "/juːθ/",
      file: "/main/projects/english-courses/assets/data/common/ipa/audio/youth.mp3",
      type: "Noun",
      meaning: "tuổi trẻ",
      example: "Youth is a great time.",
      context: "Noun"
    }
  ]
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
