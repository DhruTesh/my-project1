// src/ProductCard.js
import React from 'react';


const ProductCard = ({ product }) => {
  return (
    <div className='h-full border bg-violet-100 p-5 text-left flex flex-col gap-5 rounded-md max-w-[25rem] min-w-[10rem]'>
      <img
        src={product.thumbnail} 
        alt={product.title}
        className='w-full bg-gray-300 object-contain aspect-video '
      />
      <h3 className="product-title text-center text-xl font-bold">{product.title}</h3>
      <p className='product-description text-center text-sm'>{product.description}</p>
      <p className="product-price text-xl font-bold">${product.price.toFixed(2)}</p>
      <button className="add-to-cart-button bg-blue-900 text-white px-4 py-4 rounded-md hover:bg-violet-700">
        Add to Cart</button>
    </div>
  );
};

export default ProductCard;