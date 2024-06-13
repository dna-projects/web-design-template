'use client'

import Link from 'next/link';
import Image from 'next/image'
import { usePathname } from 'next/navigation';


export default function Navbar() {
    const currentPath = usePathname()

    return (
        <>
            <nav className='flex flex-row justify-center fixed w-full bg-white shadow-lg z-50'>
                <div className='flex flex-row w-full max-w-screen-xl'>
                    {/* Logo */}
                        <Image
                            src='/logo-example-black.png'
                            alt=''
                            width={500}
                            height={500}
                            priority={true}
                            className='self-center w-[180px] h-[45px] m-4 2xl:w-[260px] 2xl:h-[65px] '
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
                    <div className='hidden justify-center self-center w-[70%] gap-16 lg:flex'>
                        <Link href='/' className={`group flex flex-col ${currentPath === '/' ? 'active' : ''}`}>
                            <div>Home</div>
                            <div className={`h-0.5 bg-primary transition-width duration-300 ${currentPath === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
                        </Link>
                        <Link href='/about' className={`group flex flex-col ${currentPath === '/about' ? 'active' : ''}`}>
                            <div>About</div>
                            <div className={`h-0.5 bg-primary transition-width duration-300 ${currentPath === '/about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
                        </Link>
                        <Link href='/services' className={`group flex flex-col ${currentPath === '/services' ? 'active' : ''}`}>
                            <div>Services</div>
                            <div className={`h-0.5 bg-primary transition-width duration-300 ${currentPath === '/services' ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
                        </Link>
                        <Link href='/gallery' className={`group flex flex-col ${currentPath === '/gallery' ? 'active' : ''}`}>
                            <div>Gallery</div>
                            <div className={`h-0.5 bg-primary transition-width duration-300 ${currentPath === '/gallery' ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
                        </Link>
                        {/* <Link href='/reviews' className={`group flex flex-col ${currentPath === '/reviews' ? 'active' : ''}`}>
                            <div>Reviews</div>
                            <div className={`h-0.5 bg-primary transition-width duration-300 ${currentPath === '/reviews' ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
                        </Link> */}
                    </div>

                    {/* Contact button */}
                    <Link href='/contact' className='hidden self-center lg:flex'>
                        <button className='border-2 border-primary bg-primary font-bold w-[155px] m-4 py-2 2xl:py-2.5 hover:bg-white duration-200'>CONTACT US</button>
                    </Link>
                </div>

            </nav>
        </>
    );
}
