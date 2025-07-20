import { Heart, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';
import { bulldogs as allBulldogs } from '@/data/bulldogs';
import { setupRotation, getRandomBulldogs } from '@/utils/featuredDogs';

const FeaturedBulldogs = () => {
  const [featuredBulldogs, setFeaturedBulldogs] = useState(() => getRandomBulldogs(allBulldogs, 3));
  
  // Set up rotation of featured bulldogs
  useEffect(() => {
    return setupRotation(allBulldogs, setFeaturedBulldogs, 3, 30);
  }, []);

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
            member of your family. All health tested and vaccinated. Our featured bulldogs 
            rotate every 30 minutes to showcase more of our adorable puppies.
          </p>
        </div>

        {/* Bulldogs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredBulldogs.map((bulldog) => (
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
                      {bulldog.available ? 'Available' : 'Reserved'}
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
                      {bulldog.available ? 'Available Now' : 'Reserved'}
                    </div>
                  </div>

                  {/* Traits */}
                  <div className="flex flex-wrap gap-2">
                    {bulldog.traits.slice(0, 3).map((trait) => (
                      <Badge 
                        key={trait} 
                        variant="secondary"
                        className="bg-muted/50 text-foreground/80"
                      >
                        {trait}
                      </Badge>
                    ))}
                  </div>

                  {/* View Profile Button */}
                  <div className="pt-2">
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      asChild
                    >
                      <a href={`/puppy/${bulldog.id}`}>
                        View Profile <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" asChild>
            <a href="/bulldogs">
              View All Bulldogs <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBulldogs;
