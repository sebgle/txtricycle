'use client';

import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react';
import { toggle } from '@heroui/theme';

export default function Navbar() {

    {/* Open and close the navigation menu */}
    const [menu, setMenu] = useState(false);

    function toggleMenu() {
        setMenu(!menu);
    };


    return (
        <section className='flex justify-between items-center p-6 shadow-lg'>
            <Link href="/">
                <Image 
                    src="/logo.svg" 
                    alt="Logo" 
                    width={100} 
                    height={100} 
                />
            </Link>
            {menu ? <X size={60} onClick={toggleMenu}/> : <Menu size={60} onClick={toggleMenu}/>}
        </section>
    );
}