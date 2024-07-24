import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image src="/i1.png" alt="Logo" width={50} height={50} />
          <select className="p-2 border rounded text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option value="en">en</option>
            <option value="fr">fr</option>
            {/* Add more languages as needed */}
          </select>
        </div>
        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Search ..."
            className="w-full p-2 border rounded text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/SignIn" legacyBehavior>
            <a className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition duration-300">
              Sign in
            </a>
          </Link>
          <Link href="/SignUp" legacyBehavior>
            <a className="px-4 py-2 border border-purple-600 text-purple-600 rounded hover:bg-purple-600 hover:text-white transition duration-300">
              Sign up
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
