import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET, {
  apiVersion: '2023-08-16', // Use the latest Stripe API version
});

export default async function createStripeProduct(productData) {
  try {
    const product = await stripe.products.create({
      name: productData.title   ,
      description: productData.description,
      // Add more properties as needed
    });
    // Create a price for the product
    const price = await stripe.prices.create({
        unit_amount: productData.price * 100, // Price in cents
        currency: 'usd', // Set your desired currency code here
        product: product.id,
    });
    
    // Upload the image and attach it to the product
    const imageUpload = await stripe.files.create({
        purpose: 'product_image',
        file: {
            data: productData.image, // Use the base64-encoded image
            name: 'product_image.jpg', // Set the desired image name
            type: 'image/jpeg', // Set the appropriate image type
        },
      });
  
      await stripe.products.update(product.id, {
        images: [imageUpload.id], // Attach the uploaded image to the product
      });


    return product;
  } catch (error) {
    console.error('Error creating Stripe product:', error);
    throw error;
  }
}
