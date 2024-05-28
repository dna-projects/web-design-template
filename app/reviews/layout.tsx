import Navbar from '../../components/Navbar';

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    );
}
