'use client';
import React, {
  useState,
  useEffect,
  useRef,
} from 'react';
import Card from './card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '../ui/carousel';

const ITEMS = Array.from(
  { length: 8 },
  (_, index) => ({ name: `Item ${index + 1}` })
);

const CardContainer: React.FC = () => {
  const [cards, setCards] =
    useState<typeof ITEMS>(ITEMS);
  const containerRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initialCards = [...ITEMS, ...ITEMS]; // Duplicate items to create an infinite loop
    setCards(initialCards); // Set initial cards state

    let scrollAmount = 0;
    const scrollSpeed = 0.3;

    const scroll = () => {
      if (containerRef.current) {
        containerRef.current.scrollLeft =
          scrollAmount;
        scrollAmount += scrollSpeed;

        // If scrolled to the end, reset scroll amount to create an infinite loop
        if (
          scrollAmount >=
          containerRef.current.scrollWidth / 2
        ) {
          scrollAmount = 0;
        }
      }
      requestAnimationFrame(scroll);
    };

    const requestId =
      requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(requestId);
  }, []);

  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <div
            ref={containerRef}
            className='overflow-x-auto w-full hide-scrollbar'
          >
            <div className='flex'>
              {cards.map((item, index) => (
                <Card
                  key={index}
                  item={item}
                />
              ))}
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default CardContainer;
