import Link from "next/link";

import { ProductsInCart, Title } from "@/components";

import { redirect } from "next/navigation";





export default function CartPage() {


  // redirect('/empty')



  return (
    <div className="flex justify-center items-center mb72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">

        <Title title='Carrito' />


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Carrito */}
          <div className="flex flex-col ">


            {/* Items */}
            <ProductsInCart />          


          </div>


          {/* Checkout Resumen de orden */}
          <div className="bg-white rounded-xl shadow-xl p-7 h-fit ">
            <h2 className="text-2xl mb-2">Resumen de orden</h2>

            <div className="grid grid-cols-2">

              <span>Nro.productos</span>
              <span className="text-right">3 artículos</span>

              <span>Subtotal</span>
              <span className="text-right">$100</span>

              <span>Impuestos (%21)</span>
              <span className="text-right">$21</span>

              <span className="text-2xl mt-5">Total</span>
              <span className="text-2xl mt-5 text-right">$121</span>

            </div>

            <div className="mt-5 mb-2 w-full">
              <Link
                className="flex btn-primary justify-center"
                href={'/checkout/address'}
              >
                Checkout
              </Link>
            </div>


          </div>


        </div>

      </div>
    </div>
  );
}