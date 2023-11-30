import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_API_KEY!, {
  apiVersion: '2023-10-16',
  appInfo: { name: 'MIDI Shop' },
});

export default stripe;
