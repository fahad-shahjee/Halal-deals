
import React from 'react';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const SimilarDeals = () => {
    const deals = [
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
        }
    ];

    return (
        <div className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Similar <em className="text-green-600">deals</em>
                    </h2>
                    <span className="text-green-600 text-4xl ml-2">✱</span>
                </div>
                <p className="text-gray-600 mb-8">Explore Latest Adverts.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {deals.map((deal) => (
                        <div key={deal.id} className="relative">
                            <ProductCard
                                id={deal.id}
                                title={deal.title}
                                location={deal.location}
                                normalPrice={deal.normalPrice}
                                salePrice={deal.salePrice}
                                imageUrl={deal.imageUrl}
                                category={deal.category}
                            />
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
                            >
                                <Heart className="h-4 w-4" />
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SimilarDeals;
