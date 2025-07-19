import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import FeaturedBulldogs from '@/components/FeaturedBulldogs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <WhyChooseUs />
      <FeaturedBulldogs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
