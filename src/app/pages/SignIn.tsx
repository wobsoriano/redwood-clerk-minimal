import { Layout } from "@/app/components/Layout";
import { SignIn as SignInComponent } from "redwood-clerk"

export function SignIn() {
  return (
    <Layout>
      <SignInComponent />
    </Layout>
  );
}
