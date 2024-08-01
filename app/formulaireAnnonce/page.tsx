"use client";
import React, { useState } from 'react';
import axios from 'axios';

const FormulaireAnnonce = () => {
  const [category, setCategory] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    type: '',
    address: '',
    chambre: '',
    salon: '',
    toillette: '',
    surface: '',
    modele: '',
    marque: '',
    annee: '',
    kilometrage: '',
  });
  const [message, setMessage] = useState(''); // To display success or error messages

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title: formData.title,
      description: formData.description,
      price: parseFloat(formData.price),
      location: formData.location,
      category: category, // Ensure this matches one of the expected values
      ...(category === 'Meubles' && {
        type: formData.type,
        address: formData.address,
        chambre: parseInt(formData.chambre),
        salon: parseInt(formData.salon),
        toillette: parseInt(formData.toillette),
        surface: parseFloat(formData.surface),
      }),
      ...(category === 'Vehicules' && {
        type: formData.type,
        modele: formData.modele,
        
        marque: formData.marque,
        annee: parseInt(formData.annee),
        kilometrage: parseInt(formData.kilometrage),
      }),
    };

    console.log('Submitting data:', data); // Log payload to debug

    try {
      const response = await axios.post('http://163.172.170.136:1337/api/annonces', { data }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setMessage('Annonce saved successfully!');
      console.log('Annonce saved:', response.data);
    } catch (error) {
      const errorMessage = error.response ? 
        `Error saving annonce: ${error.response.status} ${error.response.statusText}` : 
        `Error saving annonce: ${error.message}`;

      setMessage(errorMessage);
      console.error('Error saving annonce:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Créer une annonce</h1>
      {message && <div className={`alert ${message.includes('Error') ? 'alert-error' : 'alert-success'}`}>{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Titre :</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description :</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Prix (MAD) :</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Localisation :</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Catégorie :</label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>Sélectionnez une catégorie</option>
            <option value="Meubles">Meubles</option>
            <option value="Vehicules">Véhicules</option>
          </select>
        </div>
        {category === 'Meubles' && (
          <>
            <div className="mb-4">
              <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type :</label>
              <input
                type="text"
                id="type"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Adresse :</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="chambre" className="block text-sm font-medium text-gray-700">Chambre :</label>
              <input
                type="number"
                id="chambre"
                name="chambre"
                value={formData.chambre}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="salon" className="block text-sm font-medium text-gray-700">Salon :</label>
              <input
                type="number"
                id="salon"
                name="salon"
                value={formData.salon}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="toillette" className="block text-sm font-medium text-gray-700">Toillette :</label>
              <input
                type="number"
                id="toillette"
                name="toillette"
                value={formData.toillette}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="surface" className="block text-sm font-medium text-gray-700">Surface (m²) :</label>
              <input
                type="number"
                id="surface"
                name="surface"
                value={formData.surface}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </>
        )}
        {category === 'Vehicules' && (
          <>
            <div className="mb-4">
              <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type :</label>
              <input
                type="text"
                id="type"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="modele" className="block text-sm font-medium text-gray-700">Modèle :</label>
              <input
                type="text"
                id="modele"
                name="modele"
                value={formData.modele}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="marque" className="block text-sm font-medium text-gray-700">Marque :</label>
              <input
                type="text"
                id="marque"
                name="marque"
                value={formData.marque}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="annee" className="block text-sm font-medium text-gray-700">Année :</label>
              <input
                type="number"
                id="annee"
                name="annee"
                value={formData.annee}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="kilometrage" className="block text-sm font-medium text-gray-700">Kilométrage :</label>
              <input
                type="number"
                id="kilometrage"
                name="kilometrage"
                value={formData.kilometrage}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </>
        )}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormulaireAnnonce;
