"use client";
import React, { useState } from 'react';
import axios from 'axios';

const FormulaireAnnonce = () => {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [immobilierFields, setImmobilierFields] = useState({
    type: '',
    address: '',
    chambre: '',
    salon: '',
    toilette: '',
    surface: ''
  });
  const [vehiculeFields, setVehiculeFields] = useState({
    type: '',
    modele: '',
    marque: '',
    annee: '',
    kilometrage: ''
  });

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('location', location);
    formData.append('category', category);

    if (category === 'immobilier') {
      formData.append('type', immobilierFields.type);
      formData.append('address', immobilierFields.address);
      formData.append('chambre', immobilierFields.chambre);
      formData.append('salon', immobilierFields.salon);
      formData.append('toillette', immobilierFields.toillette);
      formData.append('surface', immobilierFields.surface);
    } else if (category === 'vehicule') {
      formData.append('type', vehiculeFields.type);
      formData.append('modele', vehiculeFields.modele);
      formData.append('marque', vehiculeFields.marque);
      formData.append('annee', vehiculeFields.annee);
      formData.append('kilometrage', vehiculeFields.kilometrage);
    }

    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await axios.post('http://163.172.170.136:1337/api/annonces', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Data saved:', response.data);
      // Reset form or provide feedback to the user
      setTitle('');
      setDescription('');
      setPrice('');
      setLocation('');
      setCategory('');
      setImage(null);
      setImmobilierFields({
        type: '',
        address: '',
        chambre: '',
        salon: '',
        toilette: '',
        surface: ''
      });
      setVehiculeFields({
        type: '',
        modele: '',
        marque: '',
        annee: '',
        kilometrage: ''
      });
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Créer une annonce</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Titre :</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description :</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Prix :</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Localisation :</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Catégorie :</label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>Sélectionnez une catégorie</option>
            <option value="immobilier">Immobilier</option>
            <option value="vehicule">Véhicule</option>
          </select>
        </div>
        {category === 'immobilier' && (
          <>
            <div className="mb-4">
              <label htmlFor="immobilierType" className="block text-sm font-medium text-gray-700">Type :</label>
              <input
                type="text"
                id="immobilierType"
                value={immobilierFields.type}
                onChange={(e) => setImmobilierFields({ ...immobilierFields, type: e.target.value })}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Adresse :</label>
              <input
                type="text"
                id="address"
                value={immobilierFields.address}
                onChange={(e) => setImmobilierFields({ ...immobilierFields, address: e.target.value })}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="chambre" className="block text-sm font-medium text-gray-700">Chambres :</label>
              <input
                type="number"
                id="chambre"
                value={immobilierFields.chambre}
                onChange={(e) => setImmobilierFields({ ...immobilierFields, chambre: e.target.value })}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="salon" className="block text-sm font-medium text-gray-700">Salons :</label>
              <input
                type="number"
                id="salon"
                value={immobilierFields.salon}
                onChange={(e) => setImmobilierFields({ ...immobilierFields, salon: e.target.value })}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="toillette" className="block text-sm font-medium text-gray-700">Toilettes :</label>
              <input
                type="number"
                id="toillette"
                value={immobilierFields.toillette}
                onChange={(e) => setImmobilierFields({ ...immobilierFields, toilette: e.target.value })}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="surface" className="block text-sm font-medium text-gray-700">Surface :</label>
              <input
                type="number"
                id="surface"
                value={immobilierFields.surface}
                onChange={(e) => setImmobilierFields({ ...immobilierFields, surface: e.target.value })}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </>
        )}
        {category === 'vehicule' && (
          <>
            <div className="mb-4">
              <label htmlFor="vehiculeType" className="block text-sm font-medium text-gray-700">Type :</label>
              <input
                type="text"
                id="vehiculeType"
                value={vehiculeFields.type}
                onChange={(e) => setVehiculeFields({ ...vehiculeFields, type: e.target.value })}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="modele" className="block text-sm font-medium text-gray-700">Modèle :</label>
              <input
                type="text"
                id="modele"
                value={vehiculeFields.modele}
                onChange={(e) => setVehiculeFields({ ...vehiculeFields, modele: e.target.value })}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="marque" className="block text-sm font-medium text-gray-700">Marque :</label>
              <input
                type="text"
                id="marque"
                value={vehiculeFields.marque}
                onChange={(e) => setVehiculeFields({ ...vehiculeFields, marque: e.target.value })}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="annee" className="block text-sm font-medium text-gray-700">Année :</label>
              <input
                type="number"
                id="annee"
                value={vehiculeFields.annee}
                onChange={(e) => setVehiculeFields({ ...vehiculeFields, annee: e.target.value })}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="kilometrage" className="block text-sm font-medium text-gray-700">Kilométrage :</label>
              <input
                type="number"
                id="kilometrage"
                value={vehiculeFields.kilometrage}
                onChange={(e) => setVehiculeFields({ ...vehiculeFields, kilometrage: e.target.value })}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </>
        )}
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image :</label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium text-sm rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Soumettre
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormulaireAnnonce;
