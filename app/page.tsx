"use client"; // Indique que ce composant est un Client Component

import React, { useState } from 'react';
import Nav from '../components/nav';
import ProductCard from '../components/prodcard';
import Footer from '../components/footer'; // Import du Footer
import { useRouter } from 'next/navigation';

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is a description for Product 1.',
    price: 29.99,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is a description for Product 2.',
    price: 49.99,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'This is a description for Product 3.',
    price: 39.99,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'This is a description for Product 4.',
    price: 59.99,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 5,
    name: 'Product 5',
    description: 'This is a description for Product 5.',
    price: 69.99,
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
    router.push("/SignIn");
  };

  return (
    <div className="min-h-screen min-w-screen bg-gray-100 pt-16"> {/* Padding-top pour compenser la hauteur de la barre de navigation */}
      <Nav />
      <h1 className="text-center text-3xl font-bold my-6 mt-[150px]">Déposer votre annonce</h1>
      <div className="flex justify-center">
        <button
  onClick={handleClick}
  className="w-full flex items-center justify-center h-14 px- mt-2 w-100  text-sm transition-colors duration-300 bg-purple-600 text-white rounded-lg focus:shadow-outline hover:bg-purple-700"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className="w-5 h-5 mr-2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 10h16M4 14h16M4 18h16"
    />
  </svg>
  <span>Publier maintenant</span>
</button>

      </div>
      <div className="flex flex-wrap justify-center gap-6 p-4 mt-16">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {fileInfo && (
        <div className="flex flex-col items-center mt-4">
          <p>File Name: {fileInfo.name}</p>
          <p>File Size: {(fileInfo.size / 1024).toFixed(2)} KB</p>
        </div>
      )}
      <Footer /> {/* Ajout du Footer */}
    </div>
  );
};

export default Page;
