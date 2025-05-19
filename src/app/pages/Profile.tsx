import { Layout } from "../components/Layout";
import { UserProfile } from "@/app/components/UserProfile"
import { UserButton } from "@/app/components/UserButton"
import { clerkClient } from "@/app/lib/clerkClient";
import type { RequestInfo } from "rwsdk/worker";

export async function Profile({ ctx }: RequestInfo) {
  // We have an interruptor and we're sure ctx.auth is available
  const { userId } = ctx.auth!

  const user = await clerkClient.users.getUser(userId!)

  return (
    <Layout>
      <div>Welcome, { user.fullName }. </div>
      <UserButton />
      <UserProfile />
    </Layout>
  );
}
