'use client'


import { useState } from 'react'
import { SizeSelector, StockLabel, QuantitySelector } from '@/components'
import { CartProduct, Product, ValidSize } from '@/interfaces'
import { useCartStore } from '@/store'



interface Props {
    product: Product,
}

export const AddToCart = ({product}:Props) => {

    const addProductToCart = useCartStore( state => state.addProductToCart );

    const [size, setSize] = useState<ValidSize|undefined>();
    const [quantity, setQuantity] = useState<number>(1);
    const [posted, setPosted] = useState(false)


    const addToCart = () => {
        setPosted(true);
        if (!size ) return;

        console.log({size, quantity, product});
        const cartProduct: CartProduct = {
            id: product.id,
            slug: product.slug,
            title: product.title,
            price: product.price,
            quantity: quantity,
            size: size,
            image: product.images[0]
        }
        addProductToCart(cartProduct);
        //Se pueden hacer cosas como reiniciar los datos en pantalla seleccionados, agregar un popup con mensaje etc.
        setPosted(false);
        setQuantity(1);
        setSize(undefined);

    }


    return (
        <>
            {
                posted && !size && (
                    <span className='mt-2 text-red-500 fade-in transition-all'>
                        Debe seleccionar un talle
                    </span>
                )
            }   


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
                onClick={ addToCart }
                className="btn-primary my-5"
            >
                Agregar al carrito
            </button>
        </>
    )
}
