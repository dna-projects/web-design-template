import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import ContactBanner from '../../components/ContactBanner'
import Footer from '../../components/Footer';

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <Banner headline='About Us' image='/banner-background5.jpg' />
            <main>{children}</main>
            <div className='flex flex-col'>
                <ContactBanner />
            </div>
            <Footer />
        </>
    );
}
