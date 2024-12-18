import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";


const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2]
];




export default function CartPage() {

  if( productsInCart.length === 0 ){ // Chequear si esta bien hecho

    redirect('/empty')
  }


  return (
    <div className="flex justify-center items-center mb72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">

        <Title title='Carrito' />
        

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Carrito */}
          <div className="flex flex-col ">
            
            


            {/* Items */}
            {
              productsInCart.map(product => (

                <div className="flex mb-5 border rounded-md" key={product.slug}>

                  
                    <Image
                      src={`/products/${product.images[0]}`}
                      width={100}
                      height={100}
                      style={{
                        width:'150px',
                        height:'150px'
                      }}
                      alt={product.title}
                      className="mr-5 rounded"
                    />
                  

                  <div className="flex flex-col justify-center items-start">
                    <p>{product.title}</p>
                    <p>${product.price}</p>

                    <QuantitySelector quantity={3} />

                    <button className="underline mt-3">
                      Remover
                    </button>

                  </div>


                </div>


              ))
            }
            <Link href={'/'} className="bg-slate-400 p-2 rounded-md  text-white flex justify-center items-center text-center mb-5">
              Continuar comprando
            </Link>
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