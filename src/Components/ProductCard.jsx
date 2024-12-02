// src/ProductCard.js
import React from 'react';


const ProductCard = ({ product }) => {
  return (
    <div className='h-full border p-5 text-left flex flex-col gap-5 rounded-md max-w-[25rem] min-w-[10rem]'>
      <img
        src={product.thumbnail} 
        alt={product.title}
        className='w-full bg-gray-300 object-contain aspect-video '
      />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  );
};

export default ProductCard;