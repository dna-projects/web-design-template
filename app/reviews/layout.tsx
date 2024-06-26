import Navbar from '../../components/Navbar';
import PageBanner from '../../components/PageBanner';
import ContactBanner from '../../components/ContactBanner'
import Footer from '../../components/Footer';

export default function ReviewLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <PageBanner headline='Reviews' image='/page-banner-bg4.jpg' />
            <main>{children}</main>
            <div className='flex flex-col'>
                <ContactBanner />
            </div>
            <Footer />
        </>
    );
}
