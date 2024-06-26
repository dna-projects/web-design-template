import Navbar from '../../components/Navbar';
import PageBanner from '../../components/PageBanner';
import Footer from '../../components/Footer';

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <PageBanner headline='Contact Us' image='/page-banner-bg4.jpg' />
            <main>{children}</main>
            <Footer />
        </>
    );
}
