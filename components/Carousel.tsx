'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link';


type CarouselProps = {
    images: string[];
};

export default function Carousel({ images = [] }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    // Determine how much to scroll per click depending on screen resolution
    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 1024);
        };

        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const visibleImages = isLargeScreen ? 3 : 1;

    // Go back function
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => {
            return (prevIndex === 0) ? images.length - visibleImages : prevIndex - 1;
        });
    };

    // Go forward function
    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            return (prevIndex >= images.length - visibleImages) ? 0 : prevIndex + 1;
        });
    };

    return (
        <div className='flex flex-row justify-center self-center max-w-screen-xl'>

            {/* Go back arrow */}
            <button className='flex justify-center self-center cursor-pointer w-10 xs:w-20 -ml-2 xs:-ml-0 md:w-28' onClick={handlePrev}>
                <Image
                    src='/chevron.svg'
                    alt=''
                    width={100}
                    height={100}
                    className='self-center w-8 hover:w-full duration-100 xs:w-14 md:w-20'
                />
            </button>

            {/* Gallery */}
            <div className='flex justify-center overflow-hidden w-full md:w-5/6'>
                <div className='flex gap-8 transition-transform duration-300 ease-in-out mx-0 xs:mx-4' style={{ transform: `translateX(-${currentIndex * (isLargeScreen ? 35 : 105)}%)` }}>
                    {images.map((image, index) => (
                        <div key={index} className='w-[93%] flex-shrink-0 xs:w-[100%] lg:w-[48%] xl:w-[31.5%]'>
                            <Link href='/gallery' >
                                <img src={image} alt={`Slide ${index}`} className='w-full h-[450px] object-cover rounded-3xl shadow-lg mb-8 mx-3 xs:mx-0' />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Go forward arrow */}
            <button className='flex justify-center self-center cursor-pointer w-10 -mr-2 xs:w-20 xs:-mr-0 md:w-28' onClick={handleNext}>
                <Image
                    src='/chevron.svg'
                    alt=''
                    width={100}
                    height={100}
                    className='self-center rotate-180 w-8 hover:w-full duration-100 xs:w-14 md:w-20'
                />
            </button>
        </div>
    );
}
