import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import Cart from '@/components/Cart';

const CartPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <Cart />
            <Footer />
        </div>
    );
};

export default CartPage;
