
import React from 'react';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      title: "Blueberry villa.",
      location: "Mirpur 10, Stadium dhaka 1208",
      normalPrice: 48,
      salePrice: 34,
      imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Food and Drink"
    },
    {
      id: 2,
      title: "Blueberry villa.",
      location: "Mirpur 10, Stadium dhaka 1208",
      normalPrice: 48,
      salePrice: 34,
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Children"
    },
    {
      id: 3,
      title: "Blueberry villa.",
      location: "Mirpur 10, Stadium dhaka 1208",
      normalPrice: 48,
      salePrice: 34,
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Clothing and Accessories"
    },
    {
      id: 4,
      title: "Blueberry villa.",
      location: "Mirpur 10, Stadium dhaka 1208",
      normalPrice: 48,
      salePrice: 34,
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Health & Fitness"
    },
    {
      id: 5,
      title: "Hotel Stay with Daily",
      location: "Great Wolf Lodge Chicago/Gurnee",
      normalPrice: 48,
      salePrice: 34,
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Hotels"
    },
    {
      id: 6,
      title: "Blueberry villa.",
      location: "Mirpur 10, Stadium dhaka 1208",
      normalPrice: 48,
      salePrice: 34,
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Children"
    },
    {
      id: 7,
      title: "Blueberry villa.",
      location: "Mirpur 10, Stadium dhaka 1208",
      normalPrice: 48,
      salePrice: 34,
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Clothing and Accessories"
    },
    {
      id: 8,
      title: "Blueberry villa.",
      location: "Mirpur 10, Stadium dhaka 1208",
      normalPrice: 48,
      salePrice: 34,
      imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Health & Fitness"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            New <em className="text-green-600">Listings</em> ✱
          </h2>
          <p className="text-gray-600 mt-1">Explore Latest Adverts.</p>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="link" className="text-green-600 hover:text-green-700">
            See more adverts
          </Button>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="default" size="icon" className="rounded-full bg-black hover:bg-gray-800">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              location={product.location}
              normalPrice={product.normalPrice}
              salePrice={product.salePrice}
              imageUrl={product.imageUrl}
              category={product.category}
            />
        ))}
      </div>

      <div className="flex justify-center">
        <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-full">
          Load More
        </Button>
      </div>
    </div>
  );
};

export default ProductGrid;
