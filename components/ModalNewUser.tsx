import { Dialog, Text } from '@radix-ui/themes';
import React, { useState } from 'react';

interface NewUserProfile {
  id: number; // Add id in the user profile interface
  ddd: number;
  name: string;
  number: number;
  password: string;
}

const ModalNewUser: React.FC = () => {
  const [id, setId] = useState(''); // Add state for id
  const [ddd, setDdd] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const data: NewUserProfile = {
      id: Number(id), // Include id in the data to be sent
      ddd: Number(ddd),
      name: String(name),
      number: Number(number),
      password: String(password),
    };

    console.log('Data to be sent:', data);

    try {
      const response = await fetch('https://portuno-api.vercel.app/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('User registered successfully');
        // Handle success (e.g., close the modal, show a success message)
      } else {
        console.error('Failed to register user');
        setErrorMessage('Failed to register user.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred while registering the user.');
    }
  };

  return (
    <div className="p-4">
      <Dialog.Description>
        <Text className="invisible">Register New User</Text>
      </Dialog.Description>

      {errorMessage && <div className="text-red-500">{errorMessage}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="id" className="block text-sm font-medium text-white">
            ID
          </label>
          <input
            type="number"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="ddd" className="block text-sm font-medium text-white">
            DDD
          </label>
          <input
            type="number"
            id="ddd"
            value={ddd}
            onChange={(e) => setDdd(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="number" className="block text-sm font-medium text-white">
            Number
          </label>
          <input
            type="number"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-white">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalNewUser;
