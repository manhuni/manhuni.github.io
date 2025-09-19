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
      name: "urbanisation",
      ipa: "/ˌɜː.bən.aɪˈzeɪ.ʃən/",
      wordIpa: "/ˌɜː.bən.aɪˈzeɪ.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/urbanisation.mp3",
      type: "Noun",
      meaning: "sự đô thị hóa",
      example: "Urbanisation can lead to overcrowding in cities.",
      context: "Urbanisation - General"
    },
    {
      name: "urban sprawl",
      ipa: "/ˈɜː.bən sprɔːl/",
      wordIpa: "/ˈɜː.bən sprɔːl/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/urban_sprawl.mp3",
      type: "Noun",
      meaning: "sự mở rộng đô thị",
      example: "Urban sprawl contributes to traffic congestion.",
      context: "Urbanisation - Expansion"
    },
    {
      name: "infrastructure",
      ipa: "/ˈɪn.frəˌstrʌk.tʃər/",
      wordIpa: "/ˈɪn.frəˌstrʌk.tʃər/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/infrastructure.mp3",
      type: "Noun",
      meaning: "cơ sở hạ tầng",
      example: "Investment in infrastructure is essential for sustainable cities.",
      context: "Urbanisation - Infrastructure"
    },
    {
      name: "population density",
      ipa: "/ˌpɒp.jʊˈleɪ.ʃən ˈden.sɪ.ti/",
      wordIpa: "/ˌpɒp.jʊˈleɪ.ʃən ˈden.sɪ.ti/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/population_density.mp3",
      type: "Noun",
      meaning: "mật độ dân số",
      example: "High population density puts pressure on public services.",
      context: "Urbanisation - Population"
    },
    {
      name: "megacity",
      ipa: "/ˈmeɡ.ə.sɪ.ti/",
      wordIpa: "/ˈmeɡ.ə.sɪ.ti/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/megacity.mp3",
      type: "Noun",
      meaning: "siêu đô thị",
      example: "Tokyo is one of the world's largest megacities.",
      context: "Urbanisation - City Types"
    },
    {
      name: "slum",
      ipa: "/slʌm/",
      wordIpa: "/slʌm/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/slum.mp3",
      type: "Noun",
      meaning: "khu ổ chuột",
      example: "Many urban poor live in slums.",
      context: "Urbanisation - Social Issues"
    },
    {
      name: "housing shortage",
      ipa: "/ˈhaʊ.zɪŋ ˈʃɔː.tɪdʒ/",
      wordIpa: "/ˈhaʊ.zɪŋ ˈʃɔː.tɪdʒ/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/housing_shortage.mp3",
      type: "Noun",
      meaning: "sự thiếu hụt nhà ở",
      example: "Urbanisation often results in housing shortages.",
      context: "Urbanisation - Housing"
    },
    {
      name: "traffic congestion",
      ipa: "/ˈtræf.ɪk kənˈdʒes.tʃən/",
      wordIpa: "/ˈtræf.ɪk kənˈdʒes.tʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/traffic_congestion.mp3",
      type: "Noun",
      meaning: "tắc nghẽn giao thông",
      example: "Traffic congestion is a major problem in large cities.",
      context: "Urbanisation - Transport"
    },
    {
      name: "overpopulation",
      ipa: "/ˌəʊ.və.pɒp.jʊˈleɪ.ʃən/",
      wordIpa: "/ˌəʊ.və.pɒp.jʊˈleɪ.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/overpopulation.mp3",
      type: "Noun",
      meaning: "sự bùng nổ dân số",
      example: "Overpopulation leads to resource depletion.",
      context: "Urbanisation - Demographics"
    },
    {
      name: "sustainable development",
      ipa: "/səˈsteɪ.nə.bəl dɪˈvel.əp.mənt/",
      wordIpa: "/səˈsteɪ.nə.bəl dɪˈvel.əp.mənt/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/sustainable_development.mp3",
      type: "Noun",
      meaning: "phát triển bền vững",
      example: "Sustainable development is key to future cities.",
      context: "Urbanisation - Solutions"
    }
  ],
  [
    {
      name: "migration",
      ipa: "/maɪˈɡreɪ.ʃən/",
      wordIpa: "/maɪˈɡreɪ.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/migration.mp3",
      type: "Noun",
      meaning: "di cư",
      example: "Migration from rural areas increases urban growth.",
      context: "Urbanisation - Migration"
    },
    {
      name: "emigrate",
      ipa: "/ˈem.ɪ.ɡreɪt/",
      wordIpa: "/ˈem.ɪ.ɡreɪt/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/emigrate.mp3",
      type: "Verb",
      meaning: "di cư (ra nước ngoài)",
      example: "Many people emigrate to cities in search of better opportunities.",
      context: "Urbanisation - Migration"
    },
    {
      name: "immigrant",
      ipa: "/ˈɪm.ɪ.ɡrənt/",
      wordIpa: "/ˈɪm.ɪ.ɡrənt/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/immigrant.mp3",
      type: "Noun",
      meaning: "người nhập cư",
      example: "Cities often attract large numbers of immigrants.",
      context: "Urbanisation - Migration"
    },
    {
      name: "rural",
      ipa: "/ˈrʊə.rəl/",
      wordIpa: "/ˈrʊə.rəl/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/rural.mp3",
      type: "Adjective",
      meaning: "thuộc về nông thôn",
      example: "Rural populations are declining due to urbanisation.",
      context: "Urbanisation - Area Types"
    },
    {
      name: "urban",
      ipa: "/ˈɜː.bən/",
      wordIpa: "/ˈɜː.bən/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/urban.mp3",
      type: "Adjective",
      meaning: "thuộc về đô thị",
      example: "Urban areas offer more job opportunities.",
      context: "Urbanisation - Area Types"
    },
    {
      name: "internal migration",
      ipa: "/ɪnˈtɜː.nəl maɪˈɡreɪ.ʃən/",
      wordIpa: "/ɪnˈtɜː.nəl maɪˈɡreɪ.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/internal_migration.mp3",
      type: "Noun",
      meaning: "di cư trong nước",
      example: "Internal migration is a major contributor to urbanisation.",
      context: "Urbanisation - Migration"
    },
    {
      name: "resettle",
      ipa: "/ˌriːˈset.l̩/",
      wordIpa: "/ˌriːˈset.l̩/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/resettle.mp3",
      type: "Verb",
      meaning: "tái định cư",
      example: "The government helped the poor resettle in suburban areas.",
      context: "Urbanisation - Migration"
    },
    {
      name: "relocate",
      ipa: "/ˌriː.ləʊˈkeɪt/",
      wordIpa: "/ˌriː.ləʊˈkeɪt/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/relocate.mp3",
      type: "Verb",
      meaning: "di dời, chuyển chỗ ở",
      example: "Factories were relocated away from the city center.",
      context: "Urbanisation - Movement"
    },
    {
      name: "displacement",
      ipa: "/dɪsˈpleɪs.mənt/",
      wordIpa: "/dɪsˈpleɪs.mənt/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/displacement.mp3",
      type: "Noun",
      meaning: "sự di dời",
      example: "Urban development caused the displacement of many families.",
      context: "Urbanisation - Migration"
    },
    {
      name: "suburban",
      ipa: "/səˈbɜː.bən/",
      wordIpa: "/səˈbɜː.bən/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/suburban.mp3",
      type: "Adjective",
      meaning: "thuộc ngoại ô",
      example: "Suburban areas are growing due to urban expansion.",
      context: "Urbanisation - Area Types"
    }
  ],
  [
    {
      name: "pollution",
      ipa: "/pəˈluː.ʃən/",
      wordIpa: "/pəˈluː.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/pollution.mp3",
      type: "Noun",
      meaning: "ô nhiễm",
      example: "Air and water pollution are common problems in cities.",
      context: "Urbanisation - Environment"
    },
    {
      name: "waste management",
      ipa: "/weɪst ˈmæn.ɪdʒ.mənt/",
      wordIpa: "/weɪst ˈmæn.ɪdʒ.mənt/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/waste_management.mp3",
      type: "Noun",
      meaning: "quản lý chất thải",
      example: "Proper waste management is crucial for urban hygiene.",
      context: "Urbanisation - Environment"
    },
    {
      name: "crime rate",
      ipa: "/kraɪm reɪt/",
      wordIpa: "/kraɪm reɪt/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/crime_rate.mp3",
      type: "Noun",
      meaning: "tỷ lệ tội phạm",
      example: "The crime rate is higher in densely populated urban areas.",
      context: "Urbanisation - Social Issues"
    },
    {
      name: "poverty",
      ipa: "/ˈpɒv.ə.ti/",
      wordIpa: "/ˈpɒv.ə.ti/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/poverty.mp3",
      type: "Noun",
      meaning: "nghèo đói",
      example: "Urban poverty often leads to poor living conditions.",
      context: "Urbanisation - Social Issues"
    },
    {
      name: "inequality",
      ipa: "/ˌɪn.ɪˈkwɒl.ə.ti/",
      wordIpa: "/ˌɪn.ɪˈkwɒl.ə.ti/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/inequality.mp3",
      type: "Noun",
      meaning: "bất bình đẳng",
      example: "Economic inequality is visible in urban slums.",
      context: "Urbanisation - Social Issues"
    },
    {
      name: "public transport",
      ipa: "/ˌpʌb.lɪk ˈtræn.spɔːt/",
      wordIpa: "/ˌpʌb.lɪk ˈtræn.spɔːt/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/public_transport.mp3",
      type: "Noun",
      meaning: "giao thông công cộng",
      example: "Public transport helps reduce congestion and pollution.",
      context: "Urbanisation - Transport"
    },
    {
      name: "urban planning",
      ipa: "/ˌɜː.bən ˈplæn.ɪŋ/",
      wordIpa: "/ˌɜː.bən ˈplæn.ɪŋ/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/urban_planning.mp3",
      type: "Noun",
      meaning: "quy hoạch đô thị",
      example: "Urban planning ensures efficient use of land and resources.",
      context: "Urbanisation - Development"
    },
    {
      name: "housing affordability",
      ipa: "/ˈhaʊ.zɪŋ əˌfɔː.dəˈbɪl.ə.ti/",
      wordIpa: "/ˈhaʊ.zɪŋ əˌfɔː.dəˈbɪl.ə.ti/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/housing_affordability.mp3",
      type: "Noun",
      meaning: "khả năng chi trả nhà ở",
      example: "Many urban dwellers face housing affordability issues.",
      context: "Urbanisation - Housing"
    },
    {
      name: "infrastructure strain",
      ipa: "/ˈɪn.frəˌstrʌk.tʃər streɪn/",
      wordIpa: "/ˈɪn.frəˌstrʌk.tʃər streɪn/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/infrastructure_strain.mp3",
      type: "Noun",
      meaning: "áp lực lên cơ sở hạ tầng",
      example: "Urban sprawl causes infrastructure strain in cities.",
      context: "Urbanisation - Challenges"
    },
    {
      name: "noise pollution",
      ipa: "/nɔɪz pəˈluː.ʃən/",
      wordIpa: "/nɔɪz pəˈluː.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/noise_pollution.mp3",
      type: "Noun",
      meaning: "ô nhiễm tiếng ồn",
      example: "Noise pollution in cities can affect mental health.",
      context: "Urbanisation - Environment"
    }
  ],
  [
    {
      name: "smart city",
      ipa: "/smɑːt ˈsɪt.i/",
      wordIpa: "/smɑːt ˈsɪt.i/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/smart_city.mp3",
      type: "Noun",
      meaning: "thành phố thông minh",
      example: "Smart city technologies improve urban living conditions.",
      context: "Urbanisation - Future"
    },
    {
      name: "eco-friendly",
      ipa: "/ˌiː.kəʊˈfrend.li/",
      wordIpa: "/ˌiː.kəʊˈfrend.li/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/eco_friendly.mp3",
      type: "Adjective",
      meaning: "thân thiện với môi trường",
      example: "Eco-friendly buildings reduce energy consumption.",
      context: "Urbanisation - Environment"
    },
    {
      name: "green space",
      ipa: "/ɡriːn speɪs/",
      wordIpa: "/ɡriːn speɪs/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/green_space.mp3",
      type: "Noun",
      meaning: "không gian xanh",
      example: "Urban green spaces improve air quality and mental well-being.",
      context: "Urbanisation - Environment"
    },
    {
      name: "sustainable city",
      ipa: "/səˈsteɪ.nə.bəl ˈsɪt.i/",
      wordIpa: "/səˈsteɪ.nə.bəl ˈsɪt.i/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/sustainable_city.mp3",
      type: "Noun",
      meaning: "thành phố bền vững",
      example: "A sustainable city minimizes its environmental footprint.",
      context: "Urbanisation - Future"
    },
    {
      name: "renewable energy",
      ipa: "/rɪˈnjuː.ə.bəl ˈen.ə.dʒi/",
      wordIpa: "/rɪˈnjuː.ə.bəl ˈen.ə.dʒi/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/renewable_energy.mp3",
      type: "Noun",
      meaning: "năng lượng tái tạo",
      example: "Cities should invest in renewable energy sources.",
      context: "Urbanisation - Solutions"
    },
    {
      name: "urban regeneration",
      ipa: "/ˌɜː.bən rɪˌdʒen.əˈreɪ.ʃən/",
      wordIpa: "/ˌɜː.bən rɪˌdʒen.əˈreɪ.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/urban_regeneration.mp3",
      type: "Noun",
      meaning: "tái thiết đô thị",
      example: "Urban regeneration improves old neighborhoods.",
      context: "Urbanisation - Development"
    },
    {
      name: "walkability",
      ipa: "/ˌwɔː.kəˈbɪl.ə.ti/",
      wordIpa: "/ˌwɔː.kəˈbɪl.ə.ti/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/walkability.mp3",
      type: "Noun",
      meaning: "khả năng đi bộ thuận tiện",
      example: "Walkability is a key factor in healthy urban design.",
      context: "Urbanisation - Transport"
    },
    {
      name: "urban farming",
      ipa: "/ˌɜː.bən ˈfɑː.mɪŋ/",
      wordIpa: "/ˌɜː.bən ˈfɑː.mɪŋ/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/urban_farming.mp3",
      type: "Noun",
      meaning: "nông nghiệp đô thị",
      example: "Urban farming provides local food and reduces emissions.",
      context: "Urbanisation - Environment"
    },
    {
      name: "mixed-use development",
      ipa: "/mɪkst juːz dɪˈvel.əp.mənt/",
      wordIpa: "/mɪkst juːz dɪˈvel.əp.mənt/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/mixed_use_development.mp3",
      type: "Noun",
      meaning: "phát triển đa chức năng",
      example: "Mixed-use developments combine homes, shops, and offices.",
      context: "Urbanisation - Development"
    },
    {
      name: "bike-friendly",
      ipa: "/baɪk ˈfrend.li/",
      wordIpa: "/baɪk ˈfrend.li/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/bike_friendly.mp3",
      type: "Adjective",
      meaning: "thân thiện với xe đạp",
      example: "Bike-friendly infrastructure reduces traffic and pollution.",
      context: "Urbanisation - Transport"
    }
  ],
  [
    {
      name: "urban lifestyle",
      ipa: "/ˈɜː.bən ˈlaɪf.staɪl/",
      wordIpa: "/ˈɜː.bən ˈlaɪf.staɪl/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/urban_lifestyle.mp3",
      type: "Noun",
      meaning: "lối sống đô thị",
      example: "An urban lifestyle often involves fast-paced routines and high living costs.",
      context: "Urbanisation - Society"
    },
    {
      name: "population density",
      ipa: "/ˌpɒp.jʊˈleɪ.ʃən ˈden.sə.ti/",
      wordIpa: "/ˌpɒp.jʊˈleɪ.ʃən ˈden.sə.ti/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/population_density.mp3",
      type: "Noun",
      meaning: "mật độ dân số",
      example: "High population density can lead to overcrowded public spaces.",
      context: "Urbanisation - Demographics"
    },
    {
      name: "urban dweller",
      ipa: "/ˈɜː.bən ˈdwel.ər/",
      wordIpa: "/ˈɜː.bən ˈdwel.ər/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/urban_dweller.mp3",
      type: "Noun",
      meaning: "người sống ở đô thị",
      example: "Urban dwellers often have better access to healthcare and education.",
      context: "Urbanisation - People"
    },
    {
      name: "migration trend",
      ipa: "/maɪˈɡreɪ.ʃən trend/",
      wordIpa: "/maɪˈɡreɪ.ʃən trend/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/migration_trend.mp3",
      type: "Noun",
      meaning: "xu hướng di cư",
      example: "The migration trend from rural to urban areas is increasing globally.",
      context: "Urbanisation - Demographics"
    },
    {
      name: "suburban area",
      ipa: "/səˈbɜː.bən ˈeə.ri.ə/",
      wordIpa: "/səˈbɜː.bən ˈeə.ri.ə/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/suburban_area.mp3",
      type: "Noun",
      meaning: "khu vực ngoại ô",
      example: "Many families prefer suburban areas for a quieter lifestyle.",
      context: "Urbanisation - Geography"
    },
    {
      name: "urban expansion",
      ipa: "/ˈɜː.bən ɪkˈspæn.ʃən/",
      wordIpa: "/ˈɜː.bən ɪkˈspæn.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/urban_expansion.mp3",
      type: "Noun",
      meaning: "sự mở rộng đô thị",
      example: "Urban expansion has swallowed up nearby villages.",
      context: "Urbanisation - Growth"
    },
    {
      name: "rural-urban migration",
      ipa: "/ˈrʊə.rəl ˈɜː.bən maɪˈɡreɪ.ʃən/",
      wordIpa: "/ˈrʊə.rəl ˈɜː.bən maɪˈɡreɪ.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/rural_urban_migration.mp3",
      type: "Noun",
      meaning: "di cư nông thôn lên thành thị",
      example: "Rural-urban migration is a major cause of urban population growth.",
      context: "Urbanisation - Demographics"
    },
    {
      name: "housing shortage",
      ipa: "/ˈhaʊ.zɪŋ ˈʃɔː.tɪdʒ/",
      wordIpa: "/ˈhaʊ.zɪŋ ˈʃɔː.tɪdʒ/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/housing_shortage.mp3",
      type: "Noun",
      meaning: "thiếu nhà ở",
      example: "A housing shortage is a pressing issue in many urban areas.",
      context: "Urbanisation - Problems"
    },
    {
      name: "urban poor",
      ipa: "/ˈɜː.bən pɔːr/",
      wordIpa: "/ˈɜː.bən pɔːr/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/urban_poor.mp3",
      type: "Noun",
      meaning: "người nghèo thành thị",
      example: "The urban poor often lack access to basic services.",
      context: "Urbanisation - Social"
    },
    {
      name: "commuter",
      ipa: "/kəˈmjuː.tər/",
      wordIpa: "/kəˈmjuː.tər/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/commuter.mp3",
      type: "Noun",
      meaning: "người đi làm xa",
      example: "Many commuters spend hours traveling into the city each day.",
      context: "Urbanisation - Transport"
    }
  ],
  [
    {
      name: "overcrowding",
      ipa: "/ˌəʊ.vəˈkraʊ.dɪŋ/",
      wordIpa: "/ˌəʊ.vəˈkraʊ.dɪŋ/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/overcrowding.mp3",
      type: "Noun",
      meaning: "sự quá tải dân số",
      example: "Overcrowding in cities can lead to health and safety issues.",
      context: "Urbanisation - Problem"
    },
    {
      name: "traffic congestion",
      ipa: "/ˈtræf.ɪk kənˈdʒes.tʃən/",
      wordIpa: "/ˈtræf.ɪk kənˈdʒes.tʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/traffic_congestion.mp3",
      type: "Noun",
      meaning: "ùn tắc giao thông",
      example: "Traffic congestion worsens during peak hours in urban centres.",
      context: "Urbanisation - Transport"
    },
    {
      name: "pollution",
      ipa: "/pəˈluː.ʃən/",
      wordIpa: "/pəˈluː.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/pollution.mp3",
      type: "Noun",
      meaning: "sự ô nhiễm",
      example: "Urban pollution affects both air and water quality.",
      context: "Urbanisation - Environment"
    },
    {
      name: "urban poverty",
      ipa: "/ˈɜː.bən ˈpɒ.və.ti/",
      wordIpa: "/ˈɜː.bən ˈpɒ.və.ti/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/urban_poverty.mp3",
      type: "Noun",
      meaning: "nghèo đói ở đô thị",
      example: "Urban poverty is a growing concern in developing countries.",
      context: "Urbanisation - Social Issue"
    },
    {
      name: "waste management",
      ipa: "/weɪst ˈmæn.ɪdʒ.mənt/",
      wordIpa: "/weɪst ˈmæn.ɪdʒ.mənt/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/waste_management.mp3",
      type: "Noun",
      meaning: "quản lý rác thải",
      example: "Effective waste management is vital for clean urban living.",
      context: "Urbanisation - Infrastructure"
    },
    {
      name: "slum",
      ipa: "/slʌm/",
      wordIpa: "/slʌm/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/slum.mp3",
      type: "Noun",
      meaning: "khu ổ chuột",
      example: "Slums lack proper sanitation and basic facilities.",
      context: "Urbanisation - Housing"
    },
    {
      name: "housing affordability",
      ipa: "/ˈhaʊ.zɪŋ əˌfɔː.dəˈbɪl.ə.ti/",
      wordIpa: "/ˈhaʊ.zɪŋ əˌfɔː.dəˈbɪl.ə.ti/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/housing_affordability.mp3",
      type: "Noun",
      meaning: "khả năng chi trả nhà ở",
      example: "Housing affordability is a major issue for young urban dwellers.",
      context: "Urbanisation - Economic"
    },
    {
      name: "infrastructure strain",
      ipa: "/ˈɪn.frə.strʌk.tʃər streɪn/",
      wordIpa: "/ˈɪn.frə.strʌk.tʃər streɪn/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/infrastructure_strain.mp3",
      type: "Noun",
      meaning: "áp lực lên cơ sở hạ tầng",
      example: "Rapid growth puts strain on urban infrastructure.",
      context: "Urbanisation - Development"
    },
    {
      name: "inequality",
      ipa: "/ˌɪn.ɪˈkwɒ.lə.ti/",
      wordIpa: "/ˌɪn.ɪˈkwɒ.lə.ti/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/inequality.mp3",
      type: "Noun",
      meaning: "bất bình đẳng",
      example: "Urban inequality can lead to social unrest.",
      context: "Urbanisation - Social"
    },
    {
      name: "urban decay",
      ipa: "/ˈɜː.bən dɪˈkeɪ/",
      wordIpa: "/ˈɜː.bən dɪˈkeɪ/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/urban_decay.mp3",
      type: "Noun",
      meaning: "sự xuống cấp đô thị",
      example: "Urban decay affects many post-industrial cities.",
      context: "Urbanisation - Decline"
    }
  ],
  [
    {
      name: "sustainable city",
      ipa: "/səˈsteɪ.nə.bəl ˈsɪt.i/",
      wordIpa: "/səˈsteɪ.nə.bəl ˈsɪt.i/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/sustainable_city.mp3",
      type: "Noun",
      meaning: "thành phố bền vững",
      example: "A sustainable city uses resources efficiently and protects the environment.",
      context: "Urbanisation - Sustainability"
    },
    {
      name: "urban planning",
      ipa: "/ˈɜː.bən ˈplæn.ɪŋ/",
      wordIpa: "/ˈɜː.bən ˈplæn.ɪŋ/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/urban_planning.mp3",
      type: "Noun",
      meaning: "quy hoạch đô thị",
      example: "Urban planning helps manage land use and transportation.",
      context: "Urbanisation - Development"
    },
    {
      name: "green space",
      ipa: "/ɡriːn speɪs/",
      wordIpa: "/ɡriːn speɪs/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/green_space.mp3",
      type: "Noun",
      meaning: "khu vực cây xanh",
      example: "Green spaces improve air quality and offer recreational areas.",
      context: "Urbanisation - Environment"
    },
    {
      name: "public transport",
      ipa: "/ˈpʌb.lɪk ˈtræn.spɔːt/",
      wordIpa: "/ˈpʌb.lɪk ˈtræn.spɔːt/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/public_transport.mp3",
      type: "Noun",
      meaning: "giao thông công cộng",
      example: "Investing in public transport reduces traffic and emissions.",
      context: "Urbanisation - Transport"
    },
    {
      name: "smart city",
      ipa: "/smɑːt ˈsɪt.i/",
      wordIpa: "/smɑːt ˈsɪt.i/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/smart_city.mp3",
      type: "Noun",
      meaning: "thành phố thông minh",
      example: "A smart city integrates digital technology into infrastructure.",
      context: "Urbanisation - Technology"
    },
    {
      name: "mixed-use development",
      ipa: "/ˌmɪkst ˈjuːs dɪˈvel.əp.mənt/",
      wordIpa: "/ˌmɪkst ˈjuːs dɪˈvel.əp.mənt/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/mixed_use_development.mp3",
      type: "Noun",
      meaning: "phát triển đa chức năng",
      example: "Mixed-use developments combine housing, work, and leisure spaces.",
      context: "Urbanisation - Planning"
    },
    {
      name: "urban regeneration",
      ipa: "/ˈɜː.bən rɪˌdʒen.əˈreɪ.ʃən/",
      wordIpa: "/ˈɜː.bən rɪˌdʒen.əˈreɪ.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/urban_regeneration.mp3",
      type: "Noun",
      meaning: "tái thiết đô thị",
      example: "Urban regeneration can revitalize declining city areas.",
      context: "Urbanisation - Solutions"
    },
    {
      name: "walkability",
      ipa: "/ˌwɔː.kəˈbɪl.ə.ti/",
      wordIpa: "/ˌwɔː.kəˈbɪl.ə.ti/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/walkability.mp3",
      type: "Noun",
      meaning: "khả năng đi bộ thuận tiện",
      example: "High walkability improves public health and reduces car use.",
      context: "Urbanisation - Transport"
    },
    {
      name: "urban resilience",
      ipa: "/ˈɜː.bən rɪˈzɪl.jəns/",
      wordIpa: "/ˈɜː.bən rɪˈzɪl.jəns/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/urban_resilience.mp3",
      type: "Noun",
      meaning: "khả năng chống chịu đô thị",
      example: "Urban resilience helps cities recover from natural disasters.",
      context: "Urbanisation - Sustainability"
    },
    {
      name: "renewable energy",
      ipa: "/rɪˈnjuː.ə.bəl ˈen.ə.dʒi/",
      wordIpa: "/rɪˈnjuː.ə.bəl ˈen.ə.dʒi/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/renewable_energy.mp3",
      type: "Noun",
      meaning: "năng lượng tái tạo",
      example: "Using renewable energy helps cities reduce emissions.",
      context: "Urbanisation - Environment"
    }
  ],
  [
    {
      name: "population density",
      ipa: "/ˌpɒp.jʊˈleɪ.ʃən ˈden.sɪ.ti/",
      wordIpa: "/ˌpɒp.jʊˈleɪ.ʃən ˈden.sɪ.ti/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/population_density.mp3",
      type: "Noun",
      meaning: "mật độ dân số",
      example: "High population density can strain city services and infrastructure.",
      context: "Urbanisation - Demographics"
    },
    {
      name: "urban sprawl",
      ipa: "/ˈɜː.bən sprɔːl/",
      wordIpa: "/ˈɜː.bən sprɔːl/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/urban_sprawl.mp3",
      type: "Noun",
      meaning: "sự bành trướng đô thị",
      example: "Urban sprawl leads to increased commuting and loss of green spaces.",
      context: "Urbanisation - Growth"
    },
    {
      name: "high-rise building",
      ipa: "/ˈhaɪ.raɪz ˈbɪl.dɪŋ/",
      wordIpa: "/ˈhaɪ.raɪz ˈbɪl.dɪŋ/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/high_rise_building.mp3",
      type: "Noun",
      meaning: "tòa nhà cao tầng",
      example: "High-rise buildings are common in densely populated urban areas.",
      context: "Urbanisation - Architecture"
    },
    {
      name: "housing shortage",
      ipa: "/ˈhaʊ.zɪŋ ˈʃɔː.tɪdʒ/",
      wordIpa: "/ˈhaʊ.zɪŋ ˈʃɔː.tɪdʒ/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/housing_shortage.mp3",
      type: "Noun",
      meaning: "thiếu hụt nhà ở",
      example: "Many major cities are facing a severe housing shortage.",
      context: "Urbanisation - Housing"
    },
    {
      name: "gentrification",
      ipa: "/ˌdʒen.trɪ.fɪˈkeɪ.ʃən/",
      wordIpa: "/ˌdʒen.trɪ.fɪˈkeɪ.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/gentrification.mp3",
      type: "Noun",
      meaning: "sự cải tạo đô thị (kéo theo tăng giá và đuổi dân cư nghèo)",
      example: "Gentrification can displace long-time residents from city centres.",
      context: "Urbanisation - Social Change"
    },
    {
      name: "urban migration",
      ipa: "/ˈɜː.bən maɪˈɡreɪ.ʃən/",
      wordIpa: "/ˈɜː.bən maɪˈɡreɪ.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/urban_migration.mp3",
      type: "Noun",
      meaning: "di cư vào đô thị",
      example: "Urban migration often results from rural unemployment.",
      context: "Urbanisation - Migration"
    },
    {
      name: "inner-city",
      ipa: "/ˌɪn.əˈsɪt.i/",
      wordIpa: "/ˌɪn.əˈsɪt.i/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/inner_city.mp3",
      type: "Adjective",
      meaning: "thuộc khu trung tâm thành phố (thường nghèo, cũ)",
      example: "Inner-city areas often suffer from poor infrastructure.",
      context: "Urbanisation - Region"
    },
    {
      name: "urban household",
      ipa: "/ˈɜː.bən ˈhaʊs.həʊld/",
      wordIpa: "/ˈɜː.bən ˈhaʊs.həʊld/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/urban_household.mp3",
      type: "Noun",
      meaning: "hộ gia đình đô thị",
      example: "Urban households often have smaller living spaces.",
      context: "Urbanisation - Demographics"
    },
    {
      name: "urban dweller",
      ipa: "/ˈɜː.bən ˈdwel.ər/",
      wordIpa: "/ˈɜː.bən ˈdwel.ər/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/urban_dweller.mp3",
      type: "Noun",
      meaning: "người sống ở đô thị",
      example: "Urban dwellers tend to rely more on public transport.",
      context: "Urbanisation - People"
    },
    {
      name: "city skyline",
      ipa: "/ˈsɪt.i ˈskaɪ.laɪn/",
      wordIpa: "/ˈsɪt.i ˈskaɪ.laɪn/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/city_skyline.mp3",
      type: "Noun",
      meaning: "đường chân trời thành phố",
      example: "The new skyscrapers changed the city skyline dramatically.",
      context: "Urbanisation - Architecture"
    }
  ],
  [
    {
      name: "air quality",
      ipa: "/eə ˈkwɒl.ə.ti/",
      wordIpa: "/eə ˈkwɒl.ə.ti/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/air_quality.mp3",
      type: "Noun",
      meaning: "chất lượng không khí",
      example: "Heavy traffic in cities can severely affect air quality.",
      context: "Urbanisation - Environment"
    },
    {
      name: "noise pollution",
      ipa: "/nɔɪz pəˈluː.ʃən/",
      wordIpa: "/nɔɪz pəˈluː.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/noise_pollution.mp3",
      type: "Noun",
      meaning: "ô nhiễm tiếng ồn",
      example: "Noise pollution is a serious issue in densely populated areas.",
      context: "Urbanisation - Pollution"
    },
    {
      name: "carbon emissions",
      ipa: "/ˈkɑː.bən ɪˈmɪʃ.ənz/",
      wordIpa: "/ˈkɑː.bən ɪˈmɪʃ.ənz/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/carbon_emissions.mp3",
      type: "Noun",
      meaning: "lượng khí thải carbon",
      example: "Urban areas contribute significantly to global carbon emissions.",
      context: "Urbanisation - Sustainability"
    },
    {
      name: "urban farming",
      ipa: "/ˈɜː.bən ˈfɑː.mɪŋ/",
      wordIpa: "/ˈɜː.bən ˈfɑː.mɪŋ/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/urban_farming.mp3",
      type: "Noun",
      meaning: "nông nghiệp đô thị",
      example: "Urban farming provides fresh produce in city environments.",
      context: "Urbanisation - Sustainability"
    },
    {
      name: "eco-friendly",
      ipa: "/ˌiː.kəʊˈfrend.li/",
      wordIpa: "/ˌiː.kəʊˈfrend.li/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/eco_friendly.mp3",
      type: "Adjective",
      meaning: "thân thiện với môi trường",
      example: "Eco-friendly transport options help reduce pollution.",
      context: "Urbanisation - Environment"
    },
    {
      name: "green building",
      ipa: "/ɡriːn ˈbɪl.dɪŋ/",
      wordIpa: "/ɡriːn ˈbɪl.dɪŋ/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/green_building.mp3",
      type: "Noun",
      meaning: "tòa nhà xanh (tiết kiệm năng lượng, thân thiện môi trường)",
      example: "Green buildings are essential for sustainable cities.",
      context: "Urbanisation - Construction"
    },
    {
      name: "urban heat island",
      ipa: "/ˈɜː.bən hiːt ˈaɪ.lənd/",
      wordIpa: "/ˈɜː.bən hiːt ˈaɪ.lənd/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/urban_heat_island.mp3",
      type: "Noun",
      meaning: "hiệu ứng đảo nhiệt đô thị",
      example: "Urban heat islands cause higher temperatures in cities.",
      context: "Urbanisation - Climate"
    },
    {
      name: "waste recycling",
      ipa: "/weɪst riːˈsaɪ.klɪŋ/",
      wordIpa: "/weɪst riːˈsaɪ.klɪŋ/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/waste_recycling.mp3",
      type: "Noun",
      meaning: "tái chế rác thải",
      example: "Proper waste recycling reduces urban landfill needs.",
      context: "Urbanisation - Waste"
    },
    {
      name: "stormwater management",
      ipa: "/ˈstɔːmˌwɔː.tər ˈmæn.ɪdʒ.mənt/",
      wordIpa: "/ˈstɔːmˌwɔː.tər ˈmæn.ɪdʒ.mənt/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/stormwater_management.mp3",
      type: "Noun",
      meaning: "quản lý nước mưa",
      example: "Cities must improve stormwater management to prevent flooding.",
      context: "Urbanisation - Infrastructure"
    },
    {
      name: "renewable resource",
      ipa: "/rɪˈnjuː.ə.bəl rɪˈzɔːs/",
      wordIpa: "/rɪˈnjuː.ə.bəl rɪˈzɔːs/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/renewable_resource.mp3",
      type: "Noun",
      meaning: "tài nguyên tái tạo",
      example: "Urban projects increasingly rely on renewable resources.",
      context: "Urbanisation - Energy"
    }
  ],
  [
    {
      name: "urban resilience",
      ipa: "/ˈɜː.bən rɪˈzɪl.jəns/",
      wordIpa: "/ˈɜː.bən rɪˈzɪl.jəns/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/urban_resilience.mp3",
      type: "Noun",
      meaning: "sự phục hồi đô thị",
      example: "Urban resilience is crucial for adapting to climate change and disasters.",
      context: "Urbanisation - Future Planning"
    },
    {
      name: "green city",
      ipa: "/ɡriːn ˈsɪt.i/",
      wordIpa: "/ɡriːn ˈsɪt.i/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/green_city.mp3",
      type: "Noun",
      meaning: "thành phố xanh",
      example: "Singapore is often cited as a model of a green city.",
      context: "Urbanisation - Sustainability"
    },
    {
      name: "urban innovation",
      ipa: "/ˈɜː.bən ˌɪn.əˈveɪ.ʃən/",
      wordIpa: "/ˈɜː.bən ˌɪn.əˈveɪ.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/urban_innovation.mp3",
      type: "Noun",
      meaning: "đổi mới đô thị",
      example: "Urban innovation can solve many infrastructural problems.",
      context: "Urbanisation - Technology"
    },
    {
      name: "digital infrastructure",
      ipa: "/ˈdɪdʒ.ɪ.təl ˈɪn.frəˌstrʌk.tʃər/",
      wordIpa: "/ˈdɪdʒ.ɪ.təl ˈɪn.frəˌstrʌk.tʃər/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/digital_infrastructure.mp3",
      type: "Noun",
      meaning: "cơ sở hạ tầng số",
      example: "Digital infrastructure supports smart city development.",
      context: "Urbanisation - Modernisation"
    },
    {
      name: "climate adaptation",
      ipa: "/ˈklaɪ.mət ˌæ.dæpˈteɪ.ʃən/",
      wordIpa: "/ˈklaɪ.mət ˌæ.dæpˈteɪ.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/climate_adaptation.mp3",
      type: "Noun",
      meaning: "thích nghi với biến đổi khí hậu",
      example: "Urban planning must incorporate climate adaptation strategies.",
      context: "Urbanisation - Climate"
    },
    {
      name: "urban sustainability",
      ipa: "/ˈɜː.bən səˌsteɪ.nəˈbɪl.ə.ti/",
      wordIpa: "/ˈɜː.bən səˌsteɪ.nəˈbɪl.ə.ti/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/urban_sustainability.mp3",
      type: "Noun",
      meaning: "tính bền vững đô thị",
      example: "Urban sustainability involves balancing economic, environmental, and social goals.",
      context: "Urbanisation - Planning"
    },
    {
      name: "public-private partnership",
      ipa: "/ˈpʌb.lɪk ˈpraɪ.vət ˈpɑːt.nə.ʃɪp/",
      wordIpa: "/ˈpʌb.lɪk ˈpraɪ.vət ˈpɑːt.nə.ʃɪp/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/public_private_partnership.mp3",
      type: "Noun",
      meaning: "quan hệ đối tác công tư",
      example: "Public-private partnerships are key to financing smart infrastructure.",
      context: "Urbanisation - Governance"
    },
    {
      name: "smart grid",
      ipa: "/smɑːt ɡrɪd/",
      wordIpa: "/smɑːt ɡrɪd/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/smart_grid.mp3",
      type: "Noun",
      meaning: "lưới điện thông minh",
      example: "A smart grid enhances energy efficiency and resilience in urban areas.",
      context: "Urbanisation - Technology"
    },
    {
      name: "urban redevelopment",
      ipa: "/ˈɜː.bən ˌriː.dɪˈvel.əp.mənt/",
      wordIpa: "/ˈɜː.bən ˌriː.dɪˈvel.əp.mənt/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/urban_redevelopment.mp3",
      type: "Noun",
      meaning: "tái phát triển đô thị",
      example: "Urban redevelopment projects can revitalize old neighborhoods.",
      context: "Urbanisation - Planning"
    },
    {
      name: "disaster preparedness",
      ipa: "/dɪˈzɑː.stər prɪˈpeə.d.nəs/",
      wordIpa: "/dɪˈzɑː.stər prɪˈpeə.d.nəs/",
      file: "/main/projects/english-courses/assets/data/ielts/urbanisation/audio/disaster_preparedness.mp3",
      type: "Noun",
      meaning: "sự chuẩn bị ứng phó thảm họa",
      example: "Urban resilience includes strong disaster preparedness plans.",
      context: "Urbanisation - Risk Management"
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