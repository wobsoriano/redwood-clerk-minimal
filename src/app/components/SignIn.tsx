'use client';
import { SignIn as ClientSignIn } from "@clerk/clerk-react"
import type { SignInProps } from "@clerk/types"

export const SignIn = (props: SignInProps) => {
  return <ClientSignIn {...props} />;
}
