import nextJest from 'next/jest';

const createConfig = nextJest({
	dir: './',
});

export default createConfig({
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	testEnvironment: 'jest-environment-jsdom',
	preset: 'ts-jest',
	transform: {
		'^.+\\.(ts|tsx)?$': 'ts-jest',
		'^.+\\.(js|jsx)$': 'babel-jest',
	},
	transformIgnorePatterns: ['/node_modules/(?!(react-syntax-highlighter)/)'],
});
