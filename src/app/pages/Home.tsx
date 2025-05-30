import { RequestInfo } from "rwsdk/worker";
import { link } from "@/app/shared/links";

export function Home({ ctx }: RequestInfo) {
  if (!ctx.auth?.userId) {
    return <a href={link('/sign-in')}>Go to sign in page</a>
  }

  return <a href={link('/profile')}>Go to profile page</a>
}
