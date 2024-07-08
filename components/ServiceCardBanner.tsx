import Image from 'next/image'
import Link from 'next/link'

type ServiceCardBannerProps = {
    icon: string;
    title: string;
    content: string;
};

export default function ServiceCardBanner({ icon, title, content }: ServiceCardBannerProps) {
    return (
        <>
            <div className='flex flex-col justify-center bg-white w-full h-[320px] border-t-[6px] border-primary rounded-md shadow-xl p-5'>

                {/* Service icon */}
                    <Image
                        src={icon}
                        alt=''
                        width={50}
                        height={50}
                        // priority={true}
                        className='self-center w-16 mb-8'
                    />

                {/* Service name and snippet */}
                <div className='flex flex-col'>
                    <h2 className='self-center font-bold text-3xl mb-6'>{title}</h2>
                    <div className='text-center text-neutral-500'>{content}</div>
                    {/* <Link href='/gallery' className='self-center'>
                        <button className='border-b-2 border-neutral-400 text-[#161616] text-lg font-semibold w-full mt-8 hover:border-primary duration-200'>MORE</button>
                    </Link> */}
                    {/* <Link href='/gallery' className='self-center w-[175px]'>
                        <button className='border-2 border-[#161616] bg-[#161616] text-white font-semibold w-full mt-8 py-3 hover:bg-transparent hover:text-[#161616] duration-200'>MORE</button>
                    </Link> */}
                </div>
            </div>
        </>
    );
}
