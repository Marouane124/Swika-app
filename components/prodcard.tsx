import React from 'react';
import Image from 'next/image';
import { AnnonceAttributes } from '@/types/types';

const ProductCard = ({ product }: { product: AnnonceAttributes }) => {
  const imageUrl = product.image?.data?.attributes?.url || '/default-image.png'; // Use a default image if not available

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <Image width={300} height={300} src={imageUrl} alt={product.title} className="w-full h-40 object-cover mb-4" />
      <h2 className="text-xl font-bold mb-2">{product.title}</h2>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-gray-500 mb-4">Location: {product.location}</p>
      <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
        Voir les détails
      </button>
    </div>
  );
};

export default ProductCard;
