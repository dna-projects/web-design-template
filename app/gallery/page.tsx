import GalleryImage from '../../components/GalleryImage'

export default function Gallery() {
    return (
        <>
            <main className='flex flex-col text-[#161616]'>

                {/* Gallery container */}
                <div className='flex flex-col self-center max-w-screen-xl gap-16 px-4 py-16 lg:gap-20 lg:pt-28 lg:pb-36'>

                    {/* Row 1 */}
                    <div className='flex flex-row self-center max-w-[550px] lg:max-w-full'>
                        <div className='flex flex-col justify-between gap-16 lg:gap-0 lg:h-[500px] lg:flex-row'>
                            <GalleryImage imageName={'/gallery-1.jpg'} priority={true} />
                            <GalleryImage imageName={'/gallery-2.jpg'} priority={true} />
                            <GalleryImage imageName={'/gallery-3.jpg'} priority={true} />
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className='flex flex-row self-center max-w-[550px] lg:max-w-full'>
                        <div className='flex flex-col justify-between gap-16 lg:gap-0 lg:h-[500px] lg:flex-row'>
                            <GalleryImage imageName={'/gallery-4.jpg'} priority={false} />
                            <GalleryImage imageName={'/gallery-5.jpg'} priority={false} />
                            <GalleryImage imageName={'/gallery-6.jpg'} priority={false} />
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className='flex flex-row self-center max-w-[550px] lg:max-w-full'>
                        <div className='flex flex-col justify-between gap-16 lg:gap-0 lg:h-[500px] lg:flex-row'>
                            <GalleryImage imageName={'/gallery-7.jpg'} priority={false} />
                            <GalleryImage imageName={'/gallery-8.jpg'} priority={false} />
                            <GalleryImage imageName={'/gallery-9.jpg'} priority={false} />
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}
