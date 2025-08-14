import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import { Testimonial } from '../components/Testimonial';
import { Events } from '../components/Events';
import CTA from '../components/cta';
import { Teams } from '../components/Teams';
import Feature from '../components/Features';
export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      {/* <Feature/> */}
      <Events/>
      <Teams/>
      <CTA/>
      <Testimonial/>
    </div>
  );
}