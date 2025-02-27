
export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'residential' | 'commercial';
  image: string;
  images: string[];
  location: string;
  year: number;
  services: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Современная Минималистичная Квартира',
    description: 'Элегантный, современный дизайн квартиры, максимально использующий пространство и свет благодаря тщательному подбору материалов и продуманной планировке.',
    category: 'residential',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&auto=format&fit=crop&q=80'
    ],
    location: 'Нью-Йорк, США',
    year: 2023,
    services: ['Дизайн Интерьера', 'Планировка Пространства', 'Подбор Мебели'],
    featured: true
  },
  {
    id: '2',
    title: 'Загородная Вилла',
    description: 'Роскошное загородное убежище, сочетающее деревенское очарование с современным комфортом, создающее умиротворяющее пространство вдали от городской суеты.',
    category: 'residential',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop&q=80'
    ],
    location: 'Тоскана, Италия',
    year: 2022,
    services: ['Архитектура', 'Дизайн Интерьера', 'Ландшафтный Дизайн']
  },
  {
    id: '3',
    title: 'Бутик-Пространство',
    description: 'Уникальное торговое пространство, которое улучшает покупательский опыт благодаря тщательному вниманию к освещению, материалам и потоку клиентов.',
    category: 'commercial',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555529771-122e5d9f2341?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1604014236372-1def931e5f0a?w=800&auto=format&fit=crop&q=80'
    ],
    location: 'Париж, Франция',
    year: 2023,
    services: ['Коммерческий Дизайн', 'Световой Дизайн', 'Индивидуальная Мебель'],
    featured: true
  },
  {
    id: '4',
    title: 'Современный Офисный Комплекс',
    description: 'Прогрессивное рабочее пространство, созданное для развития сотрудничества, креативности и благополучия сотрудников через инновационное планирование.',
    category: 'commercial',
    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542089363-bba089ffaa25?w=800&auto=format&fit=crop&q=80'
    ],
    location: 'Сингапур',
    year: 2021,
    services: ['Дизайн Рабочих Мест', 'Планировка Пространства', 'Подбор Мебели'],
    featured: true
  },
  {
    id: '5',
    title: 'Реновация Городского Лофта',
    description: 'Полное преобразование промышленного лофта в изысканное городское жилье, сохраняющее историческое наследие здания.',
    category: 'residential',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600488999585-e4364713b90a?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&auto=format&fit=crop&q=80'
    ],
    location: 'Берлин, Германия',
    year: 2022,
    services: ['Реновация', 'Дизайн Интерьера', 'Индивидуальная Мебель']
  },
  {
    id: '6',
    title: 'Дом в Скандинавском Стиле',
    description: 'Светлый и просторный семейный дом, воплощающий принципы скандинавского дизайна с чистыми линиями, функциональными пространствами и натуральными материалами.',
    category: 'residential',
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=800&auto=format&fit=crop&q=80'
    ],
    location: 'Копенгаген, Дания',
    year: 2021,
    services: ['Дизайн Интерьера', 'Подбор Мебели', 'Стилизация']
  },
  {
    id: '7',
    title: 'Лобби Роскошного Отеля',
    description: 'Роскошный вход в отель, создающий незабываемое первое впечатление благодаря величественным пропорциям, индивидуальным деталям и люксовым материалам.',
    category: 'commercial',
    image: 'https://images.unsplash.com/photo-1606744888344-493238951221?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1606744888344-493238951221?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&auto=format&fit=crop&q=80'
    ],
    location: 'Дубай, ОАЭ',
    year: 2023,
    services: ['Гостиничный Дизайн', 'Индивидуальная Мебель', 'Арт-Консультации'],
    featured: true
  },
  {
    id: '8',
    title: 'Прибрежный Дом',
    description: 'Расслабленное пляжное владение, которое подчеркивает свое потрясающее расположение с помощью натуральных материалов, успокаивающей палитры и интеграции внутреннего и внешнего пространства.',
    category: 'residential',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1587920150204-f88cc6c9769c?w=800&auto=format&fit=crop&q=80'
    ],
    location: 'Малибу, США',
    year: 2022,
    services: ['Дизайн Интерьера', 'Ландшафтная Интеграция', 'Столярные Работы']
  },
  {
    id: '9',
    title: 'Дизайн Современного Ресторана',
    description: 'Уникальное заведение общественного питания с тщательно подобранной атмосферой, которая усиливает кулинарные впечатления через продуманный дизайн.',
    category: 'commercial',
    image: 'https://images.unsplash.com/photo-1563136837-40a8335558cb?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1563136837-40a8335558cb?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1564843344747-c6b474a4474c?w=800&auto=format&fit=crop&q=80'
    ],
    location: 'Мельбурн, Австралия',
    year: 2021,
    services: ['Дизайн Ресторанов', 'Световой Дизайн', 'Индивидуальная Мебель']
  }
];

export const studioServices = [
  {
    id: 'interior-design',
    title: 'Дизайн Интерьера',
    description: 'Комплексные решения по дизайну интерьера для жилых и коммерческих помещений, от концепции до реализации.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'space-planning',
    title: 'Планировка Пространства',
    description: 'Стратегическое планирование пространства, оптимизирующее функциональность, поток и пространственный опыт.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'furniture-design',
    title: 'Дизайн Мебели',
    description: 'Индивидуальный дизайн мебели и подбор, который идеально дополняет пространство и потребности клиента.',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'commercial-design',
    title: 'Коммерческий Дизайн',
    description: 'Специализированный дизайн для розничной торговли, гостиничного бизнеса и рабочих пространств, улучшающий восприятие бренда.',
    image: 'https://images.unsplash.com/photo-1604014236812-28d665e1878d?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'renovation',
    title: 'Реновация',
    description: 'Продуманные услуги по реновации и реставрации, сохраняющие архитектурное наследие при удовлетворении современных потребностей.',
    image: 'https://images.unsplash.com/photo-1574739782594-db4ead022697?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'consultation',
    title: 'Консультации по Дизайну',
    description: 'Экспертное руководство и консультации, помогающие клиентам принимать информированные решения по дизайну их пространств.',
    image: 'https://images.unsplash.com/photo-1664574654589-8f6c9b94c02d?w=800&auto=format&fit=crop&q=80',
  },
];
