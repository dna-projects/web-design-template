import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import Link from 'next/link';
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='flex flex-col'>

          {/* Landing container */}
          <div className='landing-image flex flex-col justify-center relative w-screen h-screen'>
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
          <div className='flex flex-col max-w-screen-2xl mx-auto gap-20 py-36 px-4 lg:flex-row 2xl:px-0'>
            <Image
              src='/about.jpg'
              alt=''
              width={1920}
              height={1080}
              priority={true}
              className='self-center w-[450px] h-[252px] rounded-3xl shadow-xl lg:self-start 2xl:w-[750px] 2xl:h-[420px]'
            />
            <div className='flex flex-col'>
              <div className='font-semibold tracking-wider'>ABOUT US</div>
              <div className='text-[35px] font-bold md:text-[45px]'>Your Company Name</div>
              <div className='mt-5'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras tempus, nisi nec finibus efficitur, nulla nunc volutpat nulla, vel venenatis tellus nisi vel nulla. Sed vel nisi vel magna varius volutpat. Donec vel mauris vel nunc varius volutpat. Sed in nulla vel nunc venenatis volutpat. Sed vel nisi vel magna varius volutpat.</div>
              <p className='mt-5'>Nulla facilisi. Sed vel eros vel velit posuere bibendum. Donec vel ex vel nunc faucibus pulvinar. Mauris eget enim vel nunc fringilla faucibus. Sed quis risus vel nunc venenatis volutpat. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
            </div>
          </div>

      </main>
      <Footer />
    </>
  );
}
