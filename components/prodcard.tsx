import React from 'react';
import Image from 'next/image';

type Product = {
  name: string;
  description: string;
};

const ProductCard =({ product }: { product: Product })=> {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Image width={300} height={300} src={'/logo.png'} alt={product.name} className="w-full h-48 object-fill" />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
          Voir les details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
