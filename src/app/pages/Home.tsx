import { Layout } from "@/app/components/Layout";
import { link } from "@/app/shared/links";
import { SignedIn, SignedOut } from "redwood-clerk";

export function Home() {
  return (
    <Layout>
      <SignedIn>
        <a href={link('/profile')}>Go to profile page</a>
      </SignedIn>
      <SignedOut>
        <a href={link('/sign-in')}>Go to sign in page</a>
      </SignedOut>
    </Layout>
  )
}
