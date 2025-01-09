
export const currencyFormatter = ( value: number) =>{

    return new Intl.NumberFormat('ar-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value);
    
}
