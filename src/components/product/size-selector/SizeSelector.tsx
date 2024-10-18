import type { ValidSize } from "@/interfaces"
import clsx from "clsx";

interface Props {
  selectedSize: ValidSize;
  availableSizes: ValidSize[];
}

export const SizeSelector = ({ selectedSize, availableSizes }:Props) => {
  return (
    <div className="my-5">
      <h3 className="font-bold mb-2">Talles</h3>
      
      <div className="flex" >
        {
          availableSizes.map( size => (
            <button 
              key={size}
              className={ 
                clsx(
                  'mr-4 font-semibold hover:underline hover:decoration-2 underline-offset-4 text-md',
                  {
                    'underline underline-offset-4 decoration-4 ': size=== selectedSize
                  }
                )
              }
            >
              { size }
            </button>
          ))
        }

      </div>

    </div>
  )
}
