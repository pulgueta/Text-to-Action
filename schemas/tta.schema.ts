import { TypeOf, z } from 'zod';

export const TextToAction = z.object({
	text: z
		.string({ required_error: 'You must provide a text to translate' })
		.min(6, { message: 'Text must be at least 6 characters long' }),
});

export type TTA = TypeOf<typeof TextToAction>;
