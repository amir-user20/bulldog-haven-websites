import { Heart, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const FeaturedBulldogs = () => {
  const bulldogs = [
    {
      id: 1,
      name: 'Bruno',
      age: '8 weeks',
      gender: 'Male',
      color: 'Cream',
      price: '$2,500',
      location: 'Available',
      image: '/api/placeholder/400/400',
      traits: ['Playful', 'Gentle', 'Social'],
      available: true
    },
    {
      id: 2,
      name: 'Bella',
      age: '10 weeks',
      gender: 'Female',
      color: 'Brindle',
      price: '$2,800',
      location: 'Available',
      image: '/api/placeholder/400/400',
      traits: ['Calm', 'Loving', 'Smart'],
      available: true
    },
    {
      id: 3,
      name: 'Winston',
      age: '12 weeks',
      gender: 'Male',
      color: 'White & Brown',
      price: '$2,600',
      location: 'Reserved',
      image: '/api/placeholder/400/400',
      traits: ['Confident', 'Friendly', 'Active'],
      available: false
    }
  ];

  return (
    <section className="py-20 bg-background" id="bulldogs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Meet Our Available Bulldogs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each of our puppies is raised with love and care, ready to become a cherished 
            member of your family. All health tested and vaccinated.
          </p>
        </div>

        {/* Bulldogs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {bulldogs.map((bulldog) => (
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
                      variant={bulldog.available ? "default" : "secondary"}
                      className={bulldog.available ? "bg-sage text-white" : "bg-muted"}
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
                  <Button 
                    className="w-full shadow-gentle" 
                    variant={bulldog.available ? "default" : "secondary"}
                    disabled={!bulldog.available}
                  >
                    {bulldog.available ? 'View Profile' : 'Reserved'}
                    {bulldog.available && <ArrowRight className="h-4 w-4 ml-2" />}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="shadow-gentle">
            View All Available Bulldogs
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBulldogs;