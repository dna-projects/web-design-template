import Navbar from '../components/Navbar'
import ServiceCardBanner from '../components/ServiceCardBanner'
import PrimaryButton from '../components/buttons/PrimaryButton'
import PrimaryButtonBorderless from '../components/buttons/PrimaryButtonBorderless'
import SecondaryButton from '../components/buttons/SecondaryButton'
import LayeredImages from '../components/LayeredImages'
import Carousel from '../components/Carousel'
import ReviewCard from '../components/ReviewCard'
import ContactBanner from '../components/ContactBanner'
import Footer from '../components/Footer'

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {

  // Images for gallery carousel
  const images = [
    '/gallery-1.jpg',
    '/gallery-2.jpg',
    '/gallery-3.jpg',
    '/gallery-4.jpg',
    '/gallery-5.jpg',
    '/gallery-6.jpg',
  ];

  return (
    <>
      <Navbar />
      <main className='flex flex-col text-[#161616]'>




          {/* Hero container */}
          <div
            className='hero-image flex flex-col justify-center relative h-screen min-h-[900px]'
            style={{
              height: 'calc(100vh + 254px)',
            }}
          >
            <div className='flex justify-center absolute bg-black opacity-65 w-full h-full'></div>

            {/* Content */}
            <div className='flex flex-col self-center items-center z-20 px-7 xs:px-16 lg:px-5'>
              <div className='text-center text-primary font-bold tracking-wider'>ELEVATE YOUR BUSINESS</div>
              <h1 className='text-center text-[32px] text-white font-extrabold leading-tight tracking-tighter max-w-[600px] mt-7 md:text-[45px]'>Unlock your Online Potential with Stunning Websites</h1>
              <p className='text-center text-white mt-7'>Our talented designers craft pixel-perfect websites that enhance your brand&apos;s digital footprint.</p>
            </div>

            {/* Buttons */}
            <div className='flex flex-col justify-center self-center gap-3 z-20 mt-14 pb-64 xs:flex-row'>
              <PrimaryButtonBorderless href={'/about'} label={'LEARN MORE'} />
              <Link href='/contact'>
                <button className='border border-primary text-white font-semibold w-[170px] py-3 hover:bg-white hover:text-black hover:border-white duration-200'>Get in Touch</button>
              </Link>
            </div>
          </div>




          {/* Service cards container */}
          <div className='flex flex-col self-center px-4 py-16 max-w-screen-xl z-20 -mt-[230px] lg:-mt-[300px] lg:pt-36 lg:pb-0'>
            <div className='flex flex-col self-center gap-8 max-w-xl lg:flex-row lg:max-w-full'>
              <ServiceCardBanner
                icon={'/service-1-icon.svg'}
                  title={'Service 1'}
                  content={'1-2 sentences about the service with keywords people will be searching for.'}
              />
              <ServiceCardBanner
                icon={'/service-2-icon.svg'}
                title={'Service 2'}
                content={'1-2 sentences about the service with keywords people will be searching for.'}
              />
              <ServiceCardBanner
                icon={'/service-3-icon.svg'}
                title={'Service 3'}
                content={'1-2 sentences about the service with keywords people will be searching for.'}
              />
            </div>
          </div>




          {/* Rest of content container - first half */}
          <div className='flex flex-col self-center gap-32 px-4 py-16 max-w-screen-xl lg:gap-36 lg:py-36'>

            {/* About section */}
            <div className='flex flex-col mx-auto gap-12 lg:flex-row 2xl:px-0 xl:gap-[70px]'>
              <div className='self-center max-w-[550px] lg:max-w-[650px] lg:h-[530px] lg:w-[60%]'>
                <Image
                  src='/about6.png'
                  alt='Example web design images on various devices.'
                  width={818}
                  height={529}
                  className='self-center object-contain w-full h-full max-h-[420px] rounded-3xl lg:max-h-full'
                />
              </div>
              <div className='flex flex-col self-center max-w-[550px] lg:w-1/2 lg:max-w-none'>
                <div className='font-semibold tracking-wider'>ABOUT US</div>
                <h2 className='text-[33px] font-extrabold mb-5 xl:text-[45px]'>Company Name</h2>
                <p className='text-neutral-600 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.</p>
                <p className='text-neutral-600 mb-9'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.</p>
                <div className='self-start'>
                  <PrimaryButton href={'/about'} label={'LEARN MORE'} />
                </div>
              </div>
            </div>

            {/* Detail about a service */}
            <div className='flex flex-col-reverse mx-auto gap-12 lg:flex-row 2xl:px-0 xl:gap-[70px]'>
              <div className='flex flex-col self-center max-w-[550px] lg:w-1/2 lg:max-w-none'>
                <div className='font-semibold tracking-wider'>SEO RANKING</div>
                <h2 className='text-[33px] font-extrabold mb-5 xl:text-[45px]'>Main Service Keyword</h2>
                <p className='text-neutral-600 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
                <p className='text-neutral-600 mb-9'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.</p>
                <div className='self-start'>
                  <PrimaryButton href={'/services'} label={'OUR SERVICES'} />
                </div>
              </div>
              <LayeredImages />
            </div>
          </div>




          {/* Gallery container */}
          <div className='flex flex-col self-center text-center w-full bg-gradient-to-r from-[#F9FDFF] via-[#BCD6E4] to-[#6B7E8F] px-4 pt-16 pb-16 md:px-10 lg:pt-20 lg:pb-20'>
            <div className='font-semibold tracking-wider mb-2'>OUR PORTFOLIO</div>
            <h2 className='self-center text-[33px] font-extrabold max-w-[400px] leading-tight mb-16 lg:mb-20 xl:text-[45px] xl:max-w-[500px]'>Innovative Solutions in Every Project</h2>
            <Carousel images={images} />
            <div className='mt-6 lg:mt-12'>
              <SecondaryButton href={'/gallery'} label={'FULL GALLERY'} />
            </div>
          </div>




          {/* Rest of content container - second half */}
          <div className='flex flex-col self-center px-4 py-16 max-w-screen-xl lg:py-36'>

            {/* Reviews container */}
            <div className='flex flex-col self-center text-center'>
              <div className='font-semibold tracking-wider mb-2'>OUR REVIEWS</div>
              <h2 className='self-center text-[33px] font-extrabold leading-tight mb-16 lg:mb-20 xl:text-[45px]'>What Our Customers Have to Say</h2>

              {/* Cards */}
              <div className='flex flex-col self-center gap-8 max-w-xl lg:flex-row lg:max-w-full lg:gap-4'>
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

          {/* Contact banner container */}
          <ContactBanner />

      </main>

      <Footer />

    </>
  );
}
