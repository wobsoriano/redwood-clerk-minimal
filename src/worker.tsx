import { defineApp } from "rwsdk/worker";
import { index, render, route } from "rwsdk/router";

import { Document } from "@/app/Document";
import { Home } from "@/app/pages/Home";
import { setCommonHeaders } from "@/app/headers";
import { clerkMiddleware, type AuthObject } from '@/app/lib/clerkMiddleware'
import { SignIn } from "@/app/pages/SignIn";
import { SignUp } from "@/app/pages/SignUp";
import { Profile } from "@/app/pages/Profile";

export type AppContext = {
  auth: AuthObject | null
};

export default defineApp([
  clerkMiddleware(),
  setCommonHeaders(),
  render(Document, [
    index([Home]),
    route('/sign-in', SignIn),
    route('/sign-up', SignUp),
    route('/profile', Profile)
  ]),
]);
