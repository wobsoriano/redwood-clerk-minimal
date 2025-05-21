import { Layout } from "@/app/components/Layout";
import { UserButton, UserProfile } from "redwood-clerk"
import { clerkClient } from "redwood-clerk/server";
import type { RequestInfo } from "rwsdk/worker";

export async function Profile({ ctx }: RequestInfo) {
  const { userId } = await ctx.auth()

  const user = await clerkClient().users.getUser(userId!)

  return (
    <Layout>
      <div>Welcome, { user.fullName }. </div>
      <UserButton />
      <UserProfile />
    </Layout>
  );
}
