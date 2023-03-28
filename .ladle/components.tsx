import type { GlobalProvider } from '@ladle/react';

import '../src/styles/global.css';

export const Provider: GlobalProvider = ({ children }) => {
	return <div>{children}</div>;
};
