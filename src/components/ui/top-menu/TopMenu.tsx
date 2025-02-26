'use client'

import { useEffect, useState } from "react";
import Link from "next/link"


import { titleFont } from "@/config/fonts"
import { IoCartOutline, IoMenuOutline, IoSearchOutline } from "react-icons/io5"
import { useCartStore, useUiStore } from "@/store";



export const TopMenu = () => {


    const openSidemMenu = useUiStore(state => state.openSideMenu);

    const totalItemsInCart = useCartStore(state => state.getTotalItems());

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      setLoaded(true);    
    }, [])
    

    return (
        <nav className="flex px-5 justify-between items-center w-full">

            {/* Logo */}
            <div className="">
                <Link
                    href='/'>
                    <span className={`${titleFont.className} antialiased font-bold`}>Home</span>
                    <span > | SHOP</span>
                </Link>
            </div>

            {/* Center Menu */}
            <div className="hidden sm:block">
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href='/gender/men'>Hombres</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href='/gender/women'>Mujeres</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href='/gender/kid'>Niños</Link>
            </div>

            {/* Search, cart, Manu */}
            <div className="flex items-center">

                <Link href={'/search'} className="mx-2">
                    <IoSearchOutline className="w-5 h-5" />
                </Link>

                <Link 
                    href={
                        ( loaded && (totalItemsInCart === 0)  )
                            ? '/empty'
                            : '/cart'
                        } 
                    className="mx-2"
                    >
                    <div className="relative">
                        {
                            ( loaded && totalItemsInCart > 0 ) && (
                                <span className="fade-in bounce absolute text-xs rounded-full px-1 font-bold bg-red-500 -top-2 -right-2">
                                    {totalItemsInCart}
                                </span>
                            )

                        }

                        <IoCartOutline className="w-5 h-5" />
                    </div>
                </Link>

                <button
                    className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
                    onClick={openSidemMenu}
                >
                    <IoMenuOutline

                    />
                </button>

            </div>

        </nav>
    )
}