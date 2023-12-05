import Stripe from 'stripe';
import { notFound } from 'next/navigation';

import stripe from '@/lib/stripe';

export const getCheckoutData = async (sessionId: string) => {

  if (!sessionId){
    notFound();
  }
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  });

  const customerName = session.customer_details?.name as string;
  const product = session.line_items?.data[0]?.price?.product as Stripe.Product;

  return { customerName, product };
};
