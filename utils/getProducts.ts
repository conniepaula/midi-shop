import { cache } from 'react';
import Stripe from 'stripe';

import stripe from '@/lib/stripe';

export const getProducts = cache(async () => {
  const res = await stripe.products.list({ expand: ['data.default_price'] });

  const products = res.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(
        price.unit_amount! / 100,
      ),
      priceId: price.id,
    };
  });

  return products;
});
