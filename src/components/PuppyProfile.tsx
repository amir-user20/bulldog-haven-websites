import * as React from 'react';
import { ArrowLeft, Heart, MapPin, Calendar, Ruler, Hash, Check, Phone, MessageCircle, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PuppyInterestForm } from '@/components/PuppyInterestForm';
import { bulldogs } from '@/data/bulldogs';
import { additionalBulldogs } from '@/data/additionalBulldogs';
import { moreBulldogs } from '@/data/moreBulldogs';

// Combine all bulldog data
const allBulldogs = [...bulldogs, ...additionalBulldogs, ...moreBulldogs];

const PuppyProfile = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [showInterestForm, setShowInterestForm] = React.useState(false);
  
  // Find the puppy by ID
  const puppy = allBulldogs.find(p => p.id === id);
  
  // If puppy not found, show error message
  if (!puppy) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold text-foreground mb-4">Puppy Not Found</h1>
          <p className="text-muted-foreground mb-6">
            We couldn't find the puppy you're looking for. Please check the URL or return to the available bulldogs.
          </p>
          <Button onClick={() => navigate('/bulldogs')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Bulldogs
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="md:flex">
            {/* Image Section */}
            <div className="md:w-1/2">
              <div className="relative h-96 md:h-full">
                <img
                  src={puppy.image}
                  alt={puppy.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Button variant="ghost" size="icon" className="rounded-full bg-white/80 hover:bg-white">
                    <Heart className="h-5 w-5 text-foreground" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Badge variant={puppy.available ? "default" : "secondary"} className="text-sm py-1 px-3">
                    {puppy.available ? 'Available' : 'Reserved'}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="p-8 md:w-1/2">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-1">{puppy.name}</h1>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <span>{puppy.gender} • {puppy.color}</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary">{puppy.price}</div>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-muted-foreground mr-2" />
                  <div>
                    <p className="text-sm text-muted-foreground">Age</p>
                    <p className="font-medium">{puppy.age}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Ruler className="h-5 w-5 text-muted-foreground mr-2" />
                  <div>
                    <p className="text-sm text-muted-foreground">Weight</p>
                    <p className="font-medium">{puppy.weight}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-muted-foreground mr-2" />
                  <div>
                    <p className="text-sm text-muted-foreground">Birth Date</p>
                    <p className="font-medium">{puppy.birthDate}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Hash className="h-5 w-5 text-muted-foreground mr-2" />
                  <div>
                    <p className="text-sm text-muted-foreground">Litter Size</p>
                    <p className="font-medium">{puppy.litterSize}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">About {puppy.name}</h3>
                <p className="text-muted-foreground">{puppy.description}</p>
              </div>

              {/* Traits */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Personality Traits</h3>
                <div className="flex flex-wrap gap-2">
                  {puppy.traits.map((trait) => (
                    <Badge key={trait} variant="secondary" className="px-3 py-1">
                      {trait}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Parents */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Parents</h3>
                <ul className="space-y-2">
                  {puppy.parents.map((parent, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-muted-foreground">{parent}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Health */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Health Information</h3>
                <ul className="space-y-2">
                  {puppy.health.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Vaccinations */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Vaccinations</h3>
                <div className="flex flex-wrap gap-2">
                  {puppy.vaccinations.map((vaccine) => (
                    <Badge key={vaccine} variant="outline" className="px-3 py-1">
                      {vaccine}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              {puppy.additionalInfo && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3">Additional Information</h3>
                  <p className="text-muted-foreground">{puppy.additionalInfo}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto"
                  onClick={() => setShowInterestForm(true)}
                  disabled={!puppy.available}
                >
                  {puppy.available ? 'I\'m Interested' : 'Reserved'}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto"
                  onClick={() => navigate('/contact')}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interest Form Modal */}
      {showInterestForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Interested in {puppy.name}?</h2>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setShowInterestForm(false)}
                >
                  ✕
                </Button>
              </div>
              <PuppyInterestForm 
                puppy={{
                  id: puppy.id,
                  name: puppy.name,
                  price: puppy.price,
                  color: puppy.color,
                  gender: puppy.gender,
                  age: puppy.age
                }}
                onClose={() => setShowInterestForm(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PuppyProfile;
