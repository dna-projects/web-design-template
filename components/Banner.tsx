import Link from 'next/link';
import Image from 'next/image'

type BannerProps = {
    headline: string;
    // image: string;
};

export default function Banner({ headline }: BannerProps) {
    return (
        <>
            {/* <Image
                src='/banner-background1.png'
                alt=''
                width={25}
                height={25}
                priority={true}
                className='j'
            /> */}
            <div className='banner-image flex justify-center relative w-full h-[450px] text-white'>
                <div className='flex justify-center absolute bg-gray-800 opacity-60 w-full h-full'></div>
                <h1 className='self-center text-[60px] font-semibold mt-20 z-20'>{headline}</h1>

            </div>
        </>
    );
}