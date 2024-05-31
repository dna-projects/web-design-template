import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <Banner headline='Our Services' image='/banner-background3.jpg' />
            <main>{children}</main>
            <Footer />
        </>
    );
}
