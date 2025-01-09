'use client'

import { QuantitySelector } from "@/components/product/quantity-selector/QuantitySelector"
import { useCartStore } from "@/store"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"


export const ProductsInCart = () => {

    const updateProductQuantity = useCartStore( state => state.updateProductQuantity );
    const [loaded, setLoaded] = useState(false);
    const productsInCart = useCartStore( state => state.cart );
    const removeProduct = useCartStore( state => state.removeProduct );

    useEffect(() => {
      setLoaded(true)
    }, []);
    

    if( !loaded ){
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
                            <Link 
                                href={`./product/${product.slug}`}
                                className="hover:underline cursor-pointer"
                            >
                                {product.title} - { product.size }
                            </Link>
                            <p>${product.price}</p>

                            <QuantitySelector 
                                onQuantityChange={ quantity => updateProductQuantity(product, quantity) }
                                quantity={product.quantity} 
                            />

                            <button 
                                className="underline mt-3"
                                onClick={ ()=>removeProduct(product) }    
                            >

                                Remover
                            </button>

                        </div>


                    </div>


                ))
            }
            <Link href={'/'} className="bg-slate-400 p-2 rounded-md  text-white flex justify-center items-center text-center mb-5">
                Continuar comprando
            </Link>
        </>
    )
}
