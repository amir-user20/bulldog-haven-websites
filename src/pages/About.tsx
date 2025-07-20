import { Shield, Heart, Award, Users, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Ethical Breeding",
      description: "We follow the highest standards of ethical breeding practices, ensuring the health and wellbeing of all our bulldogs."
    },
    {
      icon: Heart,
      title: "Lifetime Support",
      description: "Our commitment doesn't end at adoption. We provide ongoing support and guidance throughout your bulldog's life."
    },
    {
      icon: Award,
      title: "Health Guarantee",
      description: "Every puppy comes with comprehensive health guarantees and full vaccination records."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our experienced team of breeders and veterinarians ensure the best care for every dog."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Lead Breeder & Owner",
      experience: "15+ years",
      description: "Sarah founded BullDog Daily with a passion for connecting families with healthy, well-socialized bulldogs."
    },
    {
      name: "Dr. Michael Chen",
      role: "Veterinary Consultant",
      experience: "12+ years",
      description: "Dr. Chen ensures all our bulldogs receive the best medical care and health screenings."
    },
    {
      name: "Emma Davis",
      role: "Puppy Care Specialist",
      experience: "8+ years",
      description: "Emma oversees the early socialization and training of all our puppies."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-warm-gold/20 rounded-full text-primary font-medium text-sm mb-6">
            <Heart className="h-4 w-4 mr-2 text-warm-gold" />
            Our Story
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-6">
            About BullDog Daily
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            For over 10 years, we've been dedicated to connecting loving families with healthy, 
            well-socialized English Bulldog puppies. Our commitment to ethical breeding and 
            exceptional care sets us apart.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                At BullDog Daily, we believe every family deserves a healthy, happy bulldog companion. 
                Our mission is to raise exceptional English Bulldogs through ethical breeding practices, 
                comprehensive health testing, and early socialization.
              </p>
              <p className="text-muted-foreground mb-8">
                We're not just breeders – we're bulldog enthusiasts who understand the unique needs 
                of this wonderful breed. Every puppy that leaves our care is a testament to our 
                commitment to excellence.
              </p>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  10+ Years Experience
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-2" />
                  Nationwide Delivery
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-card rounded-lg shadow-gentle">
                <div className="font-serif text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Happy Families</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg shadow-gentle">
                <div className="font-serif text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Health Guarantee</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg shadow-gentle">
                <div className="font-serif text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg shadow-gentle">
                <div className="font-serif text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do, from breeding practices to customer service.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-gentle hover:shadow-warm transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our passionate team of experts ensures every bulldog receives the best care possible.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center shadow-gentle hover:shadow-warm transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-warm rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <div className="text-primary font-medium mb-2">{member.role}</div>
                  <div className="text-sm text-muted-foreground mb-4">{member.experience}</div>
                  <p className="text-muted-foreground">{member.description}</p>
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
            Ready to Find Your Perfect Bulldog?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Browse our available bulldogs or get in touch to learn more about our breeding program.
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
      <Footer />
    </div>
  );
};

export default About;