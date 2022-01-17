export const state = () => ({
  numberOfItemsInCart: 0,
  numberOfLoadedImages: 0,
  christmasProducts: [
    {
      id: '2U03C1GI',
      name: '6 divas',
      imgSrc: '6-divas.jpg',
      price: 22,
    },
    {
      id: '46MDp5Pe',
      name: 'No Name',
      imgSrc: 'no-name.jpg',
      price: 38,
    },
    {
      id: '9t0d5mHf',
      name: 'Petit Fours',
      imgSrc: 'petit-fours.jpg',
      price: 20,
    },
    {
      id: 'F7UcCqJk',
      name: 'Carrot cake',
      imgSrc: 'carrot-cake.jpg',
      price: 22,
    },
    {
      id: 'PIEUU1zE',
      name: 'Salty & Nutty',
      desc: 'Biskviti s lješnjacima, slani karamel, krema od mascarponea i karamela',
      imgSrc: 'salty-and-nutty.jpg',
      price: 22,
    },
    {
      id: 'dQJCtEo7',
      name: 'Art of tart',
      desc: 'Tart s malinom, kremom od mascarponea, tonke i amaretta, crumble od badema',
      imgSrc: 'art-of-tart.jpg',
      price: 22,
    },
    {
      id: 'xr0I7kyu',
      name: 'Lemon tart',
      desc: 'Tart s kremom od limuna i meringueom',
      imgSrc: 'lemon-tart.jpg',
      price: 18,
    },
    {
      id: 'YZ0AeZHM',
      name: 'iPie',
      desc: 'Tart od jabuka s crumbleom od lješnjaka i karamelom',
      imgSrc: 'i-pie.jpg',
      price: 18,
    },
  ],
  allProducts: [
    // KOLAČI
    {
      id: '2U03C1GI',
      name: '6 divas',
      desc: 'Čokoladni tart, čokoladni biskvit, čokoladna karamela, krema sa slanom čokoladom, mousse od mliječne čokolade, čokoladni crumble.',
      imgSrc: '6-divas.jpg',
      price: 22,
      category: 'kolači',
    },
    {
      id: '46MDp5Pe',
      name: 'No Name',
      desc: 'Čokoladni biskvit, hrkavi sloj čokolade s lješnjacima, žele od karamele, čokoladna krema, mousse od tonke.',
      imgSrc: 'no-name.jpg',
      price: 38,
      category: 'kolači',
    },
    {
      id: '9t0d5mHf',
      name: 'Petit Fours',
      desc: 'Zanimljiva kombinacija 4 kolačića s raznim sastojcima u mini verziji po izboru ekipe iz kuhinje.',
      imgSrc: 'petit-fours.jpg',
      price: 20,
      category: 'kolači',
    },
    {
      id: 'F7UcCqJk',
      name: 'Carrot cake',
      desc: 'Mrkva, lješnjak, datulje, kokos, naranča, cimet, vanilija, indijski oraščići, agavin sirup, kokosovo mlijeko, kokosovo ulje',
      imgSrc: 'carrot-cake.jpg',
      price: 22,
      category: 'kolači',
    },
    {
      id: 'PIEUU1zE',
      name: 'Salty & Nutty',
      desc: 'Biskviti s lješnjacima, slani karamel, krema od mascarponea i karamela',
      imgSrc: 'salty-and-nutty.jpg',
      price: 22,
      category: 'kolači',
    },
    {
      id: 'dQJCtEo7',
      name: 'Art of tart',
      desc: 'Tart s malinom, kremom od mascarponea, tonke i amaretta, crumble od badema',
      imgSrc: 'art-of-tart.jpg',
      price: 22,
      category: 'kolači',
    },
    {
      id: 'xr0I7kyu',
      name: 'Lemon tart',
      desc: 'Tart s kremom od limuna i meringueom',
      imgSrc: 'lemon-tart.jpg',
      price: 18,
      category: 'kolači',
    },
    {
      id: 'YZ0AeZHM',
      name: 'iPie',
      desc: 'Tart od jabuka s crumbleom od lješnjaka i karamelom',
      imgSrc: 'i-pie.jpg',
      price: 18,
      category: 'kolači',
    },
    {
      id: 'hQXH4AmB',
      name: 'Vegan Carrot Cake',
      desc: 'Mrkva, lješnjak, datulje, kokos, naranča, cimet, vanilija, indijski oraščići, agavin sirup, kokosovo mlijeko, kokosovo ulje',
      imgSrc: 'vegan-carrot-cake.jpg',
      price: 24,
      category: 'kolači',
    },
    {
      id: 'Gm7dHPvC',
      name: 'Spring Cake',
      desc: 'Cheesecake podloga, biskvit od limuna, marelice, cheesecake mousse s bazgom',
      imgSrc: 'spring-cake.jpg',
      price: 28,
      category: 'kolači',
    },
    {
      id: 'miT58zzZ',
      name: 'Queen Niki',
      desc: 'Čokoladni biskvit, hrkavi sloj čokolade s lješnjacima, žele od karamele, čokoladna krema, mousse od tonke',
      imgSrc: 'queen-niki.jpg',
      price: 24,
      category: 'kolači',
    },
    {
      id: 'pD2z0634',
      name: 'Meet Mia',
      desc: 'Biskvit od pistacija, mousse od pistacija, hrskave pistacije, krema od čokolade i naranče',
      imgSrc: 'meet-mia.jpg',
      price: 24,
      category: 'kolači',
    },

    // SENDVIČI
    {
      id: 'OZfWdqqw',
      name: 'Vege Wrap',
      desc: 'Tortilja od slanutka, tapioke i špinata punjena humusom, dimljenim tofuom, salatom, rajčicom i tikvicama',
      imgSrc: 'vege-wrap.jpg',
      price: 35,
      category: 'sendviči',
    },
    {
      id: 'C8putXGC',
      name: 'Signor Prosciutto',
      desc: 'Domaće pecivo, aromatizirani namaz do ricotte, pršut, rikula, rajčica',
      imgSrc: 'signor-prosciutto.jpg',
      price: 30,
      category: 'sendviči',
    },
    {
      id: 'O9YDTrJQ',
      name: 'Brioche humus',
      desc: 'Fino brioche pecivo s humusom, mariniranim tikvicama i sirom',
      imgSrc: 'brioche-humus.jpg',
      price: 15,
      category: 'sendviči',
    },
    {
      id: '8amjXkX3',
      name: 'Porky',
      desc: 'Sendvič s mariniranom svinjetinom, sirom, kiselim krastavcima i umakom od senfa, meda i naranče u domaćem pecivu',
      imgSrc: 'porky.jpg',
      price: 28,
      category: 'sendviči',
    },
    {
      id: 'GVCKrL5E',
      name: 'Veggie Bagel',
      desc: 'Domaće bagel pecivo s hummusom, avokadom, salatom, klice, chilli flakes',
      imgSrc: 'veggie-bagel.jpg',
      price: 25,
      category: 'sendviči',
    },
    {
      id: 'Y5agmivV',
      name: 'Brioche špinat',
      desc: 'Brioche sa špinatom i sirom',
      imgSrc: 'brioche-spinat.jpg',
      price: 15,
      category: 'sendviči',
    },
    {
      id: '8WnoRXrk',
      name: 'Bagel pesto',
      desc: 'Domaće bagel pecivo s pestom, mozzarellom i cherry rajčicom',
      imgSrc: 'bagel-pesto.jpg',
      price: 15,
      category: 'sendviči',
    },
    {
      id: '6D89Qc0t',
      name: 'Avokado na piru',
      desc: 'Tostirana focaccia od pirovog brašna, avokado, cherry rajčice',
      imgSrc: 'avokado-na-piru.jpg',
      price: 35,
      category: 'sendviči',
    },

    // KROASANI
    {
      id: 'N6ZRDeeB',
      name: 'Croissant puretina',
      desc: 'Croissant s purećom šunkom, hrenom, sirom i salatom',
      imgSrc: 'croissant-puretina.jpg',
      price: 18,
      category: 'kroasani',
    },
    {
      id: 'IUlSMeKU',
      name: 'Croissant pršut',
      desc: 'Croissant s pršutom i sirom',
      imgSrc: 'croissant-prsut.jpg',
      price: 18,
      category: 'kroasani',
    },
    {
      id: 'Ihsj9eXY',
      name: 'Croissant marmelada',
      desc: 'Ručno rađeni croissant punjen domaćom marmeladom od marelica',
      imgSrc: 'croissant-marmelada.jpg',
      price: 12,
      category: 'kroasani',
    },
    {
      id: '5L9Ywx1T',
      name: 'Regular croissant',
      desc: 'Domaći ručno rađeni croissant s maslacem',
      imgSrc: 'regular-croissant.jpg',
      price: 8,
      category: 'kroasani',
    },
  ],
});

export const getters = {
  getChristmasProducts: (state) => state.christmasProducts,

  getProductById: (state) => (id) =>
    state.allProducts.filter((item) => item.id === id),

  getOtherProducts: (state) => state.allProducts.slice(0, 4),

  getNumberOfItemsInCart: (state) => state.numberOfItemsInCart,

  getCakes: (state) =>
    state.allProducts
      .filter((el) => el.category === 'kolači')
      .sort((a, b) => (a.price > b.price ? 1 : -1)),

  getSandwiches: (state) =>
    state.allProducts
      .filter((el) => el.category === 'sendviči')
      .sort((a, b) => (a.price > b.price ? 1 : -1)),

  getCroissants: (state) =>
    state.allProducts
      .filter((el) => el.category === 'kroasani')
      .sort((a, b) => (a.price > b.price ? 1 : -1)),

  getNumberOfAllProducts: (state) => state.allProducts.length,

  getNumberOfLoadedImages: (state) => state.resetNumberOfLoadedImages,
};

export const mutations = {
  addItemToCart(state) {
    state.numberOfItemsInCart++;
  },
  resetNumberOfLoadedImages(state) {
    state.numberOfLoadedPictures = 0;
  },
  incrementNumberOfLoadedImages(state) {
    state.numberOfLoadedImages++;
  },
};
