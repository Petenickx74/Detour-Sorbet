import CustomCursor from '../components/home/CustomCursor';
import FindUsSection from '../components/home/FindUsSection';
import FlavorsSection from '../components/home/FlavorsSection';
import Footer from '../components/home/Footer';
import HeroSection from '../components/home/HeroSection';
import HomeNav from '../components/home/HomeNav';
import AboutSection from '../components/home/AboutSection';
import { useFadeInObserver } from '../hooks/useFadeInObserver';

export default function HomePage() {
  useFadeInObserver('.fade-in', {
    threshold: 0.12,
    staggerSelector: '.flavors-grid, .testimonials-grid, .locations-grid, .process-steps',
  });

  return (
    <>
      <CustomCursor />
      <HomeNav />
      <HeroSection />
      <AboutSection />
      <FlavorsSection />
      <FindUsSection />
      <Footer />
    </>
  );
}
