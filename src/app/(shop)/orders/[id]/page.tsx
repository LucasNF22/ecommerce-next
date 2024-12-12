import {  Title } from "@/components";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import Image from "next/image";
import { IoCardOutline, IoCubeOutline } from "react-icons/io5";


const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2]
];


interface Props {
  params: {
    id: string;
  }
}




export default function OrdersByIdPage({ params }: Props) {

  const { id } = params;


  //Todo verificar 
  //Todo Redireccionar




  return (
    <div className="flex justify-center items-center mb72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">

        <Title title={`Orden #${id}`} />


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Carrito */}
          <div className="flex flex-col ">

            <div className={
              clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  'bg-red-400': false,
                  'bg-green-700': true
                }
              )
            }>
              <IoCardOutline size={30} />
              {/* <span className="mx-2">Pendiente de pago</span> */}
              <span className="mx-2">Pagada</span>
            </div>


            {/* Items */}
            {
              productsInCart.map(product => (

                <div className="flex mb-5 border rounded-md " key={product.slug}>

                  <Image
                    src={`/products/${product.images[0]}`}
                    width={100}
                    height={100}
                    style={{
                      width: '150px',
                      height: '150px'
                    }}
                    alt={product.title}
                    className="mr-5 rounded"
                  />

                  <div className="flex flex-col justify-start pt-5 items-start">
                    <p>{product.title}</p>
                    <p>${product.price} x 3 </p>
                    <p className="font-bold">Subtotal: ${product.price * 3}</p>
                  </div>

                </div>

              ))
            }

          </div>


          {/* Checkout Resumen de orden */}
          <div className="bg-white rounded-xl shadow-xl p-7 h-fit ">

            <h2 className="text-2xl mb-2">Dirección de entrega</h2>
            <div className="mb-10">
              <p className="text-xl">Lucas Fiorentino</p>
              <p>Av. Siempre Viva, 123</p>
              <p>Springfield</p>
              <p>CP: 17145</p>
              <p>Buenas Aires, Argentina</p>
              <p>11-1234-3214</p>
            </div>

            {/* Divider */}
            <div
              className="w-full h-0.5 bg-gray-200 mb-10 rounded drop-shadow-sm"
            />


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

            <div className={
              clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white ",
                {
                  'bg-red-400': false,
                  'bg-green-700': true
                }
              )
            }>
              <IoCubeOutline size={30} />
              {/* <span className="mx-2">Pendiente de pago</span> */}
              <span className="mx-2">Entregada</span>
            </div>

            </div>


          </div>


        </div>

      </div>
    </div>
  );
}