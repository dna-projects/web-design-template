import Navbar from '../../components/Navbar';

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    );
}
