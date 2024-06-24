
"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { IoMdClose } from 'react-icons/io';

const Header = () => {
    // State to manage the mobile menu visibility
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

    // Function to toggle mobile menu visibility
    const toggleMobileMenu = () => {
        setMobileMenuVisible(!mobileMenuVisible);
    };

    const navMenu = [
        {
            id: 1,
            name: "Homepage",
            link: "/"
        },
        {
            id: 2,
            name: "Offers",
            link: "/"
        },
        {
            id: 3,
            name: "Requests",
            link: "/"
        },
        {
            id: 4,
            name: "Deels",
            link: "/"
        }
    ];

    const navAuth = [
        {
            id: 1,
            name: "Login",
            link: "/"
        },
        {
            id: 2,
            name: "Sign up",
            link: "/"
        },
        {
            id: 3,
            name: "En",
            link: "/",
            icon: "^"
        }
    ];

    return (
        <main className="w-full flex justify-between items-center fixed top-0 bg-opacity-10 backdrop-blur-md shadow-lg h-16 z-20">
            <div className="flex w-full px-4 md:px-12 justify-between items-center shadow-custom">
                <div className="pr-2">
                    <Link href='/'>
                        <Image src="/images/Logo-Deel-With-Me.png" alt="logo-image" width={60} height={40} />
                    </Link>
                </div>
                <div className="hidden lg:flex space-x-5 justify-center items-center">
                    {navMenu.map((menu) => (
                        <Link key={menu.id} href={menu.link}>
                            <span className="text-sm hover:text-gray-400">{menu.name}</span>
                        </Link>
                    ))}
                    <div className='pr-4' />
                    {navAuth.map((menu) => (
                        <Link key={menu.id} href={menu.link}>
                            <span className="text-xs text-gray-500 hover:text-gray-400">{menu.name}</span>
                        </Link>
                    ))}
                </div>
                {/* Toggle button for mobile menu */}
                <button
                    className="lg:hidden text-gray-500 focus:outline-none"
                    onClick={toggleMobileMenu}
                >
                    {mobileMenuVisible ? <IoMdClose /> : <TiThMenu />}
                </button>
            </div>
            {/* Mobile menu */}
            {mobileMenuVisible && (
                <div className="lg:hidden flex flex-col space-y-2 bg-white p-4 absolute top-14 right-0 w-48 shadow-2xl z-30">
                    {navMenu.map((menu) => (
                        <Link key={menu.id} href={menu.link}>
                            <span className="text-sm hover:text-gray-400">{menu.name}</span>
                        </Link>
                    ))}
                    {navAuth.map((menu) => (
                        <Link key={menu.id} href={menu.link}>
                            <span className="text-xs text-gray-500 hover:text-gray-400">{menu.name}</span>
                        </Link>
                    ))}
                </div>
            )}
        </main>
    );
};

export default Header;
