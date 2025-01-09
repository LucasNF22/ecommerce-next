'use client'

import { useCartStore } from "@/store";
import { currencyFormatter } from "@/utils";
import { useEffect, useState } from "react"


export const OrderSumary = () => {

  const [loaded, setLoaded] = useState(false);

  const { getSummaryInformation } = useCartStore()

  const { itemsInCart, subTotal, tax, total } = getSummaryInformation()
  
  useEffect(() => {
    setLoaded(true)
  }, [])
  

  if( !loaded ) return <p>cargando...</p>


  return (
          <div className="grid grid-cols-2">

        <span>Nro.productos</span>
        <span className="text-right">{ itemsInCart === 1 ? '1 artículo' : `${itemsInCart} artículos`  }</span>

        <span>Subtotal</span>
        <span className="text-right">$ { currencyFormatter(subTotal) }</span>

        <span>Impuestos (%21)</span>
        <span className="text-right">$ { currencyFormatter(tax) }</span>

        <span className="text-2xl mt-5">Total</span>
        <span className="text-2xl mt-5 text-right">$ { currencyFormatter(total) }</span>

      </div>
    
  )
}
