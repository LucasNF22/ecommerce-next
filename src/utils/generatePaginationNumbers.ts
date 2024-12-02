// [1,2,3,4,5,6,7]
// [1,2,3,4,...,50]

export const generatePaginationNumbers = ( currentPage: number, totalPages: number ) => {

    // Si el numero de paginas es 7 o menos
    // se muestran toas las paginas sin puntos suspensivos

    if( totalPages <= 7 ){
        return Array.from({ length: totalPages }, ( _, i )=> i + 1 )
    };

    // Si son mas de 7 paginas, 
    // si l pag actual esta entre las primeras 3 paginas, se muestras las primeras 3, los puntos susp y las ultimas 2 paginas
    if( currentPage <= 3 ){return [ 1,2,3,"...", totalPages - 1, totalPages]};

    // Si la pagina actual esta entre las ultimas 3 paginas, se muestras las primeras dos, los puntos suspy las ultimas 3
    if( currentPage >= ( totalPages - 2 ) ){
        return [1,2,"...", totalPages - 2, totalPages - 1, totalPages ]
    };

    // Si la pagina actual está en el medio, 
    // Mostrar la primera página, puntos, actual y vecinos, puntos y ultima
    
    return[
        1,
        "...",
        currentPage - 1, 
        currentPage,
        currentPage + 1,
        "...",
        totalPages
    ] 


}