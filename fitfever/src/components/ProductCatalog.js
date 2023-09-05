import React from 'react';
import ProductDetail from './ProductDetail'; // Import your ProductDetail component

const ProductCatalog = () => {
  const products = [
    {
      id: 1,
      name: 'Running Shoes',
      price: 49.99,
      image: 'running-shoes.jpg',
    },
    {
      id: 2,
      name: 'Yoga Mat',
      price: 19.99,
      image: 'yoga-mat.jpg',
    },
    // Add more product items
  ];

    // Display a specific product (e.g., the first one)
    const highlightedProduct = products[0];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">Product Catalog</h2>
      <div className="grid grid-cols-2 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow-md">
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
        ))}
      </div>
      <br></br>
      <ProductDetail product={highlightedProduct} />
    </div>
  );
};

export default ProductCatalog;
