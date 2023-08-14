import { useState, useEffect } from 'react';

function toCurrencySymbol(currency) {
  if (currency = "usd") return "$";
}

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        
        const response = await fetch('/api/listProducts');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <img src={product.images} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          {product.prices.map(price => (
            <div key={price.id}>
              <span>{ (price.unit_amount/100).toFixed(2)} {toCurrencySymbol(price.currency)}</span>
              {price.description && <span>({price.description})</span>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductsPage;
