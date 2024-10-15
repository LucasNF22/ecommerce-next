import { notFound } from "next/navigation";


interface Props {
  params: {
    id: string,

  }
}

export default function ({ params }: Props ) {

  const { id } = params;

  if ( id === 'kids' ) {
    notFound();
  }

  return (
    <div>
      <h1 className="tetbold">Cart page { id } </h1>
    </div>
  );
}