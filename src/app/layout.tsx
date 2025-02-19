import type { Metadata } from 'next';

// provider
import { Provider } from '@/components/ui/provider';

export const metadata: Metadata = {
	title: 'Bounty Super Staker',
	description: 'Super stake yield farming on Solana',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<body>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
