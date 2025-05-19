import type { ClerkProviderProps } from '@clerk/clerk-react';
import ClientClerkProvider from './ClientClerkProvider';
import { requestInfo } from 'rwsdk/worker';
import { env } from 'cloudflare:workers';

export function Layout({
	children,
	...rest
}: ClerkProviderProps) {
	return (
		<ClientClerkProvider
			{...rest}
			initialState={JSON.parse(JSON.stringify(requestInfo.ctx.auth))}
      publishableKey={env.CLERK_PUBLISHABLE_KEY}
		>
			{children}
		</ClientClerkProvider>
	);
}
