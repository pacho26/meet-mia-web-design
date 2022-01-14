export const state = () => ({
  numberOfItemsInCart: 0,
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
      name: 'iPie',
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
  ],
  allProducts: [
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
      desc: 'Čokolada, čokolada i čokolada.',
      imgSrc: 'no-name.jpg',
      price: 38,
      category: 'kolači',
    },
    {
      id: '9t0d5mHf',
      name: 'Petit Fours',
      desc: 'Šareni izbor četiri nasumična kolača s raznim sastojcima.',
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
      imgSrc: 'salty-and-nutty.jpg',
      price: 22,
      category: 'kolači',
    },
    {
      id: 'xr0I7kyu',
      name: 'iPie',
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
  ],
});

export const getters = {
  getChristmasProducts: (state) => state.christmasProducts,
  getProductById: (state) => (id) =>
    state.allProducts.filter((item) => item.id === id),
  getOtherProducts: (state) => state.allProducts.slice(0, 4),
  getNumberOfItemsInCart: (state) => state.numberOfItemsInCart,
};

export const mutations = {
  addItemToCart(state) {
    state.numberOfItemsInCart++;
  },
};
