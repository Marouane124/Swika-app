import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-64">
      <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-t-lg" />
      <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-600 mt-1">{product.description}</p>
      <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
