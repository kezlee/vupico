"use client"

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.webp";
import { NavLinks } from "../constant";
import { usePathname } from 'next/navigation'

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false)
  const updateMenu = () => {
    setShowMenu(!showMenu)
  }
  const pathname = usePathname()

  useEffect(() => {
    setShowMenu(false)
  }, [pathname])

  return (
    <>
      <nav className="bg-[--primary] header-area">
        <div className="container mx-auto px-6 flex items-center justify-between h-20">
          <div>
            <Image
              style={{
                maxWidth: "200px",
                width: "100%",
                height: "auto",
              }}
              src={Logo}
              alt="Logo"
              priority
            />
          </div>
          <ul className="lg:flex hidden text-white ">
            {NavLinks.map((link, index) => (
              <li key={index} className="px-5">
                <Link href={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <button className="lg:hidden relative w-[32px] h-[40px]" onClick={updateMenu}>
            <span className={`${showMenu 
              ? 'bg-transparent before:translate-y-[6px] before:w-full before:translate-x-[1px] before:rotate-45 after:w-full after:translate-y-[-6px] after:translate-x-[1px] after:-rotate-45' 
              : 'after:w-[75%] before:w-[75%] bg-white'} 
              w-[30px] h-[2px] absolute top-[16px] left-0 duration-400 ease-in-out transition-all before:top-[-10px] before:h-[2px] before:absolute before:origin-[33%_100%] before:left-0 before:bg-white after:top-[10px] after:left-0 after:w-[75%] after:h-[2px] after:absolute after:bg-white after:origin-[33%_0] before:duration-400 before:ease-in-out before:transition-all after:duration-400 after:ease-in-out after:transition-all`}></span>
          </button>
        </div>
      </nav>
      
      <div className={`${showMenu ? 'right-0 translate-x-[0]' : 'right-[-200px] translate-x-[100]'} h-[100vh] duration-1000 ease-in-out transition-all lg:hidden text-white h-[100vh] bg-white w-[200px] fixed  top-[80px] z-[99] text-[16px]`}>
        <ul className="text-[--primary] mt-4">
          {NavLinks.map((link, index) => (
            <li key={index} className="px-5 py-2">
              <Link href={link.url}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      
    </>

  );
};

export default Navbar;
