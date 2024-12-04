import { ProductGrid, Title } from "@/components";
import { Validcategory } from "@/interfaces";
import { initialData,  } from "@/seed/seed";
import { notFound, useSearchParams } from "next/navigation";

const products = initialData.products;

interface Props {
  params: {
    id: Validcategory,

  }
}

export default function ({ params }: Props ) {
  

  const searchParams = useSearchParams();
  const gender = searchParams.get('gender');

  const { id } = params;
  const filteredProducts = products.filter( products => 
     products.gender == gender
  )

  const genderLabels: Record<Validcategory, string> = { //Record es para especificar el tipo de un objeto. Primer argunmento es la key, y el segundo el tipo.
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
        title={`Articulos ${ (genderLabels as any)[id]}` } // Arreglar tema de tipos de datos
        subtitle="Todos los productos"
        className="mb-2 "
      />

      <ProductGrid   
        products={ filteredProducts }
      />
      
    </>
  );
}