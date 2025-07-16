
import React, { useState } from 'react';
import CategoryFilter from '@/components/CategoryFilter';
import ProductCard from '@/components/ProductCard';
import Newsletter from '@/components/Newsletter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChevronDown } from 'lucide-react';

const SearchResults = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['Food and Drink']);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>(['Halal']);

  const categories = [
    'Food and Drink',
    'Hotels',
    'Headache',
    'Electronic and good',
    'Eye and Ear',
    'Bone Pain',
    'Children',
    'Pain Relief',
    'Skin Care',
    'Child and Baby'
  ];

  const amenities = [
    'Halal',
    'Female Service',
    'Male Service',
    'Family Area',
    'Alcohol'
  ];

  const products = [
    {
      id: 1,
      title: "Blueberry villa.",
      location: "Mirpur 10, Stadium dhaka 1208",
      normalPrice: 48,
      salePrice: 34,
      imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Food and Drink"
    },
    {
      id: 2,
      title: "Blueberry villa.",
      location: "Mirpur 10, Stadium dhaka 1208",
      normalPrice: 48,
      salePrice: 34,
      imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Children"
    },
    {
      id: 3,
      title: "Blueberry villa.",
      location: "Mirpur 10, Stadium dhaka 1208",
      normalPrice: 48,
      salePrice: 34,
      imageUrl: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Clothing and Accessories"
    },
    {
      id: 4,
      title: "Blueberry villa.",
      location: "Mirpur 10, Stadium dhaka 1208",
      normalPrice: 48,
      salePrice: 34,
      imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Health & Fitness"
    },
    {
      id: 5,
      title: "Blueberry villa.",
      location: "Mirpur 10, Stadium dhaka 1208",
      normalPrice: 48,
      salePrice: 34,
      imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Food and Drink"
    },
    {
      id: 6,
      title: "Blueberry villa.",
      location: "Mirpur 10, Stadium dhaka 1208",
      normalPrice: 48,
      salePrice: 34,
      imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Children"
    },
    {
      id: 7,
      title: "Blueberry villa.",
      location: "Mirpur 10, Stadium dhaka 1208",
      normalPrice: 48,
      salePrice: 34,
      imageUrl: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Clothing and Accessories"
    },
    {
      id: 8,
      title: "Blueberry villa.",
      location: "Mirpur 10, Stadium dhaka 1208",
      normalPrice: 48,
      salePrice: 34,
      imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Health & Fitness"
    },
    {
      id: 9,
      title: "Blueberry villa.",
      location: "Mirpur 10, Stadium dhaka 1208",
      normalPrice: 48,
      salePrice: 34,
      imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Food and Drink"
    }
  ];

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleAmenityChange = (amenity: string) => {
    setSelectedAmenities(prev =>
      prev.includes(amenity)
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    );
  };

  return (
    <div>
      <CategoryFilter />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Sidebar Filter */}
          <div className="w-full lg:w-80">
            <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Filter</h3>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                        className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <span className="ml-3 text-sm text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Price</h4>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="min-price" className="text-xs text-gray-500">Min</Label>
                    <Input
                      id="min-price"
                      type="number"
                      placeholder="Min price"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="max-price" className="text-xs text-gray-500">Max</Label>
                    <Input
                      id="max-price"
                      type="number"
                      placeholder="Max price"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Amenities</h4>
                <div className="space-y-2">
                  {amenities.map((amenity) => (
                    <label key={amenity} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedAmenities.includes(amenity)}
                        onChange={() => handleAmenityChange(amenity)}
                        className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <span className="ml-3 text-sm text-gray-700">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filter Buttons */}
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1">Clear</Button>
                <Button className="flex-1 bg-green-600 hover:bg-green-700">Filter</Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-0">
                Results for "Civinte Candle Bar"
              </h1>
              <Button variant="outline" className="flex items-center gap-2 w-fit">
                Sort
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="relative">
                  <ProductCard
                    id={product.id}
                    title={product.title}
                    location={product.location}
                    normalPrice={product.normalPrice}
                    salePrice={product.salePrice}
                    imageUrl={product.imageUrl}
                    category={product.category}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default SearchResults;
