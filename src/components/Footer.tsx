import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-primary mr-2" />
              <span className="font-serif font-bold text-xl">
                BullDog Daily
              </span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Connecting loving families with healthy, well-socialized English Bulldog 
              puppies through ethical breeding practices for over 10 years.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <button className="p-2 bg-background/10 hover:bg-background/20 rounded-lg transition-colors">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="p-2 bg-background/10 hover:bg-background/20 rounded-lg transition-colors">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="p-2 bg-background/10 hover:bg-background/20 rounded-lg transition-colors">
                <Twitter className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-serif text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {[
                'Available Bulldogs',
                'Adoption Process',
                'Breed Information',
                'Health Guarantee',
                'Testimonials',
                'Gallery',
                'Blog'
              ].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="font-serif text-lg font-semibold">Support</h3>
            <ul className="space-y-3">
              {[
                'Contact Us',
                'FAQs',
                'Puppy Care Guide',
                'Training Resources',
                'Health Records',
                'Warranty Claims',
                'Privacy Policy'
              ].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="font-serif text-lg font-semibold">Stay Updated</h3>
            <p className="text-background/80">
              Subscribe to get updates about new litters and helpful bulldog care tips.
            </p>
            
            <div className="space-y-3">
              <Input 
                placeholder="Your email address"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Subscribe
              </Button>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 pt-4 border-t border-background/20">
              <div className="flex items-center text-background/80">
                <Phone className="h-4 w-4 mr-2" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center text-background/80">
                <Mail className="h-4 w-4 mr-2" />
                <span>hello@bulldogdaily.com</span>
              </div>
              <div className="flex items-center text-background/80">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Austin, Texas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/80 text-sm">
              © {currentYear} BullDog Daily. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;