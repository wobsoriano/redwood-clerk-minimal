import type { RouteMiddleware } from 'rwsdk/router';
import { clerkClient } from './clerkClient';
import { env } from 'cloudflare:workers';

export type { AuthObject } from '@clerk/backend';

export const clerkMiddleware =
  (): RouteMiddleware =>
  async ({ ctx, headers, request }) => {
		const requestState = await clerkClient.authenticateRequest(request);

		const locationHeader = requestState.headers.get('location');
		if (locationHeader) {
			// Trigger a handshake redirect
			return new Response(null, { status: 307, headers: requestState.headers });
		}

		if (requestState.headers) {
      requestState.headers.forEach((value, key) => {
				headers.set(key, value);
			});
		}

    ctx.auth = requestState.toAuth();
	};
