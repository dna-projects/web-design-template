import Link from 'next/link';
import Image from 'next/image'

type BannerProps = {
    headline: string;
    image: string;
};

export default function Banner({ headline, image }: BannerProps) {
    return (
        <>
            <div
                className='flex justify-center relative w-full h-[300px] text-white lg:h-[450px]'
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className='flex justify-center absolute bg-black opacity-50 w-full h-full'></div>
                <h1 className='self-center text-[35px] font-semibold mt-20 z-20 md:text-[60px]'>{headline}</h1>
            </div>
        </>
    );
}
