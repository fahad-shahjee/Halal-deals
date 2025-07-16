
import React, { useState } from 'react';
import { Heart, ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from '@inertiajs/react';

const Header = () => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold text-green-600">
                            <img src="/assets/logo.png" alt="logo" width="150" height="600" />
                        </Link>
                    </div>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-2xl mx-8">
                        <div className="relative">
                            <Input
                                type="text"
                                placeholder="Search Advert..."
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                            <Link href={route('search')}>
                                <Button
                                    className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full px-6 py-1 hover:bg-gray-800 transition-colors cursor-pointer"
                                    size="sm"
                                >
                                    Search Now
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="icon" className="rounded-full cursor-pointer">
                            <Heart className="h-5 w-5" />
                        </Button>
                        <Link href={route('cart')}>
                            <Button variant="ghost" size="icon" className="rounded-full relative cursor-pointer">
                                <ShoppingCart className="h-5 w-5" />
                                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    3
                                </span>
                            </Button>
                        </Link>
                        <Link href={route('register')}>
                            <Button variant="ghost" className="flex items-center space-x-2">
                                <User className="h-5 w-5" />
                                <span>Login / Sign up</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
