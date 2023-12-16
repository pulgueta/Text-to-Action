'use client';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useFormStatus } from 'react-dom';

export const Form = () => {
	return (
		<form className='flex flex-col gap-y-4'>
			<Label className='text-lg font-medium'>Your text:</Label>
			<Textarea
				className='h-1/2 w-96'
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
