import { ClerkProvider } from './ClerkProvider';
import { requestInfo } from 'rwsdk/worker';
import { env } from 'cloudflare:workers';
import type { PropsWithChildren } from 'react';

export const Layout = ({ children }: PropsWithChildren) => {
	return (
		<ClerkProvider
			initialState={JSON.parse(JSON.stringify(requestInfo.ctx.auth))}
      publishableKey={env.CLERK_PUBLISHABLE_KEY}
      signInUrl={env.CLERK_SIGN_IN_URL}
      signUpUrl={env.CLERK_SIGN_UP_URL}
		>
			{children}
		</ClerkProvider>
	);
}
