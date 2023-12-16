'use client';

import { useFormStatus } from 'react-dom';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export const Form = () => {
	return (
		<form className='flex flex-col gap-y-4'>
			<Label htmlFor='user_text' className='text-lg font-medium'>
				Your text:
			</Label>
			<Textarea
				id='user_text'
				name='user_text'
				className='w-full lg:h-1/2 lg:w-80'
				placeholder='A GitHub action which deploys to AWS EC2 and...'
			/>
			<Submit />
		</form>
	);
};

const Submit = () => {
	const { pending } = useFormStatus();

	return (
		<Button disabled={pending}>
			{pending ? 'Translating...' : 'Translate'}
		</Button>
	);
};
