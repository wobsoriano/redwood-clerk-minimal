'use client';
import { SignUp as ClientSignUp } from "@clerk/clerk-react"
import type { SignUpProps } from "@clerk/types"

export const SignUp = (props: SignUpProps) => {
  return <ClientSignUp {...props} />;
}
