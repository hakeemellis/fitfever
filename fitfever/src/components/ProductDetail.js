import React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <div className="bg-white p-4 shadow-md">
      <img
        src={`/images/${product.image}`}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
