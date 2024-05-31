import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <Banner headline='Contact Us' image='/banner-background4.jpg' />
            <main>{children}</main>
            <Footer />
        </>
    );
}
