'use client'

import { getStockBySlug } from "@/actions"
import { titleFont } from "@/config/fonts"
import { useEffect, useState } from "react"



interface Props {
    slug: string
}


export const StockLabel = ({ slug }:Props) => {
    
    const [stock, setStock] = useState(0);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> {
        getStock()
    },[])

    const getStock = async()=> {
        const inStock = await getStockBySlug(slug)
        setStock(inStock)
        setIsLoading(false)
    }


    return (
        <>
        {
            isLoading 
            ?
            (<h1 className={`${titleFont} antialiased font-bold text-sm bg-slate-300 animate-pulse max-w-20 mb-3`}>
                &nbsp;
            </h1>)
            :
            (<h1 className={`${titleFont} antialiased font-bold text-sm mb-3`}>
                Stock: { stock } disponibles
            </h1>)
        }
        </>
    )
}

export default StockLabel