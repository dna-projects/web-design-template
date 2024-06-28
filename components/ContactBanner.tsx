import PrimaryButtonBorderless from './buttons/PrimaryButtonBorderless'

export default function ContactBanner() {
    return (
        <>
            <div className='banner-image flex justify-center self-center relative w-full h-[400px] px-4 lg:h-[600px] xl:max-w-[90%]'>

                {/* Dark layer */}
                <div className='flex justify-center absolute bg-black opacity-65 w-full h-full'></div>

                {/* Content */}
                <div className='flex flex-col self-center text-center z-10'>
                    <h2 className='self-center text-[35px] text-white font-extrabold tracking-tight leading-tight min-w-60 max-w-72 mb-8 px-4 md:max-w-80 md:px-0 md:text-[45px]'>Get It Done With Us Today</h2>
                    <p className='text-white max-w-[550px] mb-8'>Have questions? Our team is just a click away. Fill out our contact form today and let us assist you in achieving your goals.</p>
                    <PrimaryButtonBorderless href={'/contact'} label={'GET IN TOUCH'} />
                </div>

            </div>
        </>
    );
}
