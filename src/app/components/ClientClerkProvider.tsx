'use client';

import { ClerkProvider as Provider } from '@clerk/clerk-react';
import type { ClerkProviderProps } from '@clerk/clerk-react';

export default function ClientClerkProvider({
	children,
	...rest
}: ClerkProviderProps) {
	return <Provider {...rest}>{children}</Provider>;
}
