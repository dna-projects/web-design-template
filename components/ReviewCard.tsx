import Image from 'next/image'

type ReviewCardProps = {
    name: string;
    quote: string;
    stars: number;
};

export default function ReviewCard({ name, quote, stars }: ReviewCardProps) {
    return (
        <>
            <div className='flex flex-col justify-between self-center overflow-auto bg-white w-full h-[330px] rounded-md shadow-lg px-8 pt-6 pb-4'>

                {/* Customer review */}
                <div className='flex flex-col'>
                    <Image
                        src='/quote.svg'
                        alt=''
                        width={50}
                        height={50}
                        priority={true}
                        className='self-start w-7 mb-4'
                    />
                    <div className='text-start text-neutral-600'>{quote}</div>
                </div>

                {/* Reviewer name and stars */}
                <div className='flex flex-row justify-between h-1/4 border-t mt-4 pt-4'>
                    <div className='self-center font-bold'>{name}</div>
                    <div className='self-center'>{stars}</div>
                </div>
            </div>
        </>
    );
}
