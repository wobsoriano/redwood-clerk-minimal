import { PropsWithChildren } from 'react';
import { ClerkProvider } from 'redwood-clerk';

export const AppLayout = ({ children }: PropsWithChildren<{}>) => {
	return (
		<ClerkProvider>
			{children}
		</ClerkProvider>
	);
}
