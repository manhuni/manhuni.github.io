const audioData = [
  [ // Group 1: Environment
    {
      name: "environment",
      ipa: "/ɪnˈvaɪrənmənt/",
      wordIpa: "/ɪnˈvaɪrənmənt/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/environment.mp3",
      type: "Noun",
      meaning: "môi trường",
      example: "We must protect the environment for future generations.",
      context: "Noun"
    },
    {
      name: "pollution",
      ipa: "/pəˈluːʃən/",
      wordIpa: "/pəˈluːʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/pollution.mp3",
      type: "Noun",
      meaning: "ô nhiễm",
      example: "Air pollution is a serious problem in big cities.",
      context: "Noun"
    },
    {
      name: "climate",
      ipa: "/ˈklaɪmət/",
      wordIpa: "/ˈklaɪmət/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/climate.mp3",
      type: "Noun",
      meaning: "khí hậu",
      example: "The climate is changing due to global warming.",
      context: "Noun"
    },
    {
      name: "sustainable",
      ipa: "/səˈsteɪnəbl/",
      wordIpa: "/səˈsteɪnəbl/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/sustainable.mp3",
      type: "Adjective",
      meaning: "bền vững",
      example: "We should use sustainable energy sources.",
      context: "Adjective"
    },
    {
      name: "biodiversity",
      ipa: "/ˌbaɪoʊdaɪˈvɜːrsəti/",
      wordIpa: "/ˌbaɪoʊdaɪˈvɜːrsəti/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/biodiversity.mp3",
      type: "Noun",
      meaning: "đa dạng sinh học",
      example: "Deforestation threatens biodiversity.",
      context: "Noun"
    },
    {
      name: "deforestation",
      ipa: "/diːˌfɔːrɪˈsteɪʃən/",
      wordIpa: "/diːˌfɔːrɪˈsteɪʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/deforestation.mp3",
      type: "Noun",
      meaning: "phá rừng",
      example: "Deforestation causes loss of habitat for wildlife.",
      context: "Noun"
    },
    {
      name: "recycle",
      ipa: "/ˌriːˈsaɪkl/",
      wordIpa: "/ˌriːˈsaɪkl/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/recycle.mp3",
      type: "Verb",
      meaning: "tái chế",
      example: "We should recycle paper and plastic.",
      context: "Verb"
    },
    {
      name: "renewable",
      ipa: "/rɪˈnuːəbl/",
      wordIpa: "/rɪˈnuːəbl/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/renewable.mp3",
      type: "Adjective",
      meaning: "tái tạo được",
      example: "Wind and solar power are renewable sources of energy.",
      context: "Adjective"
    },
    {
      name: "conservation",
      ipa: "/ˌkɒnsərˈveɪʃən/",
      wordIpa: "/ˌkɒnsərˈveɪʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/conservation.mp3",
      type: "Noun",
      meaning: "sự bảo tồn",
      example: "Conservation of water is important in dry areas.",
      context: "Noun"
    },
    {
      name: "greenhouse",
      ipa: "/ˈɡriːnˌhaʊs/",
      wordIpa: "/ˈɡriːnˌhaʊs/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/greenhouse.mp3",
      type: "Noun",
      meaning: "nhà kính; hiệu ứng nhà kính",
      example: "Greenhouse gases contribute to global warming.",
      context: "Noun"
    }
  ],
  [ // Group 2: Energy
    {
      name: "energy",
      ipa: "/ˈɛnərdʒi/",
      wordIpa: "/ˈɛnərdʒi/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/energy.mp3",
      type: "Noun",
      meaning: "năng lượng",
      example: "We need to find alternative sources of energy.",
      context: "Noun"
    },
    {
      name: "fossil",
      ipa: "/ˈfɒsəl/",
      wordIpa: "/ˈfɒsəl/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/fossil.mp3",
      type: "Noun",
      meaning: "hóa thạch",
      example: "Fossil fuels are a major source of carbon emissions.",
      context: "Noun"
    },
    {
      name: "fuel",
      ipa: "/fjʊəl/",
      wordIpa: "/fjʊəl/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/fuel.mp3",
      type: "Noun",
      meaning: "nhiên liệu",
      example: "We need to reduce our dependence on fossil fuels.",
      context: "Noun"
    },
    {
      name: "solar",
      ipa: "/ˈsoʊlər/",
      wordIpa: "/ˈsoʊlər/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/solar.mp3",
      type: "Adjective",
      meaning: "thuộc về mặt trời",
      example: "Solar energy is a clean source of power.",
      context: "Adjective"
    },
    {
      name: "wind",
      ipa: "/wɪnd/",
      wordIpa: "/wɪnd/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/wind.mp3",
      type: "Noun",
      meaning: "gió",
      example: "Wind power is becoming more popular.",
      context: "Noun"
    },
    {
      name: "power",
      ipa: "/ˈpaʊər/",
      wordIpa: "/ˈpaʊər/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/power.mp3",
      type: "Noun",
      meaning: "năng lượng, điện năng",
      example: "Nuclear power can reduce fossil fuel use.",
      context: "Noun"
    },
    {
      name: "electricity",
      ipa: "/ɪˌlɛkˈtrɪsəti/",
      wordIpa: "/ɪˌlɛkˈtrɪsəti/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/electricity.mp3",
      type: "Noun",
      meaning: "điện",
      example: "The electricity supply must be reliable.",
      context: "Noun"
    },
    {
      name: "nuclear",
      ipa: "/ˈnjuːkliər/",
      wordIpa: "/ˈnjuːkliər/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/nuclear.mp3",
      type: "Adjective",
      meaning: "hạt nhân",
      example: "Nuclear energy is controversial but efficient.",
      context: "Adjective"
    },
    {
      name: "efficient",
      ipa: "/ɪˈfɪʃənt/",
      wordIpa: "/ɪˈfɪʃənt/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/efficient.mp3",
      type: "Adjective",
      meaning: "hiệu quả",
      example: "Energy-efficient appliances save money.",
      context: "Adjective"
    },
    {
      name: "consume",
      ipa: "/kənˈsjuːm/",
      wordIpa: "/kənˈsjuːm/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/consume.mp3",
      type: "Verb",
      meaning: "tiêu thụ",
      example: "We consume too much energy every day.",
      context: "Verb"
    }
  ],
  [ // Group 3: Waste
    {
      name: "waste",
      ipa: "/weɪst/",
      wordIpa: "/weɪst/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/waste.mp3",
      type: "Noun",
      meaning: "rác thải, lãng phí",
      example: "We produce too much waste every day.",
      context: "Noun"
    },
    {
      name: "garbage",
      ipa: "/ˈɡɑːrbɪdʒ/",
      wordIpa: "/ˈɡɑːrbɪdʒ/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/garbage.mp3",
      type: "Noun",
      meaning: "rác",
      example: "Put your garbage in the bin.",
      context: "Noun"
    },
    {
      name: "litter",
      ipa: "/ˈlɪtər/",
      wordIpa: "/ˈlɪtər/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/litter.mp3",
      type: "Noun",
      meaning: "rác vụn (xả bừa bãi)",
      example: "Do not throw litter on the street.",
      context: "Noun"
    },
    {
      name: "landfill",
      ipa: "/ˈlændˌfɪl/",
      wordIpa: "/ˈlændˌfɪl/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/landfill.mp3",
      type: "Noun",
      meaning: "bãi chôn lấp rác",
      example: "Landfills are filling up quickly.",
      context: "Noun"
    },
    {
      name: "dispose",
      ipa: "/dɪˈspoʊz/",
      wordIpa: "/dɪˈspoʊz/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/dispose.mp3",
      type: "Verb",
      meaning: "vứt bỏ",
      example: "Please dispose of waste properly.",
      context: "Verb"
    },
    {
      name: "decompose",
      ipa: "/ˌdiːkəmˈpoʊz/",
      wordIpa: "/ˌdiːkəmˈpoʊz/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/decompose.mp3",
      type: "Verb",
      meaning: "phân hủy",
      example: "Organic waste decomposes naturally.",
      context: "Verb"
    },
    {
      name: "incinerate",
      ipa: "/ɪnˈsɪnəˌreɪt/",
      wordIpa: "/ɪnˈsɪnəˌreɪt/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/incinerate.mp3",
      type: "Verb",
      meaning: "thiêu hủy",
      example: "Some cities incinerate their waste.",
      context: "Verb"
    },
    {
      name: "hazardous",
      ipa: "/ˈhæzərdəs/",
      wordIpa: "/ˈhæzərdəs/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/hazardous.mp3",
      type: "Adjective",
      meaning: "nguy hại",
      example: "Hazardous waste must be handled carefully.",
      context: "Adjective"
    },
    {
      name: "compost",
      ipa: "/ˈkɒmpɒst/",
      wordIpa: "/ˈkɒmpɒst/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/compost.mp3",
      type: "Noun",
      meaning: "phân hữu cơ",
      example: "We use compost to fertilize the garden.",
      context: "Noun"
    },
    {
      name: "reuse",
      ipa: "/ˌriːˈjuːz/",
      wordIpa: "/ˌriːˈjuːz/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/reuse.mp3",
      type: "Verb",
      meaning: "tái sử dụng",
      example: "Reuse plastic bags to reduce waste.",
      context: "Verb"
    }
  ],
  [ // Group 4: Nature
    {
      name: "nature",
      ipa: "/ˈneɪtʃər/",
      wordIpa: "/ˈneɪtʃər/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/nature.mp3",
      type: "Noun",
      meaning: "thiên nhiên",
      example: "I love spending time in nature.",
      context: "Noun"
    },
    {
      name: "wildlife",
      ipa: "/ˈwaɪldˌlaɪf/",
      wordIpa: "/ˈwaɪldˌlaɪf/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/wildlife.mp3",
      type: "Noun",
      meaning: "động vật hoang dã",
      example: "Wildlife conservation is crucial.",
      context: "Noun"
    },
    {
      name: "forest",
      ipa: "/ˈfɒrɪst/",
      wordIpa: "/ˈfɒrɪst/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/forest.mp3",
      type: "Noun",
      meaning: "rừng",
      example: "Many animals live in the forest.",
      context: "Noun"
    },
    {
      name: "habitat",
      ipa: "/ˈhæbɪˌtæt/",
      wordIpa: "/ˈhæbɪˌtæt/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/habitat.mp3",
      type: "Noun",
      meaning: "môi trường sống",
      example: "Logging destroys animal habitats.",
      context: "Noun"
    },
    {
      name: "ecosystem",
      ipa: "/ˈiːkoʊˌsɪstəm/",
      wordIpa: "/ˈiːkoʊˌsɪstəm/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/ecosystem.mp3",
      type: "Noun",
      meaning: "hệ sinh thái",
      example: "Coral reefs are fragile ecosystems.",
      context: "Noun"
    },
    {
      name: "species",
      ipa: "/ˈspiːʃiːz/",
      wordIpa: "/ˈspiːʃiːz/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/species.mp3",
      type: "Noun",
      meaning: "loài",
      example: "Many species are endangered.",
      context: "Noun"
    },
    {
      name: "flora",
      ipa: "/ˈflɔːrə/",
      wordIpa: "/ˈflɔːrə/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/flora.mp3",
      type: "Noun",
      meaning: "thực vật",
      example: "The rainforest is rich in flora.",
      context: "Noun"
    },
    {
      name: "fauna",
      ipa: "/ˈfɔːnə/",
      wordIpa: "/ˈfɔːnə/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/fauna.mp3",
      type: "Noun",
      meaning: "động vật",
      example: "Australia has unique fauna.",
      context: "Noun"
    },
    {
      name: "wilderness",
      ipa: "/ˈwɪldərnəs/",
      wordIpa: "/ˈwɪldərnəs/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/wilderness.mp3",
      type: "Noun",
      meaning: "vùng hoang dã",
      example: "They went hiking in the wilderness.",
      context: "Noun"
    },
    {
      name: "preserve",
      ipa: "/prɪˈzɜːrv/",
      wordIpa: "/prɪˈzɜːrv/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/preserve.mp3",
      type: "Verb",
      meaning: "bảo tồn",
      example: "We must preserve natural resources.",
      context: "Verb"
    }
  ],
  [ // Group 5: Disaster
    {
      name: "disaster",
      ipa: "/dɪˈzæstər/",
      wordIpa: "/dɪˈzæstər/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/disaster.mp3",
      type: "Noun",
      meaning: "thảm họa",
      example: "The earthquake was a terrible disaster.",
      context: "Noun"
    },
    {
      name: "flood",
      ipa: "/flʌd/",
      wordIpa: "/flʌd/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/flood.mp3",
      type: "Noun",
      meaning: "lũ lụt",
      example: "Heavy rain caused severe floods.",
      context: "Noun"
    },
    {
      name: "earthquake",
      ipa: "/ˈɜːrθkweɪk/",
      wordIpa: "/ˈɜːrθkweɪk/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/earthquake.mp3",
      type: "Noun",
      meaning: "động đất",
      example: "Japan experiences many earthquakes.",
      context: "Noun"
    },
    {
      name: "tsunami",
      ipa: "/tsuːˈnɑːmi/",
      wordIpa: "/tsuːˈnɑːmi/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/tsunami.mp3",
      type: "Noun",
      meaning: "sóng thần",
      example: "A tsunami can destroy coastal areas.",
      context: "Noun"
    },
    {
      name: "drought",
      ipa: "/draʊt/",
      wordIpa: "/draʊt/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/drought.mp3",
      type: "Noun",
      meaning: "hạn hán",
      example: "The drought lasted for months.",
      context: "Noun"
    },
    {
      name: "famine",
      ipa: "/ˈfæmɪn/",
      wordIpa: "/ˈfæmɪn/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/famine.mp3",
      type: "Noun",
      meaning: "nạn đói",
      example: "Famine is often caused by drought.",
      context: "Noun"
    },
    {
      name: "avalanche",
      ipa: "/ˈævəˌlæntʃ/",
      wordIpa: "/ˈævəˌlæntʃ/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/avalanche.mp3",
      type: "Noun",
      meaning: "lở tuyết",
      example: "The climbers were caught in an avalanche.",
      context: "Noun"
    },
    {
      name: "volcano",
      ipa: "/vɒlˈkeɪnoʊ/",
      wordIpa: "/vɒlˈkeɪnoʊ/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/volcano.mp3",
      type: "Noun",
      meaning: "núi lửa",
      example: "The volcano erupted suddenly.",
      context: "Noun"
    },
    {
      name: "hurricane",
      ipa: "/ˈhɜːrɪˌkeɪn/",
      wordIpa: "/ˈhɜːrɪˌkeɪn/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/hurricane.mp3",
      type: "Noun",
      meaning: "bão",
      example: "The hurricane caused widespread damage.",
      context: "Noun"
    },
    {
      name: "mitigate",
      ipa: "/ˈmɪtɪˌɡeɪt/",
      wordIpa: "/ˈmɪtɪˌɡeɪt/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/mitigate.mp3",
      type: "Verb",
      meaning: "giảm nhẹ",
      example: "We must take steps to mitigate disasters.",
      context: "Verb"
    }
  ],
  [ // Group 6: Water
    {
      name: "water",
      ipa: "/ˈwɔːtər/",
      wordIpa: "/ˈwɔːtər/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/water.mp3",
      type: "Noun",
      meaning: "nước",
      example: "Clean water is essential for life.",
      context: "Noun"
    },
    {
      name: "river",
      ipa: "/ˈrɪvər/",
      wordIpa: "/ˈrɪvər/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/river.mp3",
      type: "Noun",
      meaning: "sông",
      example: "This river provides drinking water.",
      context: "Noun"
    },
    {
      name: "lake",
      ipa: "/leɪk/",
      wordIpa: "/leɪk/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/lake.mp3",
      type: "Noun",
      meaning: "hồ",
      example: "The lake is home to many fish.",
      context: "Noun"
    },
    {
      name: "ocean",
      ipa: "/ˈoʊʃən/",
      wordIpa: "/ˈoʊʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/ocean.mp3",
      type: "Noun",
      meaning: "đại dương",
      example: "Plastic waste pollutes the ocean.",
      context: "Noun"
    },
    {
      name: "sea",
      ipa: "/siː/",
      wordIpa: "/siː/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/sea.mp3",
      type: "Noun",
      meaning: "biển",
      example: "The sea level is rising.",
      context: "Noun"
    },
    {
      name: "wetland",
      ipa: "/ˈwɛtlænd/",
      wordIpa: "/ˈwɛtlænd/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/wetland.mp3",
      type: "Noun",
      meaning: "đầm lầy",
      example: "Wetlands are important ecosystems.",
      context: "Noun"
    },
    {
      name: "aquifer",
      ipa: "/ˈækwɪfər/",
      wordIpa: "/ˈækwɪfər/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/aquifer.mp3",
      type: "Noun",
      meaning: "tầng chứa nước",
      example: "Aquifers supply groundwater to wells.",
      context: "Noun"
    },
    {
      name: "reservoir",
      ipa: "/ˈrɛzərvwɑːr/",
      wordIpa: "/ˈrɛzərvwɑːr/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/reservoir.mp3",
      type: "Noun",
      meaning: "hồ chứa",
      example: "The reservoir stores drinking water.",
      context: "Noun"
    },
    {
      name: "purify",
      ipa: "/ˈpjʊrɪˌfaɪ/",
      wordIpa: "/ˈpjʊrɪˌfaɪ/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/purify.mp3",
      type: "Verb",
      meaning: "làm sạch",
      example: "We need to purify polluted water.",
      context: "Verb"
    },
    {
      name: "scarcity",
      ipa: "/ˈskɛrsɪti/",
      wordIpa: "/ˈskɛrsɪti/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/scarcity.mp3",
      type: "Noun",
      meaning: "sự khan hiếm",
      example: "Water scarcity affects millions of people.",
      context: "Noun"
    }
  ],
  [ // Group 7: Climate Change
    {
      name: "climate change",
      ipa: "/ˈklaɪmət tʃeɪndʒ/",
      wordIpa: "/ˈklaɪmət tʃeɪndʒ/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/climate_change.mp3",
      type: "Noun",
      meaning: "biến đổi khí hậu",
      example: "Climate change is a global issue.",
      context: "Noun"
    },
    {
      name: "global warming",
      ipa: "/ˌɡloʊbl ˈwɔːrmɪŋ/",
      wordIpa: "/ˌɡloʊbl ˈwɔːrmɪŋ/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/global_warming.mp3",
      type: "Noun",
      meaning: "nóng lên toàn cầu",
      example: "Global warming leads to rising sea levels.",
      context: "Noun"
    },
    {
      name: "carbon dioxide",
      ipa: "/ˌkɑːrbən daɪˈɒksaɪd/",
      wordIpa: "/ˌkɑːrbən daɪˈɒksaɪd/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/carbon_dioxide.mp3",
      type: "Noun",
      meaning: "khí CO₂",
      example: "Burning fossil fuels releases carbon dioxide.",
      context: "Noun"
    },
    {
      name: "emission",
      ipa: "/ɪˈmɪʃən/",
      wordIpa: "/ɪˈmɪʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/emission.mp3",
      type: "Noun",
      meaning: "khí thải",
      example: "Car emissions contribute to air pollution.",
      context: "Noun"
    },
    {
      name: "carbon footprint",
      ipa: "/ˈkɑːrbən ˈfʊtprɪnt/",
      wordIpa: "/ˈkɑːrbən ˈfʊtprɪnt/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/carbon_footprint.mp3",
      type: "Noun",
      meaning: "dấu chân carbon",
      example: "We should reduce our carbon footprint.",
      context: "Noun"
    },
    {
      name: "methane",
      ipa: "/ˈmiːθeɪn/",
      wordIpa: "/ˈmiːθeɪn/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/methane.mp3",
      type: "Noun",
      meaning: "khí mêtan",
      example: "Cows produce a lot of methane.",
      context: "Noun"
    },
    {
      name: "ozone",
      ipa: "/ˈoʊzoʊn/",
      wordIpa: "/ˈoʊzoʊn/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/ozone.mp3",
      type: "Noun",
      meaning: "tầng ozone",
      example: "The ozone layer protects us from UV rays.",
      context: "Noun"
    },
    {
      name: "temperature",
      ipa: "/ˈtɛmpərətʃər/",
      wordIpa: "/ˈtɛmpərətʃər/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/temperature.mp3",
      type: "Noun",
      meaning: "nhiệt độ",
      example: "Global temperatures are rising.",
      context: "Noun"
    },
    {
      name: "greenhouse effect",
      ipa: "/ˈɡriːnˌhaʊs ɪˈfɛkt/",
      wordIpa: "/ˈɡriːnˌhaʊs ɪˈfɛkt/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/greenhouse_effect.mp3",
      type: "Noun",
      meaning: "hiệu ứng nhà kính",
      example: "The greenhouse effect warms the Earth.",
      context: "Noun"
    },
    {
      name: "adapt",
      ipa: "/əˈdæpt/",
      wordIpa: "/əˈdæpt/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/adapt.mp3",
      type: "Verb",
      meaning: "thích nghi",
      example: "Animals must adapt to climate change.",
      context: "Verb"
    }
  ],
  [ // Group 8: Agriculture
    {
      name: "agriculture",
      ipa: "/ˈæɡrɪˌkʌltʃər/",
      wordIpa: "/ˈæɡrɪˌkʌltʃər/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/agriculture.mp3",
      type: "Noun",
      meaning: "nông nghiệp",
      example: "Agriculture is vital for food production.",
      context: "Noun"
    },
    {
      name: "farm",
      ipa: "/fɑːrm/",
      wordIpa: "/fɑːrm/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/farm.mp3",
      type: "Noun",
      meaning: "trang trại",
      example: "My uncle owns a farm.",
      context: "Noun"
    },
    {
      name: "crop",
      ipa: "/krɒp/",
      wordIpa: "/krɒp/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/crop.mp3",
      type: "Noun",
      meaning: "mùa vụ",
      example: "Rice is the main crop here.",
      context: "Noun"
    },
    {
      name: "harvest",
      ipa: "/ˈhɑːrvɪst/",
      wordIpa: "/ˈhɑːrvɪst/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/harvest.mp3",
      type: "Verb",
      meaning: "thu hoạch",
      example: "Farmers harvest crops in autumn.",
      context: "Verb"
    },
    {
      name: "fertilizer",
      ipa: "/ˈfɜːrtəˌlaɪzər/",
      wordIpa: "/ˈfɜːrtəˌlaɪzər/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/fertilizer.mp3",
      type: "Noun",
      meaning: "phân bón",
      example: "Too much fertilizer can harm the soil.",
      context: "Noun"
    },
    {
      name: "pesticide",
      ipa: "/ˈpɛstɪˌsaɪd/",
      wordIpa: "/ˈpɛstɪˌsaɪd/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/pesticide.mp3",
      type: "Noun",
      meaning: "thuốc trừ sâu",
      example: "Farmers use pesticides to protect crops.",
      context: "Noun"
    },
    {
      name: "organic",
      ipa: "/ɔːrˈɡænɪk/",
      wordIpa: "/ɔːrˈɡænɪk/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/organic.mp3",
      type: "Adjective",
      meaning: "hữu cơ",
      example: "Organic farming avoids chemicals.",
      context: "Adjective"
    },
    {
      name: "irrigate",
      ipa: "/ˈɪrɪˌɡeɪt/",
      wordIpa: "/ˈɪrɪˌɡeɪt/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/irrigate.mp3",
      type: "Verb",
      meaning: "tưới tiêu",
      example: "Farmers irrigate fields during dry seasons.",
      context: "Verb"
    },
    {
      name: "soil",
      ipa: "/sɔɪl/",
      wordIpa: "/sɔɪl/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/soil.mp3",
      type: "Noun",
      meaning: "đất",
      example: "Healthy soil is good for crops.",
      context: "Noun"
    },
    {
      name: "yield",
      ipa: "/jiːld/",
      wordIpa: "/jiːld/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/yield.mp3",
      type: "Noun",
      meaning: "năng suất",
      example: "Good weather improves crop yields.",
      context: "Noun"
    }
  ],
  [ // Group 9: Pollution
    {
      name: "pollution",
      ipa: "/pəˈluːʃən/",
      wordIpa: "/pəˈluːʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/pollution.mp3",
      type: "Noun",
      meaning: "ô nhiễm",
      example: "Air pollution affects our health.",
      context: "Noun"
    },
    {
      name: "contaminate",
      ipa: "/kənˈtæməˌneɪt/",
      wordIpa: "/kənˈtæməˌneɪt/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/contaminate.mp3",
      type: "Verb",
      meaning: "làm ô nhiễm",
      example: "Factories can contaminate rivers.",
      context: "Verb"
    },
    {
      name: "toxic",
      ipa: "/ˈtɒksɪk/",
      wordIpa: "/ˈtɒksɪk/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/toxic.mp3",
      type: "Adjective",
      meaning: "độc hại",
      example: "Toxic gases are dangerous.",
      context: "Adjective"
    },
    {
      name: "acid rain",
      ipa: "/ˈæsɪd reɪn/",
      wordIpa: "/ˈæsɪd reɪn/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/acid_rain.mp3",
      type: "Noun",
      meaning: "mưa axit",
      example: "Acid rain damages forests.",
      context: "Noun"
    },
    {
      name: "smog",
      ipa: "/smɒɡ/",
      wordIpa: "/smɒɡ/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/smog.mp3",
      type: "Noun",
      meaning: "khói bụi",
      example: "The city is covered in smog.",
      context: "Noun"
    },
    {
      name: "noise pollution",
      ipa: "/nɔɪz pəˈluːʃən/",
      wordIpa: "/nɔɪz pəˈluːʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/noise_pollution.mp3",
      type: "Noun",
      meaning: "ô nhiễm tiếng ồn",
      example: "Noise pollution is a problem in big cities.",
      context: "Noun"
    },
    {
      name: "oil spill",
      ipa: "/ɔɪl spɪl/",
      wordIpa: "/ɔɪl spɪl/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/oil_spill.mp3",
      type: "Noun",
      meaning: "tràn dầu",
      example: "Oil spills kill marine animals.",
      context: "Noun"
    },
    {
      name: "dump",
      ipa: "/dʌmp/",
      wordIpa: "/dʌmp/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/dump.mp3",
      type: "Verb",
      meaning: "xả thải",
      example: "Factories dump waste illegally.",
      context: "Verb"
    },
    {
      name: "sewage",
      ipa: "/ˈsuːɪdʒ/",
      wordIpa: "/ˈsuːɪdʒ/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/sewage.mp3",
      type: "Noun",
      meaning: "nước thải",
      example: "Sewage should be treated before disposal.",
      context: "Noun"
    },
    {
      name: "filter",
      ipa: "/ˈfɪltər/",
      wordIpa: "/ˈfɪltər/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/filter.mp3",
      type: "Noun",
      meaning: "bộ lọc",
      example: "Filters help reduce air pollution.",
      context: "Noun"
    }
  ],
  [ // Group 10: Renewable Energy
    {
      name: "renewable energy",
      ipa: "/rɪˈnuːəbl ˈɛnərdʒi/",
      wordIpa: "/rɪˈnuːəbl ˈɛnərdʒi/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/renewable_energy.mp3",
      type: "Noun",
      meaning: "năng lượng tái tạo",
      example: "Renewable energy is the future.",
      context: "Noun"
    },
    {
      name: "solar power",
      ipa: "/ˈsoʊlər ˈpaʊər/",
      wordIpa: "/ˈsoʊlər ˈpaʊər/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/solar_power.mp3",
      type: "Noun",
      meaning: "năng lượng mặt trời",
      example: "Solar power is clean and abundant.",
      context: "Noun"
    },
    {
      name: "wind energy",
      ipa: "/wɪnd ˈɛnərdʒi/",
      wordIpa: "/wɪnd ˈɛnərdʒi/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/wind_energy.mp3",
      type: "Noun",
      meaning: "năng lượng gió",
      example: "Wind energy reduces fossil fuel use.",
      context: "Noun"
    },
    {
      name: "hydropower",
      ipa: "/ˈhaɪdroʊˌpaʊər/",
      wordIpa: "/ˈhaɪdroʊˌpaʊər/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/hydropower.mp3",
      type: "Noun",
      meaning: "thủy điện",
      example: "Hydropower is a common renewable source.",
      context: "Noun"
    },
    {
      name: "biomass",
      ipa: "/ˈbaɪəʊˌmæs/",
      wordIpa: "/ˈbaɪəʊˌmæs/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/biomass.mp3",
      type: "Noun",
      meaning: "nhiên liệu sinh khối",
      example: "Biomass can produce electricity.",
      context: "Noun"
    },
    {
      name: "geothermal",
      ipa: "/ˌdʒiːoʊˈθɜːrməl/",
      wordIpa: "/ˌdʒiːoʊˈθɜːrməl/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/geothermal.mp3",
      type: "Adjective",
      meaning: "địa nhiệt",
      example: "Geothermal energy comes from Earth’s heat.",
      context: "Adjective"
    },
    {
      name: "sustainable",
      ipa: "/səˈsteɪnəbl/",
      wordIpa: "/səˈsteɪnəbl/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/sustainable.mp3",
      type: "Adjective",
      meaning: "bền vững",
      example: "We need sustainable energy solutions.",
      context: "Adjective"
    },
    {
      name: "turbine",
      ipa: "/ˈtɜːrbaɪn/",
      wordIpa: "/ˈtɜːrbaɪn/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/turbine.mp3",
      type: "Noun",
      meaning: "tuabin",
      example: "Wind turbines generate electricity.",
      context: "Noun"
    },
    {
      name: "grid",
      ipa: "/ɡrɪd/",
      wordIpa: "/ɡrɪd/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/grid.mp3",
      type: "Noun",
      meaning: "lưới điện",
      example: "Renewable energy feeds into the grid.",
      context: "Noun"
    },
    {
      name: "conserve",
      ipa: "/kənˈsɜːrv/",
      wordIpa: "/kənˈsɜːrv/",
      file: "/main/projects/english-courses/assets/data/ielts/environment/audio/conserve.mp3",
      type: "Verb",
      meaning: "bảo tồn",
      example: "We must conserve energy.",
      context: "Verb"
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