import PageBanner from '../../components/PageBanner';
import ContactBanner from '../../components/ContactBanner'

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <PageBanner headline='Our Services' image='/page-banner-bg4.jpg' />
            <main>{children}</main>
            <div className='flex flex-col'>
                <ContactBanner />
            </div>
        </>
    );
}
