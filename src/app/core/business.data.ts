/**
 * Datos del negocio. Fuentes (septiembre 2026):
 *  - Instagram @delimaconamor (bio, dirección, publicaciones)
 *  - Google Maps "De Lima con Amor" (teléfono, horarios, valoración, reseñas, fotos)
 */

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  /** Texto que se añade al mensaje de WhatsApp al consultar este servicio */
  waTopic: string;
}

export interface Review {
  author: string;
  stars: 1 | 2 | 3 | 4 | 5;
  /** Antigüedad tal como la muestra Google */
  when: string;
  text: string;
}

export interface OpeningDay {
  /** 0 = domingo … 6 = sábado (igual que Date#getDay) */
  day: number;
  label: string;
  hours: string;
}

export interface InstagramPost {
  src: string;
  alt: string;
  href: string;
}

export const BUSINESS = {
  name: 'De Lima con Amor',
  kind: 'Restaurant & Terraza Bar',
  tagline:
    'Lo mejor de la gastronomía peruana en un solo lugar: ceviches, fondos criollos y pisco sour con el sazón de Lima, en el corazón de Rancagua.',

  /** Solo dígitos, con código de país (Chile +56). Mismo número publicado en Google. */
  whatsappNumber: '56966537333',
  phoneDisplay: '+56 9 6653 7333',
  phoneHref: 'tel:+56966537333',
  whatsappMessage: 'Hola, vi su página web y quisiera tener más información',

  address: {
    street: 'Av. República de Chile 667',
    city: 'Rancagua',
    region: 'Región de O’Higgins',
    country: 'Chile',
  },
  priceRange: '$10.000 – $30.000 por persona',

  /** Mapa incrustado y enlace "Cómo llegar" */
  mapEmbedUrl:
    'https://www.google.com/maps?q=De+Lima+con+Amor,+Av.+Rep%C3%BAblica+de+Chile+667,+Rancagua&z=16&output=embed',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=De+Lima+con+Amor,+Av.+Rep%C3%BAblica+de+Chile+667,+Rancagua',

  social: {
    instagram: {
      handle: '@delimaconamor',
      url: 'https://www.instagram.com/delimaconamor/',
    },
  },

  google: {
    rating: 4.8,
    reviewCount: 162,
    /** Ficha "De Lima con Amor" en Google Maps (abre con sus opiniones) */
    reviewsUrl: 'https://maps.google.com/?cid=11291458022615365669',
  },

  /** Semana completa, lunes primero. */
  hours: [
    { day: 1, label: 'Lunes', hours: '12:30 – 23:00' },
    { day: 2, label: 'Martes', hours: '12:30 – 23:00' },
    { day: 3, label: 'Miércoles', hours: '12:30 – 23:00' },
    { day: 4, label: 'Jueves', hours: '12:30 – 23:00' },
    { day: 5, label: 'Viernes', hours: '12:30 – 23:00' },
    { day: 6, label: 'Sábado', hours: '12:30 – 23:00' },
    { day: 0, label: 'Domingo', hours: '12:30 – 17:00' },
  ] as OpeningDay[],
} as const;

/** Fotos de platos y del local publicadas en la ficha de Google Maps. */
export const SERVICES: Service[] = [
  {
    id: 'ceviches',
    icon: 'fish',
    title: 'Cevichería y marina',
    description: 'Ceviche clásico, mixto y nuestro Ceviche Pantera con tinta de calamar, preparados al momento.',
    image: 'images/srv-ceviche.jpg',
    imageAlt: 'Ceviche de pescado en leche de tigre con choclo y cebolla morada',
    waTopic: 'los ceviches y platos marinos',
  },
  {
    id: 'fondos',
    icon: 'utensils',
    title: 'Fondos criollos',
    description: 'Lomo saltado, costillar con arroz chaufa y risotto de quinoa, con sazón casero.',
    image: 'images/srv-fondos.jpg',
    imageAlt: 'Lomo saltado con arroz blanco y papas fritas en plato negro',
    waTopic: 'los fondos criollos',
  },
  {
    id: 'compartir',
    icon: 'users',
    title: 'Para compartir',
    description: 'Barco Huáscar, trilogía de ceviches y chicharrones mixtos para toda la mesa.',
    image: 'images/srv-compartir.jpg',
    imageAlt: 'Barco de madera con ceviche, causas y chicharrones para compartir',
    waTopic: 'los platos para compartir (Barco Huáscar)',
  },
  {
    id: 'cocteleria',
    icon: 'glass',
    title: 'Pisco sour y coctelería',
    description: 'Sours clásicos y de sabores, macerados de la casa y tragos para brindar.',
    image: 'images/srv-cocteleria.jpg',
    imageAlt: 'Sour de maracuyá junto a platos de lomo saltado y risotto',
    waTopic: 'la carta de pisco sour y coctelería',
  },
  {
    id: 'noches',
    icon: 'music',
    title: 'Noches con música',
    description: 'Karaoke, Domingo Latino con DJ y fechas especiales en nuestra terraza.',
    image: 'images/srv-noches.jpg',
    imageAlt: 'Terraza del restaurant de noche, con luces colgantes y muros de colores',
    waTopic: 'la cartelera de noches con música',
  },
  {
    id: 'celebraciones',
    icon: 'party',
    title: 'Celebraciones y para llevar',
    description: 'Cumpleaños y reuniones en familia, menú infantil y pedidos para retirar.',
    image: 'images/srv-celebraciones.jpg',
    imageAlt: 'Grupo celebrando un cumpleaños en una mesa larga del restaurant',
    waTopic: 'reservar una celebración o pedir para llevar',
  },
];

/** Publicaciones recientes de @delimaconamor (miniatura pública de Instagram). */
export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    src: 'images/ig-1.jpg',
    alt: 'Plato de fondo servido en la barra con muro de letras de colores',
    href: 'https://www.instagram.com/delimaconamor/reel/Dc7NhPqORam/',
  },
  {
    src: 'images/ig-2.jpg',
    alt: 'Papa a la huancaína con huevo y aceituna',
    href: 'https://www.instagram.com/delimaconamor/reel/Db8zw5iJHzL/',
  },
  {
    src: 'images/ig-3.jpg',
    alt: 'Barco Huáscar con ceviches, chicharrones y causas',
    href: 'https://www.instagram.com/delimaconamor/reel/Db9Zswsu4pH/',
  },
  {
    src: 'images/ig-4.jpg',
    alt: 'Mural de dos manos formando un corazón con la palabra Lima',
    href: 'https://www.instagram.com/delimaconamor/reel/Dcw3e7AuzfG/',
  },
];

/**
 * Reseñas reales de Google (ficha "De Lima con Amor"), con la redacción original.
 * Solo se omiten emojis y saltos de línea; los recortes se marcan con "…".
 */
export const REVIEWS: Review[] = [
  {
    author: 'Julio Deney',
    stars: 5,
    when: 'Hace un mes',
    text: 'Primeramente, la atención es A OTRO NIVEL; amabilidad, cortesia, cordialidad. Bebestibles; ...uffff... MUY bien logrados los sabores de cada preparacion. (Nota aparte; pruebe los macerados). Comida; la sasón se siente desde que se olfatea el plato a distancia. 10 de 10 .... Super hiper mega recomendado..!!!',
  },
  {
    author: 'Valeria Guerrero',
    stars: 5,
    when: 'Hace un año',
    text: 'Un tesoro escondido en Rancagua! Todo delicioso! Realmente me sorprendió muchísimo. Comida maravillosa (la mejor carne que he probado), la atención fue perfecta, y el ambiente tranquilo y espacioso. Sin duda volveré! Uno de los mejores lugares a los que he ido en Rancagua',
  },
  {
    author: 'Madhelyn Bautista',
    stars: 5,
    when: 'Hace 10 meses',
    text: 'Mi gente, estuvimos por recorriendo el Sur y a la vuelta necesitabamos parar en algún lugar y descubrimos esta joya. Dios mio!! Todo estaba rico, tienen un costillar con arroz chaufa brutal, no dejen de pedir también la parihuela, etc. La comida de dioses, el ambiente bueno, Las atenciones excelentes. Lo recomiendo 7/7 y obviamente que volveria. …',
  },
];
