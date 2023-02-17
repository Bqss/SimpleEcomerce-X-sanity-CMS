import Stripe from "stripe";

const stripe = new Stripe(import.meta.env.VITE_PUBLIC_STRIPE_SECRET_KEY ,{
  typescript :true,
});