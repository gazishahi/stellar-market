import React from 'react';
import ProductForm from '../../components/productForm';
import createStripeProduct from '../api/productData';
import { useRouter } from 'next/router'


const AddProductPage = () => {
  let fail = false;
  let pass = false;
  const handleProductSubmit = async (productData) => {
    try {
      const product = await createStripeProduct(productData);
      console.log('Product created:', product);
      // Handle success or navigation
      pass = true;
      return router.push({
        pathname:"/"
      })
    } catch (error) {
      console.error('Error creating product:', error);
      // Handle error
      fail = true;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-black text-3xl font-semibold mb-8">Add a Product</h1>
        {fail && <h3 className="text-red-400 text-3xl mb-8">Unable to Register Product</h3>}
        {pass && <h3 className="text-green-400 text-3xl mb-8">Product Added!</h3>}
        <ProductForm onSubmit={handleProductSubmit} />
    </div>
  );
};

export default AddProductPage;
