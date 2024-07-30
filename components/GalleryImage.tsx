import Image from "next/image"

type GalleryImageProps = {
    imageName: string;
    priority: boolean;
};

export default function GalleryImage({ imageName, priority }: GalleryImageProps) {
    return (
        <>
            <Image
                src={imageName}
                alt="Example image of a web design"
                width={750}
                height={700}
                priority={priority}
                className="object-cover w-full max-w-[360px] h-[350px] rounded-3xl shadow-xl hover:shadow-zinc-400 hover:scale-[1.02] duration-300 xs:max-w-full xs:h-[550px] lg:w-[31%] lg:h-full xl:w-[29%]"
            />
        </>
    );
}
