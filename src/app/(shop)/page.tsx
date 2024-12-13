export const revalidate = 60 // segundos

import { redirect } from "next/navigation";

import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";


interface Props {
  searchParams: {
    page?: string
  }
}


export default async function HomePage({ searchParams }: Props) {

  const page = searchParams.page ? parseInt(searchParams.page) : 1

  const { products, totalPages } = await getPaginatedProductsWithImages({page});

  
  if ( products.length === 0 ){
    redirect('/')
  }


 
  
  return (
    <>
      <Title 
        title="Tienda"
        subtitle="Todos los productos"
        className="mb-2 px-5 md:px-0"
      />

      <ProductGrid 
        products={ products }
      />
      
      <Pagination totalPages={totalPages} />
    </>
  );
}
