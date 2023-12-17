import { UseFormProps, useForm } from 'react-hook-form';
import { TypeOf, ZodObject } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { useAction } from '@/context/action-context';
import { stream } from '@/lib/stream';

type SchemaType<T extends ZodObject<any>> = T;

export const useCreateAction = <T extends ZodObject<any>>(
	schema: SchemaType<T>,
	endpoint: `/api/${string}`,
	options?: UseFormProps<TypeOf<T>>
) => {
	const form = useForm<TypeOf<typeof schema>>({
		...options,
		resolver: zodResolver(schema),
	});

	const { setAction } = useAction();

	const onSubmit = form.handleSubmit(async (data) => {
		const res = await fetch(endpoint, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!res.ok || res.body === null) {
			throw new Error('[*] Error ocurred generating action, try again.');
		}

		for await (const chunk of stream(res)) {
			setAction((prev) => prev + chunk);
		}

		form.reset();
	});

	return {
		...form,
		onSubmit,
	};
};
