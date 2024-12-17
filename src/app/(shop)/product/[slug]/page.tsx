export const revalidate = 604.800 // 7 días en segundos

import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

import { titleFont } from "@/config/fonts";

import { QuantitySelector, SizeSelector, ProductSlideshow, ProductMobileSlideshow, StockLabel } from "@/components";

import { getProductBySlug } from "@/actions";




interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = (await params).slug
 
  // fetch data
  const product = await getProductBySlug(slug);
 
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: product?.title ?? 'Producto no encontrado',
    description: product?.description,
    openGraph: {
      title: product?.title ?? 'Producto no encontrado',
      description: product?.description,
      // images: [http://misitio.com/products/image.png] // para cuando este en produccion
      images: [`/products/${product?.images[1]}`],
    },
  }
}



export default async function ProductSlugPage({ params }: Props ) {

  const { slug } = params;
  const product = await getProductBySlug(slug);

  

  if( !product ){
    notFound()
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3 md:max-w-[1400px] justify-self-center">

      {/* SlideShow */}
      <div className="col-span-1 md:col-span-2">
        
        {/* Mobile SlideShow */}
        <ProductMobileSlideshow 
          title={ product.title }
          images={ product.images }
          className="block md:hidden "
        />
        
        {/* Desktop SlideShow */}
        <ProductSlideshow
          title={ product.title }
          images={ product.images }
          className="hidden md:block"
        />

      </div>


      {/*  Detalles */}
      <div className="col-span-1 px-5 ">

        
        <h1 className={`${ titleFont} antialiased font-bold text-xl`}>
          { product.title }
        </h1>
        <p className="text-lg mb-5 ">${ product.price }</p>

        {/* Selector de tallas */}
        <SizeSelector 
          availableSizes={ product.sizes }
          selectedSize={ product.sizes[0] }
        />

        <StockLabel slug={slug} />

        {/* Selector de cantidad */}
        <QuantitySelector quantity={1}/>
        
        {/* Boton */}
        <button className="btn-primary my-5">
          Agregar al carrito
        </button>

        {/* Description */}
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">{ product.description }</p>

      </div>


    </div>
  );
}