'use client'


import { useAddressStore, useCartStore } from "@/store";
import { currencyFormatter } from "@/utils";
import Link from "next/link"
import { useEffect, useState } from "react"


export const PlaceOrder = () => {

  const [loaded, setLoaded] = useState(false);

  const addresss = useAddressStore( state => state.address );

  const { getSummaryInformation } = useCartStore()

  const { itemsInCart, subTotal, tax, total } = getSummaryInformation()  
  
  useEffect(() => {
    setLoaded(true)
  }, [])

  if( !loaded ){
    return <p>Cargando...</p>
  }

  return (
    
      <div className="bg-white rounded-xl shadow-xl p-7 h-fit ">

        <h2 className="text-2xl mb-2">Dirección de entrega</h2>
        <div className="mb-10">
          <p className="text-xl">{addresss.firstName} {addresss.lastName} </p>
          <p>{addresss.address}</p>
          <p>{addresss.address2}</p>
          <p>CP: {addresss.postalCode}</p>
          <p>{addresss.city}, {addresss.country}</p>
          <p>{addresss.phone}</p>
        </div>

        {/* Divider */}
        <div
          className="w-full h-0.5 bg-gray-200 mb-10 rounded drop-shadow-sm"
        />


        <h2 className="text-2xl mb-2">Resumen de orden</h2>

        <div className="grid grid-cols-2">
        
              <span>Nro.productos</span>
              <span className="text-right">{itemsInCart === 1 ? '1 artículo' : `${itemsInCart} artículos`}</span>
        
              <span>Subtotal</span>
              <span className="text-right">$ {currencyFormatter(subTotal)}</span>
        
              <span>Impuestos (%21)</span>
              <span className="text-right">$ {currencyFormatter(tax)}</span>
        
              <span className="text-2xl mt-5">Total</span>
              <span className="text-2xl mt-5 text-right">$ {currencyFormatter(total)}</span>
        
            </div>
        

        <div className="mt-5 mb-2 w-full">

          {/* Disclaimer */}
          <p className="mb-5">
            <span className="text-xs mb-5">
              Al hacer click en &quotContinuar&quot, está aceptando nuestros <a href="#" className="underline">términos y condiciones</a> y <a href="#" className="underline">política de privacidad</a>
            </span>
          </p>

          <Link
            className="flex btn-primary justify-center"
            href={'/orders/123'}
          >
            Continuar
          </Link>
        </div>


      </div>
 

  )
}
