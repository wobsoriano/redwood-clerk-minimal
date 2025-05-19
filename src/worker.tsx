import { defineApp } from "rwsdk/worker";
import { index, render } from "rwsdk/router";

import { Document } from "@/app/Document";
import { Home } from "@/app/pages/Home";
import { setCommonHeaders } from "@/app/headers";
import { clerkMiddleware, type AuthObject } from '@/app/lib/clerkMiddleware'

export type AppContext = {
  auth: AuthObject | null
};

export default defineApp([
  clerkMiddleware(),
  setCommonHeaders(),
  render(Document, [index([Home])]),
]);
