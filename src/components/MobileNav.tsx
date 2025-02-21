"use client";

import React from 'react'
import { Sheet,SheetContent,SheetTrigger } from './ui/sheet';
import { usePathname } from 'next/navigation';
import {CiMenuFries} from "react-icons/ci"
import Link from 'next/link';

const links = [
    {
        name:"Home",
        path:"/",
    },
    {
        name:"Services",
        path:"/services",
    },
    {
        name:"Resume",
        path:"/resume",
    },
    {
        name:"Work",
        path:"/work",
    },
    {
        name:"Contact",
        path:"/contact",
    },
];


const MobileNav = () => {
    const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className='text-[32px] text-accent' />
      </SheetTrigger>
      <SheetContent>
        {/* Logo */}
        <div className='mt-32 mb-40 text-center text-2xl'>
        
        <Link href="/">
        <h1 className='text-4xl font-semibold'>
            Daniyal<span className='text-accent'>.</span>
        </h1>
        </Link>
        </div>
            <nav className='flex flex-col justify-center items-center gap-6'>
                {links.map((link, index) =>{
                    return(
                        <Link
                        href={link.path} 
                        key={index} 
                        className={`${link.path === pathname &&
                        "text-accent border-b-2 border-accent"}
                        "text-xl capitalize hover:text-accent transition-all"`}>
                            {link.name}
                        </Link>
                    );
                })}
            
            </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
