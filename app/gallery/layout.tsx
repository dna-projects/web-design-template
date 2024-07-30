import Navbar from "../../components/Navbar";
import PageBanner from "../../components/PageBanner";
import ContactBanner from "../../components/ContactBanner"
import Footer from "../../components/Footer";

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <PageBanner headline="Gallery" image="/page-banner-bg.jpg" />
            <main>{children}</main>
            <div className="flex flex-col">
                <ContactBanner />
            </div>
            <Footer />
        </>
    );
}
