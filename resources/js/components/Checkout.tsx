
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const orderItems = [
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
  ];

  const subtotal = 312.00;
  const discount = 218;
  const serviceFee = 0.00;
  const serviceTax = 1.00;
  const total = 312.00;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment processing
    console.log('Processing payment...', formData);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Payment Form */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-6">Payment</h2>

              {/* Payment Method Selection */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                  className={`p-4 border-2 rounded-lg flex items-center gap-3 ${paymentMethod === 'card'
                      ? 'border-green-600 bg-green-50'
                      : 'border-gray-200'
                    }`}
                  onClick={() => setPaymentMethod('card')}
                >
                  <div className={`w-4 h-4 rounded-full border-2 ${paymentMethod === 'card'
                      ? 'border-green-600 bg-green-600'
                      : 'border-gray-300'
                    }`}>
                    {paymentMethod === 'card' && (
                      <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                    )}
                  </div>
                  <span className="font-medium">💳 Debit or Credit</span>
                </button>

                <button
                  className={`p-4 border-2 rounded-lg flex items-center gap-3 ${paymentMethod === 'paypal'
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200'
                    }`}
                  onClick={() => setPaymentMethod('paypal')}
                >
                  <div className={`w-4 h-4 rounded-full border-2 ${paymentMethod === 'paypal'
                      ? 'border-blue-600 bg-blue-600'
                      : 'border-gray-300'
                    }`}>
                    {paymentMethod === 'paypal' && (
                      <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                    )}
                  </div>
                  <span className="font-medium">🟦 PayPal Pay Now or Pay Later</span>
                </button>
              </div>

              {/* Card Details Form */}
              {paymentMethod === 'card' && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name on Card
                    </label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Number
                    </label>
                    <Input
                      type="text"
                      name="cardNumber"
                      placeholder="XXXX - XXXX - XXXX - XXXX"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expired Date
                      </label>
                      <Input
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV
                      </label>
                      <Input
                        type="text"
                        name="cvv"
                        placeholder="XXX"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </form>
              )}

              {/* Payment Summary */}
              <div className="mt-8 pt-6 border-t">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Discount</span>
                    <span>${discount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service Fee</span>
                    <span>${serviceFee.toFixed(2)}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between">
                    <span>Sub Total</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service Tax</span>
                    <span>${serviceTax.toFixed(2)}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between text-xl font-bold text-green-600">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
                  onClick={handleSubmit}
                >
                  Pay Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Product</h2>
                <div className="flex gap-8">
                  <span className="font-medium">QTY</span>
                  <span className="font-medium">Price</span>
                </div>
              </div>

              <div className="space-y-4">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex items-start gap-4 pb-4 border-b last:border-b-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{item.title}</h3>
                    </div>
                    <div className="flex gap-8 items-center">
                      <span className="w-8 text-center">{item.quantity} x</span>
                      <span className="font-bold text-green-600 w-16 text-right">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Overview</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span>${discount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Service Fee</span>
                  <span>${serviceFee.toFixed(2)}</span>
                </div>
                <hr />
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
