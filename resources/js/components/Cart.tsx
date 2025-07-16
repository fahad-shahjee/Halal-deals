
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trash2 } from 'lucide-react';
import { Link } from '@inertiajs/react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "$50 Towards Food & Drink @ Lunch or Dinner",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      price: 12.00,
      quantity: 1
    },
    {
      id: 2,
      title: "$50 Towards Food & Drink @ Lunch or Dinner",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      price: 25.00,
      quantity: 1
    },
    {
      id: 3,
      title: "Hotel Stay with Daily Water Park Passes at Great Wolf Lodge Chicago/Gurnee in Illinois",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      price: 275.9,
      quantity: 1
    }
  ]);

  const [promoCode, setPromoCode] = useState('');

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = 218;
  const serviceFee = 0.00;
  const total = subtotal;

  const handlePromoApply = () => {
    console.log('Applying promo code:', promoCode);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Cart</h1>
        <p className="text-gray-600 mt-2">Details List</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Cart Table */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Product</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">QTY</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Price</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div>
                          <h3 className="font-medium text-gray-900">{item.title}</h3>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-900">{item.quantity} x</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="font-semibold text-green-600">${item.price.toFixed(2)}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {cartItems.length === 0 && (
              <div className="p-12 text-center">
                <p className="text-gray-500 mb-4">Your cart is empty</p>
                <Link href="/">
                  <Button>Continue Shopping</Button>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Overview Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Overview</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Discount</span>
                <span className="font-semibold">${discount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Service Fee</span>
                <span className="font-semibold">${serviceFee.toFixed(2)}</span>
              </div>
            </div>

            {/* Promo Code */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Promo Code
              </label>
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Enter code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1"
                />
                <Button
                  onClick={handlePromoApply}
                  className="bg-green-600 hover:bg-green-700 text-white px-4"
                >
                  Apply
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin purus vel arcu varius
              </p>
            </div>

            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-2xl font-bold text-green-600">${total.toFixed(2)}</span>
              </div>
            </div>

            <Link href={route('checkout')}>
              <Button className="w-full bg-green-600 hover:bg-green-700 cursor-pointer text-white py-3 text-lg rounded-full">
                Checkout ({cartItems.length})
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
