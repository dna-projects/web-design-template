'use client'

import Link from 'next/link';
import Image from 'next/image'
import { usePathname } from 'next/navigation';


export default function Navbar() {
    const currentPath = usePathname()

    return (
        <>
            <nav className='flex flex-row fixed w-full h-[85px] bg-white shadow-lg z-50'>

                {/* Logo */}
                    <Image
                        src='/example-logo.png'
                        alt=''
                        width={150}
                        height={150}
                        priority={true}
                        className='self-center w-[45px] h-[45px] m-4'
                    />

                {/* Hamburger Menu */}
                <div
                    className='flex justify-end w-full lg:hidden'
                    aria-label='mobile menu toggle'
                >
                    <button className='self-center h-[25px] m-5'>
                        <Image
                            src='/burger-menu.svg'
                            alt=''
                            width={25}
                            height={25}
                            priority={true}
                            className=''
                        />
                    </button>
                </div>

                {/* Menu */}
                <div className='hidden justify-center self-center w-full gap-16 lg:flex'>
                    <Link href='/' className={`group flex flex-col ${currentPath === '/' ? 'active' : ''}`}>
                        <div>Home</div>
                        <div className={`h-0.5 bg-[#7598ED] transition-width duration-300 ${currentPath === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
                    </Link>
                    <Link href='/about' className={`group flex flex-col ${currentPath === '/about' ? 'active' : ''}`}>
                        <div>About</div>
                        <div className={`h-0.5 bg-[#7598ED] transition-width duration-300 ${currentPath === '/about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
                    </Link>
                    <Link href='/services' className={`group flex flex-col ${currentPath === '/services' ? 'active' : ''}`}>
                        <div>Services</div>
                        <div className={`h-0.5 bg-[#7598ED] transition-width duration-300 ${currentPath === '/services' ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
                    </Link>
                    {/* <Link href='/gallery' className={`group flex flex-col ${currentPath === '/gallery' ? 'active' : ''}`}>
                        <div>Gallery</div>
                        <div className={`h-0.5 bg-[#7598ED] transition-width duration-300 ${currentPath === '/gallery' ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
                    </Link>
                    <Link href='/reviews' className={`group flex flex-col ${currentPath === '/reviews' ? 'active' : ''}`}>
                        <div>Reviews</div>
                        <div className={`h-0.5 bg-[#7598ED] transition-width duration-300 ${currentPath === '/reviews' ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
                    </Link> */}
                    <Link href='/contact' className={`group flex flex-col ${currentPath === '/contact' ? 'active' : ''}`}>
                        <div>Contact</div>
                        <div className={`h-0.5 bg-[#7598ED] transition-width duration-300 ${currentPath === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
                    </Link>
                </div>

            </nav>
        </>
    );
}
