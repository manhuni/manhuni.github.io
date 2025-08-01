const audioData = [
  [
    {
      name: "health",
      ipa: "/helθ/",
      wordIpa: "/helθ/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/health.mp3",
      type: "Noun",
      meaning: "sức khỏe",
      example: "Regular exercise is essential for good health.",
      context: "Health - General"
    },
    {
      name: "well-being",
      ipa: "/ˌwelˈbiː.ɪŋ/",
      wordIpa: "/ˌwelˈbiː.ɪŋ/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/well-being.mp3",
      type: "Noun",
      meaning: "tình trạng khỏe mạnh",
      example: "Mental well-being is just as important as physical health.",
      context: "Health - General"
    },
    {
      name: "immune system",
      ipa: "/ɪˈmjuːn ˌsɪs.təm/",
      wordIpa: "/ɪˈmjuːn ˌsɪs.təm/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/immune_system.mp3",
      type: "Noun",
      meaning: "hệ miễn dịch",
      example: "A strong immune system helps fight off infections.",
      context: "Health - General"
    },
    {
      name: "fitness",
      ipa: "/ˈfɪt.nəs/",
      wordIpa: "/ˈfɪt.nəs/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/fitness.mp3",
      type: "Noun",
      meaning: "thể trạng tốt",
      example: "She goes to the gym to maintain her fitness.",
      context: "Health - General"
    },
    {
      name: "nutrition",
      ipa: "/njuːˈtrɪʃ.ən/",
      wordIpa: "/njuːˈtrɪʃ.ən/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/nutrition.mp3",
      type: "Noun",
      meaning: "dinh dưỡng",
      example: "Good nutrition is vital for growing children.",
      context: "Health - General"
    },
    {
      name: "lifestyle",
      ipa: "/ˈlaɪf.staɪl/",
      wordIpa: "/ˈlaɪf.staɪl/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/lifestyle.mp3",
      type: "Noun",
      meaning: "lối sống",
      example: "A sedentary lifestyle can lead to many health problems.",
      context: "Health - General"
    },
    {
      name: "stress",
      ipa: "/stres/",
      wordIpa: "/stres/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/stress.mp3",
      type: "Noun",
      meaning: "căng thẳng",
      example: "High levels of stress can damage your health.",
      context: "Health - General"
    },
    {
      name: "prevention",
      ipa: "/prɪˈven.ʃən/",
      wordIpa: "/prɪˈven.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/prevention.mp3",
      type: "Noun",
      meaning: "phòng ngừa",
      example: "Prevention is better than cure.",
      context: "Health - General"
    },
    {
      name: "hygiene",
      ipa: "/ˈhaɪ.dʒiːn/",
      wordIpa: "/ˈhaɪ.dʒiːn/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/hygiene.mp3",
      type: "Noun",
      meaning: "vệ sinh",
      example: "Personal hygiene is important for preventing disease.",
      context: "Health - General"
    },
    {
      name: "diet",
      ipa: "/ˈdaɪ.ət/",
      wordIpa: "/ˈdaɪ.ət/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/diet.mp3",
      type: "Noun",
      meaning: "chế độ ăn uống",
      example: "She follows a healthy diet to stay in shape.",
      context: "Health - General"
    }
  ],
  [
    {
      name: "disease",
      ipa: "/dɪˈziːz/",
      wordIpa: "/dɪˈziːz/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/disease.mp3",
      type: "Noun",
      meaning: "bệnh tật",
      example: "Heart disease is the leading cause of death worldwide.",
      context: "Health - Illness"
    },
    {
      name: "virus",
      ipa: "/ˈvaɪə.rəs/",
      wordIpa: "/ˈvaɪə.rəs/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/virus.mp3",
      type: "Noun",
      meaning: "vi rút",
      example: "The flu is caused by a virus.",
      context: "Health - Illness"
    },
    {
      name: "infection",
      ipa: "/ɪnˈfek.ʃən/",
      wordIpa: "/ɪnˈfek.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/infection.mp3",
      type: "Noun",
      meaning: "nhiễm trùng",
      example: "The wound became infected and led to a serious infection.",
      context: "Health - Illness"
    },
    {
      name: "symptom",
      ipa: "/ˈsɪmp.təm/",
      wordIpa: "/ˈsɪmp.təm/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/symptom.mp3",
      type: "Noun",
      meaning: "triệu chứng",
      example: "Fever and cough are common symptoms of the flu.",
      context: "Health - Illness"
    },
    {
      name: "diagnosis",
      ipa: "/ˌdaɪ.əɡˈnəʊ.sɪs/",
      wordIpa: "/ˌdaɪ.əɡˈnəʊ.sɪs/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/diagnosis.mp3",
      type: "Noun",
      meaning: "chẩn đoán",
      example: "The doctor gave her a diagnosis of diabetes.",
      context: "Health - Illness"
    },
    {
      name: "treatment",
      ipa: "/ˈtriːt.mənt/",
      wordIpa: "/ˈtriːt.mənt/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/treatment.mp3",
      type: "Noun",
      meaning: "điều trị",
      example: "She is undergoing treatment for cancer.",
      context: "Health - Illness"
    },
    {
      name: "therapy",
      ipa: "/ˈθer.ə.pi/",
      wordIpa: "/ˈθer.ə.pi/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/therapy.mp3",
      type: "Noun",
      meaning: "liệu pháp",
      example: "Physical therapy helped him recover quickly.",
      context: "Health - Illness"
    },
    {
      name: "chronic",
      ipa: "/ˈkrɒn.ɪk/",
      wordIpa: "/ˈkrɒn.ɪk/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/chronic.mp3",
      type: "Adjective",
      meaning: "mãn tính",
      example: "She suffers from chronic back pain.",
      context: "Health - Illness"
    },
    {
      name: "contagious",
      ipa: "/kənˈteɪ.dʒəs/",
      wordIpa: "/kənˈteɪ.dʒəs/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/contagious.mp3",
      type: "Adjective",
      meaning: "lây lan",
      example: "The disease is highly contagious.",
      context: "Health - Illness"
    },
    {
      name: "recovery",
      ipa: "/rɪˈkʌv.ər.i/",
      wordIpa: "/rɪˈkʌv.ər.i/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/recovery.mp3",
      type: "Noun",
      meaning: "phục hồi",
      example: "She made a full recovery after the operation.",
      context: "Health - Illness"
    }
  ],
  [
    {
      name: "hospital",
      ipa: "/ˈhɒs.pɪ.təl/",
      wordIpa: "/ˈhɒs.pɪ.təl/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/hospital.mp3",
      type: "Noun",
      meaning: "bệnh viện",
      example: "She was taken to the hospital after the accident.",
      context: "Health - Healthcare System"
    },
    {
      name: "clinic",
      ipa: "/ˈklɪn.ɪk/",
      wordIpa: "/ˈklɪn.ɪk/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/clinic.mp3",
      type: "Noun",
      meaning: "phòng khám",
      example: "He went to the clinic for a check-up.",
      context: "Health - Healthcare System"
    },
    {
      name: "nurse",
      ipa: "/nɜːs/",
      wordIpa: "/nɜːs/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/nurse.mp3",
      type: "Noun",
      meaning: "y tá",
      example: "The nurse gave him his medication.",
      context: "Health - Healthcare System"
    },
    {
      name: "surgeon",
      ipa: "/ˈsɜː.dʒən/",
      wordIpa: "/ˈsɜː.dʒən/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/surgeon.mp3",
      type: "Noun",
      meaning: "bác sĩ phẫu thuật",
      example: "The surgeon performed a complicated heart surgery.",
      context: "Health - Healthcare System"
    },
    {
      name: "paramedic",
      ipa: "/ˌpær.əˈmed.ɪk/",
      wordIpa: "/ˌpær.əˈmed.ɪk/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/paramedic.mp3",
      type: "Noun",
      meaning: "nhân viên cấp cứu",
      example: "The paramedic responded quickly to the emergency.",
      context: "Health - Healthcare System"
    },
    {
      name: "ambulance",
      ipa: "/ˈæm.bjə.ləns/",
      wordIpa: "/ˈæm.bjə.ləns/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/ambulance.mp3",
      type: "Noun",
      meaning: "xe cứu thương",
      example: "They called an ambulance immediately.",
      context: "Health - Healthcare System"
    },
    {
      name: "ward",
      ipa: "/wɔːd/",
      wordIpa: "/wɔːd/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/ward.mp3",
      type: "Noun",
      meaning: "khu bệnh (trong bệnh viện)",
      example: "He was moved to the general ward.",
      context: "Health - Healthcare System"
    },
    {
      name: "emergency",
      ipa: "/ɪˈmɜː.dʒən.si/",
      wordIpa: "/ɪˈmɜː.dʒən.si/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/emergency.mp3",
      type: "Noun",
      meaning: "tình huống khẩn cấp",
      example: "The emergency room was full of patients.",
      context: "Health - Healthcare System"
    },
    {
      name: "appointment",
      ipa: "/əˈpɔɪnt.mənt/",
      wordIpa: "/əˈpɔɪnt.mənt/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/appointment.mp3",
      type: "Noun",
      meaning: "cuộc hẹn",
      example: "I made an appointment with the doctor.",
      context: "Health - Healthcare System"
    },
    {
      name: "operation",
      ipa: "/ˌɒp.ərˈeɪ.ʃən/",
      wordIpa: "/ˌɒp.ərˈeɪ.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/operation.mp3",
      type: "Noun",
      meaning: "ca phẫu thuật",
      example: "He had an operation on his knee.",
      context: "Health - Healthcare System"
    }
  ],
  [
    {
      name: "mental health",
      ipa: "/ˌmen.təl ˈhelθ/",
      wordIpa: "/ˌmen.təl ˈhelθ/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/mental_health.mp3",
      type: "Noun",
      meaning: "sức khỏe tinh thần",
      example: "Mental health is just as important as physical health.",
      context: "Health - Mental"
    },
    {
      name: "depression",
      ipa: "/dɪˈpreʃ.ən/",
      wordIpa: "/dɪˈpreʃ.ən/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/depression.mp3",
      type: "Noun",
      meaning: "trầm cảm",
      example: "She was diagnosed with severe depression.",
      context: "Health - Mental"
    },
    {
      name: "anxiety",
      ipa: "/æŋˈzaɪ.ə.ti/",
      wordIpa: "/æŋˈzaɪ.ə.ti/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/anxiety.mp3",
      type: "Noun",
      meaning: "lo âu",
      example: "He suffers from anxiety before exams.",
      context: "Health - Mental"
    },
    {
      name: "therapy",
      ipa: "/ˈθer.ə.pi/",
      wordIpa: "/ˈθer.ə.pi/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/therapy.mp3",
      type: "Noun",
      meaning: "liệu pháp",
      example: "Therapy can help manage mental disorders.",
      context: "Health - Mental"
    },
    {
      name: "counselling",
      ipa: "/ˈkaʊn.səl.ɪŋ/",
      wordIpa: "/ˈkaʊn.səl.ɪŋ/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/counselling.mp3",
      type: "Noun",
      meaning: "tư vấn tâm lý",
      example: "He received counselling after the incident.",
      context: "Health - Mental"
    },
    {
      name: "trauma",
      ipa: "/ˈtrɔː.mə/",
      wordIpa: "/ˈtrɔː.mə/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/trauma.mp3",
      type: "Noun",
      meaning: "tổn thương tâm lý",
      example: "She is recovering from childhood trauma.",
      context: "Health - Mental"
    },
    {
      name: "disorder",
      ipa: "/dɪˈsɔː.dər/",
      wordIpa: "/dɪˈsɔː.dər/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/disorder.mp3",
      type: "Noun",
      meaning: "rối loạn",
      example: "Eating disorders are becoming more common.",
      context: "Health - Mental"
    },
    {
      name: "support group",
      ipa: "/səˈpɔːt ɡruːp/",
      wordIpa: "/səˈpɔːt ɡruːp/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/support_group.mp3",
      type: "Noun",
      meaning: "nhóm hỗ trợ",
      example: "She joined a support group for anxiety.",
      context: "Health - Mental"
    },
    {
      name: "coping mechanism",
      ipa: "/ˈkəʊ.pɪŋ ˈmek.ə.nɪ.zəm/",
      wordIpa: "/ˈkəʊ.pɪŋ ˈmek.ə.nɪ.zəm/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/coping_mechanism.mp3",
      type: "Noun",
      meaning: "cơ chế đối phó",
      example: "Exercise is a healthy coping mechanism.",
      context: "Health - Mental"
    },
    {
      name: "meditation",
      ipa: "/ˌmed.ɪˈteɪ.ʃən/",
      wordIpa: "/ˌmed.ɪˈteɪ.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/meditation.mp3",
      type: "Noun",
      meaning: "thiền",
      example: "Meditation can reduce stress and anxiety.",
      context: "Health - Mental"
    }
  ],
  [
    {
      name: "mental health",
      ipa: "/ˈmen.təl helθ/",
      wordIpa: "/ˈmen.təl helθ/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/mental_health.mp3",
      type: "Noun",
      meaning: "sức khỏe tâm thần",
      example: "Mental health should be prioritized alongside physical health.",
      context: "Health - Mental Health"
    },
    {
      name: "stress",
      ipa: "/stres/",
      wordIpa: "/stres/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/stress.mp3",
      type: "Noun",
      meaning: "căng thẳng",
      example: "Work-related stress can lead to mental health issues.",
      context: "Health - Mental Health"
    },
    {
      name: "depression",
      ipa: "/dɪˈpreʃ.ən/",
      wordIpa: "/dɪˈpreʃ.ən/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/depression.mp3",
      type: "Noun",
      meaning: "trầm cảm",
      example: "Depression is a common mental illness affecting millions.",
      context: "Health - Mental Health"
    },
    {
      name: "therapy",
      ipa: "/ˈθer.ə.pi/",
      wordIpa: "/ˈθer.ə.pi/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/therapy.mp3",
      type: "Noun",
      meaning: "liệu pháp điều trị",
      example: "She underwent therapy for anxiety.",
      context: "Health - Mental Health"
    },
    {
      name: "counselling",
      ipa: "/ˈkaʊn.səl.ɪŋ/",
      wordIpa: "/ˈkaʊn.səl.ɪŋ/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/counselling.mp3",
      type: "Noun",
      meaning: "tư vấn tâm lý",
      example: "Counselling can help people deal with trauma.",
      context: "Health - Mental Health"
    },
    {
      name: "insomnia",
      ipa: "/ɪnˈsɒm.ni.ə/",
      wordIpa: "/ɪnˈsɒm.ni.ə/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/insomnia.mp3",
      type: "Noun",
      meaning: "chứng mất ngủ",
      example: "Chronic insomnia may lead to fatigue and irritability.",
      context: "Health - Mental Health"
    },
    {
      name: "trauma",
      ipa: "/ˈtrɔː.mə/",
      wordIpa: "/ˈtrɔː.mə/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/trauma.mp3",
      type: "Noun",
      meaning: "tổn thương tâm lý",
      example: "The accident caused her long-term trauma.",
      context: "Health - Mental Health"
    },
    {
      name: "wellbeing",
      ipa: "/ˌwelˈbiː.ɪŋ/",
      wordIpa: "/ˌwelˈbiː.ɪŋ/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/wellbeing.mp3",
      type: "Noun",
      meaning: "hạnh phúc và sức khỏe",
      example: "Regular exercise boosts mental wellbeing.",
      context: "Health - Mental Health"
    },
    {
      name: "anxiety",
      ipa: "/æŋˈzaɪ.ə.ti/",
      wordIpa: "/æŋˈzaɪ.ə.ti/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/anxiety.mp3",
      type: "Noun",
      meaning: "lo âu",
      example: "Many students experience anxiety before exams.",
      context: "Health - Mental Health"
    },
    {
      name: "mindfulness",
      ipa: "/ˈmaɪnd.fəl.nəs/",
      wordIpa: "/ˈmaɪnd.fəl.nəs/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/mindfulness.mp3",
      type: "Noun",
      meaning: "thiền chánh niệm",
      example: "Mindfulness can help reduce stress levels.",
      context: "Health - Mental Health"
    }
  ],
  [
    {
      name: "medical treatment",
      ipa: "/ˈmed.ɪ.kəl ˈtriːt.mənt/",
      wordIpa: "/ˈmed.ɪ.kəl ˈtriːt.mənt/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/medical_treatment.mp3",
      type: "Noun",
      meaning: "điều trị y tế",
      example: "He received medical treatment after the injury.",
      context: "Health - Medical"
    },
    {
      name: "prescription",
      ipa: "/prɪˈskrɪp.ʃən/",
      wordIpa: "/prɪˈskrɪp.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/prescription.mp3",
      type: "Noun",
      meaning: "đơn thuốc",
      example: "The doctor gave her a prescription for antibiotics.",
      context: "Health - Medical"
    },
    {
      name: "surgery",
      ipa: "/ˈsɜː.dʒər.i/",
      wordIpa: "/ˈsɜː.dʒər.i/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/surgery.mp3",
      type: "Noun",
      meaning: "phẫu thuật",
      example: "He had surgery to repair a broken bone.",
      context: "Health - Medical"
    },
    {
      name: "diagnosis",
      ipa: "/ˌdaɪ.əɡˈnəʊ.sɪs/",
      wordIpa: "/ˌdaɪ.əɡˈnəʊ.sɪs/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/diagnosis.mp3",
      type: "Noun",
      meaning: "chẩn đoán",
      example: "Early diagnosis improves treatment outcomes.",
      context: "Health - Medical"
    },
    {
      name: "medication",
      ipa: "/ˌmed.ɪˈkeɪ.ʃən/",
      wordIpa: "/ˌmed.ɪˈkeɪ.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/medication.mp3",
      type: "Noun",
      meaning: "thuốc điều trị",
      example: "She is on medication for high blood pressure.",
      context: "Health - Medical"
    },
    {
      name: "dose",
      ipa: "/dəʊs/",
      wordIpa: "/dəʊs/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/dose.mp3",
      type: "Noun",
      meaning: "liều thuốc",
      example: "Take one dose three times a day.",
      context: "Health - Medical"
    },
    {
      name: "side effect",
      ipa: "/ˈsaɪd ɪˌfekt/",
      wordIpa: "/ˈsaɪd ɪˌfekt/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/side_effect.mp3",
      type: "Noun",
      meaning: "tác dụng phụ",
      example: "Some medications may cause side effects.",
      context: "Health - Medical"
    },
    {
      name: "antibiotic",
      ipa: "/ˌæn.ti.baɪˈɒ.tɪk/",
      wordIpa: "/ˌæn.ti.baɪˈɒ.tɪk/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/antibiotic.mp3",
      type: "Noun",
      meaning: "thuốc kháng sinh",
      example: "Antibiotics are used to treat bacterial infections.",
      context: "Health - Medical"
    },
    {
      name: "vaccine",
      ipa: "/ˈvæk.siːn/",
      wordIpa: "/ˈvæk.siːn/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/vaccine.mp3",
      type: "Noun",
      meaning: "vắc xin",
      example: "The flu vaccine is given annually.",
      context: "Health - Medical"
    },
    {
      name: "recovery",
      ipa: "/rɪˈkʌv.ər.i/",
      wordIpa: "/rɪˈkʌv.ər.i/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/recovery.mp3",
      type: "Noun",
      meaning: "sự hồi phục",
      example: "Her recovery was faster than expected.",
      context: "Health - Medical"
    }
  ],
  [
    {
      name: "disease",
      ipa: "/dɪˈziːz/",
      wordIpa: "/dɪˈziːz/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/disease.mp3",
      type: "Noun",
      meaning: "bệnh tật",
      example: "Heart disease is one of the leading causes of death.",
      context: "Health - Illness"
    },
    {
      name: "infection",
      ipa: "/ɪnˈfek.ʃən/",
      wordIpa: "/ɪnˈfek.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/infection.mp3",
      type: "Noun",
      meaning: "nhiễm trùng",
      example: "The infection spread rapidly among the population.",
      context: "Health - Illness"
    },
    {
      name: "virus",
      ipa: "/ˈvaɪə.rəs/",
      wordIpa: "/ˈvaɪə.rəs/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/virus.mp3",
      type: "Noun",
      meaning: "vi-rút",
      example: "Viruses can mutate and become more dangerous.",
      context: "Health - Illness"
    },
    {
      name: "bacteria",
      ipa: "/bækˈtɪə.ri.ə/",
      wordIpa: "/bækˈtɪə.ri.ə/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/bacteria.mp3",
      type: "Noun",
      meaning: "vi khuẩn",
      example: "Some bacteria are essential for digestion.",
      context: "Health - Illness"
    },
    {
      name: "outbreak",
      ipa: "/ˈaʊt.breɪk/",
      wordIpa: "/ˈaʊt.breɪk/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/outbreak.mp3",
      type: "Noun",
      meaning: "sự bùng phát",
      example: "The outbreak of flu caused panic in the city.",
      context: "Health - Illness"
    },
    {
      name: "chronic illness",
      ipa: "/ˈkrɒn.ɪk ˈɪl.nəs/",
      wordIpa: "/ˈkrɒn.ɪk ˈɪl.nəs/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/chronic_illness.mp3",
      type: "Noun",
      meaning: "bệnh mãn tính",
      example: "Diabetes is a common chronic illness.",
      context: "Health - Illness"
    },
    {
      name: "contagious",
      ipa: "/kənˈteɪ.dʒəs/",
      wordIpa: "/kənˈteɪ.dʒəs/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/contagious.mp3",
      type: "Adjective",
      meaning: "dễ lây lan",
      example: "COVID-19 is a highly contagious disease.",
      context: "Health - Illness"
    },
    {
      name: "immune system",
      ipa: "/ɪˈmjuːn ˈsɪs.təm/",
      wordIpa: "/ɪˈmjuːn ˈsɪs.təm/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/immune_system.mp3",
      type: "Noun",
      meaning: "hệ miễn dịch",
      example: "A strong immune system helps fight infections.",
      context: "Health - Illness"
    },
    {
      name: "antibiotic",
      ipa: "/ˌæn.ti.baɪˈɒt.ɪk/",
      wordIpa: "/ˌæn.ti.baɪˈɒt.ɪk/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/antibiotic.mp3",
      type: "Noun",
      meaning: "thuốc kháng sinh",
      example: "Antibiotics are used to treat bacterial infections.",
      context: "Health - Illness"
    },
    {
      name: "symptom",
      ipa: "/ˈsɪmp.təm/",
      wordIpa: "/ˈsɪmp.təm/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/symptom.mp3",
      type: "Noun",
      meaning: "triệu chứng",
      example: "Fever is a common symptom of the flu.",
      context: "Health - Illness"
    }
  ],
  [
    {
      name: "medicine",
      ipa: "/ˈmed.ɪ.sən/",
      wordIpa: "/ˈmed.ɪ.sən/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/medicine.mp3",
      type: "Noun",
      meaning: "thuốc",
      example: "She took some medicine to reduce the pain.",
      context: "Health - Treatment"
    },
    {
      name: "prescription",
      ipa: "/prɪˈskrɪp.ʃən/",
      wordIpa: "/prɪˈskrɪp.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/prescription.mp3",
      type: "Noun",
      meaning: "đơn thuốc",
      example: "You need a prescription to buy this medicine.",
      context: "Health - Treatment"
    },
    {
      name: "vaccine",
      ipa: "/ˈvæk.siːn/",
      wordIpa: "/ˈvæk.siːn/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/vaccine.mp3",
      type: "Noun",
      meaning: "vắc-xin",
      example: "Vaccines help prevent the spread of disease.",
      context: "Health - Treatment"
    },
    {
      name: "injection",
      ipa: "/ɪnˈdʒek.ʃən/",
      wordIpa: "/ɪnˈdʒek.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/injection.mp3",
      type: "Noun",
      meaning: "mũi tiêm",
      example: "The doctor gave me an injection for the pain.",
      context: "Health - Treatment"
    },
    {
      name: "tablet",
      ipa: "/ˈtæb.lət/",
      wordIpa: "/ˈtæb.lət/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/tablet.mp3",
      type: "Noun",
      meaning: "viên thuốc",
      example: "Take one tablet twice a day after meals.",
      context: "Health - Treatment"
    },
    {
      name: "dose",
      ipa: "/dəʊs/",
      wordIpa: "/dəʊs/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/dose.mp3",
      type: "Noun",
      meaning: "liều lượng",
      example: "Do not exceed the recommended dose.",
      context: "Health - Treatment"
    },
    {
      name: "pharmacy",
      ipa: "/ˈfɑː.mə.si/",
      wordIpa: "/ˈfɑː.mə.si/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/pharmacy.mp3",
      type: "Noun",
      meaning: "hiệu thuốc",
      example: "You can buy painkillers at the pharmacy.",
      context: "Health - Treatment"
    },
    {
      name: "treatment",
      ipa: "/ˈtriːt.mənt/",
      wordIpa: "/ˈtriːt.mənt/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/treatment.mp3",
      type: "Noun",
      meaning: "sự điều trị",
      example: "The treatment lasted for three weeks.",
      context: "Health - Treatment"
    },
    {
      name: "therapy",
      ipa: "/ˈθer.ə.pi/",
      wordIpa: "/ˈθer.ə.pi/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/therapy.mp3",
      type: "Noun",
      meaning: "liệu pháp",
      example: "She is undergoing physical therapy.",
      context: "Health - Treatment"
    },
    {
      name: "recover",
      ipa: "/rɪˈkʌv.ər/",
      wordIpa: "/rɪˈkʌv.ər/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/recover.mp3",
      type: "Verb",
      meaning: "phục hồi",
      example: "He recovered quickly after the surgery.",
      context: "Health - Treatment"
    }
  ],
  [
    {
      name: "exercise",
      ipa: "/ˈek.sə.saɪz/",
      wordIpa: "/ˈek.sə.saɪz/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/exercise.mp3",
      type: "Noun",
      meaning: "bài tập thể dục",
      example: "Regular exercise is essential for good health.",
      context: "Health - Fitness"
    },
    {
      name: "physical activity",
      ipa: "/ˈfɪz.ɪ.kəl ækˈtɪv.ə.ti/",
      wordIpa: "/ˈfɪz.ɪ.kəl ækˈtɪv.ə.ti/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/physical_activity.mp3",
      type: "Noun",
      meaning: "hoạt động thể chất",
      example: "Children need at least an hour of physical activity each day.",
      context: "Health - Fitness"
    },
    {
      name: "workout",
      ipa: "/ˈwɜː.kaʊt/",
      wordIpa: "/ˈwɜː.kaʊt/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/workout.mp3",
      type: "Noun",
      meaning: "buổi tập luyện",
      example: "She has a daily workout routine at the gym.",
      context: "Health - Fitness"
    },
    {
      name: "cardio",
      ipa: "/ˈkɑː.di.əʊ/",
      wordIpa: "/ˈkɑː.di.əʊ/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/cardio.mp3",
      type: "Noun",
      meaning: "bài tập tim mạch",
      example: "Cardio helps improve heart health.",
      context: "Health - Fitness"
    },
    {
      name: "strength training",
      ipa: "/streŋθ ˈtreɪ.nɪŋ/",
      wordIpa: "/streŋθ ˈtreɪ.nɪŋ/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/strength_training.mp3",
      type: "Noun",
      meaning: "rèn luyện sức mạnh",
      example: "Strength training increases muscle mass.",
      context: "Health - Fitness"
    },
    {
      name: "stretching",
      ipa: "/ˈstretʃ.ɪŋ/",
      wordIpa: "/ˈstretʃ.ɪŋ/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/stretching.mp3",
      type: "Noun",
      meaning: "sự giãn cơ",
      example: "Stretching before exercise helps prevent injury.",
      context: "Health - Fitness"
    },
    {
      name: "warm-up",
      ipa: "/ˈwɔːm.ʌp/",
      wordIpa: "/ˈwɔːm.ʌp/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/warm_up.mp3",
      type: "Noun",
      meaning: "khởi động",
      example: "A good warm-up prepares your body for activity.",
      context: "Health - Fitness"
    },
    {
      name: "fitness",
      ipa: "/ˈfɪt.nəs/",
      wordIpa: "/ˈfɪt.nəs/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/fitness.mp3",
      type: "Noun",
      meaning: "thể lực",
      example: "He improved his fitness by running every morning.",
      context: "Health - Fitness"
    },
    {
      name: "gym",
      ipa: "/dʒɪm/",
      wordIpa: "/dʒɪm/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/gym.mp3",
      type: "Noun",
      meaning: "phòng tập thể hình",
      example: "She goes to the gym three times a week.",
      context: "Health - Fitness"
    },
    {
      name: "yoga",
      ipa: "/ˈjəʊ.ɡə/",
      wordIpa: "/ˈjəʊ.ɡə/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/yoga.mp3",
      type: "Noun",
      meaning: "yoga",
      example: "Yoga helps improve flexibility and reduce stress.",
      context: "Health - Fitness"
    }
  ],
  [
    {
      name: "lifestyle",
      ipa: "/ˈlaɪf.staɪl/",
      wordIpa: "/ˈlaɪf.staɪl/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/lifestyle.mp3",
      type: "Noun",
      meaning: "lối sống",
      example: "A healthy lifestyle includes a balanced diet and exercise.",
      context: "Health - Lifestyle"
    },
    {
      name: "habit",
      ipa: "/ˈhæb.ɪt/",
      wordIpa: "/ˈhæb.ɪt/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/habit.mp3",
      type: "Noun",
      meaning: "thói quen",
      example: "He developed a habit of drinking water regularly.",
      context: "Health - Lifestyle"
    },
    {
      name: "diet",
      ipa: "/ˈdaɪ.ət/",
      wordIpa: "/ˈdaɪ.ət/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/diet.mp3",
      type: "Noun",
      meaning: "chế độ ăn",
      example: "She follows a strict vegetarian diet.",
      context: "Health - Lifestyle"
    },
    {
      name: "nutrition",
      ipa: "/njuːˈtrɪʃ.ən/",
      wordIpa: "/njuːˈtrɪʃ.ən/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/nutrition.mp3",
      type: "Noun",
      meaning: "dinh dưỡng",
      example: "Good nutrition is vital for child development.",
      context: "Health - Lifestyle"
    },
    {
      name: "healthy",
      ipa: "/ˈhel.θi/",
      wordIpa: "/ˈhel.θi/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/healthy.mp3",
      type: "Adjective",
      meaning: "khoẻ mạnh",
      example: "She tries to eat healthy meals every day.",
      context: "Health - Lifestyle"
    },
    {
      name: "junk food",
      ipa: "/ˈdʒʌŋk fuːd/",
      wordIpa: "/ˈdʒʌŋk fuːd/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/junk_food.mp3",
      type: "Noun",
      meaning: "đồ ăn vặt, không lành mạnh",
      example: "Avoid eating too much junk food.",
      context: "Health - Lifestyle"
    },
    {
      name: "overweight",
      ipa: "/ˌəʊ.vəˈweɪt/",
      wordIpa: "/ˌəʊ.vəˈweɪt/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/overweight.mp3",
      type: "Adjective",
      meaning: "thừa cân",
      example: "Being overweight can increase the risk of disease.",
      context: "Health - Lifestyle"
    },
    {
      name: "smoking",
      ipa: "/ˈsməʊ.kɪŋ/",
      wordIpa: "/ˈsməʊ.kɪŋ/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/smoking.mp3",
      type: "Noun",
      meaning: "việc hút thuốc",
      example: "Smoking is a major cause of lung cancer.",
      context: "Health - Lifestyle"
    },
    {
      name: "alcohol",
      ipa: "/ˈæl.kə.hɒl/",
      wordIpa: "/ˈæl.kə.hɒl/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/alcohol.mp3",
      type: "Noun",
      meaning: "rượu, cồn",
      example: "Excessive alcohol consumption is harmful to health.",
      context: "Health - Lifestyle"
    },
    {
      name: "stress",
      ipa: "/stres/",
      wordIpa: "/stres/",
      file: "/main/projects/english-courses/assets/data/ielts/health/audio/stress.mp3",
      type: "Noun",
      meaning: "căng thẳng",
      example: "Chronic stress can affect your immune system.",
      context: "Health - Lifestyle"
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