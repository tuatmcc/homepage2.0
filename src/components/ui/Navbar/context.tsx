'use client';

import { FC, createContext, ReactNode, useState, useCallback } from 'react';

export const NavDrawerContext = createContext<{
	isNavDrawerOpen: boolean;
	setNavDrawerState: (bool: boolean) => void;
}>(null!);

export const NavDrawerContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [isNavDrawerOpen, setIsNavDrawerOpen] = useState<boolean>(false);
	const setNavDrawerState = useCallback((bool: boolean) => {
		setIsNavDrawerOpen(bool);
		document.body.style.overflow = bool ? 'hidden' : 'auto';
	}, []);
	return (
		<NavDrawerContext.Provider value={{ isNavDrawerOpen, setNavDrawerState }}>
			{children}
		</NavDrawerContext.Provider>
	);
};
