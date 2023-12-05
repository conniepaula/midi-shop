import stripe from '@/lib/stripe';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest, response: NextResponse) {
  const body = await new Response(request.body).text();
  const { priceId } = JSON.parse(body);


  if (request.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' });
  }

  if (!priceId) {
    return NextResponse.json({ error: 'Price ID not found.' });
  }
  const successUrl = `${process.env.APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.APP_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: [{ price: priceId, quantity: 1 }],
  });

  return NextResponse.json({
    checkoutUrl: checkoutSession.url,
  });
}
