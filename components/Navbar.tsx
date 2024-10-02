'use client';

import React, { useState, useEffect } from 'react';
import { Flex, Button, IconButton } from '@radix-ui/themes';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            try {
                const parsedUser = JSON.parse(loggedInUser);
                console.log("Parsed User: ", parsedUser); // Debugging log
                // Check if the parsed user has an `id` property
                if (parsedUser.id) {
                    setUserId(parsedUser.id);
                    setIsLoggedIn(true);
                } else {
                    console.error("User object does not have an 'id' property.");
                }
            } catch (error) {
                console.error("Error parsing user data from localStorage: ", error);
            }
        }
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogoff = () => {
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        setUserId(null);
        router.push('/login');
    };

    return (
        <header>
            <Flex
                className='border-b border-[var(--gray-6)]'
                as="div"
                justify="between"
                align="center"
                px="4"
                py="3"
            >
                {/* Brand */}
                <div className="text-2xl font-bold">
                    <Link href="/">Portuno</Link>
                </div>

                {/* Navegação Desktop */}
                <Flex>
                    <Flex className="hidden md:flex gap-4 my-auto mr-4 justify-center">
                        <Link className="text-white font-medium my-auto" href="/">
                            Salas
                        </Link>
                        <Link className="text-white font-medium my-auto" href="/credentials">
                            Credenciais
                        </Link>
                        <Link className="text-white font-medium my-auto" href="/dashboard">
                            Dashboard
                        </Link>
                        {isLoggedIn && userId ? (
                            <Link className="text-white font-medium my-auto" href={`/profile/${userId}`}>
                                Perfil
                            </Link>
                        ) : (
                            <Link className="text-white font-medium my-auto" href="/login">
                                Login
                            </Link>
                        )}
                        {isLoggedIn ? (
                            <Button onClick={handleLogoff} className="text-white">
                                Logoff
                            </Button>
                        ) : (
                            <Link href="/login">
                                <Button>Login</Button>
                            </Link>
                        )}
                    </Flex>
                </Flex>

                {/* Botão Navegação Mobile */}
                <div className="md:hidden">
                    <IconButton variant="ghost" onClick={toggleMenu} className='text-white my-auto' size="3">
                        <HamburgerMenuIcon />
                    </IconButton>
                </div>
            </Flex>

            {/* Navegação Mobile */}
            {isOpen && (
                <Flex
                    gap="1"
                    as="div"
                    direction="column"
                    className="bg-zinc-900 text-white px-4 py-2 md:hidden"
                >
                    <Link className="text-white my-auto text-sm" href="/">
                        Salas
                    </Link>
                    <Link className="text-white my-auto text-sm" href="/credentials">
                        Credenciais
                    </Link>
                    <Link className="text-white my-auto text-sm" href="/dashboard">
                        Dashboard
                    </Link>
                    {isLoggedIn && userId ? (
                        <Link className="text-white my-auto text-sm" href={`/profile/${userId}`}>
                            Perfil
                        </Link>
                    ) : (
                        <Link className="text-white my-auto text-sm" href="/login">
                            Login
                        </Link>
                    )}
                    {isLoggedIn ? (
                        <button onClick={handleLogoff} className="text-white my-auto text-sm">
                            Logoff
                        </button>
                    ) : (
                        <Link className="text-white my-auto text-sm" href="/login">
                            Login
                        </Link>
                    )}
                </Flex>
            )}
        </header>
    );
};

export default Navbar;
