import { Heart, Shield, Clock, Home, Utensils, Activity, Stethoscope, Brush } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const BreedInfo = () => {
  const characteristics = [
    { label: "Energy Level", value: "Low to Moderate", icon: Activity },
    { label: "Life Span", value: "8-12 years", icon: Clock },
    { label: "Weight", value: "40-50 lbs", icon: Shield },
    { label: "Grooming Needs", value: "Moderate", icon: Brush },
    { label: "Good with Kids", value: "Excellent", icon: Heart },
    { label: "Apartment Living", value: "Very Good", icon: Home }
  ];

  const healthTips = [
    {
      title: "Breathing & Temperature",
      description: "Monitor breathing during hot weather and avoid overexertion. Bulldogs are prone to overheating.",
      icon: Stethoscope
    },
    {
      title: "Weight Management",
      description: "Maintain a healthy weight to reduce stress on joints and improve overall health.",
      icon: Activity
    },
    {
      title: "Regular Vet Checkups",
      description: "Schedule regular veterinary visits to monitor for breed-specific health concerns.",
      icon: Shield
    },
    {
      title: "Skin Care",
      description: "Keep facial wrinkles clean and dry to prevent infections and skin irritation.",
      icon: Brush
    }
  ];

  const careGuide = [
    {
      category: "Daily Exercise",
      items: [
        "20-30 minutes of moderate exercise",
        "Short walks during cooler parts of the day",
        "Indoor play sessions",
        "Avoid strenuous activity in hot weather"
      ]
    },
    {
      category: "Grooming",
      items: [
        "Brush 2-3 times per week",
        "Clean facial wrinkles daily",
        "Trim nails every 2-3 weeks",
        "Brush teeth regularly"
      ]
    },
    {
      category: "Feeding",
      items: [
        "High-quality dog food appropriate for age",
        "2-3 meals per day for adults",
        "Monitor portion sizes carefully",
        "Fresh water always available"
      ]
    },
    {
      category: "Training",
      items: [
        "Start socialization early",
        "Use positive reinforcement",
        "Be patient and consistent",
        "Focus on basic obedience commands"
      ]
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
            Breed Information
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-6">
            English Bulldog Guide
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about English Bulldogs - from their gentle temperament 
            to their care requirements and what makes them such wonderful companions.
          </p>
        </div>
      </section>

      {/* Breed Overview */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">About English Bulldogs</h2>
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="lg:w-1/2">
                <div className="relative h-full">
                  <img 
                    src="/src/assets/hero-bulldog.jpg" 
                    alt="English Bulldog" 
                    className="w-full h-auto rounded-xl shadow-lg object-cover"
                  />
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-warm-gold/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-soft-blue/20 rounded-full blur-xl"></div>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-6">
                <p className="text-muted-foreground">
                  English Bulldogs are gentle, friendly, and loyal companions known for their distinctive 
                  appearance and calm temperament. Originally bred in England, these dogs have evolved from 
                  their aggressive bull-baiting origins into loving family pets.
                </p>
                <p className="text-muted-foreground">
                  With their wrinkled faces, stocky build, and characteristic "smushed" nose, bulldogs are 
                  instantly recognizable. Despite their somewhat intimidating appearance, they are incredibly 
                  gentle and make excellent companions for families, singles, and seniors alike.
                </p>
              </div>
            </div>
          </div>

          {/* Characteristics Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-10 text-center">Key Characteristics</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {characteristics.map((char, index) => (
                <Card key={index} className="shadow-gentle hover:shadow-md transition-all hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <char.icon className="h-10 w-10 text-primary" />
                      </div>
                      <div className="font-medium text-foreground text-sm text-center">{char.label}</div>
                      <div className="text-sm text-muted-foreground text-center">{char.value}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information Tabs */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Comprehensive Care Guide</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn everything you need to know about caring for your English Bulldog.
            </p>
          </div>

          <Tabs defaultValue="temperament" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="temperament">Temperament</TabsTrigger>
              <TabsTrigger value="health">Health</TabsTrigger>
              <TabsTrigger value="care">Daily Care</TabsTrigger>
              <TabsTrigger value="training">Training</TabsTrigger>
            </TabsList>

            <TabsContent value="temperament" className="mt-8">
              <Card className="shadow-gentle">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="h-6 w-6 text-primary mr-2" />
                    Personality & Temperament
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">What Makes Bulldogs Special</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-foreground mb-2">Positive Traits</h5>
                        <ul className="text-muted-foreground space-y-1">
                          <li>• Gentle and friendly with children</li>
                          <li>• Loyal and devoted to family</li>
                          <li>• Calm and patient temperament</li>
                          <li>• Good with other pets when socialized</li>
                          <li>• Low exercise requirements</li>
                          <li>• Adaptable to apartment living</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-foreground mb-2">Things to Consider</h5>
                        <ul className="text-muted-foreground space-y-1">
                          <li>• Can be stubborn during training</li>
                          <li>• May snore due to flat face</li>
                          <li>• Sensitive to extreme temperatures</li>
                          <li>• Prone to weight gain</li>
                          <li>• May drool occasionally</li>
                          <li>• Can be protective of family</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="health" className="mt-8">
              <div className="space-y-6">
                <Card className="shadow-gentle">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Stethoscope className="h-6 w-6 text-primary mr-2" />
                      Health Considerations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      English Bulldogs are generally healthy dogs, but like all breeds, they're prone to certain 
                      health conditions. Being aware of these helps ensure early detection and treatment.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-foreground mb-3">Common Health Issues</h5>
                        <ul className="text-muted-foreground space-y-1 text-sm">
                          <li>• Brachycephalic Obstructive Airway Syndrome (BOAS)</li>
                          <li>• Hip dysplasia</li>
                          <li>• Cherry eye</li>
                          <li>• Skin allergies and dermatitis</li>
                          <li>• Heat stroke susceptibility</li>
                          <li>• Obesity-related issues</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-foreground mb-3">Preventive Care</h5>
                        <ul className="text-muted-foreground space-y-1 text-sm">
                          <li>• Regular veterinary checkups</li>
                          <li>• Weight management</li>
                          <li>• Proper exercise in cool weather</li>
                          <li>• Daily cleaning of facial folds</li>
                          <li>• Quality diet and nutrition</li>
                          <li>• Environmental temperature control</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {healthTips.map((tip, index) => (
                    <Card key={index} className="shadow-gentle">
                      <CardContent className="p-6 text-center">
                        <tip.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                        <h4 className="font-semibold text-foreground mb-2">{tip.title}</h4>
                        <p className="text-sm text-muted-foreground">{tip.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="care" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {careGuide.map((section, index) => (
                  <Card key={index} className="shadow-gentle">
                    <CardHeader>
                      <CardTitle>{section.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="training" className="mt-8">
              <Card className="shadow-gentle">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-6 w-6 text-primary mr-2" />
                    Training Your Bulldog
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    Bulldogs are intelligent but can be stubborn, making consistent, patient training essential. 
                    Start early and use positive reinforcement for the best results.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Training Tips</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          Start socialization as early as possible
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          Use positive reinforcement and treats
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          Keep training sessions short (5-10 minutes)
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          Be patient and consistent
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          Focus on basic commands first
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Essential Commands</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">1.</span>
                          <strong>Sit</strong> - Foundation for all other commands
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">2.</span>
                          <strong>Stay</strong> - Important for safety
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">3.</span>
                          <strong>Come</strong> - Essential recall command
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">4.</span>
                          <strong>Down</strong> - Helps with impulse control
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">5.</span>
                          <strong>Leave it</strong> - Prevents eating harmful items
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
            Ready for a Bulldog Companion?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Now that you know more about English Bulldogs, browse our available puppies 
            or contact us with any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-warm bg-gradient-warm hover:bg-gradient-warm/90">
              View Available Bulldogs
            </Button>
            <Button variant="secondary" size="lg" className="shadow-gentle">
              Contact Our Experts
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BreedInfo;