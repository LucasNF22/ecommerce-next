import prisma from '../lib/prisma'
import { initialData } from "./seed";
import { countries } from "./seed-countries";



async function main() {

    // 1. Borrar registros previos
    // await Promise.all([   
    await prisma.userAddress.deleteMany()
    await prisma.user.deleteMany()
    await prisma.country.deleteMany()

    await prisma.productImage.deleteMany()
    await prisma.product.deleteMany()
    await prisma.category.deleteMany()
    

    // ]);

    const { categories, products, users } = initialData;

    //Crear registros

    //Usuarios
    await prisma.user.createMany({
        data: users
    })

    await prisma.country.createMany({
        data: countries
    })

    //Categorias
    const categoriesData = categories.map( (name) => ({ name }));

    await prisma.category.createMany({
        data: categoriesData
    });
    

    const categoriesDB = await prisma.category.findMany()

    const categoriesMap = categoriesDB.reduce(( map,category ) => {

        map[ category.name.toLowerCase() ] = category.id;

        return map;

    }, {} as Record< string, string > ) //< strng=shirt, string=categoryID >


   // Productos
    
    products.forEach( async(product) => {

        const { type, images, ...rest} = product; // Se extra el type y las images como variables aparte del objeto product, y temabien se crea el resto de las variables bajo el nombre derest como un objeto nuevo.

        const dbProduct = await prisma.product.create({
            data: {
                ...rest,
                categoryId: categoriesMap[type]
            }
        })


        // Imagenes
        const imagesData = images.map( image => ({
            url: image, 
            productId: dbProduct.id
        }))

        await prisma.productImage.createMany({
            data: imagesData
        })

    })

    


   



    console.log('Seed ejecutado correctamente');
}


( () => {

    if( process.env.NODE_ENV === 'production') return;

    main();
})()