import PageBanner from '../../components/PageBanner';

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <PageBanner headline='Contact Us' image='/page-banner-bg4.jpg' />
            <main>{children}</main>
        </>
    );
}
