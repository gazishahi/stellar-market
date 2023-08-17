// pages/[productId].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ProductPage() {
    const router = useRouter();
    const { productId } = router.query;
    const [product, setProduct] = useState(null);
    // Fetch product data using productId and display it
    useEffect(() => {
        if (productId) {
            // Fetch product details using productId
            async function fetchProductDetails() {
                try {
                    const response = await fetch(`/api/stripe/getProduct?productId=${productId}`);
                    const productData = await response.json();
                    console.log("Fetched product:", productData);
                    setProduct(productData);
                } catch (error) {
                    console.error("Failed to fetch product details:", error);
                }
            }

            fetchProductDetails();
        }
    }, [productId]);

    if (!product) return <div> Sorry, we don't have that product available right now. </div>;

    return (
        <div className="p-6">
        <img src={product.images} alt={product.name} className="w-full h-64 object-cover mb-4" />
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        
        {/* Display product metadata */}
        {product.metadata && (
            <div className="mb-4">
                <p><strong>Category:</strong> {product.metadata.Category}</p>
                {/* Add other metadata fields as needed */}
            </div>
        )}

        {/* Display product prices */}
        {product.prices && product.prices.map(price => (
            <div key={price.id} className="mb-2">
                <span className="text-lg font-semibold">{ (price.unit_amount/100).toFixed(2) } USD</span>
                {price.description && <span className="ml-2 text-gray-500">{price.description}</span>}
            </div>
        ))}

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 mt-4">
            Add to Cart
        </button>
    </div>
    );
}