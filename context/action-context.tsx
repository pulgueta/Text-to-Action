'use client';

import {
	useState,
	useContext,
	createContext,
	PropsWithChildren,
	Dispatch,
	SetStateAction,
} from 'react';

type ActionContext = {
	action: string;
	setAction: Dispatch<SetStateAction<string>>;
};

const ActionContext = createContext<ActionContext>({
	action: '',
	setAction: () => {},
});

export const useAction = (): ActionContext => {
	const action = useContext(ActionContext);

	if (!action) {
		throw new Error(
			'[*] useAction must be wrapped within an <ActionProvider />'
		);
	}

	return action;
};

export const ActionProvider = ({ children }: PropsWithChildren) => {
	const [action, setAction] = useState<string>('');

	const updateAction: Dispatch<SetStateAction<string>> = (
		chunk: SetStateAction<string>
	) => {
		setAction((prev: string) => {
			if (typeof chunk === 'function') {
				return chunk(prev);
			}
			return prev + chunk;
		});
	};
	return (
		<ActionContext.Provider value={{ action, setAction: updateAction }}>
			{children}
		</ActionContext.Provider>
	);
};
