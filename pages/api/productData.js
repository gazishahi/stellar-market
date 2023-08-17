import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51NcmNOJxWeWiC013OmIYClWswlOXeY3q9mPRkZ2Sf49cbvlX0qhy6sOXMlKcqFwFL0T57NXhLQ1Vjf2z9hfPzmGz00ZjOkSy83', {
  apiVersion: '2020-08-27', // Use the latest Stripe API version
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
