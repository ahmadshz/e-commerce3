import React, { useState } from 'react';

const SubHeader = () => {
  const [products, setProducts] = useState([]); // State to store products
  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  const [newProduct, setNewProduct] = useState(''); // State for new product input

  // Function to add a new product
  const handleAddProduct = () => {
    if (newProduct.trim()) {
      setProducts([...products, newProduct.trim()]);
      setNewProduct(''); // Clear input after adding
    }
  };

  // Function to filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Product Management</h1>
        <div className="flex items-center space-x-4">
          {/* Add Product Input and Button */}
          <input
            type="text"
            value={newProduct}
            onChange={(e) => setNewProduct(e.target.value)}
            placeholder="Enter product name"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddProduct}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Add Product
          </button>
        </div>
      </div>

      {/* Search Input */}
      <div className="mb-8">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search products..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Product List */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <li key={index} className="px-6 py-4 hover:bg-gray-50 transition duration-300">
                <span className="text-gray-700">{product}</span>
              </li>
            ))
          ) : (
            <li className="px-6 py-4 text-gray-500">No products found.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SubHeader;