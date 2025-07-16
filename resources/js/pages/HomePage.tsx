
import CategoryFilter from '@/components/CategoryFilter';
import ProductGrid from '@/components/ProductGrid';
import Newsletter from '@/components/Newsletter';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <CategoryFilter />
      <ProductGrid />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomePage;
