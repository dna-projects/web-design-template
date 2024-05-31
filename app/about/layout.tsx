import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <Banner headline='About Us' />
            <main>{children}</main>
            <Footer />
        </>
    );
}
