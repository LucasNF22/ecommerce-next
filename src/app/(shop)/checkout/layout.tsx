import { auth } from "@/auth.config";
import { redirect } from "next/navigation";

export default async function CheckoutLayout({children}: {
    children: React.ReactNode;
}) {
    const session = await auth();
    
        if( !session?.user ){
            redirect('/auth/login?redirectTo=/checkout/address');
            // redirect('/auth/login?returnTo=/perfil') // una vez loguedo lo redirige de nuevo al perfil
        }
    
    return (
        <>
            { children }
        </>
    );
}