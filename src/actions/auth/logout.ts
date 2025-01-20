'use server'

import { signOut } from "@/auth.config"




export const logout = async() => {
    
    try {
        await signOut({
            redirect: true,
            redirectTo: '/auth/login',
        })
        
        
    } catch (error) {
        return 'CredentialsSignOut'
    }
    
}