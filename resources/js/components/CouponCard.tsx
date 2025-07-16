
import React from 'react';
import { Card } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

interface CouponCardProps {
  coupon: {
    id: string;
    title: string;
    location: string;
    startDate: string;
    endDate: string;
    category: string;
    normalPrice: number;
    offerPrice: number;
    totalAmount: number;
    quantity: number;
    price: number;
    couponCode: string;
    imageUrl: string;
  };
}

const CouponCard = ({ coupon }: CouponCardProps) => {
  return (
    <Card className="overflow-hidden bg-white shadow-sm border-2 border-gray-200 relative">
      <div className="flex flex-col lg:flex-row h-auto lg:h-80">
        {/* Left Section - Content */}
        <div className="flex-1 p-4 lg:p-6 relative">
          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="bg-green-600 text-white text-xs font-medium px-3 py-1 rounded">
              Advert Category
            </span>
          </div>
          
          {/* Coupon ID */}
          <div className="text-right mb-4 lg:mb-6 mt-8 lg:mt-0">
            <span className="text-2xl lg:text-3xl font-bold text-gray-800">#{coupon.id}</span>
          </div>
          
          {/* Title */}
          <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4 leading-tight">
            {coupon.title}
          </h3>
          
          {/* Location */}
          <div className="flex items-center text-gray-600 mb-4 lg:mb-6">
            <MapPin className="h-4 w-4 mr-2 text-gray-500" />
            <span className="text-sm underline">{coupon.location}</span>
          </div>
          
          {/* Details Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4 lg:mb-6">
            <div>
              <div className="text-xs text-gray-500 mb-1">Start Date</div>
              <div className="text-sm font-semibold text-gray-900">{coupon.startDate}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">End Date</div>
              <div className="text-sm font-semibold text-gray-900">{coupon.endDate}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">Deal Category</div>
              <div className="text-sm font-semibold text-gray-900">Events</div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              {/* Empty space for layout */}
            </div>
          </div>
          
          {/* Pricing Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div>
              <div className="text-xs text-gray-500 mb-1">No. Deal</div>
              <div className="text-lg font-bold text-gray-900">{coupon.quantity}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">Price</div>
              <div className="text-lg font-bold text-gray-900">${coupon.normalPrice}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">Offer Price</div>
              <div className="text-lg font-bold text-green-600">${coupon.offerPrice}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">Total Amount</div>
              <div className="text-lg font-bold text-green-600">${coupon.totalAmount}</div>
            </div>
          </div>
        </div>
        
        {/* Middle Section - Image */}
        <div className="w-full lg:w-48 h-48 lg:h-full relative">
          <img 
            src={coupon.imageUrl} 
            alt={coupon.title}
            className="w-full h-full object-cover rounded-full lg:rounded-none lg:rounded-r-none p-4 lg:p-0"
          />
        </div>
        
        {/* Right Section - Coupon Code */}
        <div className="w-full lg:w-56 bg-green-600 text-white p-4 lg:p-6 flex flex-col justify-center items-center relative">
          <div className="text-center">
            <div className="text-xs mb-3 opacity-90 font-medium">Coupon Code</div>
            <div className="font-bold text-xl mb-4 tracking-wider">
              {coupon.couponCode}
            </div>
          </div>
          
          {/* Decorative perforated edge */}
          <div className="absolute left-0 top-0 bottom-0 w-1 hidden lg:block">
            <div className="h-full flex flex-col justify-around items-center">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-white rounded-full -ml-1.5"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CouponCard;
