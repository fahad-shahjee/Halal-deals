
import React from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@inertiajs/react';

interface ProductCardProps {
  id: number;
  title: string;
  location: string;
  normalPrice: number;
  salePrice: number;
  imageUrl: string;
  category: string;
}

const ProductCard = ({ id, title, location, normalPrice, salePrice, imageUrl, category }: ProductCardProps) => {
  return (
    <Link href={route('product.show')}>
      <Card className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        <div className="relative">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 pt-0"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
          >
            <Heart className="h-4 w-4" />
          </Button>
          <span className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
            {category}
          </span>
        </div>

        <CardContent className="p-4">
          <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-600 mb-3">{location}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Normal Price</span>
              <span className="text-sm text-gray-500">Our Price</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 mt-1">
            <span className="text-red-600 font-medium">${normalPrice}</span>
            <span className="text-green-600 font-bold text-lg">${salePrice}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
