'use client'

import React, { useState } from 'react';
import { Flex, Button, IconButton } from '@radix-ui/themes';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <Flex className='border-b border-[var(--gray-6)]'
                as="div"
                justify="between"
                align="center"
                px="4"
                py="3"
            >
                {/*Brand*/}
                <div className="text-2xl font-bold">
                    <Link href="/">Portuno</Link>
                </div>

                {/*Navegação Desktop*/}
                <div className="hidden md:flex gap-1 justify-center">
                    <Link href="/">
                        <Button variant="soft" className="text-white font-medium border-0">Salas</Button>
                    </Link>
                    <Link href="/credentials">
                        <Button variant="soft" className="text-white font-medium">Credenciais</Button>
                    </Link>
                    <Link href="/ajuda">
                        <Button variant="soft" className="text-white font-medium">Ajuda</Button>
                    </Link>
                    <Link href="/profile/527898">
                        <Button variant="soft" className="text-white font-medium">Perfil</Button>
                    </Link>
                    <Link href="/login">
                        <Button className="text-white font-medium">Login</Button>
                    </Link>
                </div>

                {/*Botão Navegação Mobile*/}
                <div className="md:hidden">
                    <IconButton variant="ghost" onClick={toggleMenu} className='text-white my-auto' size="3">
                        <HamburgerMenuIcon />
                    </IconButton>
                </div>
            </Flex>

            {/*Navegação Mobile*/}
            {
                isOpen && (
                    <Flex
                        gap="1"
                        as="div"
                        direction="column"
                        className="bg-zinc-900 text-white px-4 py-2 md:hidden"
                    >
                        <Link href="/">
                            <Button variant="ghost" className="text-white font-medium">Salas</Button>
                        </Link>
                        <Link href="/credentials">
                            <Button variant="ghost" className="text-white font-medium">Credenciais</Button>
                        </Link>
                        <Link href="/ajuda">
                            <Button variant="ghost" className="text-white font-medium">Ajuda</Button>
                        </Link>
                        <Link href="/profile/527898">
                            <Button variant="ghost" className="text-white font-medium">Perfil</Button>
                        </Link>
                    </Flex>
                )
            }
        </header >
    );
};

export default Navbar;
