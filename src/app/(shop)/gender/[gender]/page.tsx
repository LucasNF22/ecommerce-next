import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import { Gender } from "@prisma/client";
import { notFound, redirect } from "next/navigation";


interface Props {
  params: {
    gender: string,
  },
  searchParams: {
    page?: string
  }
  
}

export default async function ({ params, searchParams }: Props ) {
  

  const { gender } = params;

  const page = searchParams.page ? parseInt(searchParams.page) : 1

  const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({ 
    page, 
    gender: gender as Gender
   });

  
  if ( products.length === 0 ){
    redirect(`/gender/${gender}`)
  }


  const genderLabels: Record<string, string> = { //Record es para especificar el tipo de un objeto. Primer argunmento es la key, y el segundo el tipo.
    'men': 'para Hombres',
    'women': 'para Mujeres',
    'kid': 'para Niños',
    'unisex': 'Unisex'
  }

  // if ( id === 'kids' ) {
  //   notFound();
  // }


  

  return (
    <>
      <Title 
        title={`Articulos ${ (genderLabels as any)[gender]}` } // Arreglar tema de tipos de datos
        subtitle="Todos los productos"
        className="mb-2 "
      />

      <ProductGrid   
        products={ products }
      />

      <Pagination  totalPages={totalPages}/>
      
    </>
  );
}