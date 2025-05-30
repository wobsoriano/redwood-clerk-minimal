import { defineApp } from "rwsdk/worker";
import { layout, index, render, route, RouteMiddleware } from "rwsdk/router";

import { Document } from "@/app/Document";
import { Home } from "@/app/pages/Home";
import { setCommonHeaders } from "@/app/headers";
import { clerkMiddleware, type AuthObject } from '@/app/lib/clerkMiddleware'
import { SignIn } from "@/app/pages/SignIn";
import { SignUp } from "@/app/pages/SignUp";
import { Profile } from "@/app/pages/Profile";
import { link } from "@/app/shared/links";
import { AppLayout } from "@/app/layouts/AppLayout";

export type AppContext = {
  auth: AuthObject | null
};

const IsGuest: RouteMiddleware = ({ ctx }) => {
  // Redirect to profile if already authenticated
  if (ctx.auth?.userId) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: link('/profile'),
      },
    });
  }
}

const IsAuthenticated: RouteMiddleware = ({ ctx }) => {
  // Redirect to sign-in if not authenticated
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
  setCommonHeaders(),
  clerkMiddleware(),
  render(Document, [
    layout(AppLayout, [
      index(Home),
      route('/sign-in', [IsGuest, SignIn]),
      route('/sign-up', [IsGuest, SignUp]),
      route('/profile', [IsAuthenticated, Profile])
    ])
  ]),
]);
