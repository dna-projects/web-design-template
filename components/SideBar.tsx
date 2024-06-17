import Link from 'next/link';
import { usePathname } from 'next/navigation';


type SidebarProps = {
    isOpen: boolean;
};

    export default function Sidebar({ isOpen }: SidebarProps) {
        const currentPath = usePathname()

        return (
            <>

                {/* Background blur layer */}
                <div className={`fixed top-[77px] right-0 h-screen bg-[#161616]/60 transition-all duration-300 ease-in-out transform ${
                        isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                    } w-full z-30 ios-backdrop-blur lg:hidden`}>
                </div>

                {/* Sidebar menu */}
                <div
                    className={`fixed top-[77px] right-0 h-screen bg-white transition-transform duration-300 ease-in-out transform ${
                        isOpen ? 'translate-x-0' : 'translate-x-full'
                    } w-[270px] z-40 lg:hidden`}
                >
                    <div className='flex flex-col gap-10 text-lg mt-12 mr-5'>
                        <Link href='/' className={`group flex flex-col self-end ${currentPath === '/' ? 'active' : ''}`}>
                            <div>Home</div>
                            <div className={`h-0.5 bg-primary transition-width duration-300 ${currentPath === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
                        </Link>
                        <Link href='/about' className={`group flex flex-col self-end  ${currentPath === '/about' ? 'active' : ''}`}>
                            <div>About Us</div>
                            <div className={`h-0.5 bg-primary transition-width duration-300 ${currentPath === '/about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
                        </Link>
                        <Link href='/services' className={`group flex flex-col self-end  ${currentPath === '/services' ? 'active' : ''}`}>
                            <div>Services</div>
                            <div className={`h-0.5 bg-primary transition-width duration-300 ${currentPath === '/services' ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
                        </Link>
                        <Link href='/gallery' className={`group flex flex-col self-end  ${currentPath === '/gallery' ? 'active' : ''}`}>
                            <div>Gallery</div>
                            <div className={`h-0.5 bg-primary transition-width duration-300 ${currentPath === '/gallery' ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
                        </Link>
                    </div>
                </div>
            </>
        );
    }
