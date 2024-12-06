// src/Home.js
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard'; 

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
    <div className=' full-screen'>


      <div className="product-list flex flex-Col grid grid-cols-3 gap-2 p-4 ">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>

  );
};

export default Home;