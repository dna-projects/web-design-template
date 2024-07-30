import Link from "next/link";

type PrimaryButtonProps = {
    href : string;
    label: string;
};

export default function PrimaryButton({ href, label }: PrimaryButtonProps) {
    return (
        <Link href={href}>
            <button className="border-2 border-primary bg-primary font-bold w-[170px] py-3 hover:bg-white duration-200">{label}</button>
        </Link>
    );
}
