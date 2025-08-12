import HeroSection from '../components/HeroSection';
import { Testimonial } from '../components/Testimonial';
import { Events } from '../components/Events';
import CTA from '../components/cta';
import { Teams } from '../components/teams';
import Feature from '../components/Features';
export default function Home() {
  return (
    <div>
      <HeroSection />
      <Feature/>
      <Events/>
      <Teams/>
      <CTA/>
      <Testimonial/>
    </div>
  );
}