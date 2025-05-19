import { RequestInfo } from "rwsdk/worker";
import { Layout } from "@/app/components/Layout";
import { link } from "@/app/shared/links";

export function Home({ ctx }: RequestInfo) {
  if (!ctx.auth?.userId) {
    return (
      <Layout>
        <a href={link('/sign-in')}>Go to sign in page</a>
      </Layout>
    )
  }

  return (
    <Layout>
      <a href={link('/profile')}>Go to profile page</a>
    </Layout>
  )
}
