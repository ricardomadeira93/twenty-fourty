import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import image from '@/app/assets/image1.jpg';

const Hero = () => {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <div className='flex h-screen'>
            <div className='w-full bg-gray-200 flex flex-col justify-center items-center'>
              <div className='text-center px-8'>
                <h1 className='text-4xl font-bold mb-4'>
                  Meet HeroMan 1!
                </h1>
                <p className='text-lg text-gray-800'>
                  A courageous defender of
                  justice, fighting villains and
                  saving the world!
                </p>
              </div>
            </div>
            <div className='w-full relative'>
              <div className='h-full p-24 block relative'>
                <div className='h-full w-full'>
                  <a
                    href='#'
                    className='h-full w-full block relative'
                  >
                    <Image
                      src={image}
                      alt='Hero Image 1'
                      className='h-full w-full object-cover'
                    />
                    <div className='absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-90 opacity-0 hover:opacity-100 transition-opacity duration-300'>
                      <div className='flex items-center justify-center h-full'>
                        <div className='text-white text-center'>
                          <h2 className='text-2xl font-bold mb-2'>
                            Hero Information
                          </h2>
                          <p className='text-lg'>
                            This is some
                            information about our
                            hero.
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className='flex h-screen'>
            <div className='w-full bg-gray-200 flex flex-col justify-center items-center'>
              <div className='text-center px-8'>
                <h1 className='text-4xl font-bold mb-4'>
                  Meet HeroMan 2!
                </h1>
                <p className='text-lg text-gray-800'>
                  A courageous defender of
                  justice, fighting villains and
                  saving the world!
                </p>
              </div>
            </div>
            <div className='w-full relative'>
              <div className='h-full p-24 block relative'>
                <div className='h-full w-full'>
                  <a
                    href='#'
                    className='h-full w-full block relative'
                  >
                    <Image
                      src={image}
                      alt='Hero Image 2'
                      className='h-full w-full object-cover'
                    />
                    <div className='absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-90 opacity-0 hover:opacity-100 transition-opacity duration-300'>
                      <div className='flex items-center justify-center h-full'>
                        <div className='text-white text-center'>
                          <h2 className='text-2xl font-bold mb-2'>
                            Hero Information
                          </h2>
                          <p className='text-lg'>
                            This is some
                            information about our
                            hero.
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className='flex h-screen'>
            <div className='w-full bg-gray-200 flex flex-col justify-center items-center'>
              <div className='text-center px-8'>
                <h1 className='text-4xl font-bold mb-4'>
                  Meet HeroMan 3!
                </h1>
                <p className='text-lg text-gray-800'>
                  A courageous defender of
                  justice, fighting villains and
                  saving the world!
                </p>
              </div>
            </div>
            <div className='w-full relative'>
              <div className='h-full p-24 block relative'>
                <div className='h-full w-full'>
                  <a
                    href='#'
                    className='h-full w-full block relative'
                  >
                    <Image
                      src={image}
                      alt='Hero Image 3'
                      className='h-full w-full object-cover'
                    />
                    <div className='absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-90 opacity-0 hover:opacity-100 transition-opacity duration-300'>
                      <div className='flex items-center justify-center h-full'>
                        <div className='text-white text-center'>
                          <h2 className='text-2xl font-bold mb-2'>
                            Hero Information
                          </h2>
                          <p className='text-lg'>
                            This is some
                            information about our
                            hero.
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className='left-4' />
      <CarouselNext className='right-4' />
    </Carousel>
  );
};

export default Hero;
