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
      name: "police",
      ipa: "/pəˈliːs/",
      wordIpa: "/pəˈliːs/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/police.mp3",
      type: "Noun",
      meaning: "cảnh sát",
      example: "The police arrived quickly at the scene.",
      context: "Noun"
    },
    {
      name: "officer",
      ipa: "/ˈɒfɪsər/",
      wordIpa: "/ˈɒfɪsər/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/officer.mp3",
      type: "Noun",
      meaning: "sĩ quan",
      example: "The officer questioned the suspect.",
      context: "Noun"
    },
    {
      name: "patrol",
      ipa: "/pəˈtrəʊl/",
      wordIpa: "/pəˈtrəʊl/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/patrol.mp3",
      type: "Noun",
      meaning: "tuần tra",
      example: "The police patrol the streets every night.",
      context: "Noun"
    },
    {
      name: "detective",
      ipa: "/dɪˈtektɪv/",
      wordIpa: "/dɪˈtektɪv/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/detective.mp3",
      type: "Noun",
      meaning: "thám tử",
      example: "The detective solved the crime.",
      context: "Noun"
    },
    {
      name: "investigate",
      ipa: "/ɪnˈvestɪɡeɪt/",
      wordIpa: "/ɪnˈvestɪɡeɪt/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/investigate.mp3",
      type: "Verb",
      meaning: "điều tra",
      example: "Police will investigate the robbery.",
      context: "Verb"
    },
    {
      name: "raid",
      ipa: "/reɪd/",
      wordIpa: "/reɪd/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/raid.mp3",
      type: "Noun",
      meaning: "cuộc đột kích",
      example: "A police raid caught the criminals.",
      context: "Noun"
    },
    {
      name: "siren",
      ipa: "/ˈsaɪrən/",
      wordIpa: "/ˈsaɪrən/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/siren.mp3",
      type: "Noun",
      meaning: "còi báo động",
      example: "The police siren was very loud.",
      context: "Noun"
    },
    {
      name: "handcuffs",
      ipa: "/ˈhændkʌfs/",
      wordIpa: "/ˈhændkʌfs/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/handcuffs.mp3",
      type: "Noun",
      meaning: "còng tay",
      example: "The suspect was put in handcuffs.",
      context: "Noun"
    },
    {
      name: "warrant",
      ipa: "/ˈwɒrənt/",
      wordIpa: "/ˈwɒrənt/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/warrant.mp3",
      type: "Noun",
      meaning: "lệnh bắt",
      example: "Police got a search warrant.",
      context: "Noun"
    },
    {
      name: "interrogate",
      ipa: "/ɪnˈterəɡeɪt/",
      wordIpa: "/ɪnˈterəɡeɪt/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/interrogate.mp3",
      type: "Verb",
      meaning: "thẩm vấn",
      example: "The detective will interrogate the suspect.",
      context: "Verb"
    }
  ],
  [
    {
      name: "court",
      ipa: "/kɔːt/",
      wordIpa: "/kɔːt/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/court.mp3",
      type: "Noun",
      meaning: "tòa án",
      example: "The court will decide the case.",
      context: "Noun"
    },
    {
      name: "judge",
      ipa: "/dʒʌdʒ/",
      wordIpa: "/dʒʌdʒ/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/judge.mp3",
      type: "Noun",
      meaning: "thẩm phán",
      example: "The judge gave the final decision.",
      context: "Noun"
    },
    {
      name: "jury",
      ipa: "/ˈdʒʊəri/",
      wordIpa: "/ˈdʒʊəri/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/jury.mp3",
      type: "Noun",
      meaning: "bồi thẩm đoàn",
      example: "The jury found him guilty.",
      context: "Noun"
    },
    {
      name: "trial",
      ipa: "/ˈtraɪəl/",
      wordIpa: "/ˈtraɪəl/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/trial.mp3",
      type: "Noun",
      meaning: "phiên tòa",
      example: "The trial lasted three weeks.",
      context: "Noun"
    },
    {
      name: "verdict",
      ipa: "/ˈvɜːdɪkt/",
      wordIpa: "/ˈvɜːdɪkt/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/verdict.mp3",
      type: "Noun",
      meaning: "phán quyết",
      example: "The verdict was not guilty.",
      context: "Noun"
    },
    {
      name: "lawsuit",
      ipa: "/ˈlɔːsuːt/",
      wordIpa: "/ˈlɔːsuːt/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/lawsuit.mp3",
      type: "Noun",
      meaning: "vụ kiện",
      example: "They filed a lawsuit.",
      context: "Noun"
    },
    {
      name: "appeal",
      ipa: "/əˈpiːl/",
      wordIpa: "/əˈpiːl/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/appeal.mp3",
      type: "Noun",
      meaning: "kháng cáo",
      example: "He made an appeal.",
      context: "Noun"
    },
    {
      name: "sentence",
      ipa: "/ˈsentəns/",
      wordIpa: "/ˈsentəns/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/sentence.mp3",
      type: "Noun",
      meaning: "bản án",
      example: "He got a long sentence.",
      context: "Noun"
    },
    {
      name: "testify",
      ipa: "/ˈtestɪfaɪ/",
      wordIpa: "/ˈtestɪfaɪ/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/testify.mp3",
      type: "Verb",
      meaning: "làm chứng",
      example: "She will testify in court.",
      context: "Verb"
    },
    {
      name: "bail",
      ipa: "/beɪl/",
      wordIpa: "/beɪl/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/bail.mp3",
      type: "Noun",
      meaning: "tiền bảo lãnh",
      example: "He was released on bail.",
      context: "Noun"
    }
  ],
  [
    {
      name: "criminal",
      ipa: "/ˈkrɪmɪnəl/",
      wordIpa: "/ˈkrɪmɪnəl/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/criminal.mp3",
      type: "Noun",
      meaning: "tội phạm",
      example: "The criminal was caught by the police.",
      context: "Noun"
    },
    {
      name: "suspect",
      ipa: "/ˈsʌspekt/",
      wordIpa: "/ˈsʌspekt/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/suspect.mp3",
      type: "Noun",
      meaning: "kẻ tình nghi",
      example: "The suspect denied the charges.",
      context: "Noun"
    },
    {
      name: "accomplice",
      ipa: "/əˈkʌmplɪs/",
      wordIpa: "/əˈkʌmplɪs/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/accomplice.mp3",
      type: "Noun",
      meaning: "đồng phạm",
      example: "He acted as an accomplice.",
      context: "Noun"
    },
    {
      name: "victim",
      ipa: "/ˈvɪktɪm/",
      wordIpa: "/ˈvɪktɪm/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/victim.mp3",
      type: "Noun",
      meaning: "nạn nhân",
      example: "The victim reported the crime.",
      context: "Noun"
    },
    {
      name: "theft",
      ipa: "/θeft/",
      wordIpa: "/θeft/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/theft.mp3",
      type: "Noun",
      meaning: "sự trộm cắp",
      example: "He was arrested for theft.",
      context: "Noun"
    },
    {
      name: "burglary",
      ipa: "/ˈbɜːɡləri/",
      wordIpa: "/ˈbɜːɡləri/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/burglary.mp3",
      type: "Noun",
      meaning: "vụ trộm đêm",
      example: "There was a burglary last night.",
      context: "Noun"
    },
    {
      name: "robbery",
      ipa: "/ˈrɒbəri/",
      wordIpa: "/ˈrɒbəri/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/robbery.mp3",
      type: "Noun",
      meaning: "vụ cướp",
      example: "He was involved in an armed robbery.",
      context: "Noun"
    },
    {
      name: "fraud",
      ipa: "/frɔːd/",
      wordIpa: "/frɔːd/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/fraud.mp3",
      type: "Noun",
      meaning: "lừa đảo",
      example: "They were found guilty of fraud.",
      context: "Noun"
    },
    {
      name: "hijack",
      ipa: "/ˈhaɪdʒæk/",
      wordIpa: "/ˈhaɪdʒæk/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/hijack.mp3",
      type: "Verb",
      meaning: "khống chế",
      example: "They tried to hijack the plane.",
      context: "Verb"
    },
    {
      name: "murder",
      ipa: "/ˈmɜːdə(r)/",
      wordIpa: "/ˈmɜːdə(r)/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/murder.mp3",
      type: "Noun",
      meaning: "giết người",
      example: "He was accused of murder.",
      context: "Noun"
    }
  ]
  ,
  [
    {
      name: "law",
      ipa: "/lɔː/",
      wordIpa: "/lɔː/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/law.mp3",
      type: "Noun",
      meaning: "luật pháp",
      example: "Everyone must follow the law.",
      context: "Noun"
    },
    {
      name: "rule",
      ipa: "/ruːl/",
      wordIpa: "/ruːl/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/rule.mp3",
      type: "Noun",
      meaning: "quy định",
      example: "There are strict rules here.",
      context: "Noun"
    },
    {
      name: "regulation",
      ipa: "/ˌreɡjʊˈleɪʃən/",
      wordIpa: "/ˌreɡjʊˈleɪʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/regulation.mp3",
      type: "Noun",
      meaning: "quy tắc",
      example: "The new regulation will be applied soon.",
      context: "Noun"
    },
    {
      name: "policy",
      ipa: "/ˈpɒləsi/",
      wordIpa: "/ˈpɒləsi/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/policy.mp3",
      type: "Noun",
      meaning: "chính sách",
      example: "The company has a strict policy.",
      context: "Noun"
    },
    {
      name: "constitution",
      ipa: "/ˌkɒnstɪˈtjuːʃən/",
      wordIpa: "/ˌkɒnstɪˈtjuːʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/constitution.mp3",
      type: "Noun",
      meaning: "hiến pháp",
      example: "The constitution guarantees freedom.",
      context: "Noun"
    },
    {
      name: "legislation",
      ipa: "/ˌledʒɪsˈleɪʃən/",
      wordIpa: "/ˌledʒɪsˈleɪʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/legislation.mp3",
      type: "Noun",
      meaning: "pháp luật",
      example: "New legislation was passed.",
      context: "Noun"
    },
    {
      name: "amendment",
      ipa: "/əˈmendmənt/",
      wordIpa: "/əˈmendmənt/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/amendment.mp3",
      type: "Noun",
      meaning: "sửa đổi",
      example: "An amendment was added.",
      context: "Noun"
    },
    {
      name: "authority",
      ipa: "/ɔːˈθɒrɪti/",
      wordIpa: "/ɔːˈθɒrɪti/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/authority.mp3",
      type: "Noun",
      meaning: "chính quyền",
      example: "The local authority approved it.",
      context: "Noun"
    },
    {
      name: "ban",
      ipa: "/bæn/",
      wordIpa: "/bæn/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/ban.mp3",
      type: "Noun",
      meaning: "lệnh cấm",
      example: "There is a smoking ban here.",
      context: "Noun"
    },
    {
      name: "penalty",
      ipa: "/ˈpenəlti/",
      wordIpa: "/ˈpenəlti/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/penalty.mp3",
      type: "Noun",
      meaning: "hình phạt",
      example: "The penalty for speeding is high.",
      context: "Noun"
    }
  ],
  [
    {
      name: "punishment",
      ipa: "/ˈpʌnɪʃmənt/",
      wordIpa: "/ˈpʌnɪʃmənt/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/punishment.mp3",
      type: "Noun",
      meaning: "hình phạt",
      example: "He received a severe punishment.",
      context: "Noun"
    },
    {
      name: "fine",
      ipa: "/faɪn/",
      wordIpa: "/faɪn/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/fine.mp3",
      type: "Noun",
      meaning: "tiền phạt",
      example: "She paid a large fine.",
      context: "Noun"
    },
    {
      name: "prison",
      ipa: "/ˈprɪzən/",
      wordIpa: "/ˈprɪzən/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/prison.mp3",
      type: "Noun",
      meaning: "nhà tù",
      example: "He spent ten years in prison.",
      context: "Noun"
    },
    {
      name: "jail",
      ipa: "/dʒeɪl/",
      wordIpa: "/dʒeɪl/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/jail.mp3",
      type: "Noun",
      meaning: "nhà giam",
      example: "They put him in jail.",
      context: "Noun"
    },
    {
      name: "cell",
      ipa: "/sel/",
      wordIpa: "/sel/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/cell.mp3",
      type: "Noun",
      meaning: "phòng giam",
      example: "He was locked in a small cell.",
      context: "Noun"
    },
    {
      name: "probation",
      ipa: "/prəˈbeɪʃən/",
      wordIpa: "/prəˈbeɪʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/probation.mp3",
      type: "Noun",
      meaning: "án treo",
      example: "He was released on probation.",
      context: "Noun"
    },
    {
      name: "parole",
      ipa: "/pəˈrəʊl/",
      wordIpa: "/pəˈrəʊl/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/parole.mp3",
      type: "Noun",
      meaning: "tạm tha",
      example: "She was granted parole after 5 years.",
      context: "Noun"
    },
    {
      name: "detain",
      ipa: "/dɪˈteɪn/",
      wordIpa: "/dɪˈteɪn/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/detain.mp3",
      type: "Verb",
      meaning: "giam giữ",
      example: "The police detained the suspect.",
      context: "Verb"
    },
    {
      name: "rehabilitate",
      ipa: "/ˌriːəˈbɪlɪteɪt/",
      wordIpa: "/ˌriːəˈbɪlɪteɪt/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/rehabilitate.mp3",
      type: "Verb",
      meaning: "cải tạo",
      example: "The program aims to rehabilitate prisoners.",
      context: "Verb"
    },
    {
      name: "execution",
      ipa: "/ˌeksɪˈkjuːʃən/",
      wordIpa: "/ˌeksɪˈkjuːʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/execution.mp3",
      type: "Noun",
      meaning: "xử tử",
      example: "The execution was carried out at dawn.",
      context: "Noun"
    }
  ]
  ,
  [
    {
      name: "evidence",
      ipa: "/ˈevɪdəns/",
      wordIpa: "/ˈevɪdəns/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/evidence.mp3",
      type: "Noun",
      meaning: "bằng chứng",
      example: "There was no clear evidence.",
      context: "Noun"
    },
    {
      name: "proof",
      ipa: "/pruːf/",
      wordIpa: "/pruːf/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/proof.mp3",
      type: "Noun",
      meaning: "chứng cứ",
      example: "They needed proof of his guilt.",
      context: "Noun"
    },
    {
      name: "witness",
      ipa: "/ˈwɪtnəs/",
      wordIpa: "/ˈwɪtnəs/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/witness.mp3",
      type: "Noun",
      meaning: "nhân chứng",
      example: "The witness spoke in court.",
      context: "Noun"
    },
    {
      name: "statement",
      ipa: "/ˈsteɪtmənt/",
      wordIpa: "/ˈsteɪtmənt/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/statement.mp3",
      type: "Noun",
      meaning: "lời khai",
      example: "She gave a statement to the police.",
      context: "Noun"
    },
    {
      name: "testimony",
      ipa: "/ˈtestɪməni/",
      wordIpa: "/ˈtestɪməni/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/testimony.mp3",
      type: "Noun",
      meaning: "lời làm chứng",
      example: "His testimony was important.",
      context: "Noun"
    },
    {
      name: "confession",
      ipa: "/kənˈfeʃən/",
      wordIpa: "/kənˈfeʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/confession.mp3",
      type: "Noun",
      meaning: "lời thú tội",
      example: "He signed a confession.",
      context: "Noun"
    },
    {
      name: "clue",
      ipa: "/kluː/",
      wordIpa: "/kluː/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/clue.mp3",
      type: "Noun",
      meaning: "manh mối",
      example: "They found a clue at the scene.",
      context: "Noun"
    },
    {
      name: "trace",
      ipa: "/treɪs/",
      wordIpa: "/treɪs/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/trace.mp3",
      type: "Noun",
      meaning: "dấu vết",
      example: "There was no trace of him.",
      context: "Noun"
    },
    {
      name: "suspect",
      ipa: "/səˈspekt/",
      wordIpa: "/səˈspekt/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/suspect.mp3",
      type: "Verb",
      meaning: "nghi ngờ",
      example: "The police suspect foul play.",
      context: "Verb"
    },
    {
      name: "investigation",
      ipa: "/ɪnˌvestɪˈɡeɪʃən/",
      wordIpa: "/ɪnˌvestɪˈɡeɪʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/investigation.mp3",
      type: "Noun",
      meaning: "cuộc điều tra",
      example: "The investigation is ongoing.",
      context: "Noun"
    }
  ]
  ,
  [
    {
      name: "crime",
      ipa: "/kraɪm/",
      wordIpa: "/kraɪm/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/crime.mp3",
      type: "Noun",
      meaning: "tội ác",
      example: "Crime is a serious problem in the city.",
      context: "Noun"
    },
    {
      name: "offence",
      ipa: "/əˈfens/",
      wordIpa: "/əˈfens/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/offence.mp3",
      type: "Noun",
      meaning: "hành vi phạm tội",
      example: "Drunk driving is a serious offence.",
      context: "Noun"
    },
    {
      name: "felony",
      ipa: "/ˈfeləni/",
      wordIpa: "/ˈfeləni/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/felony.mp3",
      type: "Noun",
      meaning: "trọng tội",
      example: "He was convicted of a felony.",
      context: "Noun"
    },
    {
      name: "misdemeanor",
      ipa: "/ˌmɪsdɪˈmiːnər/",
      wordIpa: "/ˌmɪsdɪˈmiːnər/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/misdemeanor.mp3",
      type: "Noun",
      meaning: "khinh tội",
      example: "He was charged with a misdemeanor.",
      context: "Noun"
    },
    {
      name: "violation",
      ipa: "/ˌvaɪəˈleɪʃən/",
      wordIpa: "/ˌvaɪəˈleɪʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/violation.mp3",
      type: "Noun",
      meaning: "vi phạm",
      example: "Parking here is a violation of the law.",
      context: "Noun"
    },
    {
      name: "culprit",
      ipa: "/ˈkʌlprɪt/",
      wordIpa: "/ˈkʌlprɪt/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/culprit.mp3",
      type: "Noun",
      meaning: "thủ phạm",
      example: "The culprit was caught on camera.",
      context: "Noun"
    },
    {
      name: "convict",
      ipa: "/ˈkɒnvɪkt/",
      wordIpa: "/ˈkɒnvɪkt/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/convict.mp3",
      type: "Noun",
      meaning: "người bị kết án",
      example: "The convict escaped from prison.",
      context: "Noun"
    },
    {
      name: "charge",
      ipa: "/tʃɑːdʒ/",
      wordIpa: "/tʃɑːdʒ/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/charge.mp3",
      type: "Noun",
      meaning: "cáo buộc",
      example: "He faces a charge of theft.",
      context: "Noun"
    },
    {
      name: "guilt",
      ipa: "/ɡɪlt/",
      wordIpa: "/ɡɪlt/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/guilt.mp3",
      type: "Noun",
      meaning: "tội lỗi",
      example: "He admitted his guilt.",
      context: "Noun"
    },
    {
      name: "innocence",
      ipa: "/ˈɪnəsəns/",
      wordIpa: "/ˈɪnəsəns/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/innocence.mp3",
      type: "Noun",
      meaning: "vô tội",
      example: "He proved his innocence.",
      context: "Noun"
    }
  ]
  ,
  [
    {
      name: "arrest",
      ipa: "/əˈrest/",
      wordIpa: "/əˈrest/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/arrest.mp3",
      type: "Verb",
      meaning: "bắt giữ",
      example: "The police arrested the suspect.",
      context: "Verb"
    },
    {
      name: "charge",
      ipa: "/tʃɑːdʒ/",
      wordIpa: "/tʃɑːdʒ/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/charge-verb.mp3",
      type: "Verb",
      meaning: "buộc tội",
      example: "He was charged with murder.",
      context: "Verb"
    },
    {
      name: "convict",
      ipa: "/kənˈvɪkt/",
      wordIpa: "/kənˈvɪkt/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/convict-verb.mp3",
      type: "Verb",
      meaning: "kết án",
      example: "He was convicted of robbery.",
      context: "Verb"
    },
    {
      name: "sentence",
      ipa: "/ˈsentəns/",
      wordIpa: "/ˈsentəns/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/sentence-verb.mp3",
      type: "Verb",
      meaning: "tuyên án",
      example: "He was sentenced to life in prison.",
      context: "Verb"
    },
    {
      name: "accuse",
      ipa: "/əˈkjuːz/",
      wordIpa: "/əˈkjuːz/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/accuse.mp3",
      type: "Verb",
      meaning: "buộc tội",
      example: "They accused him of stealing.",
      context: "Verb"
    },
    {
      name: "plead",
      ipa: "/pliːd/",
      wordIpa: "/pliːd/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/plead.mp3",
      type: "Verb",
      meaning: "biện hộ",
      example: "He pleaded guilty.",
      context: "Verb"
    },
    {
      name: "confess",
      ipa: "/kənˈfes/",
      wordIpa: "/kənˈfes/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/confess.mp3",
      type: "Verb",
      meaning: "thú tội",
      example: "He confessed to the crime.",
      context: "Verb"
    },
    {
      name: "release",
      ipa: "/rɪˈliːs/",
      wordIpa: "/rɪˈliːs/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/release.mp3",
      type: "Verb",
      meaning: "thả",
      example: "The prisoner was released.",
      context: "Verb"
    },
    {
      name: "appeal",
      ipa: "/əˈpiːl/",
      wordIpa: "/əˈpiːl/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/appeal-verb.mp3",
      type: "Verb",
      meaning: "kháng cáo",
      example: "He decided to appeal the sentence.",
      context: "Verb"
    },
    {
      name: "prosecute",
      ipa: "/ˈprɒsɪkjuːt/",
      wordIpa: "/ˈprɒsɪkjuːt/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/prosecute.mp3",
      type: "Verb",
      meaning: "truy tố",
      example: "They will prosecute the criminal.",
      context: "Verb"
    }
  ]
  ,
  [
    {
      name: "lawyer",
      ipa: "/ˈlɔɪə/",
      wordIpa: "/ˈlɔɪə/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/lawyer.mp3",
      type: "Noun",
      meaning: "luật sư",
      example: "She hired a good lawyer.",
      context: "Noun"
    },
    {
      name: "barrister",
      ipa: "/ˈbærɪstər/",
      wordIpa: "/ˈbærɪstər/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/barrister.mp3",
      type: "Noun",
      meaning: "luật sư bào chữa",
      example: "The barrister presented the case.",
      context: "Noun"
    },
    {
      name: "solicitor",
      ipa: "/səˈlɪsɪtər/",
      wordIpa: "/səˈlɪsɪtər/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/solicitor.mp3",
      type: "Noun",
      meaning: "luật sư cố vấn",
      example: "She spoke to her solicitor.",
      context: "Noun"
    },
    {
      name: "prosecutor",
      ipa: "/ˈprɒsɪkjuːtər/",
      wordIpa: "/ˈprɒsɪkjuːtər/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/prosecutor.mp3",
      type: "Noun",
      meaning: "công tố viên",
      example: "The prosecutor questioned the witness.",
      context: "Noun"
    },
    {
      name: "defendant",
      ipa: "/dɪˈfendənt/",
      wordIpa: "/dɪˈfendənt/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/defendant.mp3",
      type: "Noun",
      meaning: "bị cáo",
      example: "The defendant pleaded not guilty.",
      context: "Noun"
    },
    {
      name: "plaintiff",
      ipa: "/ˈpleɪntɪf/",
      wordIpa: "/ˈpleɪntɪf/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/plaintiff.mp3",
      type: "Noun",
      meaning: "nguyên đơn",
      example: "The plaintiff demanded compensation.",
      context: "Noun"
    },
    {
      name: "advocate",
      ipa: "/ˈædvəkeɪt/",
      wordIpa: "/ˈædvəkeɪt/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/advocate.mp3",
      type: "Noun",
      meaning: "người biện hộ",
      example: "He is a strong advocate for justice.",
      context: "Noun"
    },
    {
      name: "counsel",
      ipa: "/ˈkaʊnsəl/",
      wordIpa: "/ˈkaʊnsəl/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/counsel.mp3",
      type: "Noun",
      meaning: "luật sư (cố vấn pháp luật)",
      example: "He spoke to his legal counsel.",
      context: "Noun"
    },
    {
      name: "oath",
      ipa: "/əʊθ/",
      wordIpa: "/əʊθ/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/oath.mp3",
      type: "Noun",
      meaning: "lời thề",
      example: "He swore an oath in court.",
      context: "Noun"
    },
    {
      name: "affidavit",
      ipa: "/ˌæfɪˈdeɪvɪt/",
      wordIpa: "/ˌæfɪˈdeɪvɪt/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/affidavit.mp3",
      type: "Noun",
      meaning: "bản khai có tuyên thệ",
      example: "She signed an affidavit.",
      context: "Noun"
    }
  ]
  ,
  [
    {
      name: "jury",
      ipa: "/ˈdʒʊəri/",
      wordIpa: "/ˈdʒʊəri/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/jury.mp3",
      type: "Noun",
      meaning: "bồi thẩm đoàn",
      example: "The jury found him guilty.",
      context: "Noun"
    },
    {
      name: "judge",
      ipa: "/dʒʌdʒ/",
      wordIpa: "/dʒʌdʒ/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/judge.mp3",
      type: "Noun",
      meaning: "thẩm phán",
      example: "The judge announced the verdict.",
      context: "Noun"
    },
    {
      name: "court",
      ipa: "/kɔːt/",
      wordIpa: "/kɔːt/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/court.mp3",
      type: "Noun",
      meaning: "tòa án",
      example: "He was taken to court.",
      context: "Noun"
    },
    {
      name: "trial",
      ipa: "/ˈtraɪəl/",
      wordIpa: "/ˈtraɪəl/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/trial.mp3",
      type: "Noun",
      meaning: "phiên tòa",
      example: "The trial lasted two weeks.",
      context: "Noun"
    },
    {
      name: "verdict",
      ipa: "/ˈvɜːdɪkt/",
      wordIpa: "/ˈvɜːdɪkt/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/verdict.mp3",
      type: "Noun",
      meaning: "bản án",
      example: "The verdict was not guilty.",
      context: "Noun"
    },
    {
      name: "appeal",
      ipa: "/əˈpiːl/",
      wordIpa: "/əˈpiːl/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/appeal-noun.mp3",
      type: "Noun",
      meaning: "sự kháng cáo",
      example: "He made an appeal to the higher court.",
      context: "Noun"
    },
    {
      name: "hearing",
      ipa: "/ˈhɪərɪŋ/",
      wordIpa: "/ˈhɪərɪŋ/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/hearing.mp3",
      type: "Noun",
      meaning: "phiên điều trần",
      example: "The hearing was postponed.",
      context: "Noun"
    },
    {
      name: "bail",
      ipa: "/beɪl/",
      wordIpa: "/beɪl/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/bail.mp3",
      type: "Noun",
      meaning: "tiền bảo lãnh",
      example: "He was released on bail.",
      context: "Noun"
    },
    {
      name: "warrant",
      ipa: "/ˈwɒrənt/",
      wordIpa: "/ˈwɒrənt/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/warrant.mp3",
      type: "Noun",
      meaning: "lệnh (bắt, khám xét)",
      example: "They issued an arrest warrant.",
      context: "Noun"
    },
    {
      name: "summons",
      ipa: "/ˈsʌmənz/",
      wordIpa: "/ˈsʌmənz/",
      file: "/main/projects/english-courses/assets/data/ielts/crime-law/audio/summons.mp3",
      type: "Noun",
      meaning: "giấy triệu tập",
      example: "He received a court summons.",
      context: "Noun"
    }
  ]

]



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