import type { Business } from '@/types/business';

export const businesses: Business[] = [
  {
    id: 'dream-dinners',
    name: 'Dream Dinners',
    slug: 'dream-dinners',
    description: 'Meal prep studio offering convenient, ready-to-assemble dinners for busy families',
    address: {
      street: '333 Perry Street Suite A',
      city: 'Castle Rock',
      state: 'CO',
      zip: '80104',
      latitude: 39.3729,
      longitude: -104.8590,
    },
    phone: {
      display: '(303) 841-4620',
      e164: '+13038414620',
    },
    categories: ['Dining', 'Meal Prep'],
    primaryCategory: 'Dining',
    hours: {
      monday: null,
      tuesday: { open: '10:00', close: '16:00' },
      wednesday: { open: '10:00', close: '18:00' },
      thursday: { open: '10:00', close: '18:00' },
      friday: { open: '10:00', close: '16:00' },
      saturday: { open: '10:00', close: '13:00' },
      sunday: null,
    },
    images: {
      thumbnail: {
        src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
        alt: 'Dream Dinners storefront',
        width: 400,
        height: 300,
      },
      hero: {
        src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&h=900&fit=crop',
        alt: 'Inside Dream Dinners Castle Rock',
        width: 1600,
        height: 900,
      },
    },
    links: {
      website: 'https://www.castlerockmealprep.com',
      facebook: 'https://www.facebook.com/DreamDinnersCastleRockCo/',
    },
    status: 'approved',
    lastModified: '2025-07-21',
    featured: true,
    established: 2010,
    specialNotes: 'Veteran-owned & Women-owned, DoorDash delivery available',
  },
  {
    id: 'goldie-links',
    name: 'Goldie Links',
    slug: 'goldie-links',
    description: 'Permanent jewelry and custom gold chains for a personalized style statement',
    address: {
      street: '400 3rd Street (Inside The Barn)',
      city: 'Castle Rock',
      state: 'CO',
      zip: '80104',
      latitude: 39.3731,
      longitude: -104.8588,
    },
    phone: {
      display: '(586) 524-2999',
      e164: '+15865242999',
    },
    categories: ['Shopping', 'Jewelry'],
    primaryCategory: 'Shopping',
    hours: {
      monday: { open: '10:00', close: '18:00' },
      tuesday: { open: '10:00', close: '18:00' },
      wednesday: { open: '10:00', close: '18:00' },
      thursday: { open: '10:00', close: '18:00' },
      friday: { open: '10:00', close: '18:00' },
      saturday: { open: '10:00', close: '18:00' },
      sunday: { open: '10:00', close: '18:00' },
    },
    images: {
      thumbnail: {
        src: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=300&fit=crop',
        alt: 'Goldie Links jewelry display',
        width: 400,
        height: 300,
      },
      hero: {
        src: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1600&h=900&fit=crop',
        alt: 'Goldie Links permanent jewelry station',
        width: 1600,
        height: 900,
      },
    },
    links: {
      website: 'https://goldie-links.com',
      instagram: 'https://www.instagram.com/goldielinksjewelry',
      facebook: 'https://www.facebook.com/GoldieLinksJewelry',
      booking: 'https://calendly.com/goldielinksjewelry',
    },
    email: 'GoldieLinksJewelry@gmail.com',
    status: 'approved',
    lastModified: '2025-07-21',
    featured: true,
    specialNotes: 'Located inside The Barn marketplace',
  },
  {
    id: 'dapper-barbershop',
    name: 'Dapper Barbershop',
    slug: 'dapper-barbershop',
    description: 'Classic barbershop delivering quality cuts and grooming services with modern comfort',
    address: {
      street: '209 Fourth St',
      city: 'Castle Rock',
      state: 'CO',
      zip: '80104',
      latitude: 39.3725,
      longitude: -104.8594,
    },
    phone: {
      display: '(719) 749-5219',
      e164: '+17197495219',
    },
    categories: ['Services', 'Grooming'],
    primaryCategory: 'Services',
    hours: {
      monday: { open: '09:00', close: '19:00' },
      tuesday: { open: '09:00', close: '19:00' },
      wednesday: { open: '09:00', close: '19:00' },
      thursday: { open: '09:00', close: '19:00' },
      friday: { open: '09:00', close: '19:00' },
      saturday: { open: '09:00', close: '19:00' },
      sunday: null,
    },
    images: {
      thumbnail: {
        src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&h=300&fit=crop',
        alt: 'Dapper Barbershop interior',
        width: 400,
        height: 300,
      },
      hero: {
        src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1600&h=900&fit=crop',
        alt: 'Dapper Barbershop classic barber chairs',
        width: 1600,
        height: 900,
      },
    },
    links: {
      website: 'https://www.dapperbarbershopco.com',
      booking: 'https://getsquire.com/discover/barbershop/dapper-barbershop-castle-rock-castle-rock-1',
      instagram: 'https://www.instagram.com/dapper_barbershop_castlerock',
      facebook: 'https://www.facebook.com/p/Dapper-Barbershop-Castle-Rock-61556723991700/',
    },
    status: 'approved',
    lastModified: '2025-07-21',
    featured: false,
  },
  {
    id: 'life-at-home',
    name: 'Life At Home',
    slug: 'life-at-home',
    description: 'Curated gifts and home decor to bring warmth and personality to every room',
    address: {
      street: '109 Fourth St',
      city: 'Castle Rock',
      state: 'CO',
      zip: '80104',
      latitude: 39.3723,
      longitude: -104.8596,
    },
    phone: {
      display: '(719) 675-5433',
      e164: '+17196755433',
    },
    categories: ['Shopping', 'Gifts & Decor'],
    primaryCategory: 'Shopping',
    hours: {
      monday: { open: '11:00', close: '15:00' },
      tuesday: { open: '10:00', close: '16:00' },
      wednesday: { open: '11:00', close: '15:00' },
      thursday: { open: '11:00', close: '16:00' },
      friday: { open: '11:00', close: '15:00' },
      saturday: { open: '11:00', close: '16:00' },
      sunday: { open: '11:00', close: '15:00' },
    },
    images: {
      thumbnail: {
        src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
        alt: 'Life At Home store display',
        width: 400,
        height: 300,
      },
      hero: {
        src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&h=900&fit=crop',
        alt: 'Life At Home curated home decor collection',
        width: 1600,
        height: 900,
      },
    },
    links: {
      website: 'https://www.lifeatyourhome.com',
      facebook: 'https://www.facebook.com/LifeAtYourHomeDecor/',
    },
    status: 'approved',
    lastModified: '2025-07-21',
    featured: false,
    specialNotes: 'Women-owned by Heidi. White barn building in alley behind Olinger\'s Funeral Home',
  },
  {
    id: 'pegasus-restaurant',
    name: 'Pegasus Restaurant',
    slug: 'pegasus-restaurant',
    description: 'Greek-Mexican-American fusion restaurant serving Castle Rock since 1984',
    address: {
      street: '313 Jerry St',
      city: 'Castle Rock',
      state: 'CO',
      zip: '80104',
      latitude: 39.3735,
      longitude: -104.8578,
    },
    phone: {
      display: '(303) 688-6746',
      e164: '+13036886746',
    },
    categories: ['Dining', 'Restaurant'],
    primaryCategory: 'Dining',
    hours: {
      monday: null,
      tuesday: null,
      wednesday: { open: '07:30', close: '14:00' },
      thursday: { open: '07:30', close: '14:00' },
      friday: { open: '07:30', close: '14:00' },
      saturday: { open: '07:30', close: '14:00' },
      sunday: { open: '07:30', close: '14:00' },
    },
    images: {
      thumbnail: {
        src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
        alt: 'Pegasus Restaurant exterior',
        width: 400,
        height: 300,
      },
      hero: {
        src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&h=900&fit=crop',
        alt: 'Pegasus Restaurant dining room with fireplace',
        width: 1600,
        height: 900,
      },
    },
    links: {
      website: 'https://pegasusrestaurantcastlerock.com',
    },
    status: 'approved',
    lastModified: '2025-07-21',
    featured: true,
    established: 1984,
    specialNotes: '40+ years in business, dog-friendly patio, wedding/event venue',
  },
  {
    id: 'castle-rock-museum',
    name: 'Castle Rock Museum',
    slug: 'castle-rock-museum',
    description: 'Historic 1875 train depot museum featuring local history and railroad exhibits',
    address: {
      street: '420 Elbert St',
      city: 'Castle Rock',
      state: 'CO',
      zip: '80104',
      latitude: 39.3721,
      longitude: -104.8600,
    },
    phone: {
      display: '(303) 814-3164',
      e164: '+13038143164',
    },
    categories: ['Attractions', 'Museum'],
    primaryCategory: 'Attractions',
    hours: {
      monday: null,
      tuesday: null,
      wednesday: { open: '12:00', close: '17:00' },
      thursday: { open: '12:00', close: '17:00' },
      friday: { open: '12:00', close: '17:00' },
      saturday: { open: '11:00', close: '16:00' },
      sunday: null,
    },
    images: {
      thumbnail: {
        src: 'https://images.unsplash.com/photo-1566308350734-af54bc36dc81?w=400&h=300&fit=crop',
        alt: 'Castle Rock Museum historic train depot',
        width: 400,
        height: 300,
      },
      hero: {
        src: 'https://images.unsplash.com/photo-1566308350734-af54bc36dc81?w=1600&h=900&fit=crop',
        alt: 'Castle Rock Museum 1875 depot building',
        width: 1600,
        height: 900,
      },
    },
    links: {
      website: 'https://castlerockmuseum.org',
      facebook: 'https://facebook.com/CRHistoricalSociety',
      instagram: 'https://www.instagram.com/rockhistory80104',
    },
    email: 'museum@castlerockhistoricalsociety.org',
    status: 'approved',
    lastModified: '2025-07-21',
    featured: true,
    established: 1875,
    specialNotes: 'FREE admission, 501(c)(3) nonprofit, 150th Anniversary Sept 6, 2025',
  },
];

export const categories = Array.from(
  new Set(businesses.flatMap((b) => b.categories))
).sort();

export const getBusinessBySlug = (slug: string): Business | undefined => {
  return businesses.find((b) => b.slug === slug);
};

export const getFeaturedBusinesses = (): Business[] => {
  return businesses.filter((b) => b.featured);
};

export const getBusinessesByCategory = (category: string): Business[] => {
  return businesses.filter((b) => b.categories.includes(category));
};