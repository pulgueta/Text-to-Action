import { ServerRuntime } from 'next';
import { OpenAIStream, StreamingTextResponse } from 'ai';

import { OpenAI } from 'openai';

import { env } from '@/env.mjs';
import { TextToAction } from '@/schemas/tta.schema';
import { SYSTEM_PROMPT, USER_PROMPT } from './prompt';

const gpt = new OpenAI({ apiKey: env.OPENAI_KEY });

export const runtime: ServerRuntime = 'edge';

export const POST = async (req: Request) => {
	const _body = await req.json();

	const body = TextToAction.safeParse(_body);

	if (!body.success) {
		return Response.json(body.error.formErrors.fieldErrors, {
			status: 400,
		});
	}

	const { text } = body.data;

	const res = await gpt.chat.completions.create({
		model: 'gpt-4o',
		stream: true,
		temperature: 0.3,
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

	if (!res) {
		return Response.json(
			{ message: 'Error while creating your action, try again.' },
			{
				status: 500,
			}
		);
	}

	const stream = OpenAIStream(res);

	return new StreamingTextResponse(stream);
};
