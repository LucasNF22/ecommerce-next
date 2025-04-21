'user server'

import type { Address } from "@/interfaces";
import prisma from "@/lib/prisma";

export const setUserAddress = async( address: Address, userId: string )=> {
    
    
    try {




    } catch (error) {
        console.log(error);
        return{
            ok: false,
            message: 'No se pudo grabar la dirección'
        }
        
    }
}


const createOrReplaceAddress = async (address: Address, userId: string) => {
    try {

        const storedAddress = await prisma.userAddress.findUnique({
            where: {
                userId: userId
            }
        })

        if(! storedAddress ) {

        }


        
    } catch (error) {
        console.log(error);
        throw new Error('No se pudo grabar la dirección')
    }
}