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
      name: "education",
      ipa: "/ˌedʒʊˈkeɪʃən/",
      wordIpa: "/ˌedʒʊˈkeɪʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/education.mp3",
      type: "Noun",
      meaning: "giáo dục",
      example: "Education is the key to success.",
      context: "Noun"
    },
    {
      name: "school",
      ipa: "/skuːl/",
      wordIpa: "/skuːl/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/school.mp3",
      type: "Noun",
      meaning: "trường học",
      example: "She goes to school by bus.",
      context: "Noun"
    },
    {
      name: "student",
      ipa: "/ˈstjuːdənt/",
      wordIpa: "/ˈstjuːdənt/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/student.mp3",
      type: "Noun",
      meaning: "học sinh, sinh viên",
      example: "The student passed the exam.",
      context: "Noun"
    },
    {
      name: "teacher",
      ipa: "/ˈtiːtʃə/",
      wordIpa: "/ˈtiːtʃə/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/teacher.mp3",
      type: "Noun",
      meaning: "giáo viên",
      example: "Her teacher is very kind.",
      context: "Noun"
    },
    {
      name: "classroom",
      ipa: "/ˈklɑːsruːm/",
      wordIpa: "/ˈklɑːsruːm/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/classroom.mp3",
      type: "Noun",
      meaning: "lớp học",
      example: "The classroom is large and bright.",
      context: "Noun"
    },
    {
      name: "lesson",
      ipa: "/ˈlesən/",
      wordIpa: "/ˈlesən/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/lesson.mp3",
      type: "Noun",
      meaning: "bài học",
      example: "Today's lesson is about history.",
      context: "Noun"
    },
    {
      name: "subject",
      ipa: "/ˈsʌbdʒɪkt/",
      wordIpa: "/ˈsʌbdʒɪkt/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/subject.mp3",
      type: "Noun",
      meaning: "môn học",
      example: "Math is her favorite subject.",
      context: "Noun"
    },
    {
      name: "curriculum",
      ipa: "/kəˈrɪkjʊləm/",
      wordIpa: "/kəˈrɪkjʊləm/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/curriculum.mp3",
      type: "Noun",
      meaning: "chương trình học",
      example: "The curriculum is updated annually.",
      context: "Noun"
    },
    {
      name: "syllabus",
      ipa: "/ˈsɪləbəs/",
      wordIpa: "/ˈsɪləbəs/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/syllabus.mp3",
      type: "Noun",
      meaning: "giáo trình",
      example: "Check the syllabus for exam dates.",
      context: "Noun"
    },
    {
      name: "homework",
      ipa: "/ˈhəʊmwɜːk/",
      wordIpa: "/ˈhəʊmwɜːk/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/homework.mp3",
      type: "Noun",
      meaning: "bài tập về nhà",
      example: "He always does his homework on time.",
      context: "Noun"
    }
  ]
  ,
  [
    {
      name: "assignment",
      ipa: "/əˈsaɪnmənt/",
      wordIpa: "/əˈsaɪnmənt/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/assignment.mp3",
      type: "Noun",
      meaning: "bài tập",
      example: "She finished her assignment before class.",
      context: "Noun"
    },
    {
      name: "exam",
      ipa: "/ɪɡˈzæm/",
      wordIpa: "/ɪɡˈzæm/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/exam.mp3",
      type: "Noun",
      meaning: "kỳ thi",
      example: "The exam will be held next week.",
      context: "Noun"
    },
    {
      name: "test",
      ipa: "/test/",
      wordIpa: "/test/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/test.mp3",
      type: "Noun",
      meaning: "bài kiểm tra",
      example: "He scored well on the test.",
      context: "Noun"
    },
    {
      name: "degree",
      ipa: "/dɪˈɡriː/",
      wordIpa: "/dɪˈɡriː/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/degree.mp3",
      type: "Noun",
      meaning: "bằng cấp",
      example: "She has a degree in biology.",
      context: "Noun"
    },
    {
      name: "qualification",
      ipa: "/ˌkwɒlɪfɪˈkeɪʃən/",
      wordIpa: "/ˌkwɒlɪfɪˈkeɪʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/qualification.mp3",
      type: "Noun",
      meaning: "trình độ chuyên môn",
      example: "He has the right qualifications for the job.",
      context: "Noun"
    },
    {
      name: "scholarship",
      ipa: "/ˈskɒləʃɪp/",
      wordIpa: "/ˈskɒləʃɪp/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/scholarship.mp3",
      type: "Noun",
      meaning: "học bổng",
      example: "She won a scholarship to study abroad.",
      context: "Noun"
    },
    {
      name: "grant",
      ipa: "/ɡrɑːnt/",
      wordIpa: "/ɡrɑːnt/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/grant.mp3",
      type: "Noun",
      meaning: "khoản trợ cấp",
      example: "He received a research grant.",
      context: "Noun"
    },
    {
      name: "tuition",
      ipa: "/tjuˈɪʃən/",
      wordIpa: "/tjuˈɪʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/tuition.mp3",
      type: "Noun",
      meaning: "học phí",
      example: "Tuition fees have increased this year.",
      context: "Noun"
    },
    {
      name: "lecture",
      ipa: "/ˈlektʃə/",
      wordIpa: "/ˈlektʃə/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/lecture.mp3",
      type: "Noun",
      meaning: "bài giảng",
      example: "He gave an interesting lecture on economics.",
      context: "Noun"
    },
    {
      name: "seminar",
      ipa: "/ˈsemɪnɑː/",
      wordIpa: "/ˈsemɪnɑː/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/seminar.mp3",
      type: "Noun",
      meaning: "hội thảo",
      example: "Students attended a seminar on study skills.",
      context: "Noun"
    }
  ]
  ,
  [
    {
      name: "tutorial",
      ipa: "/tjuːˈtɔːriəl/",
      wordIpa: "/tjuːˈtɔːriəl/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/tutorial.mp3",
      type: "Noun",
      meaning: "buổi hướng dẫn",
      example: "The tutorial helped me understand the topic.",
      context: "Noun"
    },
    {
      name: "research",
      ipa: "/rɪˈsɜːtʃ/",
      wordIpa: "/rɪˈsɜːtʃ/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/research.mp3",
      type: "Noun",
      meaning: "nghiên cứu",
      example: "He is doing research in physics.",
      context: "Noun"
    },
    {
      name: "thesis",
      ipa: "/ˈθiːsɪs/",
      wordIpa: "/ˈθiːsɪs/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/thesis.mp3",
      type: "Noun",
      meaning: "luận văn",
      example: "She is writing her master's thesis.",
      context: "Noun"
    },
    {
      name: "dissertation",
      ipa: "/ˌdɪsəˈteɪʃən/",
      wordIpa: "/ˌdɪsəˈteɪʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/dissertation.mp3",
      type: "Noun",
      meaning: "luận án",
      example: "His dissertation focuses on climate change.",
      context: "Noun"
    },
    {
      name: "faculty",
      ipa: "/ˈfækəlti/",
      wordIpa: "/ˈfækəlti/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/faculty.mp3",
      type: "Noun",
      meaning: "khoa (trường đại học)",
      example: "She works in the Science Faculty.",
      context: "Noun"
    },
    {
      name: "principal",
      ipa: "/ˈprɪnsəpəl/",
      wordIpa: "/ˈprɪnsəpəl/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/principal.mp3",
      type: "Noun",
      meaning: "hiệu trưởng",
      example: "The principal gave a speech.",
      context: "Noun"
    },
    {
      name: "headmaster",
      ipa: "/ˈhedˌmɑːstə/",
      wordIpa: "/ˈhedˌmɑːstə/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/headmaster.mp3",
      type: "Noun",
      meaning: "thầy hiệu trưởng",
      example: "The headmaster welcomed the parents.",
      context: "Noun"
    },
    {
      name: "pupil",
      ipa: "/ˈpjuːpəl/",
      wordIpa: "/ˈpjuːpəl/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/pupil.mp3",
      type: "Noun",
      meaning: "học sinh (trẻ em)",
      example: "Pupils should wear uniforms.",
      context: "Noun"
    },
    {
      name: "mentor",
      ipa: "/ˈmentɔː/",
      wordIpa: "/ˈmentɔː/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/mentor.mp3",
      type: "Noun",
      meaning: "người hướng dẫn",
      example: "She is my mentor at university.",
      context: "Noun"
    },
    {
      name: "internship",
      ipa: "/ˈɪntɜːnʃɪp/",
      wordIpa: "/ˈɪntɜːnʃɪp/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/internship.mp3",
      type: "Noun",
      meaning: "thực tập",
      example: "He is doing an internship at a bank.",
      context: "Noun"
    }
  ]
  ,
  [
    {
      name: "literacy",
      ipa: "/ˈlɪtərəsi/",
      wordIpa: "/ˈlɪtərəsi/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/literacy.mp3",
      type: "Noun",
      meaning: "sự biết chữ",
      example: "Literacy rates are improving.",
      context: "Noun"
    },
    {
      name: "numeracy",
      ipa: "/ˈnjuːmərəsi/",
      wordIpa: "/ˈnjuːmərəsi/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/numeracy.mp3",
      type: "Noun",
      meaning: "khả năng tính toán",
      example: "Numeracy is essential for daily life.",
      context: "Noun"
    },
    {
      name: "discipline",
      ipa: "/ˈdɪsəplɪn/",
      wordIpa: "/ˈdɪsəplɪn/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/discipline.mp3",
      type: "Noun",
      meaning: "kỷ luật",
      example: "Discipline is important in schools.",
      context: "Noun"
    },
    {
      name: "attendance",
      ipa: "/əˈtendəns/",
      wordIpa: "/əˈtendəns/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/attendance.mp3",
      type: "Noun",
      meaning: "sự tham dự",
      example: "Attendance is mandatory for all students.",
      context: "Noun"
    },
    {
      name: "enrolment",
      ipa: "/ɪnˈrəʊlmənt/",
      wordIpa: "/ɪnˈrəʊlmənt/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/enrolment.mp3",
      type: "Noun",
      meaning: "sự ghi danh",
      example: "Enrolment for the course is now open.",
      context: "Noun"
    },
    {
      name: "dropout",
      ipa: "/ˈdrɒpaʊt/",
      wordIpa: "/ˈdrɒpaʊt/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/dropout.mp3",
      type: "Noun",
      meaning: "người bỏ học",
      example: "He became a successful entrepreneur despite being a dropout.",
      context: "Noun"
    },
    {
      name: "tuition fee",
      ipa: "/tjuˈɪʃən fiː/",
      wordIpa: "/tjuˈɪʃən fiː/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/tuition-fee.mp3",
      type: "Noun",
      meaning: "học phí",
      example: "Tuition fees vary by course.",
      context: "Noun"
    },
    {
      name: "extracurricular",
      ipa: "/ˌekstrəkəˈrɪkjʊlə/",
      wordIpa: "/ˌekstrəkəˈrɪkjʊlə/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/extracurricular.mp3",
      type: "Adjective",
      meaning: "ngoại khóa",
      example: "She takes part in extracurricular activities.",
      context: "Adjective"
    },
    {
      name: "distance learning",
      ipa: "/ˈdɪstəns ˈlɜːnɪŋ/",
      wordIpa: "/ˈdɪstəns ˈlɜːnɪŋ/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/distance-learning.mp3",
      type: "Noun",
      meaning: "học từ xa",
      example: "Distance learning has become popular.",
      context: "Noun"
    },
    {
      name: "virtual classroom",
      ipa: "/ˈvɜːtjʊəl ˈklɑːsruːm/",
      wordIpa: "/ˈvɜːtjʊəl ˈklɑːsruːm/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/virtual-classroom.mp3",
      type: "Noun",
      meaning: "lớp học ảo",
      example: "Students interact in a virtual classroom.",
      context: "Noun"
    }
  ]
  ,
  [
    {
      name: "curriculum",
      ipa: "/kəˈrɪkjʊləm/",
      wordIpa: "/kəˈrɪkjʊləm/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/curriculum.mp3",
      type: "Noun",
      meaning: "chương trình giảng dạy",
      example: "The curriculum includes science and maths.",
      context: "Noun"
    },
    {
      name: "syllabus",
      ipa: "/ˈsɪləbəs/",
      wordIpa: "/ˈsɪləbəs/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/syllabus.mp3",
      type: "Noun",
      meaning: "đề cương môn học",
      example: "The syllabus outlines the course content.",
      context: "Noun"
    },
    {
      name: "module",
      ipa: "/ˈmɒdjuːl/",
      wordIpa: "/ˈmɒdjuːl/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/module.mp3",
      type: "Noun",
      meaning: "học phần",
      example: "This module focuses on communication skills.",
      context: "Noun"
    },
    {
      name: "lesson",
      ipa: "/ˈlesən/",
      wordIpa: "/ˈlesən/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/lesson.mp3",
      type: "Noun",
      meaning: "bài học",
      example: "Today's lesson is about photosynthesis.",
      context: "Noun"
    },
    {
      name: "curricular",
      ipa: "/kəˈrɪkjʊlər/",
      wordIpa: "/kəˈrɪkjʊlər/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/curricular.mp3",
      type: "Adjective",
      meaning: "thuộc về chương trình học",
      example: "Curricular activities are well planned.",
      context: "Adjective"
    },
    {
      name: "academic",
      ipa: "/ˌækəˈdemɪk/",
      wordIpa: "/ˌækəˈdemɪk/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/academic.mp3",
      type: "Adjective",
      meaning: "học thuật",
      example: "She achieved excellent academic results.",
      context: "Adjective"
    },
    {
      name: "scholarly",
      ipa: "/ˈskɒlərli/",
      wordIpa: "/ˈskɒlərli/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/scholarly.mp3",
      type: "Adjective",
      meaning: "học giả, nghiên cứu",
      example: "His scholarly work was published widely.",
      context: "Adjective"
    },
    {
      name: "pedagogy",
      ipa: "/ˈpedəɡɒdʒi/",
      wordIpa: "/ˈpedəɡɒdʒi/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/pedagogy.mp3",
      type: "Noun",
      meaning: "phương pháp giảng dạy",
      example: "Modern pedagogy encourages interaction.",
      context: "Noun"
    },
    {
      name: "methodology",
      ipa: "/ˌmeθəˈdɒlədʒi/",
      wordIpa: "/ˌmeθəˈdɒlədʒi/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/methodology.mp3",
      type: "Noun",
      meaning: "phương pháp luận",
      example: "His research methodology is rigorous.",
      context: "Noun"
    },
    {
      name: "approach",
      ipa: "/əˈprəʊtʃ/",
      wordIpa: "/əˈprəʊtʃ/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/approach.mp3",
      type: "Noun",
      meaning: "phương pháp tiếp cận",
      example: "Their teaching approach is innovative.",
      context: "Noun"
    }
  ]
  ,
  [
    {
      name: "undergraduate",
      ipa: "/ˌʌndəˈɡrædʒʊət/",
      wordIpa: "/ˌʌndəˈɡrædʒʊət/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/undergraduate.mp3",
      type: "Noun",
      meaning: "sinh viên chưa tốt nghiệp",
      example: "She is an undergraduate student.",
      context: "Noun"
    },
    {
      name: "postgraduate",
      ipa: "/ˌpəʊstˈɡrædʒʊət/",
      wordIpa: "/ˌpəʊstˈɡrædʒʊət/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/postgraduate.mp3",
      type: "Noun",
      meaning: "sinh viên sau đại học",
      example: "He is doing postgraduate studies.",
      context: "Noun"
    },
    {
      name: "freshman",
      ipa: "/ˈfreʃmən/",
      wordIpa: "/ˈfreʃmən/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/freshman.mp3",
      type: "Noun",
      meaning: "sinh viên năm nhất",
      example: "Freshmen often need guidance.",
      context: "Noun"
    },
    {
      name: "sophomore",
      ipa: "/ˈsɒfəmɔː/",
      wordIpa: "/ˈsɒfəmɔː/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/sophomore.mp3",
      type: "Noun",
      meaning: "sinh viên năm hai",
      example: "He is a sophomore this year.",
      context: "Noun"
    },
    {
      name: "junior",
      ipa: "/ˈdʒuːniə/",
      wordIpa: "/ˈdʒuːniə/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/junior.mp3",
      type: "Noun",
      meaning: "sinh viên năm ba",
      example: "Juniors prepare for internships.",
      context: "Noun"
    },
    {
      name: "senior",
      ipa: "/ˈsiːniə/",
      wordIpa: "/ˈsiːniə/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/senior.mp3",
      type: "Noun",
      meaning: "sinh viên năm cuối",
      example: "Seniors focus on their thesis.",
      context: "Noun"
    },
    {
      name: "graduate",
      ipa: "/ˈɡrædʒuət/",
      wordIpa: "/ˈɡrædʒuət/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/graduate.mp3",
      type: "Noun",
      meaning: "người đã tốt nghiệp",
      example: "Graduates often seek jobs abroad.",
      context: "Noun"
    },
    {
      name: "alumnus",
      ipa: "/əˈlʌmnəs/",
      wordIpa: "/əˈlʌmnəs/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/alumnus.mp3",
      type: "Noun",
      meaning: "cựu sinh viên",
      example: "He is an alumnus of this university.",
      context: "Noun"
    },
    {
      name: "fellowship",
      ipa: "/ˈfeləʊʃɪp/",
      wordIpa: "/ˈfeləʊʃɪp/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/fellowship.mp3",
      type: "Noun",
      meaning: "học bổng nghiên cứu",
      example: "She won a research fellowship.",
      context: "Noun"
    },
    {
      name: "valedictorian",
      ipa: "/ˌvælɪdɪkˈtɔːriən/",
      wordIpa: "/ˌvælɪdɪkˈtɔːriən/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/valedictorian.mp3",
      type: "Noun",
      meaning: "thủ khoa phát biểu",
      example: "The valedictorian gave an inspiring speech.",
      context: "Noun"
    }
  ]
  ,
  [
    {
      name: "enroll",
      ipa: "/ɪnˈrəʊl/",
      wordIpa: "/ɪnˈrəʊl/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/enroll.mp3",
      type: "Verb",
      meaning: "đăng ký nhập học",
      example: "She decided to enroll in the course.",
      context: "Verb"
    },
    {
      name: "register",
      ipa: "/ˈredʒɪstə/",
      wordIpa: "/ˈredʒɪstə/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/register.mp3",
      type: "Verb",
      meaning: "đăng ký",
      example: "Students must register before the deadline.",
      context: "Verb"
    },
    {
      name: "admission",
      ipa: "/ədˈmɪʃən/",
      wordIpa: "/ədˈmɪʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/admission.mp3",
      type: "Noun",
      meaning: "sự nhập học",
      example: "She received her admission letter.",
      context: "Noun"
    },
    {
      name: "application",
      ipa: "/ˌæplɪˈkeɪʃən/",
      wordIpa: "/ˌæplɪˈkeɪʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/application.mp3",
      type: "Noun",
      meaning: "đơn xin học",
      example: "His application was successful.",
      context: "Noun"
    },
    {
      name: "scholarship",
      ipa: "/ˈskɒləʃɪp/",
      wordIpa: "/ˈskɒləʃɪp/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/scholarship.mp3",
      type: "Noun",
      meaning: "học bổng",
      example: "She was awarded a full scholarship.",
      context: "Noun"
    },
    {
      name: "grant",
      ipa: "/ɡrɑːnt/",
      wordIpa: "/ɡrɑːnt/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/grant.mp3",
      type: "Noun",
      meaning: "khoản trợ cấp",
      example: "The university offers research grants.",
      context: "Noun"
    },
    {
      name: "tuition",
      ipa: "/tjuˈɪʃən/",
      wordIpa: "/tjuˈɪʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/tuition.mp3",
      type: "Noun",
      meaning: "học phí",
      example: "Tuition fees have increased this year.",
      context: "Noun"
    },
    {
      name: "fee",
      ipa: "/fiː/",
      wordIpa: "/fiː/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/fee.mp3",
      type: "Noun",
      meaning: "phí",
      example: "Students must pay an annual fee.",
      context: "Noun"
    },
    {
      name: "funding",
      ipa: "/ˈfʌndɪŋ/",
      wordIpa: "/ˈfʌndɪŋ/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/funding.mp3",
      type: "Noun",
      meaning: "nguồn tài trợ",
      example: "Funding for education is essential.",
      context: "Noun"
    },
    {
      name: "sponsor",
      ipa: "/ˈspɒnsə/",
      wordIpa: "/ˈspɒnsə/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/sponsor.mp3",
      type: "Noun",
      meaning: "nhà tài trợ",
      example: "She found a sponsor for her studies.",
      context: "Noun"
    }
  ]
  ,
  [
    {
      name: "certificate",
      ipa: "/səˈtɪfɪkət/",
      wordIpa: "/səˈtɪfɪkət/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/certificate.mp3",
      type: "Noun",
      meaning: "chứng chỉ",
      example: "She received a teaching certificate.",
      context: "Noun"
    },
    {
      name: "degree",
      ipa: "/dɪˈɡriː/",
      wordIpa: "/dɪˈɡriː/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/degree.mp3",
      type: "Noun",
      meaning: "bằng cấp",
      example: "He has a master's degree.",
      context: "Noun"
    },
    {
      name: "diploma",
      ipa: "/dɪˈpləʊmə/",
      wordIpa: "/dɪˈpləʊmə/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/diploma.mp3",
      type: "Noun",
      meaning: "văn bằng",
      example: "She framed her diploma.",
      context: "Noun"
    },
    {
      name: "qualification",
      ipa: "/ˌkwɒlɪfɪˈkeɪʃən/",
      wordIpa: "/ˌkwɒlɪfɪˈkeɪʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/qualification.mp3",
      type: "Noun",
      meaning: "trình độ chuyên môn",
      example: "He has teaching qualifications.",
      context: "Noun"
    },
    {
      name: "credential",
      ipa: "/krəˈdenʃəl/",
      wordIpa: "/krəˈdenʃəl/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/credential.mp3",
      type: "Noun",
      meaning: "chứng chỉ năng lực",
      example: "His credentials impressed the employer.",
      context: "Noun"
    },
    {
      name: "transcript",
      ipa: "/ˈtrænskrɪpt/",
      wordIpa: "/ˈtrænskrɪpt/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/transcript.mp3",
      type: "Noun",
      meaning: "bảng điểm",
      example: "She submitted her transcript.",
      context: "Noun"
    },
    {
      name: "honours",
      ipa: "/ˈɒnəz/",
      wordIpa: "/ˈɒnəz/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/honours.mp3",
      type: "Noun",
      meaning: "học vị danh dự",
      example: "He graduated with honours.",
      context: "Noun"
    },
    {
      name: "distinction",
      ipa: "/dɪˈstɪŋkʃən/",
      wordIpa: "/dɪˈstɪŋkʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/distinction.mp3",
      type: "Noun",
      meaning: "bằng loại giỏi",
      example: "She got a degree with distinction.",
      context: "Noun"
    },
    {
      name: "merit",
      ipa: "/ˈmerɪt/",
      wordIpa: "/ˈmerɪt/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/merit.mp3",
      type: "Noun",
      meaning: "thành tích",
      example: "His merit was recognised.",
      context: "Noun"
    },
    {
      name: "pass",
      ipa: "/pɑːs/",
      wordIpa: "/pɑːs/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/pass.mp3",
      type: "Noun",
      meaning: "đạt",
      example: "She got a pass in all subjects.",
      context: "Noun"
    }
  ]
  ,
  [
    {
      name: "lecture",
      ipa: "/ˈlektʃə/",
      wordIpa: "/ˈlektʃə/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/lecture.mp3",
      type: "Noun",
      meaning: "bài giảng",
      example: "He gave an interesting lecture.",
      context: "Noun"
    },
    {
      name: "seminar",
      ipa: "/ˈsemɪnɑː/",
      wordIpa: "/ˈsemɪnɑː/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/seminar.mp3",
      type: "Noun",
      meaning: "hội thảo",
      example: "She attended a seminar on education.",
      context: "Noun"
    },
    {
      name: "workshop",
      ipa: "/ˈwɜːkʃɒp/",
      wordIpa: "/ˈwɜːkʃɒp/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/workshop.mp3",
      type: "Noun",
      meaning: "hội thảo thực hành",
      example: "The workshop was very useful.",
      context: "Noun"
    },
    {
      name: "tutorial",
      ipa: "/tjuːˈtɔːriəl/",
      wordIpa: "/tjuːˈtɔːriəl/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/tutorial.mp3",
      type: "Noun",
      meaning: "buổi hướng dẫn",
      example: "Students have weekly tutorials.",
      context: "Noun"
    },
    {
      name: "syllabus",
      ipa: "/ˈsɪləbəs/",
      wordIpa: "/ˈsɪləbəs/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/syllabus.mp3",
      type: "Noun",
      meaning: "giáo trình",
      example: "The syllabus covers all topics.",
      context: "Noun"
    },
    {
      name: "curriculum",
      ipa: "/kəˈrɪkjʊləm/",
      wordIpa: "/kəˈrɪkjʊləm/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/curriculum.mp3",
      type: "Noun",
      meaning: "chương trình học",
      example: "They updated the curriculum.",
      context: "Noun"
    },
    {
      name: "module",
      ipa: "/ˈmɒdjuːl/",
      wordIpa: "/ˈmɒdjuːl/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/module.mp3",
      type: "Noun",
      meaning: "học phần",
      example: "This module is compulsory.",
      context: "Noun"
    },
    {
      name: "credit",
      ipa: "/ˈkredɪt/",
      wordIpa: "/ˈkredɪt/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/credit.mp3",
      type: "Noun",
      meaning: "tín chỉ",
      example: "This course gives you 3 credits.",
      context: "Noun"
    },
    {
      name: "semester",
      ipa: "/sɪˈmestə/",
      wordIpa: "/sɪˈmestə/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/semester.mp3",
      type: "Noun",
      meaning: "học kỳ",
      example: "The semester starts in September.",
      context: "Noun"
    },
    {
      name: "term",
      ipa: "/tɜːm/",
      wordIpa: "/tɜːm/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/term.mp3",
      type: "Noun",
      meaning: "học kỳ",
      example: "Each term lasts three months.",
      context: "Noun"
    }
  ]
  ,
  [
    {
      name: "assessment",
      ipa: "/əˈsesmənt/",
      wordIpa: "/əˈsesmənt/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/assessment.mp3",
      type: "Noun",
      meaning: "bài kiểm tra, đánh giá",
      example: "Continuous assessment is used here.",
      context: "Noun"
    },
    {
      name: "assignment",
      ipa: "/əˈsaɪnmənt/",
      wordIpa: "/əˈsaɪnmənt/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/assignment.mp3",
      type: "Noun",
      meaning: "bài tập",
      example: "He submitted the assignment late.",
      context: "Noun"
    },
    {
      name: "project",
      ipa: "/ˈprɒdʒekt/",
      wordIpa: "/ˈprɒdʒekt/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/project.mp3",
      type: "Noun",
      meaning: "dự án",
      example: "Students worked on a group project.",
      context: "Noun"
    },
    {
      name: "dissertation",
      ipa: "/ˌdɪsəˈteɪʃən/",
      wordIpa: "/ˌdɪsəˈteɪʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/dissertation.mp3",
      type: "Noun",
      meaning: "luận văn",
      example: "He is writing his dissertation.",
      context: "Noun"
    },
    {
      name: "thesis",
      ipa: "/ˈθiːsɪs/",
      wordIpa: "/ˈθiːsɪs/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/thesis.mp3",
      type: "Noun",
      meaning: "luận án",
      example: "Her thesis was well received.",
      context: "Noun"
    },
    {
      name: "exam",
      ipa: "/ɪɡˈzæm/",
      wordIpa: "/ɪɡˈzæm/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/exam.mp3",
      type: "Noun",
      meaning: "kỳ thi",
      example: "The exam will be next week.",
      context: "Noun"
    },
    {
      name: "quiz",
      ipa: "/kwɪz/",
      wordIpa: "/kwɪz/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/quiz.mp3",
      type: "Noun",
      meaning: "bài kiểm tra ngắn",
      example: "They had a surprise quiz.",
      context: "Noun"
    },
    {
      name: "grade",
      ipa: "/ɡreɪd/",
      wordIpa: "/ɡreɪd/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/grade.mp3",
      type: "Noun",
      meaning: "điểm số",
      example: "She got a high grade.",
      context: "Noun"
    },
    {
      name: "score",
      ipa: "/skɔː/",
      wordIpa: "/skɔː/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/score.mp3",
      type: "Noun",
      meaning: "điểm",
      example: "His test score was excellent.",
      context: "Noun"
    },
    {
      name: "result",
      ipa: "/rɪˈzʌlt/",
      wordIpa: "/rɪˈzʌlt/",
      file: "/main/projects/english-courses/assets/data/ielts/education/audio/result.mp3",
      type: "Noun",
      meaning: "kết quả",
      example: "She was happy with her results.",
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