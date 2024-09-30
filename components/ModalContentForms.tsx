import { Dialog, Text } from '@radix-ui/themes';
import React, { useState, useEffect } from 'react';
import { fetchRoomData } from '../app/api/fetchRoomData';
import { fetchProfileData } from '../app/api/fetchProfileData';

interface UserProfile {
  ddd: number;
  id: number;
  name: string;
  number: number;
  password: string;
}

interface RoomData {
  floor: number;
  id: number;
  name: string;
  professor: any;
  short_name: string;
  status: string;
  type: string;
  user: any;
}

interface TransferKey {
  classroom: number;
  keyPasser: number;
  keyReceptor: number;
  timeStamp?: string;
}

const ModalContentForms: React.FC = () => {
  const [roomData, setRoomData] = useState<RoomData[]>([]);
  const [profileData, setProfileData] = useState<UserProfile[]>([]);
  const [classroomId, setClassroomId] = useState('');
  const [fontUserId, setFontUserId] = useState('');
  const [destinyUserId, setDestinyUserId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchRoomData().then(setRoomData);
  }, []);

  useEffect(() => {
    fetchProfileData().then(setProfileData);
  }, []);

  const validateIds = () => {
    const classroom = roomData.find(room => room.id === Number(classroomId));
    if (!classroom) {
      setErrorMessage(`Classroom with ID ${classroomId} does not exist.`);
      return false;
    }

    const fontUserExists = profileData.some(user => user.id === Number(fontUserId));
    const destinyUserExists = profileData.some(user => user.id === Number(destinyUserId));

    if (!fontUserExists) {
      setErrorMessage(`Font User with ID ${fontUserId} does not exist.`);
      return false;
    }

    if (!destinyUserExists) {
      setErrorMessage(`Destiny User with ID ${destinyUserId} does not exist.`);
      return false;
    }

    setErrorMessage(''); // Clear any existing error message
    return true;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Validate IDs before sending the request
    if (!validateIds()) return;

    const timeStamp = new Date().toISOString();

    const data: TransferKey = {
      classroom: Number(classroomId),
      keyPasser: Number(fontUserId),
      keyReceptor: Number(destinyUserId),
      timeStamp,
    };

    console.log('Data to be sent:', data);

    try {
      const response = await fetch('http://localhost:5000/transferKeys', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Request sent successfully');
        // Handle success (e.g., close the modal, show a success message)
      } else {
        console.error('Failed to send request');
        // Handle failure
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  return (
    <div className="p-4">
      <Dialog.Description>
        <Text className="invisible">Repasse de Chave</Text>
      </Dialog.Description>

      {errorMessage && <div className="text-red-500">{errorMessage}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="classroomId" className="block text-sm font-medium text-white">
            Classroom ID
          </label>
          <input
            type="number"
            id="classroomId"
            value={classroomId}
            onChange={(e) => setClassroomId(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="fontUserId" className="block text-sm font-medium text-white">
            Font User ID
          </label>
          <input
            type="number"
            id="fontUserId"
            value={fontUserId}
            onChange={(e) => setFontUserId(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="destinyUserId" className="block text-sm font-medium text-white">
            Destiny User ID
          </label>
          <input
            type="number"
            id="destinyUserId"
            value={destinyUserId}
            onChange={(e) => setDestinyUserId(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalContentForms;
