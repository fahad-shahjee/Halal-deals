import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import CategoryFilter from '@/components/CategoryFilter';
import SimilarDeals from '@/components/SimilarDeals';
import Newsletter from '@/components/Newsletter';
import HotelBooking from '@/components/HotelBooking';

const HotelDetailPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <CategoryFilter />
      <HotelBooking />
      <SimilarDeals />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HotelDetailPage;
