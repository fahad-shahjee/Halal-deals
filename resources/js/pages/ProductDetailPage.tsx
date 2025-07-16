import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import CategoryFilter from '@/components/CategoryFilter';
import ProductDetail from '@/components/ProductDetail';
import SimilarDeals from '@/components/SimilarDeals';
import Newsletter from '@/components/Newsletter';

const ProductDetailPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <CategoryFilter />
      <ProductDetail />
      <SimilarDeals />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
