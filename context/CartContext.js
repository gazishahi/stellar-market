import { createContext, useContext, useState, useRef } from 'react';

const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const isAdding = useRef(false);
    


    function addToCart(product) {
        if (isAdding.current) return; // If already adding, return early
        isAdding.current = true;
        setCart((currentCart) => {
            const existingProductIndex = currentCart.findIndex(p => {
                console.log(`Comparing product IDs: ${p.id} === ${product.id}`);
                return p.id === product.id;
            });
            
            console.log("Existing product index:", existingProductIndex);
            console.log("Product to add:", product);
            
            if (existingProductIndex >= 0) {
                const newCart = [...currentCart];
                newCart[existingProductIndex].quantity += 1;
                console.log("Incrementing quantity. Updated Cart:", newCart);
                return newCart;
            } else {
                const newCart = [...currentCart, { ...product, quantity: 1 }];
                console.log("Adding new product. Updated Cart:", newCart);
                return newCart;
            }
            
        });
        setTimeout(() => isAdding.current = false, 500);
    }
    
    
    function removeFromCart(productId) {
        setCart(prevCart => {
            return prevCart.filter(product => product.id !== productId);
        });
        
    }

    function increaseQuantity(productId) {
        setCart(prevCart => {
            const newCart = [...prevCart];
            const foundProduct = newCart.find(product => product.id === productId);
            if (foundProduct) {
                foundProduct.quantity += 1;
            }
            return newCart;
        });
    }
    
    function decreaseQuantity(productId) {
        setCart(prevCart => {
            const newCart = [...prevCart];
            const foundProduct = newCart.find(product => product.id === productId);
            if (foundProduct) {
                if (foundProduct.quantity > 1) {
                    foundProduct.quantity -= 1;
                } else {
                    return newCart.filter(product => product.id !== productId);
                }
            }
            return newCart;
        });
    }
    
    function computeTotalCost() {
        return cart.reduce((acc, product) => {
            const productTotal = (product.prices[0].unit_amount * product.quantity);
            return acc + productTotal;
        }, 0);
    }
    
    

    const value = {
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        computeTotalCost
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
