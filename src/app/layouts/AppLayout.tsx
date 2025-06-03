import { ClerkProvider } from 'redwood-clerk';
import { requestInfo } from 'rwsdk/worker';

export const AppLayout = () => {
	return (
		<ClerkProvider>
			{children}
		</ClerkProvider>
	);
}
