import { useAuth } from '@/context/AuthContext'
import { useState, useEffect } from 'react';
import Link from 'next/link';

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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map(product => (
            <div key={product.id} className="m-3 relative overflow-hidden bg-sky-400 dark:bg-sky-600 rounded-3xl">
              <Link href={`/${product.id}`}>
                <div className="cursor-pointer">
                  <img src={product.images} alt={product.name} className="transition-transform duration-300 hover:scale-105" />
                  <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black text-white">
                    <h3 className="font-semibold text-xl">{product.name}</h3>
                    {product.metadata && <p>Category: {product.metadata.Category}</p>}
                    {product.prices.map(price => (
                      <div key={price.id}>
                        <span>{toCurrencySymbol(price.currency)} {(price.unit_amount / 100).toFixed(2)}</span>
                        {price.description && <span>({price.description})</span>}
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="w-full overflow-x-auto sm:hidden pb-6 pt-1">
          <div className="flex gap-5">
            {products.map(product => (
              <div key={product.id} className="m-3 relative overflow-hidden bg-sky-400 dark:bg-sky-600 rounded-3xl">
                <Link href={`/${product.id}`}>
                  <div className="cursor-pointer">
                    <img src={product.images} alt={product.name} className="transition-transform duration-300 hover:scale-105" />
                    <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black text-white">
                      <h3 className="font-semibold text-xl">{product.name}</h3>
                      {product.prices.map(price => (
                        <div key={price.id}>
                          <span>{toCurrencySymbol(price.currency)} {(price.unit_amount / 100).toFixed(2)}</span>
                          {price.description && <span>({price.description})</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
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