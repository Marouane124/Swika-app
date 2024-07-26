"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Nav from '../components/nav';
import ProductCard from '../components/prodcard';
import Footer from '../components/footer'; 
import EditNoteIcon from '@mui/icons-material/EditNote';

const products = [
  {
    id: 1,
    name: 'Maison à Vendre',
    description: 'Belle maison de 3 chambres dans la banlieue. Parfaite pour les familles.',
    image: '/images/maison.jpg' // Chemin de l'image
  },
  {
    id: 2,
    name: 'SUV à Vendre',
    description: 'Modèle SUV 2018, en excellent état avec un faible kilométrage.',
    image: '/images/suv.jpg' // Chemin de l'image
  },
  {
    id: 3,
    name: 'Pc Portable',
    description: 'Ordinateur portable de 15 pouces légèrement utilisé, parfait pour le travail et le divertissement.',
    image: '/images/laptop.jpg' // Chemin de l'image
  },
  {
    id: 4,
    name: 'Velo à louer',
    description: 'Vélo de montagne disponible à la location journalière ou hebdomadaire.',
    image: '/images/bike.jpg' // Chemin de l'image
  }
];

const moreProducts = [
  {
    id: 11,
    name: 'Product 11',
    description: 'This is a description for Product 11.',
    price: 119.99,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 12,
    name: 'Product 12',
    description: 'This is a description for Product 12.',
    price: 129.99,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 13,
    name: 'Product 13',
    description: 'This is a description for Product 13.',
    price: 139.99,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 14,
    name: 'Product 14',
    description: 'This is a description for Product 14.',
    price: 149.99,
    image: 'https://via.placeholder.com/150'
  },
];

const Page: React.FC = () => {
  const [fileInfo, setFileInfo] = useState<{ name: string; size: number } | null>(null);
  const router = useRouter();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileInfo({ name: file.name, size: file.size });
      console.log('Selected file:', file);
    }
  };

  const handleClick = () => {
    router.push("/signin");
  };

  const handleViewProduct = () => {
    router.push("/non-existing-page");
  };

  return (
    <div className="min-h-screen bg-gray-200 pt-32">
      <Nav />

      <div className="text-center my-20">
        <h1 className="text-4xl font-extrabold text-gray-800">Déposer votre annonce</h1>
        <div className="flex justify-center mt-4">
          <button
            onClick={handleClick}
            className="max-w-sm flex items-center justify-center h-12 px-4 text-lg font-medium transition-colors duration-300 bg-teal-600 text-white rounded-lg focus:shadow-outline hover:bg-teal-700"
          >
            <EditNoteIcon />
            <span>Publier maintenant</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 p-4 mb-12">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center my-20">
        <h1 className="text-4xl font-extrabold text-gray-800">Produits disponibles</h1>
        <div className="flex justify-center mt-4">
          <button
            onClick={handleClick}
            className="max-w-sm flex items-center justify-center h-12 px-4 text-lg font-medium transition-colors duration-300 bg-teal-600 text-white rounded-lg focus:shadow-outline hover:bg-teal-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 mr-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
            <span>Publier mon annonce</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 p-4 mb-12">
        {moreProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {fileInfo && (
        <div className="flex flex-col items-center mt-6">
          <p className="text-lg font-medium">File Name: {fileInfo.name}</p>
          <p className="text-lg font-medium">File Size: {(fileInfo.size / 1024).toFixed(2)} KB</p>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Page;
