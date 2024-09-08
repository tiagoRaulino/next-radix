// components/Navbar.tsx

import React, { useState } from 'react';
import { Flex } from '@radix-ui/themes';
import { Button } from '@radix-ui/themes';
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
                style={{ backgroundColor: "var(--accent)" }} // Use Radix accent color
            >
                {/* Logo Section */}
                <div className="text-2xl font-bold">
                    <Link href="/">Portuno</Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-4">
                    <Link href="/about">
                        <Button variant="ghost" className="text-white">About</Button>
                    </Link>
                    <Link href="/services">
                        <Button variant="ghost" className="text-white">Services</Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="ghost" className="text-white">Contact</Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <Button onClick={toggleMenu} className="text-white">
                        {isOpen ? 'Close' : 'Menu'}
                    </Button>
                </div>
            </Flex>

            {/* Mobile Menu */}
            {isOpen && (
                <Flex
                    as="div"
                    direction="column"
                    align="center"
                    className="bg-gray-800 text-white p-4 md:hidden"
                >
                    <Link href="/about">
                        <Button variant="ghost" className="text-white">About</Button>
                    </Link>

                    <Link href="/services">
                        <Button variant="ghost" className="text-white">Services</Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="ghost" className="text-white">Contact</Button>
                    </Link>
                </Flex>
            )}
        </header>
    );
};

export default Navbar;
