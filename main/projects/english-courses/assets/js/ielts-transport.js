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
      name: "public transport",
      ipa: "/ˈpʌb.lɪk ˈtræn.spɔːt/",
      wordIpa: "/ˈpʌb.lɪk ˈtræn.spɔːt/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/public_transport.mp3",
      type: "Noun",
      meaning: "phương tiện giao thông công cộng",
      example: "Public transport reduces traffic congestion in cities.",
      context: "Transport - Types"
    },
    {
      name: "private vehicle",
      ipa: "/ˈpraɪ.vət ˈvɪə.kəl/",
      wordIpa: "/ˈpraɪ.vət ˈvɪə.kəl/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/private_vehicle.mp3",
      type: "Noun",
      meaning: "phương tiện cá nhân",
      example: "The number of private vehicles has increased dramatically.",
      context: "Transport - Types"
    },
    {
      name: "electric scooter",
      ipa: "/ɪˈlek.trɪk ˈskuː.tər/",
      wordIpa: "/ɪˈlek.trɪk ˈskuː.tər/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/electric_scooter.mp3",
      type: "Noun",
      meaning: "xe điện",
      example: "Electric scooters are becoming more popular in urban areas.",
      context: "Transport - Types"
    },
    {
      name: "bicycle",
      ipa: "/ˈbaɪ.sɪ.kəl/",
      wordIpa: "/ˈbaɪ.sɪ.kəl/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/bicycle.mp3",
      type: "Noun",
      meaning: "xe đạp",
      example: "Riding a bicycle is environmentally friendly.",
      context: "Transport - Types"
    },
    {
      name: "motorbike",
      ipa: "/ˈməʊ.tə.baɪk/",
      wordIpa: "/ˈməʊ.tə.baɪk/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/motorbike.mp3",
      type: "Noun",
      meaning: "xe máy",
      example: "Motorbikes are widely used in Southeast Asia.",
      context: "Transport - Types"
    },
    {
      name: "train",
      ipa: "/treɪn/",
      wordIpa: "/treɪn/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/train.mp3",
      type: "Noun",
      meaning: "tàu hỏa",
      example: "Trains are a reliable mode of long-distance transport.",
      context: "Transport - Types"
    },
    {
      name: "tram",
      ipa: "/træm/",
      wordIpa: "/træm/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/tram.mp3",
      type: "Noun",
      meaning: "xe điện (đường ray trong thành phố)",
      example: "Many European cities still operate trams.",
      context: "Transport - Types"
    },
    {
      name: "underground",
      ipa: "/ˈʌn.də.ɡraʊnd/",
      wordIpa: "/ˈʌn.də.ɡraʊnd/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/underground.mp3",
      type: "Noun",
      meaning: "tàu điện ngầm",
      example: "The underground is the fastest way to travel in London.",
      context: "Transport - Types"
    },
    {
      name: "ferry",
      ipa: "/ˈfer.i/",
      wordIpa: "/ˈfer.i/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/ferry.mp3",
      type: "Noun",
      meaning: "phà",
      example: "We took a ferry across the river.",
      context: "Transport - Types"
    },
    {
      name: "airplane",
      ipa: "/ˈeə.pleɪn/",
      wordIpa: "/ˈeə.pleɪn/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/airplane.mp3",
      type: "Noun",
      meaning: "máy bay",
      example: "Airplanes are the fastest mode of transport.",
      context: "Transport - Types"
    }
  ]
  ,
  [
    {
      name: "transport infrastructure",
      ipa: "/ˈtræn.spɔːt ˈɪn.frəˌstrʌk.tʃər/",
      wordIpa: "/ˈtræn.spɔːt ˈɪn.frəˌstrʌk.tʃər/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/transport_infrastructure.mp3",
      type: "Noun",
      meaning: "cơ sở hạ tầng giao thông",
      example: "Good transport infrastructure is vital for economic development.",
      context: "Transport - Infrastructure"
    },
    {
      name: "highway",
      ipa: "/ˈhaɪ.weɪ/",
      wordIpa: "/ˈhaɪ.weɪ/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/highway.mp3",
      type: "Noun",
      meaning: "đường cao tốc",
      example: "The new highway connects the two major cities.",
      context: "Transport - Infrastructure"
    },
    {
      name: "railway network",
      ipa: "/ˈreɪl.weɪ ˈnet.wɜːk/",
      wordIpa: "/ˈreɪl.weɪ ˈnet.wɜːk/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/railway_network.mp3",
      type: "Noun",
      meaning: "mạng lưới đường sắt",
      example: "The railway network in Japan is extremely efficient.",
      context: "Transport - Infrastructure"
    },
    {
      name: "bus lane",
      ipa: "/bʌs leɪn/",
      wordIpa: "/bʌs leɪn/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/bus_lane.mp3",
      type: "Noun",
      meaning: "làn đường dành cho xe buýt",
      example: "Bus lanes help reduce delays in public transport.",
      context: "Transport - Infrastructure"
    },
    {
      name: "pedestrian crossing",
      ipa: "/pəˈdes.tri.ən ˈkrɒs.ɪŋ/",
      wordIpa: "/pəˈdes.tri.ən ˈkrɒs.ɪŋ/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/pedestrian_crossing.mp3",
      type: "Noun",
      meaning: "vạch sang đường cho người đi bộ",
      example: "Drivers must stop at pedestrian crossings.",
      context: "Transport - Safety"
    },
    {
      name: "traffic signal",
      ipa: "/ˈtræf.ɪk ˈsɪɡ.nəl/",
      wordIpa: "/ˈtræf.ɪk ˈsɪɡ.nəl/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/traffic_signal.mp3",
      type: "Noun",
      meaning: "đèn giao thông",
      example: "Traffic signals control the flow of vehicles.",
      context: "Transport - Infrastructure"
    },
    {
      name: "roundabout",
      ipa: "/ˈraʊn.də.baʊt/",
      wordIpa: "/ˈraʊn.də.baʊt/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/roundabout.mp3",
      type: "Noun",
      meaning: "bùng binh",
      example: "Roundabouts can improve traffic flow at intersections.",
      context: "Transport - Road Design"
    },
    {
      name: "bridge",
      ipa: "/brɪdʒ/",
      wordIpa: "/brɪdʒ/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/bridge.mp3",
      type: "Noun",
      meaning: "cầu",
      example: "The Golden Gate Bridge is an iconic structure in San Francisco.",
      context: "Transport - Infrastructure"
    },
    {
      name: "tunnel",
      ipa: "/ˈtʌn.əl/",
      wordIpa: "/ˈtʌn.əl/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/tunnel.mp3",
      type: "Noun",
      meaning: "đường hầm",
      example: "The tunnel connects the two islands under the sea.",
      context: "Transport - Infrastructure"
    },
    {
      name: "interchange",
      ipa: "/ˈɪn.tə.tʃeɪndʒ/",
      wordIpa: "/ˈɪn.tə.tʃeɪndʒ/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/interchange.mp3",
      type: "Noun",
      meaning: "nút giao thông",
      example: "Interchanges help ease traffic at busy junctions.",
      context: "Transport - Road Network"
    }
  ],
  [
    {
      name: "traffic congestion",
      ipa: "/ˈtræf.ɪk kənˈdʒes.tʃən/",
      wordIpa: "/ˈtræf.ɪk kənˈdʒes.tʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/traffic_congestion.mp3",
      type: "Noun",
      meaning: "tắc nghẽn giao thông",
      example: "Traffic congestion is a serious issue in big cities.",
      context: "Transport - Problems"
    },
    {
      name: "rush hour",
      ipa: "/ˈrʌʃ ˌaʊər/",
      wordIpa: "/ˈrʌʃ ˌaʊər/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/rush_hour.mp3",
      type: "Noun",
      meaning: "giờ cao điểm",
      example: "I avoid driving during rush hour.",
      context: "Transport - Time"
    },
    {
      name: "traffic jam",
      ipa: "/ˈtræf.ɪk ˌdʒæm/",
      wordIpa: "/ˈtræf.ɪk ˌdʒæm/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/traffic_jam.mp3",
      type: "Noun",
      meaning: "kẹt xe",
      example: "We were stuck in a traffic jam for two hours.",
      context: "Transport - Problems"
    },
    {
      name: "vehicle emissions",
      ipa: "/ˈvɪə.kəl ɪˈmɪʃ.ənz/",
      wordIpa: "/ˈvɪə.kəl ɪˈmɪʃ.ənz/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/vehicle_emissions.mp3",
      type: "Noun",
      meaning: "khí thải phương tiện",
      example: "Vehicle emissions contribute to air pollution.",
      context: "Transport - Environment"
    },
    {
      name: "overcrowded roads",
      ipa: "/ˌəʊ.vəˈkraʊ.dɪd rəʊdz/",
      wordIpa: "/ˌəʊ.vəˈkraʊ.dɪd rəʊdz/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/overcrowded_roads.mp3",
      type: "Noun",
      meaning: "đường phố quá tải",
      example: "Overcrowded roads make commuting stressful.",
      context: "Transport - Urban Issues"
    },
    {
      name: "road rage",
      ipa: "/rəʊd reɪdʒ/",
      wordIpa: "/rəʊd reɪdʒ/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/road_rage.mp3",
      type: "Noun",
      meaning: "tức giận khi lái xe",
      example: "Road rage incidents are becoming more common.",
      context: "Transport - Safety"
    },
    {
      name: "parking problem",
      ipa: "/ˈpɑː.kɪŋ ˈprɒb.ləm/",
      wordIpa: "/ˈpɑː.kɪŋ ˈprɒb.ləm/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/parking_problem.mp3",
      type: "Noun",
      meaning: "vấn đề chỗ đậu xe",
      example: "Parking problems are frequent in the city centre.",
      context: "Transport - Urban Planning"
    },
    {
      name: "commuter",
      ipa: "/kəˈmjuː.tər/",
      wordIpa: "/kəˈmjuː.tər/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/commuter.mp3",
      type: "Noun",
      meaning: "người đi lại thường xuyên (đi làm)",
      example: "Many commuters spend hours on the road each day.",
      context: "Transport - People"
    },
    {
      name: "bottleneck",
      ipa: "/ˈbɒt.l̩.nek/",
      wordIpa: "/ˈbɒt.l̩.nek/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/bottleneck.mp3",
      type: "Noun",
      meaning: "điểm nghẽn giao thông",
      example: "This intersection is a major bottleneck during peak hours.",
      context: "Transport - Problems"
    },
    {
      name: "congestion charge",
      ipa: "/kənˈdʒes.tʃən tʃɑːdʒ/",
      wordIpa: "/kənˈdʒes.tʃən tʃɑːdʒ/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/congestion_charge.mp3",
      type: "Noun",
      meaning: "phí tắc đường",
      example: "Some cities apply a congestion charge to reduce traffic.",
      context: "Transport - Policy"
    }
  ],
  [
    {
      name: "carpooling",
      ipa: "/ˈkɑːˌpuː.lɪŋ/",
      wordIpa: "/ˈkɑːˌpuː.lɪŋ/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/carpooling.mp3",
      type: "Noun",
      meaning: "đi chung xe",
      example: "Carpooling helps reduce the number of vehicles on the road.",
      context: "Transport - Solution"
    },
    {
      name: "cycle lane",
      ipa: "/ˈsaɪ.kəl leɪn/",
      wordIpa: "/ˈsaɪ.kəl leɪn/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/cycle_lane.mp3",
      type: "Noun",
      meaning: "làn đường dành cho xe đạp",
      example: "Many cities are investing in cycle lanes.",
      context: "Transport - Sustainability"
    },
    {
      name: "park and ride",
      ipa: "/pɑːk ənd raɪd/",
      wordIpa: "/pɑːk ənd raɪd/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/park_and_ride.mp3",
      type: "Noun",
      meaning: "bãi đậu xe ngoại thành + xe buýt vào trung tâm",
      example: "Park and ride schemes reduce inner-city traffic.",
      context: "Transport - Solution"
    },
    {
      name: "subsidise public transport",
      ipa: "/ˈsʌb.sɪ.daɪz ˈpʌb.lɪk ˈtræn.spɔːt/",
      wordIpa: "/ˈsʌb.sɪ.daɪz ˈpʌb.lɪk ˈtræn.spɔːt/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/subsidise_public_transport.mp3",
      type: "Verb phrase",
      meaning: "trợ giá giao thông công cộng",
      example: "Governments should subsidise public transport to encourage its use.",
      context: "Transport - Policy"
    },
    {
      name: "fuel-efficient vehicles",
      ipa: "/ˌfjʊəl ɪˈfɪʃ.ənt ˈvɪə.kəlz/",
      wordIpa: "/ˌfjʊəl ɪˈfɪʃ.ənt ˈvɪə.kəlz/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/fuel_efficient_vehicles.mp3",
      type: "Noun",
      meaning: "phương tiện tiết kiệm nhiên liệu",
      example: "Fuel-efficient vehicles reduce environmental impact.",
      context: "Transport - Environment"
    },
    {
      name: "electric vehicle",
      ipa: "/ɪˈlek.trɪk ˈvɪə.kəl/",
      wordIpa: "/ɪˈlek.trɪk ˈvɪə.kəl/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/electric_vehicle.mp3",
      type: "Noun",
      meaning: "xe điện",
      example: "Electric vehicles are promoted to reduce carbon emissions.",
      context: "Transport - Sustainability"
    },
    {
      name: "reduce carbon footprint",
      ipa: "/rɪˈdjuːs ˈkɑː.bən ˈfʊt.prɪnt/",
      wordIpa: "/rɪˈdjuːs ˈkɑː.bən ˈfʊt.prɪnt/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/reduce_carbon_footprint.mp3",
      type: "Verb phrase",
      meaning: "giảm dấu chân carbon",
      example: "Taking the bus instead of driving can reduce your carbon footprint.",
      context: "Transport - Environment"
    },
    {
      name: "bike-sharing system",
      ipa: "/baɪk ˈʃeə.rɪŋ ˈsɪs.təm/",
      wordIpa: "/baɪk ˈʃeə.rɪŋ ˈsɪs.təm/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/bike_sharing_system.mp3",
      type: "Noun",
      meaning: "hệ thống chia sẻ xe đạp",
      example: "Bike-sharing systems are widely adopted in urban areas.",
      context: "Transport - Urban Mobility"
    },
    {
      name: "urban mobility",
      ipa: "/ˈɜː.bən məʊˈbɪl.ə.ti/",
      wordIpa: "/ˈɜː.bən məʊˈbɪl.ə.ti/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/urban_mobility.mp3",
      type: "Noun",
      meaning: "di chuyển trong đô thị",
      example: "Improving urban mobility is key to reducing traffic issues.",
      context: "Transport - Planning"
    },
    {
      name: "traffic-free zone",
      ipa: "/ˈtræf.ɪk friː zəʊn/",
      wordIpa: "/ˈtræf.ɪk friː zəʊn/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/traffic_free_zone.mp3",
      type: "Noun",
      meaning: "khu vực không có phương tiện",
      example: "Traffic-free zones promote walking and reduce pollution.",
      context: "Transport - Urban Design"
    }
  ],
  [
    {
      name: "freight",
      ipa: "/freɪt/",
      wordIpa: "/freɪt/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/freight.mp3",
      type: "Noun",
      meaning: "hàng hóa vận chuyển",
      example: "The ship carries both passengers and freight.",
      context: "Transport - Logistics"
    },
    {
      name: "cargo",
      ipa: "/ˈkɑː.ɡəʊ/",
      wordIpa: "/ˈkɑː.ɡəʊ/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/cargo.mp3",
      type: "Noun",
      meaning: "hàng hóa",
      example: "The plane was carrying a cargo of medical supplies.",
      context: "Transport - Shipping"
    },
    {
      name: "logistics",
      ipa: "/ləˈdʒɪs.tɪks/",
      wordIpa: "/ləˈdʒɪs.tɪks/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/logistics.mp3",
      type: "Noun",
      meaning: "hậu cần",
      example: "Efficient logistics are vital for global trade.",
      context: "Transport - Business"
    },
    {
      name: "shipment",
      ipa: "/ˈʃɪp.mənt/",
      wordIpa: "/ˈʃɪp.mənt/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/shipment.mp3",
      type: "Noun",
      meaning: "lô hàng",
      example: "The shipment is expected to arrive next week.",
      context: "Transport - Trade"
    },
    {
      name: "distribution",
      ipa: "/ˌdɪs.trɪˈbjuː.ʃən/",
      wordIpa: "/ˌdɪs.trɪˈbjuː.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/distribution.mp3",
      type: "Noun",
      meaning: "sự phân phối",
      example: "A good distribution system reduces delivery time.",
      context: "Transport - Logistics"
    },
    {
      name: "haulage",
      ipa: "/ˈhɔː.lɪdʒ/",
      wordIpa: "/ˈhɔː.lɪdʒ/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/haulage.mp3",
      type: "Noun",
      meaning: "vận tải hàng hóa",
      example: "The cost of road haulage has increased recently.",
      context: "Transport - Road Freight"
    },
    {
      name: "transit",
      ipa: "/ˈtræn.zɪt/",
      wordIpa: "/ˈtræn.zɪt/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/transit.mp3",
      type: "Noun",
      meaning: "quá cảnh",
      example: "Goods are damaged during transit.",
      context: "Transport - Global Supply Chain"
    },
    {
      name: "warehouse",
      ipa: "/ˈweə.haʊs/",
      wordIpa: "/ˈweə.haʊs/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/warehouse.mp3",
      type: "Noun",
      meaning: "kho hàng",
      example: "The warehouse stores electronics before distribution.",
      context: "Transport - Storage"
    },
    {
      name: "customs clearance",
      ipa: "/ˈkʌs.təmz ˈklɪə.rəns/",
      wordIpa: "/ˈkʌs.təmz ˈklɪə.rəns/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/customs_clearance.mp3",
      type: "Noun",
      meaning: "thông quan",
      example: "Delays in customs clearance can affect delivery schedules.",
      context: "Transport - Trade"
    },
    {
      name: "freight forwarding",
      ipa: "/freɪt ˈfɔː.wəd.ɪŋ/",
      wordIpa: "/freɪt ˈfɔː.wəd.ɪŋ/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/freight_forwarding.mp3",
      type: "Noun",
      meaning: "giao nhận hàng hóa",
      example: "Freight forwarding companies manage shipping on behalf of clients.",
      context: "Transport - Business Services"
    }
  ],
  [
    {
      name: "aviation",
      ipa: "/ˌeɪ.viˈeɪ.ʃən/",
      wordIpa: "/ˌeɪ.viˈeɪ.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/aviation.mp3",
      type: "Noun",
      meaning: "hàng không",
      example: "The aviation industry is recovering after the pandemic.",
      context: "Transport - Air"
    },
    {
      name: "air traffic control",
      ipa: "/ˈeə ˌtræf.ɪk kənˈtrəʊl/",
      wordIpa: "/ˈeə ˌtræf.ɪk kənˈtrəʊl/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/air_traffic_control.mp3",
      type: "Noun",
      meaning: "kiểm soát không lưu",
      example: "Air traffic control ensures safe flight paths.",
      context: "Transport - Aviation"
    },
    {
      name: "runway",
      ipa: "/ˈrʌn.weɪ/",
      wordIpa: "/ˈrʌn.weɪ/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/runway.mp3",
      type: "Noun",
      meaning: "đường băng",
      example: "The plane skidded off the runway due to heavy rain.",
      context: "Transport - Airports"
    },
    {
      name: "airport terminal",
      ipa: "/ˈeə.pɔːt ˈtɜː.mɪ.nəl/",
      wordIpa: "/ˈeə.pɔːt ˈtɜː.mɪ.nəl/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/airport_terminal.mp3",
      type: "Noun",
      meaning: "nhà ga sân bay",
      example: "The new airport terminal handles international flights.",
      context: "Transport - Travel"
    },
    {
      name: "flight delay",
      ipa: "/flaɪt dɪˈleɪ/",
      wordIpa: "/flaɪt dɪˈleɪ/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/flight_delay.mp3",
      type: "Noun",
      meaning: "sự chậm chuyến bay",
      example: "Heavy fog caused flight delays at the airport.",
      context: "Transport - Travel"
    },
    {
      name: "cargo ship",
      ipa: "/ˈkɑː.ɡəʊ ʃɪp/",
      wordIpa: "/ˈkɑː.ɡəʊ ʃɪp/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/cargo_ship.mp3",
      type: "Noun",
      meaning: "tàu chở hàng",
      example: "The cargo ship docked at the port this morning.",
      context: "Transport - Maritime"
    },
    {
      name: "container",
      ipa: "/kənˈteɪ.nər/",
      wordIpa: "/kənˈteɪ.nər/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/container.mp3",
      type: "Noun",
      meaning: "thùng hàng (container)",
      example: "Each container holds different types of goods.",
      context: "Transport - Shipping"
    },
    {
      name: "port",
      ipa: "/pɔːt/",
      wordIpa: "/pɔːt/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/port.mp3",
      type: "Noun",
      meaning: "cảng",
      example: "This is the largest port in Southeast Asia.",
      context: "Transport - Infrastructure"
    },
    {
      name: "harbor",
      ipa: "/ˈhɑː.bər/",
      wordIpa: "/ˈhɑː.bər/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/harbor.mp3",
      type: "Noun",
      meaning: "bến cảng",
      example: "The harbor is full of fishing boats.",
      context: "Transport - Maritime"
    },
    {
      name: "cruise",
      ipa: "/kruːz/",
      wordIpa: "/kruːz/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/cruise.mp3",
      type: "Noun",
      meaning: "chuyến du ngoạn trên biển",
      example: "They went on a cruise around the Mediterranean.",
      context: "Transport - Tourism"
    }
  ],
  [
    {
      name: "commute",
      ipa: "/kəˈmjuːt/",
      wordIpa: "/kəˈmjuːt/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/commute.mp3",
      type: "Verb",
      meaning: "đi làm hằng ngày (thường bằng phương tiện công cộng)",
      example: "He commutes from the suburbs to the city every day.",
      context: "Transport - Urban"
    },
    {
      name: "subway",
      ipa: "/ˈsʌb.weɪ/",
      wordIpa: "/ˈsʌb.weɪ/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/subway.mp3",
      type: "Noun",
      meaning: "tàu điện ngầm",
      example: "The subway is the fastest way to travel downtown.",
      context: "Transport - Urban"
    },
    {
      name: "metro",
      ipa: "/ˈmet.rəʊ/",
      wordIpa: "/ˈmet.rəʊ/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/metro.mp3",
      type: "Noun",
      meaning: "tàu điện ngầm (Anh - châu Âu)",
      example: "Paris has one of the oldest metro systems in the world.",
      context: "Transport - Urban"
    },
    {
      name: "tram",
      ipa: "/træm/",
      wordIpa: "/træm/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/tram.mp3",
      type: "Noun",
      meaning: "xe điện",
      example: "Trams are commonly used in many European cities.",
      context: "Transport - Urban"
    },
    {
      name: "pedestrian",
      ipa: "/pəˈdes.tri.ən/",
      wordIpa: "/pəˈdes.tri.ən/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/pedestrian.mp3",
      type: "Noun",
      meaning: "người đi bộ",
      example: "Pedestrians should use the crosswalk.",
      context: "Transport - Safety"
    },
    {
      name: "bike lane",
      ipa: "/baɪk leɪn/",
      wordIpa: "/baɪk leɪn/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/bike_lane.mp3",
      type: "Noun",
      meaning: "làn đường cho xe đạp",
      example: "The city has built more bike lanes to encourage cycling.",
      context: "Transport - Urban"
    },
    {
      name: "overpass",
      ipa: "/ˈəʊ.və.pɑːs/",
      wordIpa: "/ˈəʊ.və.pɑːs/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/overpass.mp3",
      type: "Noun",
      meaning: "cầu vượt",
      example: "Traffic was redirected to the new overpass.",
      context: "Transport - Infrastructure"
    },
    {
      name: "intersection",
      ipa: "/ˌɪn.təˈsek.ʃən/",
      wordIpa: "/ˌɪn.təˈsek.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/intersection.mp3",
      type: "Noun",
      meaning: "ngã tư",
      example: "Accidents often occur at busy intersections.",
      context: "Transport - Urban"
    },
    {
      name: "traffic light",
      ipa: "/ˈtræf.ɪk laɪt/",
      wordIpa: "/ˈtræf.ɪk laɪt/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/traffic_light.mp3",
      type: "Noun",
      meaning: "đèn giao thông",
      example: "The driver ran a red traffic light.",
      context: "Transport - Road"
    },
    {
      name: "underpass",
      ipa: "/ˈʌn.də.pɑːs/",
      wordIpa: "/ˈʌn.də.pɑːs/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/underpass.mp3",
      type: "Noun",
      meaning: "đường chui",
      example: "Pedestrians can cross using the underpass.",
      context: "Transport - Urban"
    }
  ],
  [
    {
      name: "road safety",
      ipa: "/rəʊd ˈseɪf.ti/",
      wordIpa: "/rəʊd ˈseɪf.ti/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/road_safety.mp3",
      type: "Noun",
      meaning: "an toàn giao thông",
      example: "Road safety campaigns reduce accidents.",
      context: "Transport - Safety"
    },
    {
      name: "congestion",
      ipa: "/kənˈdʒes.tʃən/",
      wordIpa: "/kənˈdʒes.tʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/congestion.mp3",
      type: "Noun",
      meaning: "sự tắc nghẽn",
      example: "Traffic congestion is a major problem in cities.",
      context: "Transport - Urban"
    },
    {
      name: "rush hour",
      ipa: "/ˈrʌʃ ˌaʊər/",
      wordIpa: "/ˈrʌʃ ˌaʊər/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/rush_hour.mp3",
      type: "Noun",
      meaning: "giờ cao điểm",
      example: "The trains are packed during rush hour.",
      context: "Transport - Urban"
    },
    {
      name: "emissions",
      ipa: "/ɪˈmɪʃ.ənz/",
      wordIpa: "/ɪˈmɪʃ.ənz/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/emissions.mp3",
      type: "Noun",
      meaning: "khí thải",
      example: "Car emissions contribute to air pollution.",
      context: "Transport - Environment"
    },
    {
      name: "air pollution",
      ipa: "/eə pəˈluː.ʃən/",
      wordIpa: "/eə pəˈluː.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/air_pollution.mp3",
      type: "Noun",
      meaning: "ô nhiễm không khí",
      example: "Air pollution levels are highest near busy roads.",
      context: "Transport - Environment"
    },
    {
      name: "carbon emissions",
      ipa: "/ˈkɑː.bən ɪˈmɪʃ.ənz/",
      wordIpa: "/ˈkɑː.bən ɪˈmɪʃ.ənz/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/carbon_emissions.mp3",
      type: "Noun",
      meaning: "lượng khí thải CO2",
      example: "Public transport helps reduce carbon emissions.",
      context: "Transport - Climate"
    },
    {
      name: "speed limit",
      ipa: "/spiːd ˈlɪm.ɪt/",
      wordIpa: "/spiːd ˈlɪm.ɪt/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/speed_limit.mp3",
      type: "Noun",
      meaning: "giới hạn tốc độ",
      example: "Drivers must obey the speed limit.",
      context: "Transport - Safety"
    },
    {
      name: "accident-prone",
      ipa: "/ˈæk.sɪ.dənt prəʊn/",
      wordIpa: "/ˈæk.sɪ.dənt prəʊn/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/accident_prone.mp3",
      type: "Adjective",
      meaning: "dễ xảy ra tai nạn",
      example: "That intersection is known to be accident-prone.",
      context: "Transport - Safety"
    },
    {
      name: "driving license",
      ipa: "/ˈdraɪ.vɪŋ ˌlaɪ.səns/",
      wordIpa: "/ˈdraɪ.vɪŋ ˌlaɪ.səns/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/driving_license.mp3",
      type: "Noun",
      meaning: "bằng lái xe",
      example: "You must pass a test to get a driving license.",
      context: "Transport - Law"
    },
    {
      name: "seatbelt",
      ipa: "/ˈsiːt.belt/",
      wordIpa: "/ˈsiːt.belt/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/seatbelt.mp3",
      type: "Noun",
      meaning: "dây an toàn",
      example: "Wearing a seatbelt is compulsory.",
      context: "Transport - Safety"
    }
  ],
  [
    {
      name: "freight",
      ipa: "/freɪt/",
      wordIpa: "/freɪt/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/freight.mp3",
      type: "Noun",
      meaning: "hàng hóa vận chuyển",
      example: "The ship was carrying freight to Europe.",
      context: "Transport - Logistics"
    },
    {
      name: "cargo",
      ipa: "/ˈkɑː.ɡəʊ/",
      wordIpa: "/ˈkɑː.ɡəʊ/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/cargo.mp3",
      type: "Noun",
      meaning: "hàng hóa",
      example: "The plane was loaded with cargo.",
      context: "Transport - Logistics"
    },
    {
      name: "shipping",
      ipa: "/ˈʃɪp.ɪŋ/",
      wordIpa: "/ˈʃɪp.ɪŋ/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/shipping.mp3",
      type: "Noun",
      meaning: "giao hàng/vận chuyển hàng hóa",
      example: "Global shipping has increased due to online shopping.",
      context: "Transport - Global"
    },
    {
      name: "logistics",
      ipa: "/ləˈdʒɪs.tɪks/",
      wordIpa: "/ləˈdʒɪs.tɪks/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/logistics.mp3",
      type: "Noun",
      meaning: "hậu cần",
      example: "Efficient logistics are key for international trade.",
      context: "Transport - Business"
    },
    {
      name: "port",
      ipa: "/pɔːt/",
      wordIpa: "/pɔːt/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/port.mp3",
      type: "Noun",
      meaning: "cảng",
      example: "The cargo ship arrived at the port on time.",
      context: "Transport - Sea"
    },
    {
      name: "container",
      ipa: "/kənˈteɪ.nər/",
      wordIpa: "/kənˈteɪ.nər/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/container.mp3",
      type: "Noun",
      meaning: "thùng chứa hàng",
      example: "Goods are packed in containers for transport.",
      context: "Transport - Freight"
    },
    {
      name: "shipment",
      ipa: "/ˈʃɪp.mənt/",
      wordIpa: "/ˈʃɪp.mənt/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/shipment.mp3",
      type: "Noun",
      meaning: "lô hàng",
      example: "The shipment was delayed by customs.",
      context: "Transport - Logistics"
    },
    {
      name: "export",
      ipa: "/ˈek.spɔːt/",
      wordIpa: "/ˈek.spɔːt/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/export.mp3",
      type: "Verb/Noun",
      meaning: "xuất khẩu",
      example: "The company exports electronics worldwide.",
      context: "Transport - Trade"
    },
    {
      name: "import",
      ipa: "/ˈɪm.pɔːt/",
      wordIpa: "/ˈɪm.pɔːt/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/import.mp3",
      type: "Verb/Noun",
      meaning: "nhập khẩu",
      example: "Vietnam imports fuel and machinery.",
      context: "Transport - Trade"
    },
    {
      name: "global supply chain",
      ipa: "/ˈɡləʊ.bəl səˈplaɪ ˌtʃeɪn/",
      wordIpa: "/ˈɡləʊ.bəl səˈplaɪ ˌtʃeɪn/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/global_supply_chain.mp3",
      type: "Noun",
      meaning: "chuỗi cung ứng toàn cầu",
      example: "The global supply chain was disrupted by the pandemic.",
      context: "Transport - Business"
    }
  ],
  [
    {
      name: "autonomous vehicle",
      ipa: "/ɔːˈtɒn.ə.məs ˈvɪə.kəl/",
      wordIpa: "/ɔːˈtɒn.ə.məs ˈvɪə.kəl/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/autonomous_vehicle.mp3",
      type: "Noun",
      meaning: "xe tự lái",
      example: "Autonomous vehicles are being tested in major cities.",
      context: "Transport - Technology"
    },
    {
      name: "electric car",
      ipa: "/ɪˈlek.trɪk kɑːr/",
      wordIpa: "/ɪˈlek.trɪk kɑːr/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/electric_car.mp3",
      type: "Noun",
      meaning: "xe điện",
      example: "Electric cars produce zero emissions.",
      context: "Transport - Green Technology"
    },
    {
      name: "charging station",
      ipa: "/ˈtʃɑː.dʒɪŋ ˈsteɪ.ʃən/",
      wordIpa: "/ˈtʃɑː.dʒɪŋ ˈsteɪ.ʃən/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/charging_station.mp3",
      type: "Noun",
      meaning: "trạm sạc",
      example: "Charging stations are expanding across the country.",
      context: "Transport - Electric"
    },
    {
      name: "ride-sharing",
      ipa: "/ˈraɪd ˌʃeə.rɪŋ/",
      wordIpa: "/ˈraɪd ˌʃeə.rɪŋ/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/ride_sharing.mp3",
      type: "Noun",
      meaning: "chia sẻ xe (dịch vụ như Uber)",
      example: "Ride-sharing services are popular in urban areas.",
      context: "Transport - Smart Mobility"
    },
    {
      name: "high-speed rail",
      ipa: "/ˌhaɪ.spiːd ˈreɪl/",
      wordIpa: "/ˌhaɪ.spiːd ˈreɪl/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/high_speed_rail.mp3",
      type: "Noun",
      meaning: "tàu cao tốc",
      example: "High-speed rail reduces travel time significantly.",
      context: "Transport - Technology"
    },
    {
      name: "hyperloop",
      ipa: "/ˈhaɪ.pə.luːp/",
      wordIpa: "/ˈhaɪ.pə.luːp/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/hyperloop.mp3",
      type: "Noun",
      meaning: "hệ thống vận chuyển siêu tốc",
      example: "Hyperloop could revolutionize long-distance travel.",
      context: "Transport - Innovation"
    },
    {
      name: "drone delivery",
      ipa: "/drəʊn dɪˈlɪv.ər.i/",
      wordIpa: "/drəʊn dɪˈlɪv.ər.i/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/drone_delivery.mp3",
      type: "Noun",
      meaning: "giao hàng bằng drone",
      example: "Drone delivery is becoming common in remote areas.",
      context: "Transport - Technology"
    },
    {
      name: "smart traffic system",
      ipa: "/smɑːt ˈtræf.ɪk ˈsɪs.təm/",
      wordIpa: "/smɑːt ˈtræf.ɪk ˈsɪs.təm/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/smart_traffic_system.mp3",
      type: "Noun",
      meaning: "hệ thống giao thông thông minh",
      example: "Smart traffic systems reduce congestion and emissions.",
      context: "Transport - Innovation"
    },
    {
      name: "mobility app",
      ipa: "/məʊˈbɪl.ə.ti æp/",
      wordIpa: "/məʊˈbɪl.ə.ti æp/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/mobility_app.mp3",
      type: "Noun",
      meaning: "ứng dụng di chuyển",
      example: "Mobility apps help plan trips across multiple transport modes.",
      context: "Transport - Digital"
    },
    {
      name: "zero-emission vehicle",
      ipa: "/ˌzɪə.rəʊ ɪˈmɪʃ.ən ˈvɪə.kəl/",
      wordIpa: "/ˌzɪə.rəʊ ɪˈmɪʃ.ən ˈvɪə.kəl/",
      file: "/main/projects/english-courses/assets/data/ielts/transport/audio/zero_emission_vehicle.mp3",
      type: "Noun",
      meaning: "phương tiện không khí thải",
      example: "Governments are promoting zero-emission vehicles.",
      context: "Transport - Environment"
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