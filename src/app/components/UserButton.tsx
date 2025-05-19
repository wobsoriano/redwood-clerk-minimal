'use client';
import { UserButton as ClientUserButton } from "@clerk/clerk-react"
import type { UserButtonProps } from "@clerk/types"

export const UserButton = (props: UserButtonProps) => {
  return <ClientUserButton {...props} />;
}
