import { useState } from 'react';
import { X, CreditCard, Banknote, Bitcoin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

type PaymentMethod = 'bank' | 'crypto' | 'card' | 'mobile_money';

interface PaymentMethodModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMethod: (method: PaymentMethod) => void;
  puppyName: string;
}

const paymentMethods = [
  { id: 'bank', name: 'Bank Transfer', icon: <Banknote className="h-8 w-8" /> },
  { id: 'crypto', name: 'Cryptocurrency', icon: <Bitcoin className="h-8 w-8" /> },
  { id: 'card', name: 'Credit/Debit Card', icon: <CreditCard className="h-8 w-8" /> },
  { id: 'mobile_money', name: 'Mobile Money', icon: <Send className="h-8 w-8" /> },
] as const;

export function PaymentMethodModal({ isOpen, onClose, onSelectMethod, puppyName }: PaymentMethodModalProps) {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);

  const handleSelect = (method: PaymentMethod) => {
    setSelectedMethod(method);
    onSelectMethod(method);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Select Payment Method</DialogTitle>
          <DialogDescription>
            Complete your adoption of {puppyName} by choosing a payment method
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-2 gap-4 py-4">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => handleSelect(method.id)}
              className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all ${
                selectedMethod === method.id 
                  ? 'border-primary bg-primary/10' 
                  : 'border-gray-200 hover:border-primary/50'
              }`}
            >
              <div className="mb-2 text-primary">
                {method.icon}
              </div>
              <span className="font-medium text-sm">{method.name}</span>
            </button>
          ))}
        </div>
        
        <div className="flex justify-end gap-2 pt-4 border-t">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button 
            onClick={() => selectedMethod && onSelectMethod(selectedMethod)}
            disabled={!selectedMethod}
          >
            Continue to Payment
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
