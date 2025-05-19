import { RequestInfo } from "rwsdk/worker";
import { Layout } from "../components/Layout";

export function Home({ ctx }: RequestInfo) {
  return (
    <Layout>
      <div>
        <p>Hello world</p>
      </div>
    </Layout>
  );
}
