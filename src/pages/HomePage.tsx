import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight } from 'lucide-react';
import { businesses, getFeaturedBusinesses, categories } from '@/data/businesses';
import BusinessCard from '@/components/business/BusinessCard';
import CategoryCard from '@/components/home/CategoryCard';

export default function HomePage() {
  const featuredBusinesses = getFeaturedBusinesses();
  
  const categoryData = [
    {
      name: 'Dining',
      slug: 'dining',
      description: 'Experience Castle Rock\'s diverse culinary scene',
      icon: '🍽️',
      count: businesses.filter(b => b.primaryCategory === 'Dining' || b.categories.includes('Dining')).length,
    },
    {
      name: 'Shopping',
      slug: 'shopping',
      description: 'Discover unique shops and boutiques downtown',
      icon: '🛍️',
      count: businesses.filter(b => b.primaryCategory === 'Shopping' || b.categories.includes('Shopping')).length,
    },
    {
      name: 'Services',
      slug: 'services',
      description: 'Find professional services for all your needs',
      icon: '✂️',
      count: businesses.filter(b => b.primaryCategory === 'Services' || b.categories.includes('Services')).length,
    },
    {
      name: 'Attractions',
      slug: 'attractions',
      description: 'Explore Castle Rock\'s history and entertainment',
      icon: '🏛️',
      count: businesses.filter(b => b.primaryCategory === 'Attractions' || b.categories.includes('Attractions')).length,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Small Town Vibes - Castle Rock Local Business Directory</title>
        <meta 
          name="description" 
          content="Discover locally owned businesses in Castle Rock, Colorado. Shop downtown, dine downtown, and explore downtown Castle Rock's unique local services and shopping." 
        />
        <meta 
          name="keywords" 
          content="Castle Rock local businesses, shop local Castle Rock, dine downtown Castle Rock, explore Castle Rock Colorado, Castle Rock business directory" 
        />
        <meta property="og:title" content="Small Town Vibes - Castle Rock Local Business Directory" />
        <meta property="og:description" content="Your guide to locally owned businesses in Castle Rock, CO. Support local dining, shopping, and services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smalltownvibes.co" />
        <link rel="canonical" href="https://smalltownvibes.co" />
      </Helmet>

      {/* Hero Section with Castle Rock Image */}
      <section className="relative h-[600px] sm:h-[700px] lg:h-[800px] overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1602085674869-7d5df48d7c83?w=1920&h=1080&fit=crop&q=80"
            alt="Castle Rock formation overlooking the town of Castle Rock, Colorado"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        </div>
        
        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Discover Castle Rock's
              <span className="text-accent block mt-2">Local Businesses</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8">
              Shop local, dine downtown, and explore everything Castle Rock has to offer. 
              Support our community's unique shops, restaurants, and services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/businesses" 
                className="bg-brand hover:bg-brand-dark text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors shadow-lg"
              >
                Browse All Businesses
              </Link>
              <a 
                href="#categories" 
                className="bg-white/90 hover:bg-white text-brand px-8 py-3 rounded-md text-lg font-semibold transition-colors shadow-lg"
              >
                Explore Categories
              </a>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-brand">{businesses.length}</div>
              <div className="text-sm text-muted-foreground">Local Businesses</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand">{categories.length}</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand">80104</div>
              <div className="text-sm text-muted-foreground">Castle Rock, CO</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand">100%</div>
              <div className="text-sm text-muted-foreground">Locally Owned</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Businesses */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold">Featured Businesses</h2>
              <p className="text-muted-foreground mt-2">Discover what makes Castle Rock special</p>
            </div>
            <Link 
              to="/businesses" 
              className="hidden sm:flex items-center text-brand hover:text-brand-dark transition-colors"
            >
              View all
              <ChevronRight size={20} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBusinesses.map((business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link 
              to="/businesses" 
              className="inline-flex items-center text-brand hover:text-brand-dark transition-colors"
            >
              View all businesses
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find exactly what you're looking for with our organized directory of Castle Rock businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryData.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 bg-brand text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Support Local Castle Rock</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Every purchase at a local business helps build a stronger, more vibrant community. 
            Shop local and make a difference in Castle Rock.
          </p>
          <Link 
            to="/businesses" 
            className="inline-block bg-white text-brand hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition-colors"
          >
            Start Exploring
          </Link>
        </div>
      </section>
    </>
  );
}
