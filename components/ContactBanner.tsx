import Link from 'next/link';

export default function ContactBanner() {
    return (
        <>
            <div className='banner-image flex justify-center self-center relative w-full h-[400px] px-4 lg:h-[600px] xl:max-w-[90%]'>
                <div className='flex justify-center absolute bg-black opacity-50 w-full h-full'></div>
                <div className='flex flex-col self-center text-center z-10'>
                    <h1 className='self-center text-[35px] text-white font-bold tracking-tight leading-tight min-w-60 max-w-80 mb-8 px-4 md:px-0 md:text-[45px]'>Get It Done With Us Today</h1>
                    <p className='text-white max-w-[550px] mb-8'>Have questions? Our team is just a click away. Fill out our contact form today and let us assist you in achieving your goals.</p>
                    <Link href='/contact' className='self-center'>
                        <button className='border-2 border-primary bg-primary font-bold w-[175px] px-5 py-3 hover:bg-white hover:border-white duration-200'>GET IN TOUCH</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
