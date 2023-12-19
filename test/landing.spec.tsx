import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import Landing from '@/app/page';
import { Form } from '@/components/form';
import { GitHubAction } from '@/components/github-action';

describe('Text to Action', () => {
	it('Check the initial content of the landing page', () => {
		render(<Landing />);

		expect(screen.getByText('Text to Action')).toBeInTheDocument();
	});

	it('Sets an input and then expects to get a result back', async () => {
		const user = userEvent.setup();

		const form = render(<Form />);
		const code = render(<GitHubAction />);

		user.type(
			screen.getByRole('textbox'),
			'Create a GitHub Action that deploys to AWS EC2'
		);
		user.click(await form.findByTestId('generate-btn'));
		user.click(await code.findByTestId('copy-btn'));
	});
});
