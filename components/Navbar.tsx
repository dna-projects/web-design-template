"use client"

import { useState } from "react";

import HamburgerButton from "../components/HamburgerButton"
import Sidebar from "../components/SideBar"

import Link from "next/link";
import Image from "next/image"
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const currentPath = usePathname()

    const toggleSideBar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="flex justify-center fixed w-full bg-white shadow-lg z-50">
                <div className="flex w-full max-w-screen-xl">

                    {/* Logo */}
                    <Link href="/" className="flex justify-center ml-4 w-[170px] min-w-[120px] min-h-[77px] 2xl:w-[200px]">
                        <Image
                            src="/logo-example-dark.png"
                            alt="Company logo"
                            width={446}
                            height={91}
                            priority={true}
                            className="self-center mt-1.5"
                        />
                    </Link>

                    {/* Desktop menu */}
                    <div className="hidden justify-center self-center w-[70%] gap-16 lg:flex">
                        <Link href="/" className={`group flex flex-col ${currentPath === "/" ? "active" : ""}`}>
                            <div>Home</div>
                            <div className={`h-0.5 bg-primary transition-width duration-300 ${currentPath === "/" ? "w-full" : "w-0 group-hover:w-full"}`}></div>
                        </Link>
                        <Link href="/about" className={`group flex flex-col ${currentPath === "/about" ? "active" : ""}`}>
                            <div>About Us</div>
                            <div className={`h-0.5 bg-primary transition-width duration-300 ${currentPath === "/about" ? "w-full" : "w-0 group-hover:w-full"}`}></div>
                        </Link>
                        <Link href="/services" className={`group flex flex-col ${currentPath === "/services" ? "active" : ""}`}>
                            <div>Services</div>
                            <div className={`h-0.5 bg-primary transition-width duration-300 ${currentPath === "/services" ? "w-full" : "w-0 group-hover:w-full"}`}></div>
                        </Link>
                        <Link href="/gallery" className={`group flex flex-col ${currentPath === "/gallery" ? "active" : ""}`}>
                            <div>Gallery</div>
                            <div className={`h-0.5 bg-primary transition-width duration-300 ${currentPath === "/gallery" ? "w-full" : "w-0 group-hover:w-full"}`}></div>
                        </Link>
                    </div>

                    {/* Contact button */}
                    <Link href="/contact" className="hidden self-center lg:flex">
                        <button className="border-2 border-primary bg-primary font-bold w-[155px] m-4 py-2 2xl:py-2.5 hover:bg-white duration-200">CONTACT US</button>
                    </Link>

                    {/* Mobile menu */}
                    <div
                        className="flex justify-end w-full lg:hidden"
                        aria-label="mobile menu toggle"
                    >
                        <HamburgerButton isOpen={isOpen} toggleSideBar={toggleSideBar} />
                    </div>

                </div>
            </nav>

            {/* Mobile menu side bar */}
            <Sidebar isOpen={isOpen} />

        </>
    );
}
