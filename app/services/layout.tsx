import Navbar from '../../components/Navbar';
import PageBanner from '../../components/PageBanner';
import ContactBanner from '../../components/ContactBanner'
import Footer from '../../components/Footer';

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <PageBanner headline='Our Services' image='/page-banner-bg.jpg' />
            <main>{children}</main>
            <div className='flex flex-col'>
                <ContactBanner />
            </div>
            <Footer />
        </>
    );
}
