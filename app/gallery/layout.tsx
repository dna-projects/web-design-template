import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import ContactBanner from '../../components/ContactBanner'
import Footer from '../../components/Footer';

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <Banner headline='Gallery' image='/page-banner-bg4.jpg' />
            <main>{children}</main>
            <div className='flex flex-col'>
                <ContactBanner />
            </div>
            <Footer />
        </>
    );
}
