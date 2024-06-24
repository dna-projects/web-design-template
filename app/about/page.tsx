import Link from 'next/link'
import Image from 'next/image'

export default function About() {
    return (
        <>
            <main className='flex flex-col text-[#161616]'>
                <div className='flex flex-col self-center px-4 py-16 max-w-screen-xl lg:pt-28 lg:pb-36'>

                    {/* About section */}
                    <div className='flex flex-col gap-12 lg:flex-row lg:gap-16 xl:gap-24 2xl:px-0'>
                        <div className='self-center max-w-[550px] lg:max-w-[650px] lg:h-[530px] lg:w-2/3'>
                            <Image
                            src='/about3.png'
                            alt=''
                            width={1024}
                            height={782}
                            // priority={true}
                            className='self-center object-cover w-auto h-full max-h-[420px] rounded-3xl lg:max-h-full'
                            />
                        </div>
                        <div className='flex flex-col self-center max-w-[550px] lg:w-1/2 lg:max-w-none'>
                            <div className='font-semibold tracking-wider'>ABOUT US</div>
                            <h2 className='text-[33px] font-extrabold xl:text-[45px]'>Company Name</h2>
                            <p className='text-neutral-600 mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
                            <p className='text-neutral-600 mt-5'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.</p>
                            <Link href='/about' className='w-[175px]'>
                                <button className='border-2 border-primary bg-primary font-bold w-full mt-9 py-3 hover:bg-white hover:border-primary duration-200'>OUR SERVICES</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
