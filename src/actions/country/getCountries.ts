import prisma from "@/lib/prisma";


export const getCountries = async() => {

    const countries = await prisma.country.findMany({
        orderBy: {
            name: 'asc'
        }
    });

    return countries;


    try {
        
    } catch (error) {
        console.log(error);
        return [];
        
    }

}