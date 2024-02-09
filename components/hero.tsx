import Image from 'next/image';
import image from '@/app/assets/image1.jpg';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='flex h-screen'>
      <div className='w-full bg-gray-200 flex flex-col justify-center items-center'>
        <div className='text-center px-8'>
          <h1 className='text-4xl font-bold mb-4'>
            Meet HeroMan!
          </h1>
          <p className='text-lg text-gray-800'>
            A courageous defender of justice,
            fighting villains and saving the
            world!
          </p>
        </div>
      </div>
      <div className='w-full'>
        <span className='h-full p-24 block relative'>
          <div className='h-full'>
            <Image
              className='h-full w-full object-cover'
              src={image}
              alt='Hero Image'
            />
          </div>
          <div className='absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-90 opacity-0 hover:opacity-100 transition-opacity duration-300'>
            <div className='flex items-center justify-center h-full'>
              <div className='text-white text-center'>
                <h2 className='text-2xl font-bold mb-2'>
                  Hero Information
                </h2>
                <p className='text-lg'>
                  This is some information about
                  our hero.
                </p>
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Hero;
