# Small Town Vibes - Development Guide

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Visit http://localhost:5173

## Project Structure Summary

- `/src/data/businesses.ts` - All business data (currently 6 businesses)
- `/src/types/business.ts` - TypeScript interface for Business type
- `/src/pages/` - Page components (Home, Businesses, BusinessDetail)
- `/src/components/` - Reusable UI components
- `/src/styles/index.css` - Global styles and Tailwind config

## Key Features Implemented

✅ **Data Layer**
- All 6 businesses with correct information
- Fixed Goldie Links address (Inside The Barn)
- Added special notes, features, and ratings

✅ **Pages**
- Homepage with featured businesses
- Business listing page with category filters
- Individual business detail pages
- SEO meta tags on all pages

✅ **Components**
- Header with navigation
- Footer with links
- Business cards (grid and list view)
- Business hours with open/closed status
- Category cards

✅ **SEO Optimizations**
- Meta tags and Open Graph tags
- Structured data (Schema.org)
- Sitemap.xml
- Robots.txt
- Semantic HTML

## Next Steps

### High Priority
1. **Images**: Replace Unsplash placeholders with actual business photos
2. **Google Maps**: Integrate real map on business detail pages
3. **Search**: Add search functionality
4. **Analytics**: Add Google Analytics or similar

### Medium Priority
1. **Reviews**: Display/integrate review platforms
2. **Events**: Add events calendar
3. **Newsletter**: Email signup for updates
4. **Blog**: Add blog section for SEO

### Nice to Have
1. **Dark Mode**: Toggle for dark theme
2. **Favorites**: Save favorite businesses
3. **Share**: Social sharing buttons
4. **Print**: Print-friendly business pages

## Adding New Businesses

1. Edit `/src/data/businesses.ts`
2. Follow the Business interface structure
3. Include all required fields
4. Add to sitemap.xml

## Deployment

1. Build for production:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting service

## Performance Tips

- Images should be optimized (WebP format preferred)
- Use proper image dimensions (400x300 for thumbnails, 1600x900 for heroes)
- Enable gzip compression on server
- Consider CDN for images

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive
- No IE11 support

## Notes

- The project uses Vite for fast development
- TypeScript for type safety
- Tailwind CSS for styling
- React Router for navigation
- All data is currently static (no backend)
