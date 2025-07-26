import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Filter, Grid, List } from 'lucide-react';
import { businesses, getBusinessesByCategory } from '@/data/businesses';
import BusinessCard from '@/components/business/BusinessCard';
import BusinessGrid from '@/components/business/BusinessGrid';
import clsx from 'clsx';

export default function BusinessesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || 'all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  // Get filtered businesses
  const filteredBusinesses = selectedCategory === 'all' 
    ? businesses 
    : getBusinessesByCategory(selectedCategory);

  // Update URL when category changes
  useEffect(() => {
    if (selectedCategory === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', selectedCategory);
    }
    setSearchParams(searchParams);
  }, [selectedCategory, searchParams, setSearchParams]);

  const pageTitle = selectedCategory === 'all' 
    ? 'All Castle Rock Businesses' 
    : `${selectedCategory} in Castle Rock`;

  const pageDescription = selectedCategory === 'all'
    ? 'Browse all local businesses in Castle Rock, Colorado. Find restaurants, shops, services, and attractions in our comprehensive directory.'
    : `Discover the best ${selectedCategory.toLowerCase()} businesses in Castle Rock. Shop local and support our downtown community.`;

  return (
    <>
      <Helmet>
        <title>{pageTitle} | Small Town Vibes</title>
        <meta name="description" content={pageDescription} />
        <meta 
          name="keywords" 
          content={`Castle Rock ${selectedCategory.toLowerCase()}, ${selectedCategory.toLowerCase()} Castle Rock CO, local ${selectedCategory.toLowerCase()} Castle Rock`} 
        />
        <link rel="canonical" href={`https://smalltownvibes.co/businesses${selectedCategory !== 'all' ? `?category=${selectedCategory}` : ''}`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Page Header */}
        <section className="bg-muted/50 border-b border-border py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold">{pageTitle}</h1>
            <p className="text-muted-foreground mt-2">
              {filteredBusinesses.length} {filteredBusinesses.length === 1 ? 'business' : 'businesses'} found
            </p>
          </div>
        </section>

        {/* Filters and Controls */}
        <section className="sticky top-16 z-30 bg-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between gap-4">
              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="sm:hidden flex items-center gap-2 px-4 py-2 border border-border rounded-md hover:bg-muted transition-colors"
              >
                <Filter size={18} />
                Filters
              </button>

              {/* Desktop Category Filters */}
              <div className="hidden sm:flex items-center gap-2 flex-1">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={clsx(
                    'px-4 py-2 rounded-md text-sm font-medium transition-colors',
                    selectedCategory === 'all'
                      ? 'bg-brand text-white'
                      : 'bg-muted hover:bg-muted/80'
                  )}
                >
                  All Businesses
                </button>
                {['Dining', 'Shopping', 'Services', 'Attractions'].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={clsx(
                      'px-4 py-2 rounded-md text-sm font-medium transition-colors',
                      selectedCategory === category
                        ? 'bg-brand text-white'
                        : 'bg-muted hover:bg-muted/80'
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-1 border border-border rounded-md p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={clsx(
                    'p-2 rounded transition-colors',
                    viewMode === 'grid' ? 'bg-muted' : 'hover:bg-muted/50'
                  )}
                  aria-label="Grid view"
                >
                  <Grid size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={clsx(
                    'p-2 rounded transition-colors',
                    viewMode === 'list' ? 'bg-muted' : 'hover:bg-muted/50'
                  )}
                  aria-label="List view"
                >
                  <List size={18} />
                </button>
              </div>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="sm:hidden mt-4 pb-4 border-t border-border pt-4">
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setShowFilters(false);
                    }}
                    className={clsx(
                      'px-4 py-2 rounded-md text-sm font-medium transition-colors',
                      selectedCategory === 'all'
                        ? 'bg-brand text-white'
                        : 'bg-muted hover:bg-muted/80'
                    )}
                  >
                    All Businesses
                  </button>
                  {['Dining', 'Shopping', 'Services', 'Attractions'].map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setShowFilters(false);
                      }}
                      className={clsx(
                        'px-4 py-2 rounded-md text-sm font-medium transition-colors',
                        selectedCategory === category
                          ? 'bg-brand text-white'
                          : 'bg-muted hover:bg-muted/80'
                      )}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Business Listings */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {filteredBusinesses.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No businesses found in this category.</p>
              </div>
            ) : viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBusinesses.map((business) => (
                  <BusinessCard key={business.id} business={business} />
                ))}
              </div>
            ) : (
              <BusinessGrid businesses={filteredBusinesses} />
            )}
          </div>
        </section>
      </div>
    </>
  );
}
