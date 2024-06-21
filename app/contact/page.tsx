import ContactForm from '../../components/ContactForm';

import Image from 'next/image';

export default function Contact() {
    return (
        <>
            <main className='flex flex-row justify-center text-[#161616]'>
                <div className='flex self-center px-4 py-16 max-w-screen-xl lg:pt-28 lg:pb-36'>
                    <div className='flex flex-col gap-12 lg:flex-row lg:gap-16 xl:gap-24 2xl:px-0'>

                        <ContactForm />

                        {/* Image container and contact information */}
                        <div className='flex flex-col-reverse justify-between self-center w-full h-[92%] lg:flex-col lg:w-1/2'>
                            <Image
                                src='/contact-page.jpg'
                                alt=''
                                width={1350}
                                height={1332}
                                priority={true}
                                className='object-cover rounded-3xl h-[280px] xs:h-[350px] sm:h-[500px] lg:h-[70%] w-full'
                            />

                            {/* Contact info */}
                            <div className='flex flex-col justify-between bg-[#f1f1f1] rounded-3xl w-full xs:h-[160px] mb-12 xs:flex-row lg:mb-0'>

                                {/* First column */}
                                <div className='flex flex-col justify-between ml-8 my-6 xl:ml-12'>
                                    <div className='mb-6 xs:mb-0'>
                                        <div className='font-bold'>Email</div>
                                        <div>example@example.com</div>
                                    </div>
                                    <div>
                                        <div className='font-bold'>Phone</div>
                                        <div>555-555-5555</div>
                                    </div>
                                </div>

                                {/* Second column */}
                                <div className='flex flex-col mb-6 mt-0 mr-8 ml-8 xs:my-6 xl:mr-12'>
                                    <div className='font-bold mb-0.5'>Address</div>
                                    <div className='leading-tight'>
                                        <div>First Address Line</div>
                                        <div>Second Address Line</div>
                                        <div>City State Zip</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
