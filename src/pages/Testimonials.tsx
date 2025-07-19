import { Star, Heart, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jennifer Miller",
      location: "Austin, TX",
      bulldog: "Max",
      rating: 5,
      text: "BullDog Daily made our dream of owning a bulldog come true! Max is the sweetest, healthiest puppy we could have asked for. The team was incredibly supportive throughout the entire process, from selection to pickup. They truly care about their dogs and the families they go to.",
      date: "2 months ago"
    },
    {
      name: "Robert & Lisa Chen",
      location: "Seattle, WA",
      bulldog: "Bella",
      rating: 5,
      text: "We couldn't be happier with our experience. Bella arrived healthy, well-socialized, and ready to be part of our family. The health guarantee and ongoing support have been invaluable. Sarah and her team are true professionals who love what they do.",
      date: "4 months ago"
    },
    {
      name: "David Thompson",
      location: "Denver, CO",
      bulldog: "Bruno",
      rating: 5,
      text: "After researching many breeders, BullDog Daily stood out for their ethical practices and transparency. Bruno is everything they promised - healthy, playful, and perfectly socialized. The delivery process was smooth and stress-free.",
      date: "6 months ago"
    },
    {
      name: "Maria Rodriguez",
      location: "Miami, FL",
      bulldog: "Rosie",
      rating: 5,
      text: "As first-time bulldog owners, we had many questions. The team at BullDog Daily was patient, knowledgeable, and always available to help. Rosie is the perfect addition to our family, and we know we can count on their continued support.",
      date: "3 months ago"
    },
    {
      name: "Michael & Sarah Johnson",
      location: "Chicago, IL",
      bulldog: "Duke",
      rating: 5,
      text: "Duke has brought so much joy to our family. The breeding program at BullDog Daily is exceptional - you can see the love and care that goes into raising these puppies. We've recommended them to all our friends who are interested in bulldogs.",
      date: "8 months ago"
    },
    {
      name: "Amanda Wilson",
      location: "Phoenix, AZ",
      bulldog: "Stella",
      rating: 5,
      text: "Stella is absolutely perfect! She's healthy, well-tempered, and has the sweetest personality. The team kept us updated throughout the process with photos and videos. The experience exceeded all our expectations.",
      date: "5 months ago"
    },
    {
      name: "James & Kelly Brown",
      location: "Nashville, TN",
      bulldog: "Winston",
      rating: 5,
      text: "We've had Winston for almost a year now, and he continues to amaze us every day. The socialization work done by BullDog Daily really shows - he's confident, friendly, and well-adjusted. Their lifetime support promise is real and invaluable.",
      date: "11 months ago"
    },
    {
      name: "Carlos Mendez",
      location: "Las Vegas, NV",
      bulldog: "Luna",
      rating: 5,
      text: "Luna is everything we hoped for in a bulldog. The health testing and care provided by BullDog Daily gave us complete confidence in our choice. The pickup experience was wonderful - you can tell they truly care about their dogs and customers.",
      date: "7 months ago"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-warm-gold fill-current' : 'text-muted-foreground'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-warm-gold/20 rounded-full text-primary font-medium text-sm mb-6">
            <Heart className="h-4 w-4 mr-2 text-warm-gold" />
            Happy Families
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Customer Testimonials
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Read what our customers have to say about their experience with BullDog Daily 
            and their beloved bulldog companions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-serif text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-3xl font-bold text-primary mb-2">250+</div>
              <div className="text-sm text-muted-foreground">5-Star Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-gentle hover:shadow-warm transition-shadow duration-300 relative">
                <CardContent className="p-8">
                  <div className="absolute top-4 right-4 text-primary/20">
                    <Quote className="h-8 w-8" />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    <div className="text-sm text-primary font-medium">Bulldog: {testimonial.bulldog}</div>
                    <div className="text-xs text-muted-foreground mt-2">{testimonial.date}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Testimonial Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
            Share Your Experience
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We'd love to hear about your journey with your BullDog Daily puppy! 
            Your story helps other families make the right choice.
          </p>
          <Button size="lg" className="shadow-warm bg-gradient-warm hover:bg-gradient-warm/90">
            Submit Your Testimonial
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
            Ready to Start Your Bulldog Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of happy families who found their perfect bulldog companion with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-warm bg-gradient-warm hover:bg-gradient-warm/90">
              View Available Bulldogs
            </Button>
            <Button variant="secondary" size="lg" className="shadow-gentle">
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;