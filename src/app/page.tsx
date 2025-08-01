import {
  Hero,
  HotDeals,
  Brand,
  Products,
  BestSelling,
} from '@/components/home';

export default function Home() {
  return (
    <div>
      <Hero />
      <HotDeals />
      <Brand />
      <BestSelling />
      <Products />
    </div>
  );
}
