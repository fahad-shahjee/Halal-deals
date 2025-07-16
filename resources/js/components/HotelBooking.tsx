import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Users, Shield, Utensils, Car, Wifi, Heart, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const HotelBooking = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedCheckIn, setSelectedCheckIn] = useState<Date | null>(null);
  const [selectedCheckOut, setSelectedCheckOut] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const hotel = {
    title: "Hotel Stay with Daily Water Park Passes at Great Wolf Lodge Chicago/Gurnee in Illinois",
    location: "807 South Oak Park Avenue, Oak Park",
    price: 34,
    originalPrice: 48,
    mainImage: "/lovable-uploads/72c69687-495a-4e05-92f5-11f5397537cc.png",
    thumbnails: [
      "/lovable-uploads/72c69687-495a-4e05-92f5-11f5397537cc.png",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    ]
  };

  const amenities = [
    { icon: Shield, label: "Halal", available: true },
    { icon: Users, label: "Female Service", available: true },
    { icon: Utensils, label: "Male Service", available: true },
    { icon: Users, label: "Family Area", available: true },
    { icon: Car, label: "Parking", available: true },
    { icon: Wifi, label: "WiFi", available: true }
  ];

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (month: number, year: number) => new Date(year, month, 1).getDay();

  const handleDateClick = (day: number, monthOffset: number = 0) => {
    const clickedDate = new Date(currentYear, currentMonth + monthOffset, day);

    if (!selectedCheckIn || (selectedCheckIn && selectedCheckOut)) {
      setSelectedCheckIn(clickedDate);
      setSelectedCheckOut(null);
    } else if (selectedCheckIn && !selectedCheckOut) {
      if (clickedDate > selectedCheckIn) {
        setSelectedCheckOut(clickedDate);
      } else {
        setSelectedCheckIn(clickedDate);
        setSelectedCheckOut(null);
      }
    }
  };

  const isDateInRange = (day: number, monthOffset: number = 0) => {
    if (!selectedCheckIn) return false;

    const date = new Date(currentYear, currentMonth + monthOffset, day);

    if (selectedCheckIn && selectedCheckOut) {
      return date >= selectedCheckIn && date <= selectedCheckOut;
    }

    return date.getTime() === selectedCheckIn.getTime();
  };

  const isDateSelected = (day: number, monthOffset: number = 0) => {
    const date = new Date(currentYear, currentMonth + monthOffset, day);

    return (selectedCheckIn && date.getTime() === selectedCheckIn.getTime()) ||
      (selectedCheckOut && date.getTime() === selectedCheckOut.getTime());
  };

  const handleDone = () => {
    if (selectedCheckIn) {
      setCheckInDate(selectedCheckIn.toISOString().split('T')[0]);
    }
    if (selectedCheckOut) {
      setCheckOutDate(selectedCheckOut.toISOString().split('T')[0]);
    }
    setIsCalendarOpen(false);
  };

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsVideoPlaying(false);
  };

  const goToPrevious = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? hotel.thumbnails.length - 1 : prev - 1));
    setIsVideoPlaying(false);
  };

  const goToNext = () => {
    setSelectedImageIndex((prev) => (prev === hotel.thumbnails.length - 1 ? 0 : prev + 1));
    setIsVideoPlaying(false);
  };

  const isVideo = (index: number) => {
    return index === 4; // Assuming the 5th image (index 4) is a video placeholder
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const renderCalendar = (monthOffset: number) => {
    const month = currentMonth + monthOffset;
    const year = currentYear + (month > 11 ? 1 : month < 0 ? -1 : 0);
    const adjustedMonth = month > 11 ? month - 12 : month < 0 ? month + 12 : month;

    const daysInMonth = getDaysInMonth(adjustedMonth, year);
    const firstDay = getFirstDayOfMonth(adjustedMonth, year);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isInRange = isDateInRange(day, monthOffset);
      const isSelected = isDateSelected(day, monthOffset);

      days.push(
        <button
          key={day}
          onClick={() => handleDateClick(day, monthOffset)}
          className={`h-10 w-10 rounded text-sm hover:bg-green-100 transition-colors ${isSelected ? 'bg-green-600 text-white font-medium' :
              isInRange ? 'bg-green-100 text-green-800' :
                'hover:bg-gray-100'
            }`}
        >
          {day}
        </button>
      );
    }

    return (
      <div className="flex-1">
        <div className="flex items-center justify-between mb-4">
          {monthOffset === 0 && (
            <button
              onClick={() => {
                if (currentMonth === 0) {
                  setCurrentMonth(11);
                  setCurrentYear(currentYear - 1);
                } else {
                  setCurrentMonth(currentMonth - 1);
                }
              }}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}
          <h3 className="font-medium text-lg">{months[adjustedMonth]} {year}</h3>
          {monthOffset === 1 && (
            <button
              onClick={() => {
                if (currentMonth === 11) {
                  setCurrentMonth(0);
                  setCurrentYear(currentYear + 1);
                } else {
                  setCurrentMonth(currentMonth + 1);
                }
              }}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
          {monthOffset === 0 && <div className="w-6"></div>}
          {monthOffset === 1 && <div className="w-6"></div>}
        </div>
        <div className="grid grid-cols-7 gap-1 mb-2">
          {daysOfWeek.map(day => (
            <div key={day} className="text-sm text-gray-500 text-center py-2 font-medium">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2">
            {/* Main Image/Video Display */}
            <div className="relative mb-4 bg-black rounded-lg overflow-hidden">
              <div className="w-full h-64 sm:h-80 lg:h-96 flex items-center justify-center">
                {isVideo(selectedImageIndex) && !isVideoPlaying ? (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={hotel.thumbnails[selectedImageIndex]}
                      alt={`Hotel ${selectedImageIndex + 1}`}
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
                    src={hotel.thumbnails[selectedImageIndex]}
                    alt={`Hotel ${selectedImageIndex + 1}`}
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
                {selectedImageIndex + 1} / {hotel.thumbnails.length}
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-5 gap-2 mb-8">
              {hotel.thumbnails.map((thumb, index) => (
                <button
                  key={index}
                  onClick={() => handleImageClick(index)}
                  className={`relative rounded-lg overflow-hidden aspect-square group ${selectedImageIndex === index ? 'ring-2 ring-green-600' : ''
                    }`}
                >
                  <img
                    src={thumb}
                    alt={`Hotel ${index + 1}`}
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
                Enjoy daily waterpark passes, kid-friendly activities and numerous dining options.
              </h3>

              <div className="mb-6">
                <h4 className="font-medium mb-2">What You Get</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Stay for up to six in a Family Suite, Wolf Den Suite, or Junior Cabin Suite</li>
                  <li>• Daily waterpark passes for every guest up to six people in standard per room type</li>
                  <li>• May have the maximum number of guests in room option purchased for no additional fee</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Info */}
          <div className="space-y-6">
            {/* Booking Card */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-green-600 text-sm">● In Stock</span>
                </div>
                <div>
                  <span className="text-red-600 text-sm">🔴 Advert End Date: 15 Dec 2026</span>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                  >-</Button>
                  <span className="px-4 py-2 border rounded">1</span>
                  <Button
                    variant="outline"
                    size="sm"
                  >+</Button>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-bold text-gray-900">${hotel.price}</span>
                  <span className="text-lg text-gray-400 line-through">${hotel.originalPrice}</span>
                </div>
                <p className="text-sm text-red-600">33% Extra $3.75 off, today only</p>
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-medium mb-4">
                Add to Cart
              </Button>

              {/* Check in / Check out */}
              <div className="border-t pt-4">
                <h4 className="font-medium mb-3">Check in › Check out</h4>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <label className="text-xs text-gray-500">Check in</label>
                    <button
                      onClick={() => setIsCalendarOpen(true)}
                      className="w-full border rounded px-3 py-2 text-sm text-left hover:border-green-500 transition-colors"
                    >
                      {checkInDate || 'Select date'}
                    </button>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500">Check out</label>
                    <button
                      onClick={() => setIsCalendarOpen(true)}
                      className="w-full border rounded px-3 py-2 text-sm text-left hover:border-green-500 transition-colors"
                    >
                      {checkOutDate || 'Select date'}
                    </button>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  $340,000 2902378
                </Button>
              </div>
            </div>

            {/* Advert Details */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Advert Details</h3>
              <div className="space-y-3 text-sm">
                <p><strong>Specific Times:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p><strong>Specific Days:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p><strong>Advert Expiry Date:</strong> The date of expiry: Four months from the purchase date</p>
                <p><strong>Reservation Request Immediate:</strong> The date of expiry: Four months from the purchase date</p>
                <p><strong>New Customer only:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, nec vestibulum felis sagittis, tellus diam mollis ante, ut condimentum posuere eros.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus, nec vestibulum felis sagittis, consectetur adipiscing elit. Ut rhoncus, vestibulum felis sagittis malesuada turpis, ut fermentum eros.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Calendar Modal */}
      <Dialog open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
        <DialogContent className="max-w-4xl p-0 bg-white">
          <DialogHeader className="sr-only">
            <DialogTitle>Select Check-in and Check-out Dates</DialogTitle>
          </DialogHeader>
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-1">Check in date</div>
                  <div className="text-lg font-medium">
                    {selectedCheckIn ? selectedCheckIn.toLocaleDateString() : '→'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-1">Check out date</div>
                  <div className="text-lg font-medium">
                    {selectedCheckOut ? selectedCheckOut.toLocaleDateString() : '→'}
                  </div>
                </div>
              </div>
              <Button
                onClick={handleDone}
                className="bg-green-600 hover:bg-green-700 text-white px-8"
              >
                Done
              </Button>
            </div>

            <div className="flex gap-8">
              {renderCalendar(0)}
              {renderCalendar(1)}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HotelBooking;
