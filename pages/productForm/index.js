import React from 'react';
import ProductForm from '../../components/productForm';
import createStripeProduct from '../api/productData';
import { useRouter } from 'next/router'


const AddProductPage = () => {
  let fail = false;
  const router = useRouter()

  const handleProductSubmit = async (productData) => {
    try {
      const product = await createStripeProduct(productData);
      console.log('Product created:', product);
      // Handle success or navigation
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
    <>
    <div className="flex flex-col items-center justify-center">
        <h1 className="text-black text-3xl font-semibold mb-8">Add a Product</h1>
        {fail && <h3 className="text-red-400 text-3xl mb-8">Unable to Register Product</h3>}
        <ProductForm onSubmit={handleProductSubmit} />
    </div>
    </>
  );
};

export default AddProductPage;
