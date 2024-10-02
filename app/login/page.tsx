'use client';

import { Heading, Flex, TextField, Box, Button } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import { fetchProfileData } from '../api/fetchProfileData';
import { useEffect, useState } from 'react';

interface UserProfile {
    ddd: number;
    id: number;
    name: string;
    number: number;
    password: string;
}

function Login() {
    const router = useRouter();
    const [profileData, setProfileData] = useState<UserProfile[]>([]);
    const [matricula, setMatricula] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchProfileData().then(setProfileData);
    }, []);

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();

        // Check if the credentials match any user in profileData
        const user = profileData.find((user) =>
            user.id.toString() === matricula && user.password === password
        );

        if (user) {
            // Store session or token (this can be adapted based on your authentication mechanism)
            localStorage.setItem('user', JSON.stringify(user));

            // Redirect to the home page
            console.log(user)
            router.push('/');
        } else {
            // Show an error message
            setError('Matrícula ou senha incorreta.');
        }
    };

    return (
        <Flex
            direction="column"
            justify="center"
            align="center"
            className="p-2 text-white"
            style={{ minHeight: `calc(100vh - 57px)` }}
        >
            <Box className="w-full max-w-md rounded-lg  px-3 pt-20 pb-24 border border-[#3B3D41]">
                <Heading mb="5" size="7" className="text-white mb-24">
                    Faça seu login
                </Heading>
                <form onSubmit={handleLogin}>
                    {error && (
                        <Box mb="3" className="text-red-500">
                            {error}
                        </Box>
                    )}
                    <Box mb="3">
                        <TextField.Root size="3"
                            type="text"
                            value={matricula}
                            onChange={(e) => setMatricula(e.target.value)}
                            placeholder="Digite sua matrícula ou Siape"
                        >
                        </TextField.Root>
                    </Box>
                    <Box mb="3">
                        <TextField.Root size="3"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Digite sua Senha"
                        >
                        </TextField.Root>
                    </Box>
                    <Button
                        mt="4"
                        type="submit"
                        size="4"
                        className="w-full mt-4"
                    >
                        Login
                    </Button>
                </form>
            </Box>
        </Flex>
    );
}

export default Login;
