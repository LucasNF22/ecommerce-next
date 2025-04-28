'use client'


import { useCartStore } from "@/store"
import { currencyFormatter } from "@/utils"
import Image from "next/image"
import { useEffect, useState } from "react"


export const ProductsInCart = () => {

    const [loaded, setLoaded] = useState(false);
    const productsInCart = useCartStore(state => state.cart);


    useEffect(() => {
        setLoaded(true)
    }, []);


    if (!loaded) {
        return <p>Cargando...</p>
    }

    return (
        <>
            {
                productsInCart.map(product => (

                    <div
                        key={`${product.slug}-${product.size}`}
                        className="flex mb-5 border rounded-md"
                    >


                        <Image
                            src={`/products/${product.image}`}
                            width={100}
                            height={100}
                            style={{
                                width: '150px',
                                height: '150px'
                            }}
                            alt={product.title}
                            className="mr-5 rounded"
                        />


                        <div className="flex flex-col justify-center items-start">
                            <span>
                                {product.title} - {product.size} ({product.quantity})
                            </span>

                            <p className="font-bold">{currencyFormatter(product.price * product.quantity)}</p>
                   

                        </div>


                    </div>


                ))
            }
          
        </>
    )
}
