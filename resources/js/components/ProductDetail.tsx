import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Star, Users, Utensils, Shield, Heart, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const product = {
    title: "$50 Towards Food & Drink @ Lunch or Dinner",
    company: "Civinte Candle Food",
    location: "807 South Oak Park Avenue, Oak Park",
    rating: 5.0,
    originalPrice: 33.75,
    salePrice: 37.50,
    discount: "33% Extra $3.75 off, today only",
    endDate: "15 Dec 2026",
    mainImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    ]
  };

  const amenities = [
    { icon: Shield, label: "Halal", available: true },
    { icon: Users, label: "Female Service", available: true },
    { icon: Utensils, label: "Male Service", available: true },
    { icon: Users, label: "Family Area", available: true },
    { icon: Utensils, label: "Alcohol", available: false }
  ];

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsVideoPlaying(false);
  };

  const goToPrevious = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? product.thumbnails.length - 1 : prev - 1));
    setIsVideoPlaying(false);
  };

  const goToNext = () => {
    setSelectedImageIndex((prev) => (prev === product.thumbnails.length - 1 ? 0 : prev + 1));
    setIsVideoPlaying(false);
  };

  const isVideo = (index: number) => {
    return index === 4; // Assuming the 5th image (index 4) is a video placeholder
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Images */}
        <div className="lg:col-span-2">
          {/* Main Image/Video Display */}
          <div className="relative mb-4 bg-black rounded-lg overflow-hidden">
            <div className="w-full h-64 sm:h-80 lg:h-96 flex items-center justify-center">
              {isVideo(selectedImageIndex) && !isVideoPlaying ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={product.thumbnails[selectedImageIndex]}
                    alt={`Product ${selectedImageIndex + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                  <Button
                    onClick={handleVideoPlay}
                    className="absolute inset-0 bg-black/30 hover:bg-black/50 flex items-center justify-center"
                    variant="ghost"
                  >
                    <div className="bg-white/90 rounded-full p-4">
                      <Play className="h-12 w-12 text-black fill-current" />
                    </div>
                  </Button>
                </div>
              ) : isVideo(selectedImageIndex) && isVideoPlaying ? (
                <video
                  src="/placeholder-video.mp4"
                  controls
                  autoPlay
                  className="max-w-full max-h-full"
                  onEnded={() => setIsVideoPlaying(false)}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={product.thumbnails[selectedImageIndex]}
                  alt={`Product ${selectedImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              )}
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Top badges and controls */}
            <div className="absolute top-4 left-4">
              <span className="bg-green-600 text-white text-sm font-medium px-3 py-1 rounded">
                Food and Drink
              </span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full"
            >
              <Heart className="h-5 w-5" />
            </Button>

            {/* Image Counter */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded text-sm">
              {selectedImageIndex + 1} / {product.thumbnails.length}
            </div>
          </div>

          {/* Thumbnail Images */}
          <div className="grid grid-cols-5 gap-2 mb-8">
            {product.thumbnails.map((thumb, index) => (
              <button
                key={index}
                onClick={() => handleImageClick(index)}
                className={`relative rounded-lg overflow-hidden aspect-square group ${selectedImageIndex === index ? 'ring-2 ring-green-600' : ''
                  }`}
              >
                <img
                  src={thumb}
                  alt={`Product ${index + 1}`}
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                />
                {index === 4 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Play className="h-6 w-6 text-white fill-current" />
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Description */}
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">
              Enjoy classic comfort food like fried turkey, pot roast, sweet potatoes, and caramel pound cake. Great portions and friendly service!
            </h3>
            <p className="text-gray-600 mb-4">
              Dive into a world of flavors with delectable starters including <strong>shrimp sliders, crawfish cornbread,</strong> and <strong>tantalizing salads</strong>. Indulge in entrees such as <strong>CheSa's seafood gumbo, fried chicken and waffles,</strong> and <strong>much more</strong>. Quench your thirst with a variety of drinks from the extensive menu.
            </p>
            <p className="text-gray-600">
              <strong>Picture this:</strong> You step into CheSa's Bistro & Bar, greeted by the tantalizing aroma of freshly prepared Creole cuisine. Founded by Chef CheSa, the upscale establishment nestled in Chicago's Avondale area promises an extraordinary dining experience.
            </p>
          </div>
        </div>

        {/* Right Column - Product Info */}
        <div className="space-y-6">
          {/* Product Info Card */}
          <div className="bg-white rounded-lg p-6">
            <h1 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
              {product.title}
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-green-600 font-medium">{product.company}</span>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                <span className="text-sm text-blue-600 underline">{product.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-600">{product.rating} Rating</span>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-green-600 text-sm">● In Stock</span>
              <span className="text-red-600 text-sm">🔴 Advert End Date: {product.endDate}</span>
            </div>

            {/* Quantity */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="px-4 py-2 border rounded">{quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Pricing */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-bold text-gray-900">${product.salePrice}</span>
                <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
              </div>
              <p className="text-sm text-red-600">{product.discount}</p>
            </div>

            {/* Add to Cart Button */}
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-medium">
              Add to Cart
            </Button>
          </div>

          {/* Advert Details */}
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Advert Details</h3>
            <div className="space-y-3 text-sm">
              <p><strong>Specific Times:</strong> Delight in a flavorful meal with $50 credit towards a delectable lunch or dinner.</p>
              <p><strong>Specific Days:</strong> Elevate your dining experience with $75 credit towards enticing lunch or dinner selections.</p>
              <p><strong>Advert Expiry Date:</strong> The date of expiry: Four months from the purchase date</p>
              <p><strong>New Customer only:</strong> Indulge in a lavish culinary affair with $100 credit towards exquisite lunch or dinner offerings.</p>
            </div>
          </div>

          {/* Amenities */}
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Amenities</h3>
            <div className="grid grid-cols-2 gap-3">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className={`w-4 h-4 rounded flex items-center justify-center text-xs ${amenity.available ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                    }`}>
                    {amenity.available ? '✓' : '✗'}
                  </span>
                  <span className="text-sm">{amenity.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Terms & Conditions</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <p><strong>spec_times:</strong> Delight in a flavorful meal with $50 credit towards a delectable lunch or dinner.</p>
              <p><strong>Spec_days:</strong> Elevate your dining experience with $75 credit towards enticing lunch or dinner selections.</p>
              <p><strong>New_cust_only:</strong> Indulge in a lavish culinary affair with $100 credit towards exquisite lunch or dinner offerings.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
