import HeroSection from '@/components/hero';
import CardContainer from '@/components/slider/cardContainer';

export default function Home() {
  return (
    <main className='w-full flex-col'>
      <HeroSection />
      <CardContainer />
    </main>
  );
}
