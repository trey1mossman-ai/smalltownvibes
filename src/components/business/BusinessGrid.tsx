import { Link } from 'react-router-dom';
import { MapPin, Clock, Phone, ExternalLink, ChevronRight } from 'lucide-react';
import type { Business } from '@/types/business';
import clsx from 'clsx';

interface BusinessGridProps {
  businesses: Business[];
}

export default function BusinessGrid({ businesses }: BusinessGridProps) {
  // Get today's day name
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();

  const isOpen = (business: Business) => {
    const todayHours = business.hours[today];
    if (!todayHours) return false;
    const now = new Date();
    const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    return currentTime >= todayHours.open && currentTime < todayHours.close;
  };

  return (
    <div className="space-y-4">
      {businesses.map((business) => (
        <article 
          key={business.id} 
          className="bg-background border border-border rounded-lg p-6 hover:border-brand hover:shadow-md transition-all"
        >
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Image */}
            <Link to={`/business/${business.slug}`} className="flex-shrink-0">
              <img 
                src={business.images.thumbnail.src} 
                alt={business.images.thumbnail.alt}
                width={business.images.thumbnail.width}
                height={business.images.thumbnail.height}
                className="w-full sm:w-48 h-32 object-cover rounded-md"
                loading="lazy"
              />
            </Link>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-2">
                    <Link 
                      to={`/business/${business.slug}`}
                      className="text-xl font-semibold hover:text-brand transition-colors"
                    >
                      {business.name}
                    </Link>
                    {business.featured && (
                      <span className="text-xs font-semibold text-brand bg-brand/10 px-2 py-1 rounded">
                        Featured
                      </span>
                    )}
                    {business.hours[today] && (
                      <span className={clsx(
                        'text-xs font-semibold px-2 py-1 rounded',
                        isOpen(business) 
                          ? 'text-success bg-success/10' 
                          : 'text-error bg-error/10'
                      )}>
                        {isOpen(business) ? 'Open Now' : 'Closed'}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {business.description}
                  </p>

                  {/* Quick Info */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{business.address.street}</span>
                    </div>
                    {business.hours[today] && (
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>
                          Today: {business.hours[today].open} - {business.hours[today].close}
                        </span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Phone size={14} />
                      <span>{business.phone.display}</span>
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {business.categories.slice(0, 3).map((category) => (
                      <span 
                        key={category}
                        className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2">
                  <Link
                    to={`/business/${business.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:text-brand-dark transition-colors"
                  >
                    View Details
                    <ChevronRight size={16} />
                  </Link>
                  {business.links.website && (
                    <a
                      href={business.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Website
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
