import Link from 'next/link';

type SecondaryButtonProps = {
    href : string;
    label: string;
};

export default function SecondaryButton({ href, label }: SecondaryButtonProps) {
    return (
        <Link href={href}>
            <button className='border-2 border-[#161616] bg-[#161616] text-white font-semibold w-[170px] py-3 hover:bg-transparent hover:text-[#161616] duration-200'>{label}</button>
        </Link>
    );
}
