import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import Checkout from '@/components/Checkout';

const CheckoutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Checkout />
      <Footer />
    </div>
  );
};

export default CheckoutPage;
