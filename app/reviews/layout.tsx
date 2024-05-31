import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <Banner headline='Reviews' image='' />
            <main>{children}</main>
            <Footer />
        </>
    );
}
