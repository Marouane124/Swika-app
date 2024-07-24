"use client";
import { useState } from 'react';

const FormulaireAnnonce = () => {
  const [categorie, setCategorie] = useState('');
  const [nomProduit, setNomProduit] = useState('');
  const [prix, setPrix] = useState('');
  const [localisation, setLocalisation] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Gérez la soumission du formulaire ici (par exemple, envoyer les données à une API)
    console.log({ categorie, nomProduit, prix, localisation, description, image });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Créer une annonce</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="categorie" className="block text-sm font-medium text-gray-700">Catégorie :</label>
          <select
            id="categorie"
            value={categorie}
            onChange={(e) => setCategorie(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>Sélectionnez une catégorie</option>
            <option value="electronique">Électronique</option>
            <option value="meubles">Meubles</option>
            <option value="vetements">Vêtements</option>
            <option value="livres">Livres</option>
            {/* Ajoutez plus de catégories si nécessaire */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="nomProduit" className="block text-sm font-medium text-gray-700">Nom du produit :</label>
          <input
            type="text"
            id="nomProduit"
            value={nomProduit}
            onChange={(e) => setNomProduit(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="prix" className="block text-sm font-medium text-gray-700">Prix (MAD) :</label>
          <input
            type="number"
            id="prix"
            value={prix}
            onChange={(e) => setPrix(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="localisation" className="block text-sm font-medium text-gray-700">Localisation :</label>
          <input
            type="text"
            id="localisation"
            value={localisation}
            onChange={(e) => setLocalisation(e.target.value)}
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
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Télécharger une image :</label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md shadow-sm hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Soumettre
        </button>
      </form>
    </div>
  );
};

export default FormulaireAnnonce;
