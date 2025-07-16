import ProfileSidebar from '@/components/ProfileSidebar';
import CouponCard from '@/components/CouponCard';

const Profile = () => {
  const userCoupons = [
    {
      id: "25645854",
      title: "$50 Towards Food & Drink @ Lunch or Dinner",
      location: "807 South Oak Park Avenue, Oak Park",
      startDate: "10.02.2025",
      endDate: "10.08.2025",
      category: "Food & Dining",
      normalPrice: 75,
      offerPrice: 37,
      totalAmount: 37,
      quantity: 1,
      price: 50,
      couponCode: "FOOD50",
      imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "25645855",
      title: "Hotel Stay with Daily Water Park Passes at Great Wolf Lodge Chicago/Gurnee in Illinois",
      location: "1700 N Richmond Rd, McHenry, IL 60051",
      startDate: "15.02.2025",
      endDate: "15.03.2025",
      category: "Travel & Stay",
      normalPrice: 250,
      offerPrice: 150,
      totalAmount: 150,
      quantity: 2,
      price: 200,
      couponCode: "HOTEL200",
      imageUrl: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "25645856",
      title: "Spa & Wellness Package - Full Day Relaxation Experience",
      location: "123 Wellness Ave, Spa City, IL 60601",
      startDate: "01.03.2025",
      endDate: "31.03.2025",
      category: "Health & Beauty",
      normalPrice: 120,
      offerPrice: 60,
      totalAmount: 60,
      quantity: 1,
      price: 80,
      couponCode: "SPA80",
      imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 lg:gap-8">
          {/* Sidebar */}
          <div className="xl:col-span-1">
            <ProfileSidebar />
          </div>
          
          {/* Main Content */}
          <div className="xl:col-span-3">
            <div className="mb-6">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">My Coupons</h1>
              <p className="text-gray-600">Manage and use your purchased coupons</p>
            </div>
            
            <div className="space-y-6">
              {userCoupons.map((coupon, index) => (
                <CouponCard key={index} coupon={coupon} />
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Profile;
