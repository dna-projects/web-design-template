import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import Link from 'next/link';
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='flex flex-col min-h-screen'>

        {/* Landing container */}
        <div className='landing-image flex flex-col justify-center relative w-full h-screen'>
          <div className='flex justify-center absolute bg-black opacity-55 w-full h-full'></div>

          {/* Content */}
          <div className='flex flex-col self-center items-center z-20 px-5'>
            <div className='text-center text-yellow-500 font-bold tracking-wider'>ELEVATE YOUR BUSINESS</div>
            <h1 className='text-center text-[35px] text-white font-bold tracking-tighter max-w-[600px] mt-7 md:text-[45px]'>Unlock your Online Potential with Stunning Websites</h1>
            <p className='text-center text-white mt-7'>Our talented designers craft pixel-perfect websites that enhance your brand&apos;s digital footprint</p>
          </div>

          {/* Buttons */}
          <div className='flex flex-row justify-center gap-10 z-20 mt-14'>
            <Link href='/about'>
              <div className='border border-yellow-500 bg-yellow-500 font-bold px-7 py-3 hover:bg-white hover:border-white duration-200'>LEARN MORE</div>
            </Link>
            <Link href='/contact'>
              <button className='border border-yellow-500 text-white font-semibold px-7 py-3 hover:bg-white hover:text-black hover:border-white duration-200 '>Get in Touch</button>
            </Link>
          </div>
        </div>

        {/* About section */}
        <div className='bg-white w-full h-[700px] text-center mt-20'>About Us</div>

      </main>
      <Footer />
    </>
  );
}
