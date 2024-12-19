'use client'


import { useState } from 'react'
import { SizeSelector, StockLabel, QuantitySelector } from '@/components'
import { Product, ValidSize } from '@/interfaces'



interface Props {
    product: Product,
}

export const AddToCart = ({product}:Props) => {

    const [size, setSize] = useState<ValidSize|undefined>();
    const [quantity, setQuantity] = useState<number>(1);

    const addToCart = () => {
        console.log(size, quantity)
    }


    return (
        <>
            {/* Selector de tallas */}
            <SizeSelector
                selectedSize={size}
                availableSizes={product.sizes}
                onSizeChange={ setSize } // forma abreviada de size => setSize(size). Lo que recibe como argumento la funcion lo envia como referencia. 
                
            />

            <StockLabel slug={product.slug} />

            {/* Selector de cantidad */}
            <QuantitySelector 
                quantity={quantity} 
                onQuantityChange={ setQuantity }
            />
            
            {/* Boton */}
            <button 
                className="btn-primary my-5"
                onClick={ addToCart }
            >
                Agregar al carrito
            </button>
        </>
    )
}
