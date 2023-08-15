import React, { useState } from 'react';

const ProductForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    // Convert image to base64
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64Image = event.target.result; // The base64-encoded image
      const productData = {
        title,
        description,
        price,
        image: base64Image, // Use the base64-encoded image
      };
      onSubmit(productData);
    };
    reader.readAsDataURL(image);
  };

  return (
    <form className="max-w-md mx-auto p-4 shadow-md rounded-md" onSubmit={handleFormSubmit}>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-semibold mb-1">Title</label>
        <input
          id="title"
          type="text"
          className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-semibold mb-1">Description</label>
        <textarea
          id="description"
          className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 font-semibold mb-1">Price</label>
        <input
          id="price"
          type="number"
          className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-700 font-semibold mb-1">Image</label>
        <input
          id="image"
          type="file"
          accept="image/*"
          className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;
