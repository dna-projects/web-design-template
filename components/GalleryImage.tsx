import Image from 'next/image'

type GalleryImageProps = {
    imageName: string;
};

export default function GalleryImage({ imageName }: GalleryImageProps) {
    return (
        <>
            <Image
                src={imageName}
                alt=''
                width={1920}
                height={1920}
                priority={true}
                className='object-cover w-full h-[350px] xs:h-[550px] rounded-3xl shadow-xl hover:shadow-zinc-400 hover:scale-[1.02] duration-300 lg:w-[31%] lg:h-full xl:w-[29%]'
            />
        </>
    );
}
