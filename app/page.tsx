import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { prism as syntaxStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { GithubIcon, TwitterIcon } from 'lucide-react';

import { Form } from '@/components/form';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { buttonVariants } from '@/components/ui/button';

const Landing = () => {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<header>
				<h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl'>
					Text to Action
				</h1>
				<p className='mt-6 leading-7'>
					Create GitHub actions with your own words!
				</p>
			</header>
			<section className='flex flex-col gap-4 rounded border bg-primary/5 p-8'>
				<div className='flex w-full gap-4'>
					<a
						href='https://github.com/pulgueta/Text-to-Action'
						target='_blank'
						className={buttonVariants({
							className: 'w-full',
							variant: 'outline',
						})}
					>
						<GithubIcon className='mr-2 h-4 w-4' />
						Star on GitHub
					</a>
					<a
						href='https://github.com/pulgueta/Text-to-Action'
						target='_blank'
						className={buttonVariants({
							className: 'w-full',
							variant: 'outline',
						})}
					>
						<TwitterIcon className='mr-2 h-4 w-4' />
						Twitter
					</a>
				</div>
				<div className='flex gap-4'>
					<Form />
					<Separator orientation='vertical' />
					<div className='flex flex-col gap-y-2'>
						<Label className='text-lg font-medium'>
							Your action:
						</Label>
						<SyntaxHighlighter
							language='yaml'
							showLineNumbers
							wrapLongLines
							customStyle={{
								...syntaxStyle,
								// maxWidth: '450px',
								maxHeight: '512px',
								fontSize: 12,
							}}
							style={atomDark}
						>
							{`name: Deploy to Firebase Hosting on merge
"on":
  push:
    branches:
      - master

env:
  VITE_FIREBASE_APIKEY: VITE_FIREBASE_APIKEY
  VITE_FIREBASE_AUTHDOMAIN: VITE_FIREBASE_AUTHDOMAIN
  VITE_FIREBASE_PROJECTID: VITE_FIREBASE_PROJECTID
  VITE_FIREBASE_STORAGEBUCKET: VITE_FIREBASE_STORAGEBUCKET
  VITE_FIREBASE_MESSAGINGSENDERID: VITE_FIREBASE_MESSAGINGSENDERID
  VITE_FIREBASE_APPID: VITE_FIREBASE_APPID
  VITE_FIREBASE_MEASUREMENTID: VITE_FIREBASE_MEASUREMENTID
  VITE_ADMIN_LOGIN_IMAGE: VITE_ADMIN_LOGIN_IMAGE
  VITE_NOTFOUND_IMAGE: VITE_NOTFOUND_IMAGE
  VITE_WHATSAPP_NUMBER: VITE_WHATSAPP_NUMBER
  VITE_TO_EMAIL: VITE_TO_EMAIL
  VITE_BANNER1: VITE_BANNER1
  VITE_BANNER2: VITE_BANNER2
  VITE_BANNER3: VITE_BANNER3
  VITE_BANNER4: VITE_BANNER4

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci && npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: GITHUB_TOKEN }
          firebaseServiceAccount: FIREBASE_SERVICE_ACCOUNT_XOCHICALLI_COMMERCE }
          channelId: live
          projectId: xochicalli-commerce
      - name: Get URL
        run: |
          echo "URL_DEPLOYED=deploy_firebase_hosting_channel.outputs.details_urll
          echo "The URL detials is deploy_firebase_hosting_channel.outputs.details_urll
          echo "The URL is deploy_firebase_hosting_channel.outputs.urll
    outputs:
      url_deployed: deploy_firebase_hosting_channel.outputs.details_url
							`}
						</SyntaxHighlighter>
					</div>
				</div>
			</section>
			<ThemeSwitcher />
		</main>
	);
};

export default Landing;
