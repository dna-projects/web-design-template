import Link from 'next/link';
import Image from 'next/image'

type ServiceCardFullProps = {
    image: string;
    icon: string;
    title: string;
    content: string;
};

export default function ServiceCardFull({ image, icon, title, content }: ServiceCardFullProps) {
    return (
        <>
            <div className='flex flex-row h-[420px] rounded-md shadow-xl'>

                {/* Service image */}
                    <Image
                        src={image}
                        alt=''
                        width={1000}
                        height={1000}
                        priority={true}
                        className='self-center object-cover rounded-l-md w-2/5 h-full'
                    />

                {/* Service content */}
                <div className='flex flex-col justify-between px-14 py-14'>
                    <div className='flex flex-row'>
                        <Image
                            src={icon}
                            alt=''
                            width={50}
                            height={50}
                            priority={true}
                            className='self-center w-10 mr-6'
                        />
                        <h2 className='self-center font-extrabold text-4xl'>{title}</h2>
                    </div>
                    <div className='text-neutral-500 '>{content}</div>
                    <Link href='/contact' className='w-[175px]'>
                        <button className='border-2 border-[#161616] bg-[#161616] text-white font-semibold w-full py-3 hover:bg-transparent hover:text-[#161616] duration-200'>GET A QUOTE</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
