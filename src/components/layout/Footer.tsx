import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Small Town Vibes</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Your guide to locally owned businesses in Castle Rock, Colorado. 
              Shop local, dine local, and explore everything our downtown has to offer.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin size={16} />
              <span>Castle Rock, CO 80104</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/businesses" className="text-muted-foreground hover:text-brand transition-colors">
                  All Businesses
                </Link>
              </li>
              <li>
                <Link to="/businesses?category=dining" className="text-muted-foreground hover:text-brand transition-colors">
                  Restaurants & Dining
                </Link>
              </li>
              <li>
                <Link to="/businesses?category=shopping" className="text-muted-foreground hover:text-brand transition-colors">
                  Shopping & Retail
                </Link>
              </li>
              <li>
                <Link to="/businesses?category=services" className="text-muted-foreground hover:text-brand transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://www.crgov.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-brand transition-colors"
                >
                  Town of Castle Rock
                </a>
              </li>
              <li>
                <a 
                  href="https://castlerock.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-brand transition-colors"
                >
                  Castle Rock Chamber
                </a>
              </li>
              <li>
                <a 
                  href="https://www.downtowncastlerock.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-brand transition-colors"
                >
                  Downtown Merchants
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Small Town Vibes. Supporting local Castle Rock businesses.
          </p>
          <p className="text-xs text-muted-foreground">
            Made with ❤️ in Castle Rock, Colorado
          </p>
        </div>
      </div>
    </footer>
  );
}
