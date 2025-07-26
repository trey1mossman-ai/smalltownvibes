# Small Town Vibes - Castle Rock Business Directory

A modern, SEO-optimized local business directory for Castle Rock, Colorado. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **6 Local Businesses** showcasing Castle Rock's best shops, restaurants, and services
- **SEO Optimized** with meta tags, structured data, and semantic HTML
- **Mobile Responsive** design that works on all devices
- **Fast Performance** with lazy loading and optimized images
- **Category Filtering** to easily find businesses by type
- **Business Hours** with real-time open/closed status
- **Contact Integration** with click-to-call and directions

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and builds
- **Tailwind CSS** for styling
- **React Router** for navigation
- **React Helmet Async** for SEO
- **Lucide React** for icons

## 📂 Project Structure

```
smalltownvibes/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── business/     # Business-related components
│   │   ├── home/         # Homepage components
│   │   └── layout/       # Layout components
│   ├── data/             # Business data and utilities
│   ├── pages/            # Page components
│   ├── styles/           # CSS files
│   ├── types/            # TypeScript type definitions
│   └── App.tsx           # Main app component
├── public/               # Static assets
└── index.html           # HTML entry point
```

## 🏪 Featured Businesses

1. **Dream Dinners** - Meal prep studio
2. **Goldie Links** - Permanent jewelry
3. **Dapper Barbershop** - Men's grooming
4. **Life At Home** - Gifts & home decor
5. **Pegasus Restaurant** - Greek-Mexican fusion
6. **Castle Rock Museum** - Historic train depot

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/smalltownvibes.git
cd smalltownvibes
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🎨 Customization

### Brand Colors

Update the CSS variables in `src/styles/index.css`:

```css
:root {
  --brand: 11 78% 56%;        /* #D96547 */
  --brand-dark: 14 66% 43%;   /* #B54527 */
  --accent: 43 73% 48%;       /* #DAA520 */
  /* ... */
}
```

### Adding New Businesses

1. Add business data to `src/data/businesses.ts`
2. Follow the `Business` interface in `src/types/business.ts`
3. Include all required fields and SEO-friendly descriptions

## 📱 SEO Features

- Meta tags for all pages
- Open Graph tags for social sharing
- Structured data (Schema.org)
- Semantic HTML
- Sitemap generation ready
- Mobile-friendly design
- Fast loading times

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier for formatting (recommended)

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👥 Contact

For questions about this directory or to add your Castle Rock business:
- Website: [smalltownvibes.co](https://smalltownvibes.co)
- Email: contact@smalltownvibes.co

---

Built with ❤️ in Castle Rock, Colorado
