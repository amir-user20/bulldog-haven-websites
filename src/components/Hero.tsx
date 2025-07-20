import { ArrowRight, Star, Shield, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bulldog.jpg';

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero overflow-hidden" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-warm-gold/20 rounded-full text-primary font-medium text-sm">
                <Star className="h-4 w-4 mr-2 text-warm-gold" />
                Premium English Bulldogs
              </div>
              
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                Find Your New
                <span className="text-primary block">Best Friend</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
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
              <a href="/bulldogs" className="block">
                <Button size="lg" className="shadow-warm bg-gradient-warm hover:bg-gradient-warm/90 text-primary-foreground">
                  View Available Bulldogs
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </a>
              <a href="/breed-info">
                <Button variant="secondary" size="lg" className="shadow-gentle">
                  Learn About Our Process
                </Button>
              </a>
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

      {/* Stats Section - Positioned below both columns */}
      <div className="mt-12 bg-muted/30 py-12 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-lg shadow-gentle hover:shadow-warm transition-shadow duration-300">
              <div className="font-serif text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Happy Families</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-gentle hover:shadow-warm transition-shadow duration-300">
              <div className="font-serif text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-gentle hover:shadow-warm transition-shadow duration-300">
              <div className="font-serif text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Health Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;