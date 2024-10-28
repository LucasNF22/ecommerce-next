
import { titleFont } from "@/config/fonts"
import Link from "next/link"



export const Footer = () => {


    return (
        <div className="flex w-full flex-col items-center pb-5 ">

            <div className="flex justify-center text-xs mb-2">

                <Link
                    href={'/'}
                >
                    <span className={`${titleFont.className} antialiased font-bold`}>Ecommerce </span>
                    <span>| NEXT </span>
                    <span>© {new Date().getFullYear()} </span>
                </Link>

                <Link
                    href={"/"}
                    className="ml-4"
                >
                    Priovacidad y Legales
                </Link>

                <Link
                    href={"/"}
                    className="ml-4"
                >
                    Contacto
                </Link>

            </div>

            <div>
                <span>{" By -> "}</span>
                <span className=" "> LNF-DEV</span>
            </div>

        </div>
    )
}
