"use client";

import * as React from 'react';
import { toast } from 'react-hot-toast';
import Link from 'next/link';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Forgot() {
  const [email, setEmail] = React.useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) {
      toast.error('Veuillez entrer votre adresse e-mail.');
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Un e-mail de réinitialisation a été envoyé si l\'adresse existe.');
      } else {
        toast.error(data.error.message || 'Une erreur est survenue.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-center mb-6">
          <h1 className="text-black text-2xl font-bold">Mot de passe oublié?</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Votre email"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MailOutlineIcon style={{ color: 'black' }} />
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Réinitialiser le mot de passe
            </button>
          </div>
        </form>
        <div className="mt-6 flex items-center justify-center">
          <Link href="/signin" className="text-sm text-indigo-600 hover:underline">
            Retour à la connexion
          </Link>
        </div>
      </div>
    </div>
  );
}