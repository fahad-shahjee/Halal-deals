import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import SimilarDeals from '@/components/SimilarDeals';
import Newsletter from '@/components/Newsletter';
import Profile from '@/components/Profile';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Profile />
      <SimilarDeals />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProfilePage;
