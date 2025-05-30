import { defineApp } from "rwsdk/worker";
import { layout, index, render, route, RouteMiddleware } from "rwsdk/router";

import { Document } from "@/app/Document";
import { Home } from "@/app/pages/Home";
import { setCommonHeaders } from "@/app/headers";
import { clerkMiddleware, type AuthObject } from 'redwood-clerk/server'
import { SignIn } from "@/app/pages/SignIn";
import { SignUp } from "@/app/pages/SignUp";
import { Profile } from "@/app/pages/Profile";
import { link } from "@/app/shared/links";
import { AppLayout } from "@/app/layouts/AppLayout";

export type AppContext = {
  auth(): Promise<AuthObject>
};

const IsGuest: RouteMiddleware = async ({ ctx }) => {
  const { userId } = await ctx.auth()

  if (userId) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: link('/profile'),
      },
    });
  }
}

const IsAuthenticated: RouteMiddleware = async ({ ctx }) => {
  const { userId } = await ctx.auth()

  if (!userId) {
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
