"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Nav from '../components/nav';
import ProductCard from '../components/prodcard';
import Footer from '../components/footer'; 
import EditNoteIcon from '@mui/icons-material/EditNote';
import { Annonce } from '@/types/types';

const Page: React.FC = () => {
  const [annonces, setAnnonces] = useState<Annonce[]>([]);
  const [fileInfo, setFileInfo] = useState<{ name: string; size: number } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchAnnonces = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/annonces?populate=*`);
        setAnnonces(response.data.data);
      } catch (error) {
        console.error('Error fetching annonces:', error);
      }
    };

    fetchAnnonces();
  }, []);

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
            <EditNoteIcon style={{ marginRight: "5" }}/>
            <span>Publier maintenant</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 p-4 mb-12">
        {annonces.map(annonce => (
          <ProductCard key={annonce.id} product={annonce.attributes} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Page;
