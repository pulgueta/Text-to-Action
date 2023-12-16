import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { prism as syntaxStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const GitHubAction = () => {
	return (
		<>
			<SyntaxHighlighter
				language='yaml'
				showLineNumbers
				wrapLongLines
				customStyle={{
					...syntaxStyle,
					// maxWidth: '450px',
					maxHeight: '512px',
					fontSize: 12,
				}}
				style={atomDark}
			>
				{`# Your GitHub Action code will go here...`}
			</SyntaxHighlighter>
		</>
	);
};
