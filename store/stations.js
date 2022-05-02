export const state = () => ({
  data: [
    {
      id: 0,
      url_name: 'friisila',
      name: 'Espoo Friisilä',
      address: 'Kuitinmäentie 26, 02240 Espoo',
      coords: { lat: 60.1617785, lng: 24.7172848 },
      products: ['Maakaasu', 'Biokaasu'],
      type: ['naturalgas', 'biogas'],
      payments: ['Gas Card', 'Pankki ja luottokortit'],
      operator: 'Gasum',
    },
    {
      id: 1,
      url_name: 'lommila',
      name: 'Espoo Lommila',
      address: 'Espoontie 21, 02740 Espoo',
      coords: { lat: 60.2176478, lng: 24.6639764 },
      products: ['Maakaasu', 'Biokaasu'],
      type: ['naturalgas', 'biogas'],
      payments: ['Gas Card', 'Pankki ja luottokortit'],
      operator: 'Gasum',
    },
    {
      id: 2,
      url_name: 'vermo',
      name: 'Espoo Vermo',
      address: 'Perkkaantie 17, 00370 Espoo',
      coords: { lat: 60.2173457, lng: 24.8351607 },
      products: ['Maakaasu', 'Biokaasu'],
      type: ['naturalgas', 'biogas'],
      payments: ['Gas Card', 'Pankki ja luottokortit'],
      operator: 'Gasum',
    },
    {
      id: 3,
      url_name: 'kiimassuo',
      name: 'Forssa Kiimassuo',
      address: 'Voimalankatu 56, 30420 Forssa',
      coords: { lat: 60.7916559, lng: 23.5885101 },
      products: ['Biokaasu'],
      type: ['biogas'],
      payments: ['EG Biogas -tankkauskortti'],
      operator: 'Envor Group Oy',
    },
    {
      id: 4,
      url_name: 'poitsila',
      name: 'Hamina Poitsila',
      address: 'Helsingintie 1 B, 49410 Hamina (ST1)',
      coords: { lat: 60.5635916, lng: 27.1617594 },
      products: ['Biokaasu'],
      type: ['biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'ST1 Oy / Haminan Energia Oy',
    },
    {
      id: 5,
      url_name: 'hermanni',
      name: 'Helsinki Hermanni',
      address: 'Vanha Talvitie 21, 00580 Helsinki',
      coords: { lat: 60.1922798, lng: 24.9779427 },
      products: ['Maakaasu', 'Biokaasu'],
      type: ['naturalgas', 'biogas'],
      payments: ['Gas Card -tankkauskortti, pankki- & luottokortit'],
      operator: 'Gasum',
    },
    {
      id: 6,
      url_name: 'malmi',
      name: 'Helsinki Malmi',
      address: 'Tattariharjuntie 41, 00700 Helsinki',
      coords: { lat: 60.2529849, lng: 25.0633955 },
      products: ['Maakaasu', 'Biokaasu'],
      type: ['naturalgas', 'biogas'],
      payments: ['Gas Card -tankkauskortti, pankki- & luottokortit'],
      operator: 'Gasum',
    },
    {
      id: 7,
      url_name: 'roihupelto',
      name: 'Helsinki Roihupelto',
      address: 'Viilarintie 7, 00880 Helsinki',
      coords: { lat: 60.2138918, lng: 25.0598805 },
      products: ['Maakaasu', 'Biokaasu'],
      type: ['naturalgas', 'biogas'],
      payments: ['Gas Card -tankkauskortti, pankki- & luottokortit'],
      operator: 'Gasum',
      type: 'marker',
    },
    {
      id: 8,
      url_name: 'ruskeasuo',
      name: 'Helsinki Ruskeasuo',
      address: 'Hakamäenkuja 1, 00310 Helsinki',
      coords: { lat: 60.207332, lng: 24.905677 },
      products: ['Maakaasu', 'Biokaasu'],
      type: ['naturalgas', 'biogas'],
      payments: ['Gas Card -tankkauskortti, pankki- & luottokortit'],
      operator: 'Gasum',
    },
    {
      id: 9,
      url_name: 'vuosaari',
      name: 'Helsinki Vuosaari',
      address: 'Provianttikatu 6, 00960 Helsinki',
      coords: { lat: 60.2223017, lng: 25.1762191 },
      products: ['Nesteytetty maakaasu (LNG)'],
      type: ['naturalgas'],
      payments: ['Gas Card -tankkauskortti, pankki- & luottokortit'],
      operator: 'Gasum',
    },
    {
      id: 10,
      url_name: 'palopuro',
      name: 'Hyvinkää Palopuro',
      address: 'Haapasaarentie 75, 05470 Hyvinkää',
      coords: { lat: 60.5964257, lng: 24.9265945 },
      products: ['Biokaasu'],
      type: ['biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Palopuron Biokaasu Oy / Nivos Oy',
    },
    {
      id: 11,
      url_name: 'sahanmaki',
      name: 'Hyvinkää Sahanmäki',
      address: 'Kerkkolankatu 39, 05800 Hyvinkää',
      coords: { lat: 60.6567101, lng: 24.8480165 },
      products: ['Maakaasu', 'Biokaasu'],
      type: ['naturalgas', 'biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Gasum Oy',
    },
    {
      id: 12,
      url_name: 'tiirio',
      name: 'Hämeenlinna Tiiriö',
      address: 'Paroistentie 2, 13600 Hämeenlinna',
      coords: { lat: 61.0157378, lng: 24.4157302 },
      products: ['Maakaasu', 'Biokaasu'],
      type: ['naturalgas', 'biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Gasum Oy',
    },
    {
      id: 13,
      url_name: 'korvenranta',
      name: 'Imatra Korvenranta',
      address: 'Kertakaari 4, 55120 Imatra',
      coords: { lat: 61.1862904, lng: 28.7454718 },
      products: ['Maakaasu', 'Biokaasu'],
      type: ['naturalgas', 'biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Gasum Oy',
    },
    {
      id: 14,
      url_name: 'isokyro',
      name: 'Isokyrö',
      address: 'Kalpatie 2, 61500 Isokyrö',
      coords: { lat: 62.9831464, lng: 22.3473879 },
      products: ['Biokaasu'],
      type: ['biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Oy Jeppo Biogas Ab / Kyrö Distillery Company Oy',
    },
    {
      id: 15,
      url_name: 'joutsa',
      name: 'Joutsa',
      address: 'Mämmiläntie 38, 19650 Joutsa',
      coords: { lat: 61.7499478, lng: 26.1014101 },
      products: ['Biokaasu'],
      type: ['biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Joutsan Ekokaasu Oy / Metener O',
    },
    {
      id: 16,
      url_name: 'kanavuori',
      name: 'Jyväskylä Kanavuori',
      address: 'Metsälehmuksentie 9, 40800 Jyväskylä',
      coords: { lat: 62.2313269, lng: 25.9162483 },
      products: ['Nesteytetty maakaasu (LNG)'],
      type: ['naturalgas'],
      payments: ['Gas Card -tankkauskortti, pankki- & luottokortit'],
      operator: 'Gasum',
    },
    {
      id: 17,
      url_name: 'mustankorkea',
      name: 'Jyväskylä Mustankorkea',
      address: 'Ronsuntaipaleentie 204, 40500 Jyväskylä',
      coords: { lat: 62.2137324, lng: 25.6691426 },
      products: ['Biokaasu'],
      type: ['biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Mustankorkea Oy',
    },
    {
      id: 18,
      url_name: 'seppala',
      name: 'Jyväskylä Seppälä',
      address: 'Vasarakatu 29, 40320 Jyväskylä (K-Citymarket)',
      coords: { lat: 62.2660207, lng: 25.7775449 },
      products: ['Biokaasu'],
      type: ['biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Mustankorkea Oy',
    },
    {
      id: 19,
      url_name: 'keltakallio',
      name: 'Kotka Keltakallio',
      address: 'Vasarakatu 29, 40320 Jyväskylä (K-Citymarket)',
      coords: { lat: 60.5423718, lng: 26.9756412 },
      products: ['Maakaasu', 'Biokaasu'],
      type: ['naturalgas', 'biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Gasum Oy',
    },
    {
      id: 20,
      url_name: 'tommola',
      name: 'Kouvola Tommola',
      address: 'Tommolankatu 5, 45130 Kouvola',
      coords: { lat: 60.8728741, lng: 26.6611027 },
      products: ['Maakaasu', 'Biokaasu'],
      type: ['naturalgas', 'biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Gasum Oy',
    },
    {
      id: 21,
      url_name: 'neulamaki',
      name: 'Kuopio Pieni Neulamäki',
      address: 'Kranaattikuja 2, 70800 Kuopio',
      coords: { lat: 62.8458982, lng: 27.5985875 },
      products: ['Maakaasu', 'Biokaasu'],
      type: ['naturalgas', 'biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Gasum Oy',
    },
    {
      id: 22,
      url_name: 'kujala',
      name: 'Lahti Kujala',
      address: 'Linnaistentie 2, 15150 Lahti',
      coords: { lat: 60.9625367, lng: 25.7205951 },
      products: ['Maakaasu', 'Nesteytetty maakaasu (LNG)', 'Biokaasu'],
      type: ['naturalgas', 'biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Gasum Oy',
    },
    {
      id: 23,
      url_name: 'Laune',
      name: 'Lahti Laune',
      address: 'Ajokatu 53, 15500 Lahti (K-Citymarket)',
      coords: { lat: 60.9658298, lng: 25.6561602 },
      products: ['Maakaasu', 'Biokaasu'],
      type: ['naturalgas', 'biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Gasum Oy',
    },
    {
      id: 24,
      url_name: 'tykki',
      name: 'Lappeenranta Tykki',
      address: 'Simolantie 14, 53100 Lappeenranta',
      coords: { lat: 61.0454722, lng: 28.1807456 },
      products: ['Maakaasu', 'Biokaasu'],
      type: ['naturalgas', 'biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Gasum Oy',
    },
    {
      id: 25,
      url_name: 'leppavesi',
      name: 'Laukaa Leppävesi',
      address: 'Vaajakoskentie 104, 41310 Leppävesi',
      coords: { lat: 62.323538, lng: 25.8724165 },
      products: ['Biokaasu'],
      type: ['biogas'],
      payments: [
        'Pankki- ja luottokortti',
      ],
      operator: 'Metener Oy',
    },
    {
      id: 26,
      url_name: 'saaksjarvi',
      name: 'Lempäälä Sääksjärvi',
      address: 'Varastotie 11, 33880 Lempäälä',
      coords: { lat: 61.4101681, lng: 23.7565049 },
      products: ['Maakaasu'],
      type: ['naturalgas'],
      payments: [
        'Pankki- ja luottokortti (+aktivointiavain)',
      ],
      operator: 'Lempäälän Lämpö Oy',
      other:
        '*HUOM! Asema on puolijulkinen - tankkaus vaatii asiakkaaksi rekisteröitymistä (Lempäälän Lämpö Oy:ltä saatavaa aktivointiavainta)*',
    },
    {
      id: 28,
      url_name: 'avanti',
      name: 'Lieto Avanti',
      address: 'Eteläkaari 1, 21410 Lieto',
      coords: { lat: 60.4680333, lng: 22.3953879 },
      products: ['Nesteytetty maakaasu (LNG)'],
      type: ['naturalgas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Gasum Oy',
    },
    {
      id: 29,
      url_name: 'muijala',
      name: 'Lohja Muijala',
      address: 'Mineraalintie 1, 08680 Lohja',
      coords: { lat: 60.2995964, lng: 24.2147429 },
      products: ['Maakaasu', 'Biokaasu'],
      type: ['naturalgas', 'biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Gasum Oy',
    },
    {
      id: 30,
      url_name: 'tytyri',
      name: 'Lohja Tytyri',
      address: 'Tytyrinkatu 4, 08100 Lohja (ABC!)',
      coords: { lat: 60.2595917, lng: 24.0636903 },
      products: ['Maakaasu', 'Biokaasu'],
      type: ['naturalgas', 'biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Gasum Oy',
    },
    {
      id: 31,
      url_name: 'graani',
      name: 'Mikkeli Graani',
      address: 'Graanintie 1, 50190 Mikkeli (Graani)',
      coords: { lat: 61.6871876, lng: 27.2983255 },
      products: ['Biokaasu'],
      type: ['biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Etelä-Savon Energia Oy',
    },
    {
      id: 32,
      url_name: 'haukivuori',
      name: 'Mikkeli Haukivuori',
      address: 'Ursuksentie 14, 51600 Haukivuori',
      coords: { lat: 62.0214982, lng: 27.2019719 },
      products: ['Biokaasu'],
      type: ['biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Etelä-Savon Energia Oy',
    },
    {
      id: 33,
      url_name: 'koivulahti',
      name: 'Mustasaari Koivulahti',
      address: 'Stormossenintie 3, 66530 Mustasaari',
      coords: { lat: 63.1362158, lng: 21.7588306 },
      products: ['Biokaasu'],
      type: ['biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'BIG Biokaasu',
    },
    {
      id: 34,
      url_name: 'mantsala',
      name: 'Mäntsälä',
      address: 'Lahdentie 23, 04600 Mäntsälä (ST1)',
      coords: { lat: 60.6296491, lng: 25.3079824 },
      products: ['Biokaasu'],
      type: ['biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'ST1 Oy / Nivos Oy',
    },
    {
      id: 35,
      url_name: 'nokia',
      name: 'Nokia',
      address: 'Kerhokatu 6, 37100 Nokia',
      coords: { lat: 61.4770308, lng: 23.49921 },
      products: ['Maakaasu', 'Biokaasu'],
      type: ['neutralgas', 'biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Leppäkosken Lämpö  Oy',
    },
    {
      id: 36,
      url_name: 'kaakuri',
      name: 'Oulu Kaakkuri',
      address: 'Kaakkurinojantie 1, 90420 Oulu',
      coords: { lat: 64.9590103, lng: 25.5270311 },
      products: ['Biokaasu'],
      type: ['biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'SEO Suomalainen Energiaosuuskunta',
    },
    {
      id: 37,
      url_name: 'limingantulli',
      name: 'Oulu Limingantulli',
      address: 'Tyrnäväntie 4, 90400 Oulu',
      coords: { lat: 64.9989208, lng: 25.4589593 },
      products: ['Maakaasu', 'Biokaasu'],
      type: ['neutralgas', 'biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Gasum Oy',
    },
    {
      id: 38,
      url_name: 'ruskoniitty',
      name: 'Oulu Ruskonniitty',
      address: 'Ruskonniityntie 10, 90630 Oulu',
      coords: { lat: 65.0566108, lng: 25.5371189 },
      products: ['Biokaasu'],
      type: ['biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Kiertokaari Oy',
    },
    {
      id: 39,
      url_name: 'aimarautio',
      name: 'Oulu Äimärautio',
      address: 'Terminaalitie 1, 90400 Oulu',
      coords: { lat: 64.9870725, lng: 25.4397162 },
      products: ['Nesteytetty maakaasu (LNG)'],
      type: ['neutralgas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Gasum Oy',
    },
    {
      id: 40,
      url_name: 'aimarautio',
      name: 'Oulu Äimärautio',
      address: 'Terminaalitie 1, 90400 Oulu',
      coords: { lat: 64.9870725, lng: 25.4397162 },
      products: ['Nesteytetty maakaasu (LNG)'],
      type: ['neutralgas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Gasum Oy',
    },
    {
      id: 41,
      url_name: 'kuusisaari',
      name: 'Pietarsaari Kuusisaari',
      address: 'Havutie 4, 68600 Pietarsaari',
      coords: { lat: 63.6627166, lng: 22.7612686 },
      products: ['Biokaasu'],
      type: ['biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Jepuan Biokaasu Oy / Jippo Biogas Ab',
    },
    {
      id: 42,
      url_name: 'tillinmaki',
      name: 'Pori Tiilimäki',
      address: 'Maamiehenkatu 2, 28500 Pori (Neste)',
      coords: { lat: 61.4771953, lng: 21.7810848 },
      products: ['Maakaasu', 'Biokaasu'],
      type: ['neutralgas', 'biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Gasum Oy',
    },
    {
      id: 43,
      url_name: 'harabacka',
      name: 'Porvoo Harabacka',
      address: 'Harabackankatu 16, 06100 Porvoo',
      coords: { lat: 60.3959959, lng: 25.6190599 },
      products: ['Maakaasu', 'Biokaasu'],
      type: ['neutralgas', 'biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Gasum Oy',
    },
    {
      id: 44,
      url_name: 'kuninkoja',
      name: 'Raisio Kuninkoja',
      address: 'Itäniityntie 15, 21280 Raisio (IKEA)',
      coords: { lat: 60.4939738, lng: 22.2255832 },
      products: ['Maakaasu', 'Biokaasu'],
      type: ['neutralgas', 'biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Gasum Oy',
    },
    {
      id: 45,
      url_name: 'merkos',
      name: 'Riihimäki Merkos',
      address: 'Merkoksenkatu 2, 11710 Riihimäki',
      coords: { lat: 60.720719, lng: 24.7358615 },
      products: ['Maakaasu', 'Biokaasu'],
      type: ['neutralgas', 'biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Gasum Oy',
    },
    {
      id: 46,
      url_name: 'piihovi',
      name: 'Salo Piihovi',
      address: 'Ruoksmäentie 1, 24260 Salo (ABC!)',
      coords: { lat: 60.4191855, lng: 23.1630824 },
      products: ['Maakaasu', 'Biokaasu'],
      type: ['neutralgas', 'biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Gasum Oy',
    },
    {
      id: 47,
      url_name: 'roves',
      name: 'Seinäjoki Roves',
      address: 'Piirturiväylä 1, 60100 Seinäjoki',
      coords: { lat: 62.7652223, lng: 22.9264104 },
      products: ['Maakaasu', 'Biokaasu'],
      type: ['neutralgas', 'biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Gasum Oy',
    },
    {
      id: 48,
      url_name: 'lielahti',
      name: 'Tampere Lielahti',
      address: 'Energiankatu 5, 33400 Tampere',
      coords: { lat: 61.5145556, lng: 23.6767844 },
      products: ['Maakaasu', 'Biokaasu'],
      type: ['neutralgas', 'biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Gasum Oy',
    },
    {
      id: 49,
      url_name: 'nekala',
      name: 'Tampere Nekala',
      address: 'Viinikankatu 40, 33800 Tampere',
      coords: { lat: 61.4794939, lng: 23.7824393 },
      products: ['Maakaasu', 'Biokaasu'],
      type: ['neutralgas', 'biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Gasum Oy',
    },
    {
      id: 50,
      url_name: 'satamaturku',
      name: 'Turku Satama',
      address: 'Tuontiväylä 2, 20200 Turku',
      coords: { lat: 60.4473036, lng: 22.2129648 },
      products: ['Nesteytetty maakaasu (LNG)', 'Maakaasu', 'Biokaasu'],
      type: ['neutralgas', 'biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Gasum Oy',
    },
    {
      id: 51,
      url_name: 'rykmenttipuisto',
      name: 'Tuusula Rykmentinpuisto',
      address: 'Puistometsäntie 1, 04300 Tuusula',
      coords: { lat: 60.3984176, lng: 25.0482064 },
      products: ['Maakaasu', 'Biokaasu'],
      type: ['neutralgas', 'biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Suomen Kaasuenergia Oy',
    },
    {
      id: 52,
      url_name: 'uusikaarlepyy',
      name: 'Uusikaarlepyy Jepua',
      address: 'Läntinen Jepuantie 228, 66850 Jepua',
      coords: { lat: 63.415413, lng: 22.6044955 },
      products: ['Biokaasu'],
      type: ['biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Jepuan Biokaasu Oy (Jippo Biogas Ab)',
    },
    {
      id: 53,
      url_name: 'runsor',
      name: 'Vaasa Runsor',
      address: 'Kiitokaari 2, 65380 Vaasa (ABC!)',
      coords: { lat: 63.052135, lng: 21.7178 },
      products: ['Biokaasu'],
      type: ['biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'BIG Biokaasu',
    },
    {
      id: 54,
      url_name: 'petikko',
      name: 'Vantaa Petikko',
      address: 'Klinkkerinkaari 1, 01720 Vantaa',
      coords: { lat: 60.2794646, lng: 24.815358 },
      products: ['Maakaasu', 'Biokaasu'],
      type: ['neutralgas', 'biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Gasum Oy',
    },
    {
      id: 55,
      url_name: 'porttipuisto',
      name: 'Vantaa Porttipuisto',
      address: 'Porttisuontie 18, 01200 Vantaa (IKEA)',
      coords: { lat: 60.2782306, lng: 25.0817227 },
      products: ['Maakaasu', 'Biokaasu'],
      type: ['neutralgas', 'biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Gasum Oy',
    },
    {
      id: 56,
      url_name: 'porttipuisto',
      name: 'Vantaa Tuupakka',
      address: 'Tuupakantie 25, 01690 Vantaa',
      coords: { lat: 60.2931696, lng: 24.9131151 },
      products: ['Maakaasu', 'Nesteytetty maakaasu (LNG)', 'Biokaasu'],
      type: ['neutralgas', 'biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Gasum Oy',
    },
    {
      id: 57,
      url_name: 'diggarinkatu',
      name: 'Järvenpää',
      address: 'Diggarinkatu 8 A, 04420 Järvenpää',
      coords: { lat: 60.4553351, lng: 25.113481 },
      products: ['Maakaasu', 'Biokaasu'],
      type: ['neutralgas', 'biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Gasum Oy',
    },
    {
      id: 58,
      url_name: 'alatemmes',
      name: 'Ala-temmes',
      address: 'Jyväskyläntie 69, 91930 Ala-Temmes',
      coords: { lat: 64.7632956, lng: 25.5447264 },
      products: ['Biokaasu'],
      type: ['biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Seo',
      other: 'Ala-Temmeksen ja Kaakkurin asemiltamme löytyvät myös NGV2 adapterit ko. liittimille varustettujen ajoneuvojen tankkausta varten (raskas/keskiraskas liikenne).'
    },
    {
      id: 59,
      url_name: 'kaakkuri',
      name: 'Oulu kaakkuri',
      address: 'Kaakkurinojantie 1 90420 Oulu',
      coords: { lat: 64.9593355, lng: 25.5259025 },
      products: ['Biokaasu'],
      type: ['biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Seo',
      other: 'Ala-Temmeksen ja Kaakkurin asemiltamme löytyvät myös NGV2 adapterit ko. liittimille varustettujen ajoneuvojen tankkausta varten (raskas/keskiraskas liikenne).'
    },
    {
      id: 60,
      url_name: 'sakyla',
      name: 'Säkylä',
      address: 'Kauniinsannantie 10, 27820 Säkylä',
      coords: { lat: 61.0854202, lng: 22.2405478 },
      products: ['Biokaasu (CBG)'],
      type: ['biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'VSS BioPower Oy',
      other: ''
    },
    {
      id: 61,
      url_name: 'luotsinmaki',
      name: 'Pori Luotsinmäki',
      address: 'Lounatuulentie 2, 28190 Pori',
      coords: { lat: 61.5118412, lng: 21.7726842 },
      products: ['Biokaasu (CBG)'],
      type: ['biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Envor BioTech Oy',
      other: ''
    },
    {
      id: 62,
      url_name: 'lahdesjarvi',
      name: 'Tampere Lahdesjärvi',
      address: 'Murskekatu 1, 33840 Tampere',
      coords: { lat: 61.4515412, lng: 23.770122 },
      products: ['Maakaasu, Biokaasu (CBG/CNG)'],
      type: ['neutralgas', 'biogas'],
      payments: ['Gas Card -tankkauskortti, pankki- & luottokortit'],
      operator: 'Gasum Oy',
      other: ''
    },
    {
      id: 63,
      url_name: 'moreeni',
      name: 'Hämeenlinna Moreeni',
      address: 'Turun valtatie 199, 13430 Hämeenlinna',
      coords: { lat: 60.960393, lng: 24.4370286 },
      products: ['Maakaasu, Biokaasu (CBG/CNG)'],
      type: ['neutralgas', 'biogas'],
      payments: ['Gas Card -tankkauskortti, pankki- & luottokortit'],
      operator: 'Gasum Oy',
      other: ''
    },
    {
      id: 64,
      url_name: 'jylppy',
      name: 'Kotka Jylppy',
      address: 'Jylpyntie 38, 48230 Kotka',
      coords: { lat: 60.4958547, lng: 26.9005473 },
      products: ['Maakaasu, Biokaasu (CBG/CNG)'],
      type: ['neutralgas', 'biogas'],
      payments: ['Gas Card -tankkauskortti, pankki- & luottokortit'],
      operator: 'Gasum Oy',
      other: ''
    },
    {
      id: 65,
      url_name: 'taavetti',
      name: 'Luumäki Taavetti',
      address: 'Kanervatie 4, 54500 Luumäki',
      coords: { lat: 60.9203286, lng: 27.5421762 },
      products: ['Biokaasu (CBG)'],
      type: ['biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'BIG Biokaasu // Provetek Oy',
      other: ''
    },
    {
      id: 66,
      url_name: 'hyrymaki',
      name: 'Lappeenranta Hyrymäki',
      address: 'Eteläkatu 5, 53500 Lappeenranta',
      coords: { lat: 61.0449156, lng: 28.2235278 },
      products: ['Biokaasu (CBG)'],
      type: ['biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'BIG Biokaasu',
      other: ''
    },
    {
      id: 67,
      url_name: 'pajarila',
      name: 'Lappeenranta Pajarila',
      address: 'Hirsimäenkatu 4, 53500 Lappeenranta',
      coords: { lat: 61.052428, lng: 28.2578921 },
      products: ['Maakaasu, Biokaasu (CBG/CNG)'],
      type: ['neutralgas', 'biogas'],
      payments: ['Gas Card -tankkauskortti, pankki- & luottokortit'],
      operator: 'Gasum Oy',
      other: ''
    },
    {
      id: 68,
      url_name: 'vuoksenniska',
      name: 'Imatra Vuoksenniska',
      address: 'Sauramonkuja 5–7, 55800 Imatra',
      coords: { lat: 61.223627, lng: 28.8404372 },
      products: ['Biokaasu (CBG)'],
      type: ['biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'BIG Biokaasu',
      other: ''
    },
    {
      id: 69,
      url_name: 'koirniemi',
      name: 'Parikkala Koirniemi',
      address: 'Koirniementie 6, 59310 Parikkala',
      coords: { lat: 61.5919214, lng: 29.4867135 },
      products: ['Biokaasu (CBG)'],
      type: ['biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'BIG Biokaasu',
      other: ''
    },
    {
      id: 70,
      url_name: 'kuortti',
      name: 'Pertunmaa Kuortti',
      address: 'Hennalantie 10, 19410 Kuortti',
      coords: { lat: 61.4242977, lng: 26.4324415 },
      products: ['Biokaasu (CBG)'],
      type: ['biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'ESE Etelä-Savon Energia Oy',
      other: ''
    },
    {
      id: 71,
      url_name: 'tusku',
      name: 'Mikkeli Tusku',
      address: 'Insinöörinkatu 2, 50100 Mikkeli',
      coords: { lat: 61.6894335, lng: 27.2159806 },
      products: ['Maakaasu, Biokaasu (CBG/CNG)'],
      type: ['neutralgas', 'biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'ESE Etelä-Savon Energia Oy',
      other: ''
    },
    {
      id: 72,
      url_name: 'haapavesi',
      name: 'Mikkeli Tusku',
      address: 'Virtalantie 47, 86650 Haapavesi',
      coords: { lat: 64.1390726, lng: 25.5111726 },
      products: ['Biokaasu (CNG)'],
      type: ['biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Vuorenmaan maatila Oy',
      other: ''
    },
  ],
})
