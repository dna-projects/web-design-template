import SecondaryButton from './buttons/SecondaryButton'

import Link from 'next/link';
import Image from 'next/image'

type ServiceCardFullProps = {
    id: string;
    image: string;
    icon: string;
    title: string;
    content: string;
};

export default function ServiceCardFull({ id, image, icon, title, content }: ServiceCardFullProps) {
    return (
        <>
            <div
                id={id}
                className='flex flex-col overflow-auto h-[600px] max-w-[550px] rounded-md shadow-xl lg:flex-row lg:max-w-screen-xl lg:h-[380px]'
            >

                {/* Service image */}
                    <Image
                        src={image}
                        alt='Example images related to the service'
                        width={2200}
                        height={1200}
                        className='self-center object-cover rounded-t-md w-full h-1/3 lg:h-full lg:w-2/5 lg:rounded-l-md lg:rounded-tr-none'
                    />

                {/* Service content */}
                <div className='flex flex-col justify-between h-full p-6 py-10 xs:px-14 xs:py-14'>
                    <div className='flex flex-col'>
                        <div className='flex flex-row'>
                            <Image
                                src={icon}
                                alt='Icon related to the service'
                                width={50}
                                height={50}
                                className='self-center w-8 mr-4 lg:w-10 lg:mr-6'
                            />
                            <h2 className='self-center font-extrabold text-3xl lg:text-4xl'>{title}</h2>
                        </div>
                        <div className='text-neutral-500 min-w-[240px] mt-4'>{content}</div>
                    </div>

                    {/* Button to redirect to Contact page */}
                    <div className='self-center lg:self-start'>
                        <SecondaryButton href={'/contact'} label={'GET A QUOTE'} />
                    </div>

                </div>
            </div>
        </>
    );
}
