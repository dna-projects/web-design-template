import Link from 'next/link';
import Image from 'next/image'

export default function Navbar() {
    return (
        <>
            <nav className='flex flex-row fixed w-full shadow-lg z-50'>

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
                    <Link href="/">
                        <div>Home</div>
                    </Link>
                    <Link href="/about">
                        <div>About</div>
                    </Link>
                    <Link href="/services">
                        <div>Services</div>
                    </Link>
                    {/* <Link href="/gallery">
                        <div>Gallery</div>
                    </Link>
                    <Link href="/reviews">
                        <div>Reviews</div>
                    </Link> */}
                    <Link href="/contact">
                        <div>Contact</div>
                    </Link>
                </nav>

            </nav>
        </>
    );
}