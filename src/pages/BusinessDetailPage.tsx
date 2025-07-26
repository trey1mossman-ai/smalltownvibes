import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  MapPin, 
  Phone, 
  Facebook, 
  Instagram, 
  Calendar,
  ChevronLeft,
  Globe,
  Mail
} from 'lucide-react';
import { getBusinessBySlug } from '@/data/businesses';
import BusinessHours from '@/components/business/BusinessHours';

export default function BusinessDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const business = slug ? getBusinessBySlug(slug) : undefined;

  if (!business) {
    return <Navigate to="/businesses" replace />;
  }

  // Schema.org structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": business.primaryCategory === 'Museum' ? 'Museum' : 'LocalBusiness',
    "name": business.name,
    "description": business.description,
    "url": business.links.website,
    "telephone": business.phone.e164,
    "email": business.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": business.address.street,
      "addressLocality": business.address.city,
      "addressRegion": business.address.state,
      "postalCode": business.address.zip,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": business.address.latitude,
      "longitude": business.address.longitude
    },
    "image": business.images.hero.src,
    ...(business.priceRange && { "priceRange": business.priceRange })
  };

  return (
    <>
      <Helmet>
        <title>{business.name} - {business.primaryCategory} in Castle Rock | Small Town Vibes</title>
        <meta 
          name="description" 
          content={`${business.description} Located at ${business.address.street}, Castle Rock, CO. ${business.specialNotes || ''}`} 
        />
        <meta 
          name="keywords" 
          content={`${business.name}, ${business.categories.join(', ')}, Castle Rock CO, ${business.primaryCategory} Castle Rock`} 
        />
        <meta property="og:title" content={`${business.name} - Castle Rock Local Business`} />
        <meta property="og:description" content={business.description} />
        <meta property="og:image" content={business.images.hero.src} />
        <link rel="canonical" href={`https://smalltownvibes.co/business/${business.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Image */}
        <div className="relative h-64 sm:h-96 overflow-hidden">
          <img 
            src={business.images.hero.src} 
            alt={business.images.hero.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          {/* Back Button */}
          <Link 
            to="/businesses"
            className="absolute top-4 left-4 inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-md text-sm font-medium hover:bg-white transition-colors"
          >
            <ChevronLeft size={16} />
            All Businesses
          </Link>

          {/* Featured Badge */}
          {business.featured && (
            <span className="absolute top-4 right-4 bg-brand text-white text-sm font-semibold px-4 py-2 rounded-full">
              Featured Business
            </span>
          )}
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold">{business.name}</h1>
                  {business.established && (
                    <span className="text-sm text-muted-foreground">
                      Est. {business.established}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-sm font-medium text-brand bg-brand/10 px-3 py-1 rounded-full">
                    {business.primaryCategory}
                  </span>
                  {business.categories.slice(0, 3).map((category) => (
                    <span 
                      key={category}
                      className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <p className="text-lg text-muted-foreground">{business.description}</p>
              </div>

              {/* Special Notes */}
              {business.specialNotes && (
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                  <p className="text-sm font-medium">{business.specialNotes}</p>
                </div>
              )}

              {/* Features */}
              {business.features && business.features.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Features & Services</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {business.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-brand rounded-full" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Business Hours */}
              <BusinessHours hours={business.hours} />
            </div>

            {/* Right Column - Contact & Location */}
            <div className="space-y-6">
              {/* Contact Card */}
              <div className="card">
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  {/* Phone */}
                  <a 
                    href={`tel:${business.phone.e164}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-brand transition-colors"
                  >
                    <Phone size={20} />
                    <span>{business.phone.display}</span>
                  </a>

                  {/* Email */}
                  {business.email && (
                    <a 
                      href={`mailto:${business.email}`}
                      className="flex items-center gap-3 text-muted-foreground hover:text-brand transition-colors"
                    >
                      <Mail size={20} />
                      <span className="text-sm">{business.email}</span>
                    </a>
                  )}

                  {/* Website */}
                  {business.links.website && (
                    <a 
                      href={business.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-brand transition-colors"
                    >
                      <Globe size={20} />
                      <span>Visit Website</span>
                    </a>
                  )}

                  {/* Booking */}
                  {business.links.booking && (
                    <a 
                      href={business.links.booking}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-brand transition-colors"
                    >
                      <Calendar size={20} />
                      <span>Book Online</span>
                    </a>
                  )}
                </div>

                {/* Social Links */}
                {(business.links.facebook || business.links.instagram) && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="text-sm font-medium mb-3">Follow Us</h4>
                    <div className="flex gap-3">
                      {business.links.facebook && (
                        <a
                          href={business.links.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-md bg-muted hover:bg-brand hover:text-white transition-all"
                          aria-label="Facebook"
                        >
                          <Facebook size={20} />
                        </a>
                      )}
                      {business.links.instagram && (
                        <a
                          href={business.links.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-md bg-muted hover:bg-brand hover:text-white transition-all"
                          aria-label="Instagram"
                        >
                          <Instagram size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Location Card */}
              <div className="card">
                <h3 className="text-lg font-semibold mb-4">Location</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-muted-foreground mt-0.5" />
                    <div>
                      <address className="not-italic">
                        {business.address.street}<br />
                        {business.address.city}, {business.address.state} {business.address.zip}
                      </address>
                    </div>
                  </div>
                  
                  {/* Map placeholder - in production, integrate with Google Maps */}
                  <div className="h-48 bg-muted rounded-md flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Map View</span>
                  </div>

                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      `${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Price Range & Ratings */}
              {(business.priceRange || business.ratings) && (
                <div className="card">
                  {business.priceRange && (
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-1">Price Range</h4>
                      <span className="text-lg font-semibold">{business.priceRange}</span>
                    </div>
                  )}
                  
                  {business.ratings && (
                    <div>
                      <h4 className="text-sm font-medium mb-2">Ratings</h4>
                      <div className="space-y-2">
                        {business.ratings.google && (
                          <div className="flex items-center justify-between text-sm">
                            <span>Google</span>
                            <span className="font-medium">⭐ {business.ratings.google}</span>
                          </div>
                        )}
                        {business.ratings.facebook && (
                          <div className="flex items-center justify-between text-sm">
                            <span>Facebook</span>
                            <span className="font-medium">{business.ratings.facebook} likes</span>
                          </div>
                        )}
                        {business.ratings.reviewCount && (
                          <div className="text-xs text-muted-foreground mt-2">
                            Based on {business.ratings.reviewCount} reviews
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
