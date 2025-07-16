import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import SearchResults from '@/components/SearchResults';

const SearchPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SearchResults />
      <Footer />
    </div>
  );
};

export default SearchPage;
