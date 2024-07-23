import React from 'react';
import Nav from '../components/nav';
import ProductCard from '../components/prodcard';

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
  return (
    <div className="min-h-screen min-w-screen  bg-gray-100">
      <Nav />
      <h1 className="text-center text-3xl font-bold my-6">Welcome to the Page</h1>
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Page;
