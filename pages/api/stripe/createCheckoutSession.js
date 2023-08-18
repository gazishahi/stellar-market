import { Stripe } from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET);  // Make sure you've set up this env variable

export default async (req, res) => {
    if (req.method === 'POST') {
        try {
            const { products } = req.body;

            // Convert items for Stripe
            const line_items = products.map(product => ({
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: product.name,
                        images: product.images,
                    },
                    unit_amount: product.prices[0].unit_amount,
                },
                quantity: product.quantity,
            }));

            // Create a Checkout Session
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items,
                mode: 'payment',
                success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.headers.origin}/cart`,
            });

            res.status(200).json({ sessionId: session.id });
        } catch (error) {
            res.status(500).json({ error: error.message });
            console.error("Stripe checkout session creation error:", error);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
};
