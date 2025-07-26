import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  category: {
    name: string;
    slug: string;
    description: string;
    icon: string;
    count: number;
  };
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link 
      to={`/businesses?category=${category.slug}`}
      className="block p-6 bg-background border border-border rounded-lg hover:border-brand hover:shadow-md transition-all group"
    >
      <div className="text-4xl mb-4">{category.icon}</div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-brand transition-colors">
        {category.name}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        {category.description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-brand">
          {category.count} {category.count === 1 ? 'Business' : 'Businesses'}
        </span>
        <ArrowRight size={16} className="text-muted-foreground group-hover:text-brand group-hover:translate-x-1 transition-all" />
      </div>
    </Link>
  );
}
