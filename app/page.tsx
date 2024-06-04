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
          <div className='landing-image flex flex-col justify-center relative h-screen min-h-[700px]'>
            <div className='flex justify-center absolute bg-black opacity-55 w-full h-full'></div>

            {/* Content */}
            <div className='flex flex-col self-center items-center z-20 px-7 xs:px-16 lg:px-5'>
              <div className='text-center text-yellow-500 font-bold tracking-wider'>ELEVATE YOUR BUSINESS</div>
              <h1 className='text-center text-[35px] text-white font-bold tracking-tighter max-w-[600px] mt-7 md:text-[45px]'>Unlock your Online Potential with Stunning Websites</h1>
              <p className='text-center text-white mt-7'>Our talented designers craft pixel-perfect websites that enhance your brand&apos;s digital footprint.</p>
            </div>

            {/* Buttons */}
            <div className='flex flex-col justify-center self-center gap-3 z-20 mt-14 xs:flex-row'>
              <Link href='/about'>
                <button className='border border-yellow-500 bg-yellow-500 font-bold w-[155px] py-3 hover:bg-white hover:border-white duration-200'>LEARN MORE</button>
              </Link>
              <Link href='/contact'>
                <button className='border border-yellow-500 text-white font-semibold w-[155px] py-3 hover:bg-white hover:text-black hover:border-white duration-200 '>Get in Touch</button>
              </Link>
            </div>
          </div>




          {/* Rest of content container */}
          <div className='flex flex-col self-center gap-52 px-4 py-52 max-w-screen-2xl'>

            {/* About section */}
            <div className='flex flex-col justify-between mx-auto gap-12 lg:flex-row 2xl:px-0'>
              <div className='self-center max-w-[550px] lg:max-w-[650px] lg:h-[530px] lg:w-1/2'>
                <Image
                  src='/about3.png'
                  alt=''
                  width={1920}
                  height={1920}
                  priority={true}
                  className='self-center object-cover w-auto h-full max-h-[420px] rounded-3xl lg:max-h-full'
                />
              </div>
              <div className='flex flex-col self-center max-w-[550px] lg:w-1/2 lg:max-w-none'>
                <div className='font-semibold tracking-wider'>ABOUT US</div>
                <div className='text-[33px] font-bold xl:text-[45px]'>Your Company Name</div>
                <p className='text-neutral-600 mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
                <p className='text-neutral-600 mt-5'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.</p>
                <Link href='/about'>
                  <button className='border-2 border-yellow-500 bg-yellow-500 font-bold w-[175px] mt-9 py-2.5 hover:bg-white hover:border-yellow-500 duration-200'>MORE ABOUT US</button>
                </Link>
              </div>
            </div>

            {/* Detail about a service */}
            <div className='flex flex-col-reverse justify-center mx-auto gap-12 lg:flex-row 2xl:px-0 xl:gap-20'>
              <div className='flex flex-col self-center max-w-[550px] lg:w-1/2 lg:max-w-none'>
                <div className='font-semibold tracking-wider'>SEO RANKING</div>
                <div className='text-[33px] font-bold xl:text-[45px]'>Main Service Keyword</div>
                <p className='text-neutral-600 mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
                <p className='text-neutral-600 mt-5'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.</p>
                <Link href='/about'>
                  <button className='border-2 border-yellow-500 bg-yellow-500 font-bold w-[175px] mt-9 py-2.5 hover:bg-white hover:border-yellow-500 duration-200'>MORE SERVICES</button>
                </Link>
              </div>
              <div className='self-center max-w-[550px] h-full lg:max-w-[650px] lg:h-[530px] lg:w-1/2'>
                <Image
                  src='/home-about.jpg'
                  alt=''
                  width={1920}
                  height={1920}
                  priority={true}
                  className='self-center object-cover w-auto h-full max-h-[420px] rounded-3xl shadow-xl lg:max-h-full'
                />
              </div>
            </div>

            {/* Reviews */}

          </div>
      </main>
      <Footer />
    </>
  );
}
