import React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <div className="bg-white p-4 shadow-md w-full lg:w-1/2">
        <img
          src={`/assets/images/${product.image}`}
          alt={product.name}
          className="w-full h-100 object-cover"
        />
      <div className="mt-4 md:mt-0 md:ml-4"> {/* Add margin on the right for larger screens */}
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
