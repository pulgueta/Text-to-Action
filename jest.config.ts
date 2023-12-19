import nextJest from 'next/jest';

const ignoredErrors = [
	/act\(\.\.\.\) is not supported in production builds of React/,
];

const consoleError = global.console.error;

global.console.error = (...args) => {
	if (ignoredErrors.some((el) => el.test(args[0]))) {
		return console.log(...args);
	}

	return consoleError(...args);
};

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
