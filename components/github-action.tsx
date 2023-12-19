'use client';

import { CopyIcon } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { prism as syntaxStyle } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import { useAction } from '@/context/action-context';
import { Button } from '@/components/ui/button';

export const GitHubAction = () => {
	const { action } = useAction();

	return (
		<>
			<SyntaxHighlighter
				language='yaml'
				showLineNumbers
				lineProps={{ className: 'className' }}
				wrapLongLines
				customStyle={{
					...syntaxStyle,
					maxWidth: '640px',
					maxHeight: '512px',
					fontSize: 12,
				}}
				style={atomDark}
			>
				{action ? action : `# Your GitHub Action code will go here...`}
			</SyntaxHighlighter>
			<Button
				size='icon'
				data-testid='copy-btn'
				variant='ghost'
				onClick={() => {
					return action && navigator.clipboard.writeText(action);
				}}
			>
				<CopyIcon className='h-4 w-4' />
			</Button>
		</>
	);
};
