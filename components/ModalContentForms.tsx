import React, { useState } from 'react';

const ModalContentForms: React.FC = () => {
  const [classroomId, setClassroomId] = useState('');
  const [fontUserId, setFontUserId] = useState('');
  const [destinyUserId, setDestinyUserId] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const timeStamp = new Date().toISOString();

    const data = {
      classroomId: Number(classroomId),
      fontUserId: Number(fontUserId),
      destinyUserId: Number(destinyUserId),
      timeStamp,
    };

    console.log('Data to be sent:', data);

    // Uncomment the code below to send the POST request
    // try {
    //   const response = await fetch('/api/your-endpoint', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   if (response.ok) {
    //     console.log('Request sent successfully');
    //     // Handle success (e.g., close the modal, show a success message)
    //   } else {
    //     console.error('Failed to send request');
    //     // Handle failure
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    //   // Handle error
    // }
  };

  return (
    <div className="p-4">
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
