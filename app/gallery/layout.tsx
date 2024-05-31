import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <Banner headline='Gallery' image='' />
            <main>{children}</main>
            <Footer />
        </>
    );
}
