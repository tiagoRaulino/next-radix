'use client'

import React, { useState } from 'react';
import { Flex, Button } from '@radix-ui/themes';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <Flex
                as="div"
                justify="between"
                align="center"
                px="4"
                py="2"
                style={{ borderBottom: '1px solid var(--gray-6)' }}
            >
            {/*Brand*/}
            <div className="text-2xl font-bold">
                <Link href="/">Portuno</Link>
            </div>

            {/*Navegação Desktop*/}
            <div className="hidden md:flex gap-4">
                <Link href="/">
                    <Button variant="ghost" className="text-white">Salas</Button>
                </Link>
                <Link href="/credentials">
                    <Button variant="ghost" className="text-white">Credenciais</Button>
                </Link>
                <Link href="/ajuda">
                    <Button variant="ghost" className="text-white">Ajuda</Button>
                </Link>
                <Link href="/profile/1">
                    <Button variant="ghost" className="text-white">Perfil</Button>
                </Link>
            </div>

            {/*Botão Navegação Mobile*/}
            <div className="md:hidden">
                <Button variant="ghost" onClick={toggleMenu} className="text-white">
                    <HamburgerMenuIcon />
                </Button>
            </div>
        </Flex>

            {/*Navegação Mobile*/ }
    {
        isOpen && (
            <Flex
                as="div"
                direction="column"
                className="text-white p-4 md:hidden"
            >
                <Link href="/">
                    <Button variant="ghost" className="text-white">Salas</Button>
                </Link>
                <Link href="/credentials">
                    <Button variant="ghost" className="text-white">Credenciais</Button>
                </Link>
                <Link href="/ajuda">
                    <Button variant="ghost" className="text-white">Ajuda</Button>
                </Link>
                <Link href="/profile/1">
                    <Button variant="ghost" className="text-white">Perfil</Button>
                </Link>
            </Flex>
        )
    }
        </header >
    );
};

export default Navbar;
