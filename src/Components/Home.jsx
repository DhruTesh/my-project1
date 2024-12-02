// src/Home.js
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard'; // Import the ProductCard component

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProducts(data.products);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className="default-ltr-cache-1rqw1gv">
        <div data-uia="nmhp-hero" className="default-ltr-cache-jbq1me ep86sd71">
          <div className="default-ltr-cache-s85dir evxmntz0">
            <div className="default-ltr-cache-1cddg2u">
              <div className="default-ltr-cache-zxlxvv">
                <div className="default-ltr-cache-xyyuvf">
                  <div className="default-ltr-cache-yxgczw">
                    <div data-uia="hero-content-card-vlv" className="default-ltr-cache-d55zqb">
                      <div dir="ltr" className="default-ltr-cache-1jlv5t9 el7ggtf0"></div>
                      <div className="default-ltr-cache-1t4b407">
                        <img
                          className="h-20 w-full"
                          src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
                          srcSet="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
                          alt=""
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="default-ltr-cache-1wmy9hl">
                  <div className="default-ltr-cache-14owyb6">
                    <div className="default-ltr-cache-1d3w5wq">
                      <div className="default-ltr-cache-158l1pb ep86sd70">
                        <div className="default-ltr-cache-1ggpem9 ">
                          
                          <div className="product-list ">
                            {products.map(product => (
                              <ProductCard key={product.id} product={product} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;