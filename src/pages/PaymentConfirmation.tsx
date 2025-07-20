import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, Upload, CheckCircle2, XCircle } from 'lucide-react';

type PaymentMethod = 'bank' | 'crypto' | 'card' | 'mobile_money';

interface PaymentDetails {
  method: PaymentMethod;
  details: string;
  instructions: string;
}

const paymentDetailsMap: Record<PaymentMethod, PaymentDetails> = {
  bank: {
    method: 'bank',
    details: 'Bank Name: Bulldog Haven\nAccount Name: Bulldog Haven LLC\nAccount Number: 1234567890\nRouting: 987654321',
    instructions: 'Please include your name and puppy name in the transfer reference.'
  },
  crypto: {
    method: 'crypto',
    details: 'Bitcoin: bc1qxy2kgdygjrsqtzq2n0yrf249n\nEthereum: 0x1234567890abcdef1234567890abcdef12345678',
    instructions: 'Please send the exact amount and include your email in the memo/notes.'
  },
  card: {
    method: 'card',
    details: 'Coming soon! Please select another payment method or contact us for assistance.',
    instructions: ''
  },
  mobile_money: {
    method: 'mobile_money',
    details: 'Provider: MTN Mobile Money\nNumber: +1 (555) 123-4567\nName: Bulldog Haven',
    instructions: 'Please include your name as the reference.'
  }
};

export function PaymentConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  
  // Get payment method from URL params
  const searchParams = new URLSearchParams(location.search);
  const method = searchParams.get('method') as PaymentMethod;
  const puppyId = searchParams.get('puppyId');
  
  if (!method || !Object.keys(paymentDetailsMap).includes(method)) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Invalid Payment Method</h1>
          <p className="text-muted-foreground mb-6">Please select a valid payment method and try again.</p>
          <Button onClick={() => navigate('/')}>Return Home</Button>
        </div>
      </div>
    );
  }
  
  const { details, instructions } = paymentDetailsMap[method];
  const methodName = {
    bank: 'Bank Transfer',
    crypto: 'Cryptocurrency',
    card: 'Credit/Debit Card',
    mobile_money: 'Mobile Money'
  }[method];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setScreenshot(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!screenshot) {
      setError('Please upload a screenshot of your payment');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    try {
      // In a real app, you would send this data to your backend
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate successful submission
      setIsSuccess(true);
      
      // In a real app, you would redirect to a success page or show a success message
      // and potentially clear the form
    } catch (err) {
      setError('Failed to submit payment. Please try again.');
      console.error('Payment submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Payment Submitted!</h1>
          <p className="text-muted-foreground mb-6">
            Thank you for your payment. We've received your submission and will process it shortly. 
            You'll receive a confirmation email once your payment is verified.
          </p>
          <Button onClick={() => navigate('/')}>Return Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Complete Your Payment</h1>
          <p className="text-muted-foreground">
            Please follow the instructions below to complete your adoption of {puppyId || 'your puppy'}
          </p>
        </div>
        
        <div className="bg-card rounded-lg shadow-sm border p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">{methodName} Payment Details</h2>
          
          <div className="bg-muted/50 p-4 rounded-md mb-6">
            <h3 className="font-medium mb-2">Send payment to:</h3>
            <pre className="whitespace-pre-wrap font-mono text-sm">{details}</pre>
            
            {instructions && (
              <div className="mt-4 pt-4 border-t border-muted">
                <p className="text-sm text-muted-foreground">{instructions}</p>
              </div>
            )}
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" htmlFor="screenshot">
                Upload Payment Screenshot
              </label>
              <input
                type="file"
                id="screenshot"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
              
              {previewUrl ? (
                <div className="mt-2">
                  <div className="relative group">
                    <img 
                      src={previewUrl} 
                      alt="Payment screenshot preview" 
                      className="max-h-64 rounded-md border border-border"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setScreenshot(null);
                        setPreviewUrl('');
                        if (fileInputRef.current) {
                          fileInputRef.current.value = '';
                        }
                      }}
                      className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <XCircle className="h-5 w-5" />
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Click to change image
                  </p>
                </div>
              ) : (
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="flex flex-col items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 cursor-pointer hover:bg-muted/50 transition-colors"
                >
                  <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground text-center">
                    Click or drag and drop to upload screenshot
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    (PNG, JPG, or PDF, max 5MB)
                  </p>
                </div>
              )}
              
              {error && (
                <p className="mt-2 text-sm text-destructive">{error}</p>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate(-1)}
                disabled={isSubmitting}
                className="flex-1"
              >
                Back
              </Button>
              <Button 
                type="submit" 
                disabled={!screenshot || isSubmitting}
                className="flex-1"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  'Submit Payment'
                )}
              </Button>
            </div>
          </form>
        </div>
        
        <div className="bg-muted/30 p-4 rounded-lg text-sm">
          <h3 className="font-medium mb-2">Need help?</h3>
          <p className="text-muted-foreground">
            If you encounter any issues with your payment, please contact us at{' '}
            <a href="mailto:support@bulldoghaven.com" className="text-primary hover:underline">
              support@bulldoghaven.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
