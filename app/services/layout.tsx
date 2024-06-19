import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import ContactBanner from '../../components/ContactBanner'
import Footer from '../../components/Footer';

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <Banner headline='Our Services' image='/page-banner-bg4.jpg' />
            <main>{children}</main>
            <div className='flex flex-col'>
                <ContactBanner />
            </div>
            <Footer />
        </>
    );
}
