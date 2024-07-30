import Link from "next/link";

type PrimaryButtonBorderlessProps = {
    href : string;
    label: string;
};

export default function PrimaryButtonBorderless({ href, label }: PrimaryButtonBorderlessProps) {
    return (
        <Link href={href}>
            <button className="border-2 border-primary bg-primary font-bold w-[170px] py-3 hover:border-white hover:bg-white duration-200">{label}</button>
        </Link>
    );
}
