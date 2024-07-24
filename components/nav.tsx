import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCar, faShoppingCart, faKey, faThList } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 p-4 w-full">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex items-center justify-between w-full mb-4">
          <div className="flex items-center space-x-4">
            <Image src="/i1.png" alt="Logo" width={50} height={50} />
            <select className="p-2 border rounded text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option value="en">en</option>
              <option value="fr">fr</option>
              {/* Add more languages as needed */}
            </select>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/signin" className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition duration-300">
              Sign in
            </Link>
            <Link href="/signup" className="px-4 py-2 border border-purple-600 text-purple-600 rounded hover:bg-purple-600 hover:text-white transition duration-300">
              Sign up
            </Link>
          </div>
        </div>
        <div className="w-full mb-4">
          <input
            type="text"
            placeholder="Search ..."
            className="w-full p-2 border rounded text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="flex space-x-4 mb-4">
          <Link href="/immobilier" className="text-gray-700 hover:text-purple-500 flex items-center space-x-1">
            <FontAwesomeIcon icon={faHome} />
            <span>Immobilier</span>
          </Link>
          <Link href="/automobile" className="text-gray-700 hover:text-purple-500 flex items-center space-x-1">
            <FontAwesomeIcon icon={faCar} />
            <span>Automobile</span>
          </Link>
          <Link href="/vente-occasion" className="text-gray-700 hover:text-purple-500 flex items-center space-x-1">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>Vente d'occasion</span>
          </Link>
          <Link href="/location-objets" className="text-gray-700 hover:text-purple-500 flex items-center space-x-1">
            <FontAwesomeIcon icon={faKey} />
            <span>Location d'objets</span>
          </Link>
          <Link href="/rubrique-fourre-tout" className="text-gray-700 hover:text-purple-500 flex items-center space-x-1">
            <FontAwesomeIcon icon={faThList} />
            <span>Rubrique fourre-tout</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
