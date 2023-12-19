'use client';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { TextToAction } from '@/schemas/tta.schema';
import { useCreateAction } from '@/hooks/use-create-action';

export const Form = () => {
	const {
		register,
		formState: { errors, isSubmitting },
		onSubmit,
	} = useCreateAction(TextToAction, '/api/create-action');

	return (
		<form onSubmit={onSubmit} className='flex flex-col gap-y-4'>
			<Label htmlFor='user_text' className='text-lg font-medium'>
				Your text:
			</Label>
			<Textarea
				{...register('text')}
				id='user_text'
				className='w-full lg:h-1/2 lg:w-80'
				placeholder='A GitHub action which deploys to AWS EC2 and...'
			/>
			{
				<span className='font-medium text-red-600'>
					{errors.text?.message}
				</span>
			}
			<Button data-testid='generate-btn' disabled={isSubmitting}>
				{isSubmitting ? 'Generating...' : 'Generate'}
			</Button>
		</form>
	);
};
