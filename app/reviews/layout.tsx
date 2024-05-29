import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}
