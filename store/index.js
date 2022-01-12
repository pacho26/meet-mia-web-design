export const state = () => ({
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
  ],
});

export const getters = {
  getChristmasProducts: (state) => state.christmasProducts,
  getProductById: (state) => (id) =>
    state.allProducts.filter((item) => item.id === id),
};
