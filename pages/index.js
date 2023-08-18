import { useAuth } from '@/context/AuthContext'
import { useState, useEffect } from 'react';
import Image from 'next/image'

function toCurrencySymbol(currency) {
  if (currency = "usd") return "$";
}

export default function Home() {
  const {currentUser} = useAuth()
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
    <>
    <main>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map(product => (
        <div key={product.id} className="lg:col-span-2 lg:row-span-1 m-3">
          <a className="block h-full">
            <div className="flex h-full w-full items-center justify-center overflow-hidden bg-sky-400 dark:bg-sky-600 relative rounded-3xl">
            <img src={product.images} alt={product.name} height={500} width={500}  className="relative h-full w-full object-contain transition duration-300 ease-in-out hover:scale-105"/>
            <div className="absolute left-0 top-0 w-3/4 text-black dark:text-white">
              <h3 className="inline bg-white box-decoration-clone py-3 pl-5 font-semibold leading-loose shadow-[1.25rem_0_0] shadow-white dark:bg-black dark:shadow-black text-3xl rounded-br-3xl">{product.name}</h3>
              <p className="w-fit bg-white px-5 py-3 text-sm font-semibold dark:bg-black dark:text-white rounded-br-3xl">
              {product.prices.map(price => (
                  <div key={price.id}>
                  <span>{toCurrencySymbol(price.currency)} {(price.unit_amount/100).toFixed(2)}</span>
                  {price.description && <span>({price.description})</span>}
                  </div>
                ))}
              </p>
            </div>
            </div>
          </a>
         
        </div>
      ))}
      
    </div>
    <div class="w-full overflow-x-hidden pb-6 pt-1">
      <div class="flex animate-marquee gap-5">
        {products.map(product => (
          <div key={product.id} className="lg:col-span-2 lg:row-span-1 m-3relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3">
          <a className="block h-full">
            <div className="flex h-full w-full items-center justify-center overflow-hidden bg-sky-400 dark:bg-sky-600 relative rounded-3xl">
            <img src={product.images} alt={product.name} height={500} width={500}  className="relative h-full w-full object-contain transition duration-300 ease-in-out hover:scale-105"/>
            <div className="absolute left-0 top-0 w-3/4 text-black dark:text-white">
              <h3 className="inline bg-white box-decoration-clone py-3 pl-5 font-semibold leading-loose shadow-[1.25rem_0_0] shadow-white dark:bg-black dark:shadow-black text-xl rounded-br-3xl">{product.name}</h3>
              <p className="w-fit bg-white px-5 py-3 text-sm font-semibold dark:bg-black dark:text-white rounded-br-3xl">
              {product.prices.map(price => (
                  <div key={price.id}>
                  <span>{toCurrencySymbol(price.currency)} {(price.unit_amount/100).toFixed(2)}</span>
                  {price.description && <span>({price.description})</span>}
                  </div>
                ))}
              </p>
            </div>
            </div>
          </a>
         
        </div>
        ))}
      </div>
    </div>
    </main>
    </>
  )
}