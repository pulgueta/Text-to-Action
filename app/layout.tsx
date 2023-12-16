import { PropsWithChildren } from 'react';

import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import { ThemeProvider } from '@/providers/theme-provider';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Text to Action',
	description:
		'Create a GitHub Action YAML file in seconds by using your own words.',
	applicationName: 'Text to Action',
	publisher: 'Andrés Rodríguez',
	authors: [
		{
			name: 'Andrés Rodríguez',
			url: 'https://www.linkedin.com/in/and-rodr/',
		},
	],
	openGraph: {
		title: 'Text to Action',
		siteName: 'Text to Action',
		description:
			'Create a GitHub Action YAML file in seconds by using your own words.',
		url: 'https://text-to-action.vercel.app/',
		countryName: 'Colombia',
		locale: 'en_US',
		type: 'website',
	},
	metadataBase: new URL('https://text-to-action.vercel.app/'),
	alternates: {
		canonical: '/',
	},
	twitter: {
		creator: '@pulgueta_',
	},
	category: 'AI',
	creator: 'Andrés Rodríguez',
	keywords: [
		'yaml',
		'pdf',
		'chat',
		'chatgpt',
		'github',
		'actions',
		'github actions',
		'IA',
	],
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},
};

export const viewport: Viewport = {
	themeColor: [
		{
			media: '(prefers-color-scheme: dark)',
			color: '#020817',
		},
		{
			media: '(prefers-color-scheme: light)',
			color: '#FFFFFF',
		},
	],
	colorScheme: 'light dark',
	minimumScale: 1,
	initialScale: 1,
	maximumScale: 5,
	viewportFit: 'cover',
	userScalable: true,
	height: 'device-height',
	width: 'device-width',
};

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${inter.className} antialiased`}>
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
