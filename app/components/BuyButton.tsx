'use client';

import axios from 'axios';
import Button from './Button';
import { ShoppingCartSimple } from '@/components/phosphor-icons';
import { useState } from 'react';

interface BuyButtonProps {
  priceId: string;
}
function BuyButton(props: BuyButtonProps) {
  const { priceId } = props;

  const [isLoadingCheckout, setIsLoadingCheckout] = useState<boolean>(false);
  const handleBuyProduct = async () => {
    try {
      setIsLoadingCheckout(true);
      const response = await axios.post('/api/checkout', { priceId: priceId });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (error) {
      alert('Checkout failed');
      setIsLoadingCheckout(false);
    }
  };
  return (
    <Button
      onClick={handleBuyProduct}
      disabled={isLoadingCheckout}
      icon={<ShoppingCartSimple size={24} />}
    >
      Buy now
    </Button>
  );
}

export default BuyButton;
