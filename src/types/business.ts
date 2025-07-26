export interface Business {
  id: string;
  name: string;
  slug: string;
  description: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    latitude: number;
    longitude: number;
  };
  phone: {
    display: string;
    e164: string;
  };
  email?: string;
  categories: string[];
  primaryCategory: string;
  hours: {
    [key: string]: { open: string; close: string } | null;
  };
  images: {
    thumbnail: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    hero: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
  links: {
    website?: string;
    facebook?: string;
    instagram?: string;
    twitter?: string;
    pinterest?: string;
    tiktok?: string;
    booking?: string;
  };
  features?: string[];
  ratings?: {
    google?: number;
    yelp?: number;
    tripadvisor?: number;
    facebook?: number;
    reviewCount?: number;
    checkIns?: number;
  };
  priceRange?: string;
  status: 'approved' | 'pending' | 'draft';
  lastModified: string;
  featured: boolean;
  established?: number;
  specialNotes?: string;
}
