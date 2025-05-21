import { ClerkProvider } from 'redwood-clerk';
import type { PropsWithChildren } from 'react';

export const Layout = ({ children }: PropsWithChildren) => {
	return (
		<ClerkProvider>
			{children}
		</ClerkProvider>
	);
}
