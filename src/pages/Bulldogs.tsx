import { Heart, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { bulldogs } from '@/data/bulldogs';
import { additionalBulldogs } from '@/data/additionalBulldogs';
import { moreBulldogs } from '@/data/moreBulldogs';

const Bulldogs = () => {
  // Combine all bulldog data from different files
  const allBulldogs = [...bulldogs, ...additionalBulldogs, ...moreBulldogs];

  // Filter to show only available bulldogs
  const availableBulldogs = allBulldogs.filter(bulldog => bulldog.available);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-warm-gold/20 rounded-full text-primary font-medium text-sm mb-6">
            <Heart className="h-4 w-4 mr-2 text-warm-gold" />
            Available Now
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Meet Our Bulldogs
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Each of our puppies is raised with love and care, ready to become a cherished 
            member of your family. All health tested and vaccinated.
          </p>
        </div>
      </section>

      {/* Bulldogs Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {availableBulldogs.map((bulldog) => (
              <Card key={bulldog.id} className="group hover:shadow-warm transition-all duration-300 border-border/50 bg-gradient-card">
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={bulldog.image}
                      alt={bulldog.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Availability Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge 
                        variant="default"
                        className="bg-sage text-white"
                      >
                        {bulldog.location}
                      </Badge>
                    </div>

                    {/* Heart Icon */}
                    <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                      <Heart className="h-4 w-4 text-muted-foreground hover:text-primary" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    {/* Name and Price */}
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-serif text-xl font-semibold text-foreground">
                          {bulldog.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {bulldog.gender} • {bulldog.color}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg text-primary">
                          {bulldog.price}
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {bulldog.age}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        Ready Now
                      </div>
                    </div>

                    {/* Traits */}
                    <div className="flex flex-wrap gap-2">
                      {bulldog.traits.map((trait) => (
                        <Badge 
                          key={trait} 
                          variant="secondary" 
                          className="text-xs bg-accent/50"
                        >
                          {trait}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Button */}
                    <a href={`/puppy/${bulldog.id}`} className="block">
                      <Button 
                        className="w-full shadow-gentle" 
                        variant="default"
                      >
                        View Profile
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
            Can't Find Your Perfect Match?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join our waiting list to be notified when new litters are available.
            We'll help you find your perfect bulldog companion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-warm bg-gradient-warm hover:bg-gradient-warm/90">
              Join Waiting List
            </Button>
            <Button variant="secondary" size="lg" className="shadow-gentle">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Bulldogs;
