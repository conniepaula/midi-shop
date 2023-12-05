import { cache } from 'react';
import Stripe from 'stripe';

import stripe from '@/lib/stripe';
import { notFound } from 'next/navigation';

export const getProductById = cache(async (productId: string) => {
  try {
    const data = await stripe.products.retrieve(productId as string, { expand: ['default_price'] });

    const price = data.default_price as Stripe.Price;

    const product = {
      id: data.id,
      name: data.name,
      description: data.description,
      imageUrl: data.images[0],
      price: new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(
        price.unit_amount! / 100,
      ),
      priceId: price.id,
    };

    return product;
  } catch {
    notFound();
  }
});
