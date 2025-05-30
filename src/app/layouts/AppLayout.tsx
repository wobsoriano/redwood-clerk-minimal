import { ClerkProvider } from 'redwood-clerk';
import type { PropsWithChildren } from 'react';

export const AppLayout = ({ children }: PropsWithChildren) => {
	return (
		<ClerkProvider>
			{children}
		</ClerkProvider>
	);
}
