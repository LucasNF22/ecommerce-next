'use client'

import { titleFont } from "@/config/fonts"
import prisma from "@/lib/prisma"


interface Props {
    slug: string
}


export const StockLabel = ({ slug }:Props) => {

    // const product = prisma.product.findFirst(where:{ slug: slug})


    return (
        <h1 className={`${titleFont} antialiased font-bold text-sm`}>
            Stock: 150
        </h1>
    )
}

export default StockLabel