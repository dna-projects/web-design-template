import Link from 'next/link';
import Image from 'next/image'

// type BannerProps = {
//     headline: string;
//     image: string;
// };

export default function OverlappingImages() {
    return (
        <>
            <div className='self-center relative max-w-[550px] w-full h-[420px] lg:max-w-[650px] lg:h-[530px] lg:w-1/2'>
                <Image
                    src='/home-service-bottom.jpg'
                    alt=''
                    width={1920}
                    height={1920}
                    priority={true}
                    className='self-center absolute object-cover top-0 right-0 w-[85%] h-[90%] max-h-[320px] rounded-3xl shadow-xl lg:max-h-full'
                />
                <Image
                    src='/home-service-top.jpg'
                    alt=''
                    width={1920}
                    height={1920}
                    priority={true}
                    className='self-center absolute object-cover bottom-0 left-0 border-[10px] border-white w-[65%] h-[65%] rounded-3xl shadow-xl'
                />
            </div>
        </>
    );
}
