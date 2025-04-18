'use client'

import Link from "next/link"
import clsx from "clsx"
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from "react-icons/io5"

import { useUiStore } from "@/store"
import { logout } from "@/actions"
import { useSession } from "next-auth/react"




export const SidebarMenu = () => {

  const isSideMenuOPen = useUiStore((state) => state.isSideMenuOpen);
  const closeSideMenu = useUiStore((state) => state.closeSideMenu);

  const { data: session } = useSession();

  const isAuthenticated = !!session?.user;
  const isAdmin = (session?.user.role === "admin");

  const handleLogOut = () => {
    logout(); 
    closeSideMenu(); 
    window.location.reload()
  }

  // console.log(isAdmin);


  return (

    <div>

      {/* Background black */}
      {
        isSideMenuOPen && (
          <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30 " />
        )
      }

      {/* Blur */}
      {
        isSideMenuOPen && (
          <div
            onClick={closeSideMenu}
            className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm "
          />
        )
      }

      {/* Sidemenu */}
      <nav
        className={
          clsx(
            'fixed p-5 right-0 top-0 w-[500PX] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300',
            {
              "translate-x-full": !isSideMenuOPen
            }
          )
        }
      >
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={closeSideMenu}
        />

        {/* Input */}
        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Menú */}
        {
          isAuthenticated && (
            <>
              <Link
                href={'/profile'}
                className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                onClick={closeSideMenu}
              >
                <IoPersonOutline size={30} />
                <span className="ml-3 text-xl">Perfil</span>
              </Link>

              <Link
                href={'./'}
                className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
              >
                <IoTicketOutline size={30} />
                <span className="ml-3 text-xl">Órdenes</span>
              </Link> 
            </>
          )
        }

        {
          (!isAuthenticated)

            ? (<Link
              href={'/auth/login'}
              onClick={closeSideMenu}
              className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoLogInOutline size={30} />
              <span className="ml-3 text-xl">Ingresar</span>
            </Link>)

            : (<button
              className="w-full flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
              onClick={handleLogOut }
            >
              <IoLogOutOutline size={30} />
              <span className="ml-3 text-xl">Salir</span>
            </button>)
        }

        

        {
          (isAdmin) &&

          <>
            {/* Separador */}
            <div className="w-ful  h-px bg-gray-200 my-10" />

            <Link
              href={'./'}
              className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoShirtOutline size={30} />
              <span className="ml-3 text-xl">Productos</span>
            </Link>

            <Link
              href={'./'}
              className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoTicketOutline size={30} />
              <span className="ml-3 text-xl">Órdenes</span>
            </Link>

            <Link
              href={'./'}
              className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoPeopleOutline size={30} />
              <span className="ml-3 text-xl">Usuarios</span>
            </Link>


          </>

        }

      </nav>

    </div>

  )
}
