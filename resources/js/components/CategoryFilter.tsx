
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState('Hotels');
  
  const categories = [
    'Hotels',
    'Children',
    'Clothing and Accessories',
    'Educational',
    'Fashion',
    'Food and Drink',
    'Health & Fitness',
    'Restaurants',
    'Wellbeing'
  ];

  return (
    <div className="bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Popular Advert Categories.</h2>
          <Button variant="link" className="text-green-600 hover:text-green-700">
            See all categories →
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                activeCategory === category
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
