import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ListAltIcon from '@mui/icons-material/ListAlt';
import KeyIcon from '@mui/icons-material/Key';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
          <div className="relative">
            <button onClick={toggleMenu} className="focus:outline-none">
              <PersonIcon className="text-gray-700 text-xl" />
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                <Link href="/SignIn" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Sign in
                </Link>
                <Link href="/SignUp" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Sign up
                </Link>
              </div>
            )}
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
            <HomeIcon />
            <span>Immobilier</span>
          </Link>
          <Link href="/automobile" className="text-gray-700 hover:text-purple-500 flex items-center space-x-1">
            <DirectionsCarIcon />
            <span>Automobile</span>
          </Link>
          <Link href="/vente-occasion" className="text-gray-700 hover:text-purple-500 flex items-center space-x-1">
            <ShoppingCartIcon />
            <span>Vente d'occasion</span>
          </Link>
          <Link href="/location-objets" className="text-gray-700 hover:text-purple-500 flex items-center space-x-1">
            <KeyIcon />
            <span>Location d'objets</span>
          </Link>
          <Link href="/rubrique-fourre-tout" className="text-gray-700 hover:text-purple-500 flex items-center space-x-1">
            <ListAltIcon />
            <span>Rubrique fourre-tout</span>
          </Link>
          <Link href="/autre" className="text-gray-700 hover:text-purple-500 flex items-center space-x-1">
            <MoreHorizIcon />
            <span>Autre</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
