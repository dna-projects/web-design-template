import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import ContactBanner from '../../components/ContactBanner'
import Footer from '../../components/Footer';

export default function ReviewLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <Banner headline='Reviews' image='/banner-background5.jpg' />
            <main>{children}</main>
            <div className='flex flex-col'>
                <ContactBanner />
            </div>
            <Footer />
        </>
    );
}
