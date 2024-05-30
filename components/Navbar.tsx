import Link from 'next/link';
import Image from 'next/image'

export default function Navbar() {
    return (
        <>
            <nav className='flex flex-row fixed w-full bg-white shadow-lg z-50'>

                {/* Logo */}
                    <Image
                        src='/example-logo.png'
                        alt=''
                        width={150}
                        height={150}
                        priority={true}
                        className='w-[55px] m-5'
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
                <nav className='hidden justify-center self-center w-full gap-16 lg:flex'>
                    <Link href='/' className='group flex flex-col'>
                        <div>Home</div>
                        <div className='w-0 h-0.5 bg-[#7598ED] transition-width duration-300 group-hover:w-full'></div>
                    </Link>
                    <Link href='/about' className='group flex flex-col'>
                        <div>About</div>
                        <div className='w-0 h-0.5 bg-[#7598ED] transition-width duration-300 group-hover:w-full'></div>
                    </Link>
                    <Link href='/services' className='group flex flex-col'>
                        <div>Services</div>
                        <div className='w-0 h-0.5 bg-[#7598ED] transition-width duration-300 group-hover:w-full'></div>
                    </Link>
                    {/* <Link href='/gallery' className='group flex flex-col'>
                        <div>Gallery</div>
                        <div className='w-0 h-0.5 bg-[#7598ED] transition-width duration-300 group-hover:w-full'></div>
                    </Link>
                    <Link href='/reviews' className='group flex flex-col'>
                        <div>Reviews</div>
                        <div className='w-0 h-0.5 bg-[#7598ED] transition-width duration-300 group-hover:w-full'></div>
                    </Link> */}
                    <Link href='/contact' className='group flex flex-col'>
                        <div>Contact</div>
                        <div className='w-0 h-0.5 bg-[#7598ED] transition-width duration-300 group-hover:w-full'></div>
                    </Link>
                </nav>

            </nav>
        </>
    );
}
