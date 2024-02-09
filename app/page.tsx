import HeroSection from '@/components/hero';
import ItemCarousel from '@/components/item-carousel';

export default function Home() {
  return (
    <main className='w-full'>
      <HeroSection />
      <ItemCarousel/>
    </main>
  );
}
