export const state = () => ({
  christmasProducts: [
    {
      id: '1',
      name: '6 divas',
      desc: 'Vrlo fin i lijepoizgledan kolač koji se lako napravi i brzo pojede.',
      imgSrc: '6-divas.jpg',
      price: 22,
    },
    {
      id: '2',
      name: 'No Name',
      desc: 'Neki moj random lorem ipsum opis.',
      imgSrc: 'no-name.jpg',
      price: 38,
    },
    {
      id: '3',
      name: 'Petit Fours',
      desc: 'Lorem ispum dolor sit amet.',
      imgSrc: 'petit-fours.jpg',
      price: 20,
    },
    {
      id: '4',
      name: 'Carrot cake',
      desc: 'Lorem ipsum dolor sit amet.',
      imgSrc: 'carrot-cake.jpg',
      price: 22,
    },
  ],
  allProducts: [
    {
      id: '1',
      name: '6 divas',
      desc: 'Vrlo fin i lijepoizgledan kolač koji se lako napravi i brzo pojede.',
      imgSrc: '6-divas.jpg',
      price: 22,
      category: 'cakes',
    },
    {
      id: '2',
      name: 'No Name',
      desc: 'Neki moj random lorem ipsum opis.',
      imgSrc: 'no-name.jpg',
      price: 38,
      category: 'cakes',
    },
    {
      id: '3',
      name: 'Petit Fours',
      desc: 'Lorem ispum dolor sit amet.',
      imgSrc: 'petit-fours.jpg',
      price: 20,
      category: 'cakes',
    },
    {
      id: '4',
      name: 'Carrot cake',
      desc: 'Lorem ipsum dolor sit amet.',
      imgSrc: 'carrot-cake.jpg',
      price: 22,
      category: 'cakes',
    },
  ],
});

export const getters = {
  getChristmasProducts: (state) => state.christmasProducts,
  getProductById: (state) => (id) =>
    state.allProducts.filter((item) => item.id === id),
};
