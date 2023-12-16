import { PropsWithChildren } from 'react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ThemeProvider } from '@/providers/theme-provider';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Text to Action',
	description:
		'Create a GitHub Action YAML file in seconds by using your own words.',
};

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${inter.className} antialiased relative`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					storageKey='tta_theme'
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
