import { Shield, Heart, Truck, Award, Users, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: 'Health Guarantee',
      description: 'Every puppy comes with a comprehensive health guarantee and veterinary documentation.',
      color: 'text-sage'
    },
    {
      icon: Heart,
      title: 'Ethical Breeding',
      description: 'We follow strict breeding standards, prioritizing the health and wellbeing of our dogs.',
      color: 'text-primary'
    },
    {
      icon: Users,
      title: 'Lifetime Support',
      description: 'Our relationship doesn\'t end at adoption. We provide ongoing support and guidance.',
      color: 'text-soft-blue'
    },
    {
      icon: Truck,
      title: 'Safe Delivery',
      description: 'Professional, climate-controlled transportation available nationwide.',
      color: 'text-warm-gold'
    },
    {
      icon: Award,
      title: '10+ Years Experience',
      description: 'Over a decade of experience breeding healthy, well-socialized English Bulldogs.',
      color: 'text-terracotta'
    },
    {
      icon: Clock,
      title: 'Early Socialization',
      description: 'All puppies are exposed to various sounds, people, and experiences from birth.',
      color: 'text-sage'
    }
  ];

  return (
    <section className="py-20 bg-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose BullDog Daily?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to connecting loving families with healthy, happy bulldogs 
            through ethical breeding practices and exceptional care.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-gentle transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm"
              >
                <CardContent className="p-8 text-center space-y-4">
                  
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-background rounded-2xl shadow-soft group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className={`h-8 w-8 ${feature.color}`} />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-warm rounded-full text-primary-foreground font-medium shadow-warm">
            <Heart className="h-5 w-5 mr-2" />
            Over 500 Happy Families and Counting
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;