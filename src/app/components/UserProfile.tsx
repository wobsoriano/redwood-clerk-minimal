'use client';
import { UserProfile as ClientUserProfile } from "@clerk/clerk-react"
import type { UserProfileProps } from "@clerk/types"

export const UserProfile = (props: UserProfileProps) => {
  return <ClientUserProfile {...props} />;
}
