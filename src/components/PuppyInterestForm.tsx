import * as React from 'react';
import { X, Loader2, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

type PuppyInterestFormProps = {
  puppy: {
    id: string;
    name: string;
    price: string;
    color: string;
    gender: string;
    age: string;
  };
  onClose: () => void;
};

export function PuppyInterestForm({ puppy, onClose }: PuppyInterestFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    
    try {
      // Netlify will automatically handle the form submission
      const formData = new FormData(form);
      
      // Add hidden fields for Netlify
      formData.append('form-name', 'puppy-interest');
      formData.append('puppy_id', puppy.id);
      formData.append('puppy_name', puppy.name);
      formData.append('puppy_price', puppy.price);
      formData.append('puppy_color', puppy.color);
      formData.append('puppy_gender', puppy.gender);
      formData.append('puppy_age', puppy.age);
      
      // Submit the form data
      const response = await fetch('/', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        // Show success toast
        toast({
          title: 'Interest Submitted Successfully!',
          description: 'Thank you for your interest! We will contact you shortly with more information.',
          className: 'bg-green-100 border-green-500 text-green-700',
        });
        
        // Reset form
        form.reset();
        setSelectedFile(null);
        
        // Close the form and redirect to homepage after 2 seconds
        setTimeout(() => {
          onClose();
          navigate('/');
        }, 2000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Error',
        description: 'There was an error submitting your information. Please try again later or contact us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!puppy) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full relative max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">I'm Interested in {puppy.name}</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            disabled={isSubmitting}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <form 
          name="puppy-interest"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-6"
          encType="multipart/form-data"
        >
          <input type="hidden" name="form-name" value="puppy-interest" />
          <input type="hidden" name="puppy_id" value={puppy.id} />
          <p className="hidden">
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
        
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">Puppy Details</h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
              <div>Name: {puppy.name}</div>
              <div>Price: {puppy.price}</div>
              <div>Color: {puppy.color}</div>
              <div>Gender: {puppy.gender}</div>
              <div>Age: {puppy.age}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input id="firstName" name="firstName" required disabled={isSubmitting} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input id="lastName" name="lastName" required disabled={isSubmitting} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" required disabled={isSubmitting} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" name="phone" type="tel" required disabled={isSubmitting} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Street Address *</Label>
            <Input id="address" name="address" required disabled={isSubmitting} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="city">City *</Label>
              <Input id="city" name="city" required disabled={isSubmitting} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State/Province *</Label>
              <Input id="state" name="state" required disabled={isSubmitting} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="zipCode">ZIP/Postal Code *</Label>
              <Input id="zipCode" name="zipCode" required disabled={isSubmitting} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">Country *</Label>
            <Select name="country" required disabled={isSubmitting}>
              <SelectTrigger>
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience">Previous Pet Experience *</Label>
            <Select name="experience" required disabled={isSubmitting}>
              <SelectTrigger>
                <SelectValue placeholder="Select your experience with pets" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="first-pet">This will be my first pet</SelectItem>
                <SelectItem value="had-pets">I've had pets before</SelectItem>
                <SelectItem value="current-owner">I currently own pets</SelectItem>
                <SelectItem value="breeder">I'm a breeder</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              This helps us understand how we can best support you and your new pet.
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="message">Message (Optional)</Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us more about your interest in this puppy..."
                disabled={isSubmitting}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="file-upload">Upload Document (Optional)</Label>
              <div className="mt-1 flex items-center">
                <label
                  htmlFor="file-upload"
                  className={`relative cursor-pointer rounded-md bg-white font-medium text-primary hover:text-primary/90 focus-within:outline-none ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <span className="flex items-center gap-2 px-3 py-2 border rounded-md text-sm">
                    <Upload className="h-4 w-4" />
                    {selectedFile ? selectedFile.name : 'Choose a file...'}
                  </span>
                  <input
                    id="file-upload"
                    name="file"
                    type="file"
                    className="sr-only"
                    onChange={handleFileChange}
                    disabled={isSubmitting}
                  />
                </label>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Upload any relevant documents (e.g., ID, proof of address)
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 pt-4">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary/90"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : 'Submit Interest'}
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
