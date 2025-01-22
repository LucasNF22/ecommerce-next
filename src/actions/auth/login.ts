"use server";

import { signIn } from "@/auth.config";


export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", {
      ...Object.fromEntries(formData),
      redirect: false,
    });

    return "Success";

  } catch (error) { 

    if ( (error as any).type === "CredentialsSignin") {
      return "CredentialsSignin";
    }

    return "Error desconocido";
  }
}


export const Login = async(email: string, password: string) => {

  try {
    await signIn('credentials', { email, password });


  } catch (error) {
    console.log(error)
  }
}