
import React from 'react';
import { Button } from '@/components/ui/button';
import { Gift, ShoppingBag, Star, MessageCircle, CreditCard, Heart } from 'lucide-react';
import { Link } from '@inertiajs/react';

const ProfileSidebar = () => {
  const menuItems = [
    { icon: Gift, label: 'My Coupons', active: true, href: '/profile' },
    { icon: ShoppingBag, label: 'My Order', active: false, href: '/profile' },
    { icon: Star, label: 'My Points', active: false, href: '/profile' },
    { icon: MessageCircle, label: 'Messages Center', active: false, href: '/profile' },
    { icon: CreditCard, label: 'Payment Method', active: false, href: '/profile' },
    { icon: Heart, label: 'Favourite List', active: false, href: '/profile' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6 h-fit">
      <div className="flex items-center mb-4 lg:mb-6">
        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
          <span className="text-green-600 font-semibold text-base lg:text-lg">A</span>
        </div>
        <span className="text-base lg:text-lg font-medium text-gray-900">Ahmed</span>
      </div>
      
      <nav className="space-y-1 lg:space-y-2">
        {menuItems.map((item) => (
          <Link key={item.label} href={item.href}>
            <Button
              variant={item.active ? "default" : "ghost"}
              className={`w-full justify-start text-left text-sm lg:text-base ${
                item.active 
                  ? 'bg-green-600 text-white hover:bg-green-700' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <item.icon className="mr-2 lg:mr-3 h-4 w-4" />
              <span className="truncate">{item.label}</span>
            </Button>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default ProfileSidebar;
