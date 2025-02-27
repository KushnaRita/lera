
export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'residential' | 'commercial';
  image: string;
  location: string;
  year: number;
  services: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Modern Minimalist Apartment',
    description: 'A sleek, contemporary apartment design that maximizes space and light through careful material selection and thoughtful spatial planning.',
    category: 'residential',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80',
    location: 'New York City, USA',
    year: 2023,
    services: ['Interior Design', 'Space Planning', 'Furniture Selection'],
    featured: true
  },
  {
    id: '2',
    title: 'Serene Countryside Villa',
    description: 'A luxurious countryside retreat that balances rustic charm with modern comforts, creating a peaceful sanctuary away from city life.',
    category: 'residential',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80',
    location: 'Tuscany, Italy',
    year: 2022,
    services: ['Architecture', 'Interior Design', 'Landscape Design'],
  },
  {
    id: '3',
    title: 'Boutique Retail Space',
    description: 'A distinctive retail environment that elevates the shopping experience through careful attention to lighting, materials, and customer flow.',
    category: 'commercial',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80',
    location: 'Paris, France',
    year: 2023,
    services: ['Commercial Design', 'Lighting Design', 'Custom Fixtures'],
    featured: true
  },
  {
    id: '4',
    title: 'Contemporary Office Campus',
    description: 'A forward-thinking workplace designed to foster collaboration, creativity, and employee wellbeing through innovative space planning.',
    category: 'commercial',
    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=80',
    location: 'Singapore',
    year: 2021,
    services: ['Workplace Design', 'Space Planning', 'Furniture Specification'],
    featured: true
  },
  {
    id: '5',
    title: 'Urban Loft Renovation',
    description: 'A complete transformation of an industrial loft space into a sophisticated urban dwelling that respects the building\'s heritage.',
    category: 'residential',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&auto=format&fit=crop&q=80',
    location: 'Berlin, Germany',
    year: 2022,
    services: ['Renovation', 'Interior Design', 'Custom Furniture'],
  },
  {
    id: '6',
    title: 'Scandinavian-Inspired Home',
    description: 'A bright and airy family home that embraces Scandinavian design principles with clean lines, functional spaces, and natural materials.',
    category: 'residential',
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&auto=format&fit=crop&q=80',
    location: 'Copenhagen, Denmark',
    year: 2021,
    services: ['Interior Design', 'Furniture Selection', 'Styling'],
  },
  {
    id: '7',
    title: 'Luxury Hotel Lobby',
    description: 'An opulent hotel entrance that creates a memorable first impression through grand proportions, custom details, and luxurious materials.',
    category: 'commercial',
    image: 'https://images.unsplash.com/photo-1606744888344-493238951221?w=800&auto=format&fit=crop&q=80',
    location: 'Dubai, UAE',
    year: 2023,
    services: ['Hospitality Design', 'Custom Furniture', 'Art Consultation'],
    featured: true
  },
  {
    id: '8',
    title: 'Coastal Beach House',
    description: 'A relaxed beachfront property that celebrates its stunning location with natural materials, a soothing palette, and indoor-outdoor living.',
    category: 'residential',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&auto=format&fit=crop&q=80',
    location: 'Malibu, USA',
    year: 2022,
    services: ['Interior Design', 'Landscape Integration', 'Custom Millwork'],
  },
  {
    id: '9',
    title: 'Modern Restaurant Design',
    description: 'A distinctive dining establishment with a carefully curated atmosphere that enhances the culinary experience through thoughtful design.',
    category: 'commercial',
    image: 'https://images.unsplash.com/photo-1563136837-40a8335558cb?w=800&auto=format&fit=crop&q=80',
    location: 'Melbourne, Australia',
    year: 2021,
    services: ['Restaurant Design', 'Lighting Design', 'Custom Furniture'],
  },
];

export const studioServices = [
  {
    id: 'interior-design',
    title: 'Interior Design',
    description: 'Complete interior design solutions for residential and commercial spaces, from concept to completion.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'space-planning',
    title: 'Space Planning',
    description: 'Strategic space planning that optimizes functionality, flow, and spatial experience.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'furniture-design',
    title: 'Furniture Design',
    description: 'Custom furniture design and curation that perfectly complements the space and client needs.',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'commercial-design',
    title: 'Commercial Design',
    description: 'Specialized design for retail, hospitality, and workplace environments that enhance brand experience.',
    image: 'https://images.unsplash.com/photo-1604014236812-28d665e1878d?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'renovation',
    title: 'Renovation',
    description: 'Thoughtful renovation and restoration services that honor architectural heritage while meeting modern needs.',
    image: 'https://images.unsplash.com/photo-1574739782594-db4ead022697?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'consultation',
    title: 'Design Consultation',
    description: 'Expert guidance and consultation to help clients make informed design decisions for their spaces.',
    image: 'https://images.unsplash.com/photo-1664574654589-8f6c9b94c02d?w=800&auto=format&fit=crop&q=80',
  },
];
