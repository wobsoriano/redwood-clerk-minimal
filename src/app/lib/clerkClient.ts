import { createClerkClient } from '@clerk/backend';
import { env } from 'cloudflare:workers';

export const clerkClient = createClerkClient({
	publishableKey: env.CLERK_PUBLISHABLE_KEY,
	secretKey: env.CLERK_SECRET_KEY,
})
