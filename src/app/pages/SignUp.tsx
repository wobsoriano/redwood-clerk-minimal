import { Layout } from "@/app/components/Layout";
import { SignUp as SignUpComponent } from "redwood-clerk"

export function SignUp() {
  return (
    <Layout>
      <SignUpComponent />
    </Layout>
  );
}
