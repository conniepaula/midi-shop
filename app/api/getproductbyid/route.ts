import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import stripe from '@/lib/stripe';

export async function GET(request: Request) {
  const id = request.headers.get('id');
  const res = await stripe.products.list({ expand: ['data.default_price'] });

  const data = await stripe.products.retrieve(id as string, { expand: ['default_price'] });

  const price = data.default_price as Stripe.Price;

  const product =  {
      id: data.id,
      name: data.name,
      description: data.description,
      imageUrl: data.images[0],
      price: new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(
        price.unit_amount! / 100,
      ),
    };
  ;

  return NextResponse.json(product);
}
