'use client';
import Image from 'next/image';
import articles from '@/artigos/artigo1.json';
import { Button } from './ui/button';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from './ui/carousel';
import { useRef } from 'react';
const Hero = () => {
  const plugin = useRef(
    Autoplay({
      delay: 3500,
      stopOnInteraction: true,
    })
  );
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[plugin.current]}
    >
      <CarouselContent>
        {articles.map((article) => (
          <CarouselItem key={article.id}>
            <div className='flex h-screen mt-14'>
              <div className='w-1/2 bg-[#FFFAFA] flex flex-col justify-center items-center'>
                <div className='text-start space-y-4 px-4'>
                  <h1 className='text-4xl font-bold mb-2'>
                    {article.title}
                  </h1>
                  <p className='text-lg text-gray-800'>
                    {article.description}
                  </p>
                  <Button size='hero'>
                    {article.title}
                  </Button>
                </div>
              </div>
              <div className='w-1/2 relative'>
                <div className='absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-90 opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center'>
                  <div className='text-white text-center'>
                    <h2 className='text-xl font-semibold mb-2'>
                      {article.title}
                    </h2>
                    <p className='text-base'>
                      {article.description}
                    </p>
                  </div>
                </div>
                <Image
                  className='h-full w-full object-cover'
                  src={article.image}
                  alt='Hero Image'
                  layout='fill'
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
