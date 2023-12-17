import { GithubIcon, TwitterIcon } from 'lucide-react';

import { Form } from '@/components/form';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { Separator } from '@/components/ui/separator';
import { buttonVariants } from '@/components/ui/button';
import { GitHubAction } from '@/components/github-action';

const Landing = () => {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between gap-4 p-4 md:p-6'>
			<header>
				<h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl'>
					Text to Action
				</h1>
				<p className='mt-6 text-center leading-7'>
					Create GitHub actions with your own words!
				</p>
			</header>
			<section className='flex w-full flex-col gap-4 rounded border bg-primary/5 p-8 lg:w-auto'>
				<div className='flex w-full flex-col gap-4 md:flex-row'>
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
						href='https://twitter.com/pulgueta_'
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
				<div className='flex flex-col gap-4 lg:flex-row'>
					<Form />
					<Separator orientation='vertical' />
					<div className='flex flex-col gap-y-2'>
						<h3 className='text-lg font-medium'>Your action:</h3>
						<GitHubAction />
					</div>
				</div>
			</section>
			<ThemeSwitcher />
		</main>
	);
};

export default Landing;
