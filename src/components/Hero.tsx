import { ArrowRight, Star, Shield, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bulldog.jpg';

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero py-20 lg:py-32 overflow-hidden" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-warm-gold/20 rounded-full text-primary font-medium text-sm">
                <Star className="h-4 w-4 mr-2 text-warm-gold" />
                Premium English Bulldogs
              </div>
              
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Find Your New
                <span className="text-primary block">Best Friend</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Welcome to BullDog Daily, where we've been connecting loving families with 
                healthy, well-socialized English Bulldog puppies for over 10 years. 
                Our ethical breeding practices ensure you get a lifelong companion.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-primary mr-2" />
                Health Guaranteed
              </div>
              <div className="flex items-center">
                <Heart className="h-5 w-5 text-primary mr-2" />
                Lifetime Support
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="shadow-warm bg-gradient-warm hover:bg-gradient-warm/90 text-primary-foreground">
                View Available Bulldogs
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button variant="secondary" size="lg" className="shadow-gentle">
                Learn About Our Process
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="font-serif text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Families</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Health Guarantee</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Adorable English Bulldog puppy"
                className="w-full h-auto rounded-2xl shadow-warm"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-warm-gold/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-soft-blue/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;