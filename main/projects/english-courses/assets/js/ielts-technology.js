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
      name: "internet",
      ipa: "/ˈɪn.tə.net/",
      wordIpa: "/ˈɪn.tə.net/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/internet.mp3",
      type: "Noun",
      meaning: "mạng internet",
      example: "The internet has revolutionized the way we communicate.",
      context: "Technology - Internet"
    },
    {
      name: "browse",
      ipa: "/braʊz/",
      wordIpa: "/braʊz/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/browse.mp3",
      type: "Verb",
      meaning: "duyệt (web)",
      example: "I usually browse the internet for news.",
      context: "Technology - Internet"
    },
    {
      name: "connectivity",
      ipa: "/kəˌnekˈtɪv.ə.ti/",
      wordIpa: "/kəˌnekˈtɪv.ə.ti/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/connectivity.mp3",
      type: "Noun",
      meaning: "khả năng kết nối",
      example: "Poor internet connectivity can affect video calls.",
      context: "Technology - Internet"
    },
    {
      name: "Wi-Fi",
      ipa: "/ˈwaɪ.faɪ/",
      wordIpa: "/ˈwaɪ.faɪ/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/wi-fi.mp3",
      type: "Noun",
      meaning: "mạng không dây",
      example: "This cafe offers free Wi-Fi to customers.",
      context: "Technology - Internet"
    },
    {
      name: "bandwidth",
      ipa: "/ˈbænd.wɪdθ/",
      wordIpa: "/ˈbænd.wɪdθ/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/bandwidth.mp3",
      type: "Noun",
      meaning: "băng thông",
      example: "Streaming videos requires a lot of bandwidth.",
      context: "Technology - Internet"
    },
    {
      name: "firewall",
      ipa: "/ˈfaɪə.wɔːl/",
      wordIpa: "/ˈfaɪə.wɔːl/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/firewall.mp3",
      type: "Noun",
      meaning: "tường lửa",
      example: "The firewall protects your system from external threats.",
      context: "Technology - Internet"
    },
    {
      name: "download",
      ipa: "/ˈdaʊn.ləʊd/",
      wordIpa: "/ˈdaʊn.ləʊd/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/download.mp3",
      type: "Verb",
      meaning: "tải xuống",
      example: "I downloaded the latest update for my software.",
      context: "Technology - Internet"
    },
    {
      name: "upload",
      ipa: "/ˈʌp.ləʊd/",
      wordIpa: "/ˈʌp.ləʊd/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/upload.mp3",
      type: "Verb",
      meaning: "tải lên",
      example: "She uploaded her assignment to the school portal.",
      context: "Technology - Internet"
    },
    {
      name: "cybersecurity",
      ipa: "/ˌsaɪ.bə.sɪˈkjʊə.rə.ti/",
      wordIpa: "/ˌsaɪ.bə.sɪˈkjʊə.rə.ti/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/cybersecurity.mp3",
      type: "Noun",
      meaning: "an ninh mạng",
      example: "Cybersecurity is vital to protect online data.",
      context: "Technology - Internet"
    },
    {
      name: "streaming",
      ipa: "/ˈstriː.mɪŋ/",
      wordIpa: "/ˈstriː.mɪŋ/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/streaming.mp3",
      type: "Noun",
      meaning: "truyền phát trực tuyến",
      example: "Streaming platforms have changed how we watch movies.",
      context: "Technology - Internet"
    }
  ],
  [
    {
      name: "artificial intelligence",
      ipa: "/ˌɑː.tɪˈfɪʃ.əl ɪnˈtel.ɪ.dʒəns/",
      wordIpa: "/ˌɑː.tɪˈfɪʃ.əl ɪnˈtel.ɪ.dʒəns/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/artificial_intelligence.mp3",
      type: "Noun",
      meaning: "trí tuệ nhân tạo",
      example: "Artificial intelligence is transforming many industries.",
      context: "Technology - AI"
    },
    {
      name: "algorithm",
      ipa: "/ˈæl.ɡə.rɪ.ðəm/",
      wordIpa: "/ˈæl.ɡə.rɪ.ðəm/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/algorithm.mp3",
      type: "Noun",
      meaning: "thuật toán",
      example: "Search engines use complex algorithms to rank websites.",
      context: "Technology - AI"
    },
    {
      name: "machine learning",
      ipa: "/məˈʃiːn ˈlɜː.nɪŋ/",
      wordIpa: "/məˈʃiːn ˈlɜː.nɪŋ/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/machine_learning.mp3",
      type: "Noun",
      meaning: "học máy",
      example: "Machine learning is a subset of AI.",
      context: "Technology - AI"
    },
    {
      name: "automation",
      ipa: "/ˌɔː.təˈmeɪ.ʃən/",
      wordIpa: "/ˌɔː.təˈmeɪ.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/automation.mp3",
      type: "Noun",
      meaning: "tự động hóa",
      example: "Automation reduces the need for human intervention.",
      context: "Technology - AI"
    },
    {
      name: "neural network",
      ipa: "/ˈnjʊə.rəl ˈnet.wɜːk/",
      wordIpa: "/ˈnjʊə.rəl ˈnet.wɜːk/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/neural_network.mp3",
      type: "Noun",
      meaning: "mạng nơ-ron",
      example: "Neural networks mimic how the human brain works.",
      context: "Technology - AI"
    },
    {
      name: "deep learning",
      ipa: "/diːp ˈlɜː.nɪŋ/",
      wordIpa: "/diːp ˈlɜː.nɪŋ/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/deep_learning.mp3",
      type: "Noun",
      meaning: "học sâu",
      example: "Deep learning improves voice recognition systems.",
      context: "Technology - AI"
    },
    {
      name: "robotics",
      ipa: "/rəʊˈbɒt.ɪks/",
      wordIpa: "/rəʊˈbɒt.ɪks/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/robotics.mp3",
      type: "Noun",
      meaning: "kỹ thuật robot",
      example: "Robotics is closely related to artificial intelligence.",
      context: "Technology - AI"
    },
    {
      name: "predictive",
      ipa: "/prɪˈdɪk.tɪv/",
      wordIpa: "/prɪˈdɪk.tɪv/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/predictive.mp3",
      type: "Adjective",
      meaning: "dự đoán",
      example: "Predictive algorithms can forecast customer behavior.",
      context: "Technology - AI"
    },
    {
      name: "natural language processing",
      ipa: "/ˈnætʃ.rəl ˈlæŋ.ɡwɪdʒ ˈprəʊ.ses.ɪŋ/",
      wordIpa: "/ˈnætʃ.rəl ˈlæŋ.ɡwɪdʒ ˈprəʊ.ses.ɪŋ/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/natural_language_processing.mp3",
      type: "Noun",
      meaning: "xử lý ngôn ngữ tự nhiên",
      example: "NLP enables machines to understand human language.",
      context: "Technology - AI"
    },
    {
      name: "data mining",
      ipa: "/ˈdeɪ.tə ˈmaɪ.nɪŋ/",
      wordIpa: "/ˈdeɪ.tə ˈmaɪ.nɪŋ/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/data_mining.mp3",
      type: "Noun",
      meaning: "khai phá dữ liệu",
      example: "Data mining helps uncover patterns in large datasets.",
      context: "Technology - AI"
    }
  ],
  [
    {
      name: "software",
      ipa: "/ˈsɒft.weər/",
      wordIpa: "/ˈsɒft.weər/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/software.mp3",
      type: "Noun",
      meaning: "phần mềm",
      example: "This software is used for editing photos.",
      context: "Technology - Software"
    },
    {
      name: "application",
      ipa: "/ˌæp.lɪˈkeɪ.ʃən/",
      wordIpa: "/ˌæp.lɪˈkeɪ.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/application.mp3",
      type: "Noun",
      meaning: "ứng dụng",
      example: "I downloaded a fitness application on my phone.",
      context: "Technology - Software"
    },
    {
      name: "program",
      ipa: "/ˈprəʊ.ɡræm/",
      wordIpa: "/ˈprəʊ.ɡræm/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/program.mp3",
      type: "Noun",
      meaning: "chương trình",
      example: "This program helps with graphic design.",
      context: "Technology - Software"
    },
    {
      name: "bug",
      ipa: "/bʌɡ/",
      wordIpa: "/bʌɡ/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/bug.mp3",
      type: "Noun",
      meaning: "lỗi phần mềm",
      example: "They released an update to fix the bug.",
      context: "Technology - Software"
    },
    {
      name: "update",
      ipa: "/ˈʌp.deɪt/",
      wordIpa: "/ˈʌp.deɪt/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/update.mp3",
      type: "Noun",
      meaning: "bản cập nhật",
      example: "A new update is available for download.",
      context: "Technology - Software"
    },
    {
      name: "patch",
      ipa: "/pætʃ/",
      wordIpa: "/pætʃ/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/patch.mp3",
      type: "Noun",
      meaning: "bản vá",
      example: "The patch fixed several security issues.",
      context: "Technology - Software"
    },
    {
      name: "crash",
      ipa: "/kræʃ/",
      wordIpa: "/kræʃ/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/crash.mp3",
      type: "Verb",
      meaning: "(máy/tập tin) bị sập",
      example: "The software crashed unexpectedly.",
      context: "Technology - Software"
    },
    {
      name: "install",
      ipa: "/ɪnˈstɔːl/",
      wordIpa: "/ɪnˈstɔːl/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/install.mp3",
      type: "Verb",
      meaning: "cài đặt",
      example: "You need to install the software before using it.",
      context: "Technology - Software"
    },
    {
      name: "license",
      ipa: "/ˈlaɪ.səns/",
      wordIpa: "/ˈlaɪ.səns/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/license.mp3",
      type: "Noun",
      meaning: "giấy phép phần mềm",
      example: "This software requires a valid license key.",
      context: "Technology - Software"
    },
    {
      name: "open-source",
      ipa: "/ˌəʊ.pənˈsɔːs/",
      wordIpa: "/ˌəʊ.pənˈsɔːs/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/open-source.mp3",
      type: "Adjective",
      meaning: "mã nguồn mở",
      example: "Linux is a popular open-source operating system.",
      context: "Technology - Software"
    }
  ],
  [
    {
      name: "hardware",
      ipa: "/ˈhɑːd.weər/",
      wordIpa: "/ˈhɑːd.weər/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/hardware.mp3",
      type: "Noun",
      meaning: "phần cứng",
      example: "You need good hardware to run this game.",
      context: "Technology - Hardware"
    },
    {
      name: "device",
      ipa: "/dɪˈvaɪs/",
      wordIpa: "/dɪˈvaɪs/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/device.mp3",
      type: "Noun",
      meaning: "thiết bị",
      example: "Mobile devices are becoming more powerful.",
      context: "Technology - Hardware"
    },
    {
      name: "processor",
      ipa: "/ˈprəʊ.ses.ər/",
      wordIpa: "/ˈprəʊ.ses.ər/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/processor.mp3",
      type: "Noun",
      meaning: "bộ xử lý",
      example: "The new processor boosts performance significantly.",
      context: "Technology - Hardware"
    },
    {
      name: "memory",
      ipa: "/ˈmem.ər.i/",
      wordIpa: "/ˈmem.ər.i/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/memory.mp3",
      type: "Noun",
      meaning: "bộ nhớ",
      example: "This laptop has 16GB of memory.",
      context: "Technology - Hardware"
    },
    {
      name: "storage",
      ipa: "/ˈstɔː.rɪdʒ/",
      wordIpa: "/ˈstɔː.rɪdʒ/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/storage.mp3",
      type: "Noun",
      meaning: "bộ lưu trữ",
      example: "You can expand the storage with an SD card.",
      context: "Technology - Hardware"
    },
    {
      name: "monitor",
      ipa: "/ˈmɒn.ɪ.tər/",
      wordIpa: "/ˈmɒn.ɪ.tər/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/monitor.mp3",
      type: "Noun",
      meaning: "màn hình",
      example: "I bought a new 4K monitor for editing.",
      context: "Technology - Hardware"
    },
    {
      name: "keyboard",
      ipa: "/ˈkiː.bɔːd/",
      wordIpa: "/ˈkiː.bɔːd/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/keyboard.mp3",
      type: "Noun",
      meaning: "bàn phím",
      example: "This keyboard is backlit and wireless.",
      context: "Technology - Hardware"
    },
    {
      name: "mouse",
      ipa: "/maʊs/",
      wordIpa: "/maʊs/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/mouse.mp3",
      type: "Noun",
      meaning: "chuột máy tính",
      example: "The wireless mouse is easy to use.",
      context: "Technology - Hardware"
    },
    {
      name: "graphic card",
      ipa: "/ˈɡræf.ɪk kɑːd/",
      wordIpa: "/ˈɡræf.ɪk kɑːd/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/graphic_card.mp3",
      type: "Noun",
      meaning: "card đồ họa",
      example: "Gamers usually invest in a good graphic card.",
      context: "Technology - Hardware"
    },
    {
      name: "motherboard",
      ipa: "/ˈmʌð.ə.bɔːd/",
      wordIpa: "/ˈmʌð.ə.bɔːd/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/motherboard.mp3",
      type: "Noun",
      meaning: "bo mạch chủ",
      example: "The motherboard connects all the computer's components.",
      context: "Technology - Hardware"
    }
  ]
  ,
  [
    {
      name: "data",
      ipa: "/ˈdeɪ.tə/",
      wordIpa: "/ˈdeɪ.tə/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/data.mp3",
      type: "Noun",
      meaning: "dữ liệu",
      example: "Companies collect data to analyze customer behavior.",
      context: "Technology - Data"
    },
    {
      name: "database",
      ipa: "/ˈdeɪ.tə.beɪs/",
      wordIpa: "/ˈdeɪ.tə.beɪs/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/database.mp3",
      type: "Noun",
      meaning: "cơ sở dữ liệu",
      example: "The database stores customer information securely.",
      context: "Technology - Data"
    },
    {
      name: "data analysis",
      ipa: "/ˈdeɪ.tə əˈnæl.ə.sɪs/",
      wordIpa: "/ˈdeɪ.tə əˈnæl.ə.sɪs/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/data_analysis.mp3",
      type: "Noun",
      meaning: "phân tích dữ liệu",
      example: "Data analysis helps businesses make informed decisions.",
      context: "Technology - Data"
    },
    {
      name: "big data",
      ipa: "/bɪɡ ˈdeɪ.tə/",
      wordIpa: "/bɪɡ ˈdeɪ.tə/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/big_data.mp3",
      type: "Noun",
      meaning: "dữ liệu lớn",
      example: "Big data is crucial in modern research.",
      context: "Technology - Data"
    },
    {
      name: "cloud storage",
      ipa: "/klaʊd ˈstɔː.rɪdʒ/",
      wordIpa: "/klaʊd ˈstɔː.rɪdʒ/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/cloud_storage.mp3",
      type: "Noun",
      meaning: "lưu trữ đám mây",
      example: "Many users prefer cloud storage over physical drives.",
      context: "Technology - Data"
    },
    {
      name: "data breach",
      ipa: "/ˈdeɪ.tə briːtʃ/",
      wordIpa: "/ˈdeɪ.tə briːtʃ/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/data_breach.mp3",
      type: "Noun",
      meaning: "rò rỉ dữ liệu",
      example: "The company suffered a major data breach.",
      context: "Technology - Data"
    },
    {
      name: "data privacy",
      ipa: "/ˈdeɪ.tə ˈprɪ.və.si/",
      wordIpa: "/ˈdeɪ.tə ˈprɪ.və.si/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/data_privacy.mp3",
      type: "Noun",
      meaning: "bảo mật dữ liệu",
      example: "Data privacy is a serious concern for users.",
      context: "Technology - Data"
    },
    {
      name: "data transfer",
      ipa: "/ˈdeɪ.tə ˈtræns.fɜːr/",
      wordIpa: "/ˈdeɪ.tə ˈtræns.fɜːr/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/data_transfer.mp3",
      type: "Noun",
      meaning: "truyền dữ liệu",
      example: "Data transfer between devices must be secure.",
      context: "Technology - Data"
    },
    {
      name: "data backup",
      ipa: "/ˈdeɪ.tə ˈbæk.ʌp/",
      wordIpa: "/ˈdeɪ.tə ˈbæk.ʌp/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/data_backup.mp3",
      type: "Noun",
      meaning: "sao lưu dữ liệu",
      example: "Regular data backup prevents loss of information.",
      context: "Technology - Data"
    },
    {
      name: "structured data",
      ipa: "/ˈstrʌk.tʃəd ˈdeɪ.tə/",
      wordIpa: "/ˈstrʌk.tʃəd ˈdeɪ.tə/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/structured_data.mp3",
      type: "Noun",
      meaning: "dữ liệu có cấu trúc",
      example: "Structured data is easy to organize and analyze.",
      context: "Technology - Data"
    }
  ],
  [
    {
      name: "communication",
      ipa: "/kəˌmjuː.nɪˈkeɪ.ʃən/",
      wordIpa: "/kəˌmjuː.nɪˈkeɪ.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/communication.mp3",
      type: "Noun",
      meaning: "giao tiếp",
      example: "Technology has transformed communication.",
      context: "Technology - Communication"
    },
    {
      name: "email",
      ipa: "/ˈiː.meɪl/",
      wordIpa: "/ˈiː.meɪl/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/email.mp3",
      type: "Noun",
      meaning: "thư điện tử",
      example: "I send emails to my team every morning.",
      context: "Technology - Communication"
    },
    {
      name: "messaging",
      ipa: "/ˈmes.ɪ.dʒɪŋ/",
      wordIpa: "/ˈmes.ɪ.dʒɪŋ/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/messaging.mp3",
      type: "Noun",
      meaning: "nhắn tin",
      example: "Messaging apps are widely used for daily communication.",
      context: "Technology - Communication"
    },
    {
      name: "video call",
      ipa: "/ˈvɪd.i.əʊ kɔːl/",
      wordIpa: "/ˈvɪd.i.əʊ kɔːl/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/video_call.mp3",
      type: "Noun",
      meaning: "cuộc gọi video",
      example: "We held a video call with clients abroad.",
      context: "Technology - Communication"
    },
    {
      name: "telecommunication",
      ipa: "/ˌtel.ɪ.kəˌmjuː.nɪˈkeɪ.ʃən/",
      wordIpa: "/ˌtel.ɪ.kəˌmjuː.nɪˈkeɪ.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/telecommunication.mp3",
      type: "Noun",
      meaning: "viễn thông",
      example: "Telecommunication companies provide internet services.",
      context: "Technology - Communication"
    },
    {
      name: "instant messaging",
      ipa: "/ˈɪn.stənt ˈmes.ɪ.dʒɪŋ/",
      wordIpa: "/ˈɪn.stənt ˈmes.ɪ.dʒɪŋ/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/instant_messaging.mp3",
      type: "Noun",
      meaning: "nhắn tin nhanh",
      example: "Instant messaging is faster than email.",
      context: "Technology - Communication"
    },
    {
      name: "social media",
      ipa: "/ˌsəʊ.ʃəl ˈmiː.di.ə/",
      wordIpa: "/ˌsəʊ.ʃəl ˈmiː.di.ə/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/social_media.mp3",
      type: "Noun",
      meaning: "mạng xã hội",
      example: "Social media allows users to share content globally.",
      context: "Technology - Communication"
    },
    {
      name: "chatbot",
      ipa: "/ˈtʃæt.bɒt/",
      wordIpa: "/ˈtʃæt.bɒt/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/chatbot.mp3",
      type: "Noun",
      meaning: "trợ lý trò chuyện ảo",
      example: "Many websites now use chatbots for customer service.",
      context: "Technology - Communication"
    },
    {
      name: "forum",
      ipa: "/ˈfɔː.rəm/",
      wordIpa: "/ˈfɔː.rəm/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/forum.mp3",
      type: "Noun",
      meaning: "diễn đàn",
      example: "I asked a question on the tech forum.",
      context: "Technology - Communication"
    },
    {
      name: "newsletter",
      ipa: "/ˈnjuːzˌlet.ər/",
      wordIpa: "/ˈnjuːzˌlet.ər/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/newsletter.mp3",
      type: "Noun",
      meaning: "bản tin",
      example: "The company sends out a weekly newsletter.",
      context: "Technology - Communication"
    }
  ]
  ,
  [
    {
      name: "cybersecurity",
      ipa: "/ˌsaɪ.bə.sɪˈkjʊə.rə.ti/",
      wordIpa: "/ˌsaɪ.bə.sɪˈkjʊə.rə.ti/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/cybersecurity.mp3",
      type: "Noun",
      meaning: "an ninh mạng",
      example: "Cybersecurity protects systems from cyber attacks.",
      context: "Technology - Cybersecurity"
    },
    {
      name: "malware",
      ipa: "/ˈmæl.weər/",
      wordIpa: "/ˈmæl.weər/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/malware.mp3",
      type: "Noun",
      meaning: "phần mềm độc hại",
      example: "Malware can damage or steal your data.",
      context: "Technology - Cybersecurity"
    },
    {
      name: "virus",
      ipa: "/ˈvaɪə.rəs/",
      wordIpa: "/ˈvaɪə.rəs/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/virus.mp3",
      type: "Noun",
      meaning: "vi-rút máy tính",
      example: "The virus infected all computers in the office.",
      context: "Technology - Cybersecurity"
    },
    {
      name: "phishing",
      ipa: "/ˈfɪʃ.ɪŋ/",
      wordIpa: "/ˈfɪʃ.ɪŋ/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/phishing.mp3",
      type: "Noun",
      meaning: "lừa đảo trực tuyến",
      example: "Phishing attacks try to steal your passwords.",
      context: "Technology - Cybersecurity"
    },
    {
      name: "hacker",
      ipa: "/ˈhæk.ər/",
      wordIpa: "/ˈhæk.ər/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/hacker.mp3",
      type: "Noun",
      meaning: "tin tặc",
      example: "Hackers attempted to breach the system.",
      context: "Technology - Cybersecurity"
    },
    {
      name: "encryption",
      ipa: "/ɪnˈkrɪp.ʃən/",
      wordIpa: "/ɪnˈkrɪp.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/encryption.mp3",
      type: "Noun",
      meaning: "mã hóa",
      example: "Encryption protects data during transmission.",
      context: "Technology - Cybersecurity"
    },
    {
      name: "firewall",
      ipa: "/ˈfaɪə.wɔːl/",
      wordIpa: "/ˈfaɪə.wɔːl/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/firewall.mp3",
      type: "Noun",
      meaning: "tường lửa",
      example: "A firewall prevents unauthorized access.",
      context: "Technology - Cybersecurity"
    },
    {
      name: "password",
      ipa: "/ˈpɑːs.wɜːd/",
      wordIpa: "/ˈpɑːs.wɜːd/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/password.mp3",
      type: "Noun",
      meaning: "mật khẩu",
      example: "Use strong passwords to protect your accounts.",
      context: "Technology - Cybersecurity"
    },
    {
      name: "authentication",
      ipa: "/ɔːˌθen.tɪˈkeɪ.ʃən/",
      wordIpa: "/ɔːˌθen.tɪˈkeɪ.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/authentication.mp3",
      type: "Noun",
      meaning: "xác thực",
      example: "Two-factor authentication adds extra security.",
      context: "Technology - Cybersecurity"
    },
    {
      name: "spyware",
      ipa: "/ˈspaɪ.weər/",
      wordIpa: "/ˈspaɪ.weər/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/spyware.mp3",
      type: "Noun",
      meaning: "phần mềm gián điệp",
      example: "Spyware secretly gathers information from your device.",
      context: "Technology - Cybersecurity"
    }
  ],
  [
    {
      name: "innovation",
      ipa: "/ˌɪn.əˈveɪ.ʃən/",
      wordIpa: "/ˌɪn.əˈveɪ.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/innovation.mp3",
      type: "Noun",
      meaning: "sự đổi mới",
      example: "Innovation drives progress in the tech industry.",
      context: "Technology - Innovation"
    },
    {
      name: "invention",
      ipa: "/ɪnˈven.ʃən/",
      wordIpa: "/ɪnˈven.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/invention.mp3",
      type: "Noun",
      meaning: "phát minh",
      example: "The internet is one of the greatest inventions.",
      context: "Technology - Innovation"
    },
    {
      name: "startup",
      ipa: "/ˈstɑːt.ʌp/",
      wordIpa: "/ˈstɑːt.ʌp/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/startup.mp3",
      type: "Noun",
      meaning: "công ty khởi nghiệp",
      example: "Many startups focus on innovative solutions.",
      context: "Technology - Innovation"
    },
    {
      name: "entrepreneur",
      ipa: "/ˌɒn.trə.prəˈnɜːr/",
      wordIpa: "/ˌɒn.trə.prəˈnɜːr/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/entrepreneur.mp3",
      type: "Noun",
      meaning: "doanh nhân",
      example: "Entrepreneurs play a key role in tech innovation.",
      context: "Technology - Innovation"
    },
    {
      name: "prototype",
      ipa: "/ˈprəʊ.tə.taɪp/",
      wordIpa: "/ˈprəʊ.tə.taɪp/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/prototype.mp3",
      type: "Noun",
      meaning: "nguyên mẫu",
      example: "They created a prototype of the device.",
      context: "Technology - Innovation"
    },
    {
      name: "disruption",
      ipa: "/dɪsˈrʌp.ʃən/",
      wordIpa: "/dɪsˈrʌp.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/disruption.mp3",
      type: "Noun",
      meaning: "sự gián đoạn/cách mạng hóa",
      example: "Tech disruption changes how we live and work.",
      context: "Technology - Innovation"
    },
    {
      name: "trend",
      ipa: "/trend/",
      wordIpa: "/trend/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/trend.mp3",
      type: "Noun",
      meaning: "xu hướng",
      example: "AI is a major trend in the tech world.",
      context: "Technology - Innovation"
    },
    {
      name: "cutting-edge",
      ipa: "/ˌkʌt.ɪŋˈedʒ/",
      wordIpa: "/ˌkʌt.ɪŋˈedʒ/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/cutting_edge.mp3",
      type: "Adjective",
      meaning: "tiên tiến, hiện đại nhất",
      example: "The lab is working on cutting-edge technologies.",
      context: "Technology - Innovation"
    },
    {
      name: "breakthrough",
      ipa: "/ˈbreɪk.θruː/",
      wordIpa: "/ˈbreɪk.θruː/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/breakthrough.mp3",
      type: "Noun",
      meaning: "bước đột phá",
      example: "The discovery was a breakthrough in medicine.",
      context: "Technology - Innovation"
    },
    {
      name: "patent",
      ipa: "/ˈpeɪ.tənt/",
      wordIpa: "/ˈpeɪ.tənt/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/patent.mp3",
      type: "Noun",
      meaning: "bằng sáng chế",
      example: "The company filed a patent for the invention.",
      context: "Technology - Innovation"
    }
  ],
  [
    {
      name: "data",
      ipa: "/ˈdeɪ.tə/",
      wordIpa: "/ˈdeɪ.tə/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/data.mp3",
      type: "Noun",
      meaning: "dữ liệu",
      example: "Companies collect data to analyze customer behavior.",
      context: "Technology - Data & Storage"
    },
    {
      name: "database",
      ipa: "/ˈdeɪ.tə.beɪs/",
      wordIpa: "/ˈdeɪ.tə.beɪs/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/database.mp3",
      type: "Noun",
      meaning: "cơ sở dữ liệu",
      example: "The information is stored in a secure database.",
      context: "Technology - Data & Storage"
    },
    {
      name: "cloud storage",
      ipa: "/klaʊd ˈstɔː.rɪdʒ/",
      wordIpa: "/klaʊd ˈstɔː.rɪdʒ/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/cloud_storage.mp3",
      type: "Noun",
      meaning: "lưu trữ đám mây",
      example: "Cloud storage allows access from anywhere.",
      context: "Technology - Data & Storage"
    },
    {
      name: "backup",
      ipa: "/ˈbæk.ʌp/",
      wordIpa: "/ˈbæk.ʌp/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/backup.mp3",
      type: "Noun",
      meaning: "sao lưu",
      example: "Always create a backup before updating software.",
      context: "Technology - Data & Storage"
    },
    {
      name: "bandwidth",
      ipa: "/ˈbænd.wɪdθ/",
      wordIpa: "/ˈbænd.wɪdθ/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/bandwidth.mp3",
      type: "Noun",
      meaning: "băng thông",
      example: "High bandwidth is essential for streaming.",
      context: "Technology - Data & Storage"
    },
    {
      name: "server",
      ipa: "/ˈsɜː.vər/",
      wordIpa: "/ˈsɜː.vər/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/server.mp3",
      type: "Noun",
      meaning: "máy chủ",
      example: "The website runs on a dedicated server.",
      context: "Technology - Data & Storage"
    },
    {
      name: "upload",
      ipa: "/ˈʌp.ləʊd/",
      wordIpa: "/ˈʌp.ləʊd/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/upload.mp3",
      type: "Verb",
      meaning: "tải lên",
      example: "Users can upload files to the platform.",
      context: "Technology - Data & Storage"
    },
    {
      name: "download",
      ipa: "/ˈdaʊn.ləʊd/",
      wordIpa: "/ˈdaʊn.ləʊd/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/download.mp3",
      type: "Verb",
      meaning: "tải xuống",
      example: "You can download the report in PDF format.",
      context: "Technology - Data & Storage"
    },
    {
      name: "sync",
      ipa: "/sɪŋk/",
      wordIpa: "/sɪŋk/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/sync.mp3",
      type: "Verb",
      meaning: "đồng bộ",
      example: "The app syncs your data across devices.",
      context: "Technology - Data & Storage"
    },
    {
      name: "storage",
      ipa: "/ˈstɔː.rɪdʒ/",
      wordIpa: "/ˈstɔː.rɪdʒ/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/storage.mp3",
      type: "Noun",
      meaning: "lưu trữ",
      example: "Phones today have large storage capacities.",
      context: "Technology - Data & Storage"
    }
  ],
  [
    {
      name: "network",
      ipa: "/ˈnet.wɜːk/",
      wordIpa: "/ˈnet.wɜːk/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/network.mp3",
      type: "Noun",
      meaning: "mạng lưới",
      example: "The network connects multiple devices.",
      context: "Technology - Networking"
    },
    {
      name: "router",
      ipa: "/ˈruː.tər/",
      wordIpa: "/ˈruː.tər/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/router.mp3",
      type: "Noun",
      meaning: "bộ định tuyến",
      example: "The router provides internet access at home.",
      context: "Technology - Networking"
    },
    {
      name: "ethernet",
      ipa: "/ˈiː.θə.net/",
      wordIpa: "/ˈiː.θə.net/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/ethernet.mp3",
      type: "Noun",
      meaning: "mạng dây (ethernet)",
      example: "Ethernet offers faster connection than Wi-Fi.",
      context: "Technology - Networking"
    },
    {
      name: "Wi-Fi",
      ipa: "/ˈwaɪ.faɪ/",
      wordIpa: "/ˈwaɪ.faɪ/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/wifi.mp3",
      type: "Noun",
      meaning: "mạng không dây",
      example: "The cafe offers free Wi-Fi.",
      context: "Technology - Networking"
    },
    {
      name: "modem",
      ipa: "/ˈməʊ.dəm/",
      wordIpa: "/ˈməʊ.dəm/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/modem.mp3",
      type: "Noun",
      meaning: "bộ điều giải",
      example: "The modem connects to the internet line.",
      context: "Technology - Networking"
    },
    {
      name: "signal",
      ipa: "/ˈsɪɡ.nəl/",
      wordIpa: "/ˈsɪɡ.nəl/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/signal.mp3",
      type: "Noun",
      meaning: "tín hiệu",
      example: "The signal is weak in remote areas.",
      context: "Technology - Networking"
    },
    {
      name: "IP address",
      ipa: "/ˌaɪˈpiː əˌdres/",
      wordIpa: "/ˌaɪˈpiː əˌdres/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/ip_address.mp3",
      type: "Noun",
      meaning: "địa chỉ IP",
      example: "Each device is assigned an IP address.",
      context: "Technology - Networking"
    },
    {
      name: "connection",
      ipa: "/kəˈnek.ʃən/",
      wordIpa: "/kəˈnek.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/connection.mp3",
      type: "Noun",
      meaning: "kết nối",
      example: "The internet connection is very fast today.",
      context: "Technology - Networking"
    },
    {
      name: "offline",
      ipa: "/ˌɒfˈlaɪn/",
      wordIpa: "/ˌɒfˈlaɪn/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/offline.mp3",
      type: "Adjective",
      meaning: "ngoại tuyến",
      example: "You can save files for offline use.",
      context: "Technology - Networking"
    },
    {
      name: "online",
      ipa: "/ˈɒn.laɪn/",
      wordIpa: "/ˈɒn.laɪn/",
      file: "/main/projects/english-courses/assets/data/ielts/technology/audio/online.mp3",
      type: "Adjective",
      meaning: "trực tuyến",
      example: "Many people prefer online shopping.",
      context: "Technology - Networking"
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