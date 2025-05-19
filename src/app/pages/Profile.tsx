import { Layout } from "../components/Layout";
import { UserProfile } from "@/app/components/UserProfile"
import { UserButton } from "@/app/components/UserButton"

export function Profile() {
  return (
    <Layout>
      <UserButton />
      <UserProfile />
    </Layout>
  );
}
