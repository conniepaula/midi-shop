import Stripe from 'stripe';
import stripe from '@/lib/stripe';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
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
    };
  });

  return NextResponse.json(products);
}
