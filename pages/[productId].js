import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';

export default function ProductPage() {
    const router = useRouter();
    const { productId } = router.query;
    const [product, setProduct] = useState(null);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [isModalOpen, setModalOpen] = useState(false);
    
    const goToNextImage = () => {
        if (activeImageIndex >= product.images.length - 1) {
            setActiveImageIndex(0);
        } else {
            setActiveImageIndex(prev => prev + 1);
        }
    };
    
    const goToPreviousImage = () => {
        if (activeImageIndex <= 0) {
            setActiveImageIndex(product.images.length - 1);
        } else {
            setActiveImageIndex(prev => prev - 1);
        }
    };

    const { addToCart } = useCart();

    function handleAddToCart() {
        addToCart(product);
    }
    
    // Fetch product data using productId and display it
    useEffect(() => {
        if (productId) {
            // Fetch product details using productId
            async function fetchProductDetails() {
                try {
                    const response = await fetch(`/api/getProduct?productId=${productId}`);
                    const productData = await response.json();
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
        <div className="p-6 flex justify-center items-start h-screen">
        {/* Image Gallery */}
        <div className="w-1/3 p-4">
            <div className="border rounded overflow-hidden mb-4 aspect-w-16 aspect-h-9">
                <img src={product.images[activeImageIndex]} alt={product.name} className="w-full h-auto object-contain" />
            </div>
            <div className="flex gap-2">
                {product.images.map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={`Thumbnail ${idx}`}
                        className="w-1/4 h-24 object-cover cursor-pointer opacity-70 hover:opacity-100"
                        onClick={() => {
                            setActiveImageIndex(idx);
                            setModalOpen(true);
                        }}
                    />
                ))}
            </div>
        </div>
        {/* Product Details */}
        <div className="w-1/3 p-4">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-8">{product.description}</p>
            {product.metadata && (
                <div className="mb-8">
                    <p><strong>Category:</strong> {product.metadata.Category}</p>
                </div>
            )}
            {product.prices && product.prices.map(price => (
                <div key={price.id} className="mb-2">
                    <span className="text-xl font-semibold">{ (price.unit_amount/100).toFixed(2) } USD</span>
                    {price.description && <span className="ml-2 text-gray-500">{price.description}</span>}
                </div>
            ))}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-black bg-opacity-60 absolute inset-0" onClick={() => setModalOpen(false)}></div>
        
                        <button className="absolute left-4 z-50 text-white text-2xl" onClick={goToPreviousImage}>&lt;</button>
        
                        <img src={product.images[activeImageIndex]} alt={product.name} className="relative z-10 max-w-full max-h-screen p-4" />
        
                        <button className="absolute right-4 z-50 text-white text-2xl" onClick={goToNextImage}>&gt;</button>
             </div>
            )}





            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 mt-4" onClick={handleAddToCart}>
                Add to Cart
            </button>
        </div>
    </div>
    );
}