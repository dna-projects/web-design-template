import Navbar from '../components/Navbar'
import LayeredImages from '../components/LayeredImages'
import Carousel from '../components/Carousel'
import ReviewCard from '../components/ReviewCard'
import Footer from '../components/Footer'

import Link from 'next/link';
import Image from "next/image";

export default function Home() {

  // Images for gallery carousel
  const images = [
    '/gallery-1.png',
    '/gallery-2.jpg',
    '/gallery-3.jpg',
    '/gallery-4.jpg',
    '/gallery-5.jpg',
  ];

  return (
    <>
      <Navbar />
      <main className='flex flex-col text-[#161616]'>




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
                <button className='border border-yellow-500 text-white font-semibold w-[155px] py-3 hover:bg-white hover:text-black hover:border-white duration-200'>Get in Touch</button>
              </Link>
            </div>
          </div>




          {/* Rest of content container - first half */}
          <div className='flex flex-col self-center gap-32 px-4 py-32 max-w-screen-xl lg:gap-44 lg:py-44'>

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
                <div className='text-[33px] font-bold xl:text-[45px]'>Company Name</div>
                <p className='text-neutral-600 mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
                <p className='text-neutral-600 mt-5'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.</p>
                <Link href='/about' className='w-[175px]'>
                  <button className='border-2 border-yellow-500 bg-yellow-500 font-bold w-full mt-9 py-3 hover:bg-white hover:border-yellow-500 duration-200'>MORE ABOUT US</button>
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
                <Link href='/about' className='w-[175px]'>
                  <button className='border-2 border-yellow-500 bg-yellow-500 font-bold w-full mt-9 py-3 hover:bg-white hover:border-yellow-500 duration-200'>MORE SERVICES</button>
                </Link>
              </div>
              {/* <div className='self-center max-w-[550px] h-full lg:max-w-[650px] lg:h-[530px] lg:w-1/2'>
                <Image
                  src='/home-service-bottom.jpg'
                  alt=''
                  width={1920}
                  height={1920}
                  priority={true}
                  className='self-center object-cover w-auto h-full max-h-[420px] rounded-3xl shadow-xl lg:max-h-full'
                />
              </div> */}
              <LayeredImages />
            </div>
          </div>




          {/* Gallery container */}
          {/* <div className='flex flex-col self-center text-center w-screen bg-gradient-to-r from-[#F4FAFF] via-[#E5E8F2] to-[#EFE5F2] px-4 pt-16 pb-16 md:px-10 lg:pt-24 lg:pb-24'> */}
          {/* <div className='flex flex-col self-center text-center w-screen bg-gradient-to-r from-[#F4FAFF] via-[#E4EAF5] to-[#D0D7EF] px-4 pt-16 pb-16 md:px-10 lg:pt-24 lg:pb-24'> */}
          {/* <div className='flex flex-col self-center text-center w-screen bg-gradient-to-r from-[#F1F8FF] via-[#DBE7F4] to-[#8B9AB9] px-4 pt-16 pb-16 md:px-10 lg:pt-24 lg:pb-24'> */}
          <div className='flex flex-col self-center text-center w-screen bg-gradient-to-r from-[#F9FDFF] via-[#BCD6E4] to-[#6B7E8F] px-4 pt-16 pb-16 md:px-10 lg:pt-24 lg:pb-24'>
            <div className='font-semibold tracking-wider'>OUR PORTFOLIO</div>
            <div className='self-center text-[33px] font-bold mt-2 mb-16 max-w-[400px] leading-tight lg:mb-20 xl:text-[45px] xl:max-w-[500px]'>Innovative Solutions in Every Project</div>
            <Carousel images={images} />
            <Link href='/gallery' className='self-center w-[175px]'>
              <button className='border-2 border-[#161616] bg-[#161616] text-white font-semibold w-full mt-6 py-3 hover:bg-transparent hover:text-[#161616] duration-200 lg:mt-12'>FULL GALLERY</button>
            </Link>
          </div>




          {/* Rest of content container - second half */}
          <div className='flex flex-col self-center gap-32 px-4 py-32 max-w-screen-xl lg:gap-44 lg:py-44'>

            {/* Reviews container */}
            <div className='flex flex-col self-center text-center'>
              <div className='font-semibold tracking-wider'>OUR REVIEWS</div>
              <div className='self-center text-[33px] font-bold mt-2 mb-16 leading-tight lg:mb-20 xl:text-[45px]'>What Our Customers Have to Say</div>

              {/* Cards */}
              <div className='flex flex-col self-center gap-4 max-w-xl lg:flex-row lg:max-w-full'>
                <ReviewCard
                  name={'John D.'}
                  quote={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
                  stars={5}
                />
                <ReviewCard
                  name={'Jane D.'}
                  quote={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
                  stars={5}
                />
              </div>
            </div>

          </div>
      </main>
      <Footer />
    </>
  );
}
