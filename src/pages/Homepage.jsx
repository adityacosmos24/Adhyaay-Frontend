import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import { Testimonial } from '../components/Testimonial';
import { Events } from '../components/Events';
import CTA from '../components/cta';
import Feature from '../components/Features';
import { SmoothCursor } from '../components/ui/smooth-cursor';
import Teams from '../components/Teams';
export default function Home() {
  return (
    <div>
    
      <HeroSection />
      <div id="aboutus">
        <AboutUs />
      </div>
      
      
      <Events/>
      <div id="teams">
        <Teams/>
      </div>
      <Testimonial />
      <CTA/>
    </div>
  );
}