import Image from 'next/image';
import articles from '@/artigos/artigo1.json';
import { Button } from './ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from './ui/carousel';

const Hero = () => {
  return (
    <Carousel>
      <CarouselContent>
        {articles.map((article) => (
          <CarouselItem key={article.id}>
            <div className='flex h-4/5 mt-14'>
              <div className='w-full bg-[#FFFAFA] flex flex-col justify-center items-center'>
                <div className='text-start space-y-8 px-8'>
                  <h1 className='text-5xl font-bold mb-4'>
                    {article.title}
                  </h1>
                  <p className='text-xl w-3/4 text-gray-800'>
                    {article.description}
                  </p>
                  <Button
                    size={'hero'}
                    className='flex justify-center'
                  >
                    {article.title}
                  </Button>
                </div>
              </div>
              <div className='w-full relative'>
                <div className='absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-90 opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center'>
                  <div className='text-white text-center'>
                    <h2 className='text-2xl font-semibold mb-2'>
                      {article.title}
                    </h2>
                    <p className='text-lg'>
                      {article.description}
                    </p>
                  </div>
                </div>
                <Image
                  className='h-full w-full object-cover'
                  src={article.image}
                  alt='Hero Image'
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Hero;
