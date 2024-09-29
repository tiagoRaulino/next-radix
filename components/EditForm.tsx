'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TextField, Button, Box, Dialog } from '@radix-ui/themes';

interface EditFormProps {
    profile: {
        id: number;
        name: string;
        ddd: number;
        number: number;
        password: string;
    };
}

const EditForm: React.FC<EditFormProps> = ({ profile }) => {
    const [name, setName] = useState(profile.name);
    const [ddd, setDdd] = useState(profile.ddd.toString());
    const [number, setNumber] = useState(profile.number.toString());
    const [password, setPassword] = useState(profile.password);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const updatedProfile = {
            name,
            ddd: parseInt(ddd, 10),
            number: parseInt(number, 10),
            password,
        };

        try {
            const response = await fetch(`https://portuno-api.vercel.app/users/${profile.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedProfile),
            });

            if (!response.ok) {
                throw new Error('Failed to update profile');
            }

            router.refresh();
        } catch (error) {
            console.error(`Error updating profile at: https://portuno-api.vercel.app/users/${profile.id}`, error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Box mb="3">
                <TextField.Root
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setName(e.target.value); console.log(name)}}
                    required
                    className="p-2 border border-gray-300 rounded-md w-full text-white placeholder-gray-400"
                />
            </Box>
            <Box mb="3">
                <TextField.Root
                    id="ddd"
                    type="text"
                    value={ddd}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDdd(e.target.value)}
                    required
                    className="p-2 border border-gray-300 rounded-md w-full text-white placeholder-gray-400"
                />
            </Box>
            <Box mb="3">
                <TextField.Root
                    id="number"
                    type="text"
                    value={number}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNumber(e.target.value)}
                    required
                    className="p-2 border border-gray-300 rounded-md w-full text-white placeholder-gray-400"
                />
            </Box>
            <Box mb="3">
                <TextField.Root
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    required
                    className="p-2 border border-gray-300 rounded-md w-full text-white placeholder-gray-400"
                />
            </Box>
            <Button variant="solid" type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md">
                Salvar
            </Button>
        </form>
    );
};

export default EditForm;
