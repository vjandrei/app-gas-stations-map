export const state = () => ({
  data: [
    {
      id: 0,
      url_name: 'friisila',
      name: 'Gasum Espoo Friisilä',
      address: 'Kuitinmäentie 26, 02240 Espoo',
      coords: { lat: 60.1617785, lng: 24.7172848 },
      products: ['Maakaasu', 'Biokaasu'],
      type: ['naturalgas', 'biogas'],
      payments: ['Gas Card', 'Pankki ja luottokortit'],
      operator: 'Gasum',
      distance: null
    },
    {
      id: 1,
      url_name: 'lommila',
      name: 'Gasum Espoo Lommila',
      address: 'Espoontie 21, 02740 Espoo',
      coords: { lat: 60.2165252, lng: 24.6664632 },
      products: ['Maakaasu', 'Biokaasu'],
      type: ['naturalgas', 'biogas'],
      payments: ['Gas Card', 'Pankki ja luottokortit'],
      operator: 'Gasum',
      distance: null
    },
    {
      id: 2,
      url_name: 'vermo',
      name: 'Gasum Espoo Vermo',
      address: 'Perkkaantie 17, 00370 Espoo',
      coords: { lat: 60.2173457, lng: 24.8351607 },
      products: ['Maakaasu', 'Biokaasu'],
      type: ['naturalgas', 'biogas'],
      payments: ['Gas Card', 'Pankki ja luottokortit'],
      operator: 'Gasum',
      distance: null
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
      distance: null
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
      distance: null
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
      distance: null
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
      distance: null
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
      distance: null
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
      distance: null
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
      distance: null
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
      distance: null
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
      distance: null
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
      distance: null
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
      distance: null
    },
    {
      id: 14,
      url_name: 'isokyro',
      name: 'Isokyrö',
      address: 'Kalpatie 2, 61500 Isokyrö',
      coords: { lat: 61.1862904, lng: 28.7454718 },
      products: ['Biokaasu'],
      type: ['biogas'],
      payments: ['Pankki- & luottokortit'],
      operator: 'Oy Jeppo Biogas Ab / Kyrö Distillery Company Oy',
      distance: null
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
      distance: null
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
      distance: null
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
      distance: null
    }
  ]
})

// like methods get stuff from API
export const actions = {
  GET_DISTANCE(context) {
    context.commit('SET_STATION_DISTANCE')
  }
}

// only updates the state
export const mutations = {
  SET_STATION_DISTANCE(state, distance) {}
}

//showing things, not mutating state like computed properties
export const getters = {}
