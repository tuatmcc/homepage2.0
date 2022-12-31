import { createContext, FC, useEffect, useState, ReactNode, useCallback } from 'react';

export type MediaQueryProviderProps = {
	children: ReactNode;
};

type MediaQueryContextType = {
	isMobile: boolean;
	orientation: 'portrait' | 'landscape';
};

/**
 * モバイルかどうかを判定するためのコンテキスト
 */
export const MediaQueryContext = createContext<MediaQueryContextType>({ isMobile: false, orientation: 'portrait' }); // ここでの初期値は関係ない

/**
 * _app.pages.tsxをこれでラップすることで、
 * ほかのコンポーネントでuseContextを使ってモバイルかどうかを判定できるようにする。
 */
const MediaQueryProvider: FC<MediaQueryProviderProps> = ({ children }) => {
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');
	const handleResize = useCallback(() => {
		setIsMobile(matchMedia('screen and (max-width: 48em)').matches);
		setOrientation(matchMedia('screen and (orientation: portrait)').matches ? 'portrait' : 'landscape');
	}, []);
	useEffect(() => {
		handleResize();
		addEventListener('load', handleResize);
		addEventListener('resize', handleResize);
		return () => {
			removeEventListener('load', handleResize);
			removeEventListener('resize', handleResize);
		};
	}, [handleResize]);

	return <MediaQueryContext.Provider value={{ isMobile, orientation }}>{children}</MediaQueryContext.Provider>;
};

export default MediaQueryProvider;
