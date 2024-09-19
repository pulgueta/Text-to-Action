import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';

import { env } from '@/env.mjs';
import { TextToAction } from '@/schemas/tta.schema';
import { SYSTEM_PROMPT, USER_PROMPT } from './prompt';

export const POST = async (req: Request) => {
	const _body = await req.json();

	const body = TextToAction.safeParse(_body);

	if (!body.success) {
		return Response.json(body.error.formErrors.fieldErrors, {
			status: 400,
		});
	}

	const { text } = body.data;

	const openai = createOpenAI({ apiKey: env.OPENAI_KEY });

	const result = await streamText({
		model: openai('gpt-4o'),
		messages: [
			{
				role: 'system',
				content: SYSTEM_PROMPT,
			},
			{
				role: 'user',
				content: [
					{
						type: 'text',
						text: `${USER_PROMPT} ${text}`,
					},
				],
			},
		],
	});

	if (!result) {
		return Response.json(
			{ message: 'Error while creating your action, try again.' },
			{
				status: 500,
			}
		);
	}

	return result.toDataStreamResponse();
};
