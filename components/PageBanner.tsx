import Link from "next/link";
import Image from "next/image"

type PageBannerProps = {
    headline: string;
    image: string;
};

export default function Banner({ headline, image }: PageBannerProps) {
    return (
        <>
            <div
                className="flex justify-center relative text-white w-full h-[280px] lg:h-[450px]"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="flex justify-center absolute bg-black opacity-50 w-full h-full"></div>
                <h1 className="self-center text-[35px] font-bold tracking-tight mt-20 z-20 md:text-[60px]">{headline}</h1>
            </div>
        </>
    );
}
