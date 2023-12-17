export async function* stream(res: Response) {
	const reader = res.body?.getReader();

	if (!reader) return;

	const decoder = new TextDecoder('utf-8');

	while (true) {
		const { done, value } = await reader.read();
		const chunk = decoder.decode(value);

		yield chunk;

		if (done) break;
	}
}
