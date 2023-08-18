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

    // Determine image MIME type based on extension
    const imageExtension = productData.image.name.split('.').pop().toLowerCase();
    const imageType = imageExtension === 'jpeg' ? 'image/jpeg' : 'image/png';

    const imageUpload = await stripe.files.create({
        purpose: 'product_image',
        file: {
            data: productData.image,
            name: 'product_image.' + imageExtension,
            type: imageType,
        },
    });

    await stripe.products.update(product.id, {
        images: [imageUpload.id],
    });

    return product;
  } catch (error) {
    console.error('Error creating Stripe product:', error);
    throw error;
  }
}
