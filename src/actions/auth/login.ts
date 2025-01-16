'use server'

import { signIn } from '@/auth.config'
import { sleep } from '@/utils';

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
){
    try {
        await signIn('credentials', {...Object.fromEntries(formData), redirect:false});
        return 'success'

    } catch (error) {
        // if((error as Error).message.includes('credentials')){
        // }
        return 'credentialsSignin'
    }
}