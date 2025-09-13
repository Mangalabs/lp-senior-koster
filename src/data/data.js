function shuffleFirst(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return arr;
  const copy = [...arr];
  const randomIndex = Math.floor(Math.random() * copy.length);
  const [first] = copy.splice(randomIndex, 1);
  return [first, ...copy];
}

const slides = [
  {
    background: 'bg-gradient-to-br from-pink-100 via-pink-50 to-yellow-100',
    content: 'image',
    imageUrl: '/roloSalgado.jpeg',
    opacity: 'opacity-30',
  },
  {
    background: 'bg-gradient-to-br from-yellow-100 via-yellow-50 to-blue-100',
    content: 'image',
    imageUrl: '/pao.jpg',
    opacity: 'opacity-30',
  },
  {
    background: 'bg-gradient-to-br from-pink-100 via-pink-50 to-yellow-100',
    content: 'image',
    imageUrl: '/folheado-doce.jpg',
    opacity: 'opacity-30',
  },
  {
    background: 'bg-gradient-to-br from-pink-50 via-yellow-50 to-blue-100',
    content: 'image',
    imageUrl: '/pastel-docejpg.jpg',
    opacity: 'opacity-30',
  },
  {
    background: 'bg-gradient-to-br from-red-100 via-pink-50 to-yellow-100',
    content: 'image',
    imageUrl: '/bolo-frutas-vermelhas.jpg',
    opacity: 'opacity-30',
  },
  {
    background: 'bg-gradient-to-br from-yellow-100 via-yellow-200 to-pink-200',
    content: 'image',
    imageUrl: '/brownie-com-sorvete.jpg',
    opacity: 'opacity-30',
  },
  {
    background: 'bg-gradient-to-br from-pink-100 via-yellow-100 to-blue-100',
    content: 'image',
    imageUrl: '/cheesecake.jpg',
    opacity: 'opacity-30',
  },
  {
    background: 'bg-gradient-to-br from-yellow-200 via-pink-100 to-blue-200',
    content: 'image',
    imageUrl: '/folheado-doce-morango.jpg',
    opacity: 'opacity-30',
  },
  {
    background: 'bg-gradient-to-br from-yellow-100 via-yellow-50 to-pink-100',
    content: 'image',
    imageUrl: '/pao-integral.jpg',
    opacity: 'opacity-30',
  },
  {
    background: 'bg-gradient-to-br from-pink-50 via-yellow-100 to-green-200',
    content: 'image',
    imageUrl: '/torta-de-limao.jpg',
    opacity: 'opacity-30',
  },
  {
    background: 'bg-gradient-to-br from-yellow-100 via-pink-100 to-green-100',
    content: 'image',
    imageUrl: '/tortele-de-limão.jpg',
    opacity: 'opacity-30',
  },
  {
    background: 'bg-gradient-to-br from-pink-100 via-yellow-100 to-blue-100',
    content: 'image',
    imageUrl: '/tortele-de-morango.jpg',
    opacity: 'opacity-30',
  },
  {
    background: 'bg-gradient-to-br from-yellow-100 via-pink-200 to-green-100',
    content: 'image',
    imageUrl: '/muffin-de-coraçao.jpg',
    opacity: 'opacity-30',
  },
];

export const siteData = {
  hero: {
    title: 'Bolos e Pães',
    highlightedTitle: 'Artesanais',
    subtitle: 'Deliciosos!',
    description:
      'Sabores únicos feitos com carinho e ingredientes selecionados para momentos especiais',
    ctaText: 'Faça sua reserva',
    ctaLink: '#reservas',
    slides: shuffleFirst(slides),
    logo: {
      imageUrl: '/icon.png',
      altText: 'Senior Koster Logo',
    },
  },
};
