import { defineApp } from "rwsdk/worker";
import { index, render, route, RouteMiddleware } from "rwsdk/router";

import { Document } from "@/app/Document";
import { Home } from "@/app/pages/Home";
import { setCommonHeaders } from "@/app/headers";
import { clerkMiddleware, type AuthObject } from '@/app/lib/clerkMiddleware'
import { SignIn } from "@/app/pages/SignIn";
import { SignUp } from "@/app/pages/SignUp";
import { Profile } from "@/app/pages/Profile";
import { link } from "@/app/shared/links";

export type AppContext = {
  auth: AuthObject | null
};

const IsUnauthenticated: RouteMiddleware = ({ ctx }) => {
  if (ctx.auth?.userId) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: link('/sign-in'),
      },
    });
  }
}

const IsAuthenticated: RouteMiddleware = ({ ctx }) => {
  if (!ctx.auth?.userId) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: link('/sign-in'),
      },
    });
  }
}

export default defineApp([
  clerkMiddleware(),
  setCommonHeaders(),
  render(Document, [
    index(Home),
    route('/sign-in', [IsUnauthenticated, SignIn]),
    route('/sign-up', [IsUnauthenticated, SignUp]),
    route('/profile', [IsAuthenticated, Profile])
  ]),
]);
