import Link from 'next/link';
import Image from 'next/image'

export default function Footer() {
    return (
        <>
            <div className='flex flex-col bg-[#282828] text-white gap-20 px-10 pt-20 pb-7'>

                {/* Logo and content */}
                <div className='flex flex-col justify-between self-center w-full max-w-[1320px] lg:flex-row'>
                    {/* Logo */}
                    <div className='flex justify-center self-center w-96 mb-10 lg:justify-start lg:self-start'>
                        <Image
                            src='/example-logo.png'
                            alt=''
                            width={150}
                            height={150}
                            priority={true}
                            className='w-[100px] h-[100px]'
                        />
                    </div>
                    {/* Footer content */}
                    <div className='flex flex-wrap justify-between self-center w-full max-w-[320px] sm:max-w-[600px] gap-14 md:flex-row'>
                        <div className='flex flex-col'>
                            <h2 className='font-semibold text-lg mb-3'>INFORMATION</h2>
                            <div className='w-[90px] h-0.5 bg-[#7598ED] mb-3'></div>
                            <div className='mb-3'>Home</div>
                            <div className='mb-3'>About Us</div>
                            <div className='mb-3'>Services</div>
                            <div>Contact</div>
                        </div>
                        <div className='flex flex-col'>
                            <h2 className='font-semibold text-lg mb-3'>SERVICES</h2>
                            <div className='w-[90px] h-0.5 bg-[#7598ED] mb-3'></div>
                            <div className='mb-3'>Service 1</div>
                            <div className='mb-3'>Service 2</div>
                            <div>Service 3</div>
                        </div>
                        <div className='flex flex-col'>
                            <h2 className='font-semibold text-lg mb-3'>CONTACT</h2>
                            <div className='w-[90px] h-0.5 bg-[#7598ED] mb-3'></div>
                            <div className='flex flex-col leading-tight mb-3'>
                                <p>First Address Line</p>
                                <p>Second Address Line</p>
                                <p>City State Zip</p>
                            </div>
                            <div className='mb-3'>(555) 555-5555</div>
                            <div>Click to Email</div>
                        </div>
                    </div>
                </div>

                {/* DNA Labs info */}
                <div className='flex flex-col self-center text-center lg:flex-row'>
                    <div>Designed and Developed by <span className='text-[#7598ED] mr-1'>DNA Labs Web Designs</span></div>
                    <div>Copyright 2023 - Present</div>
                </div>
            </div>
        </>
    );
}
