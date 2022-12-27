import { createContext, FC, useEffect, useState, ReactNode, useCallback } from 'react';

export type MediaQueryProviderProps = {
	children: ReactNode;
};

/**
 * モバイルかどうかを判定するためのコンテキスト
 */
export const MediaQueryContext = createContext({ isMobile: false }); // ここでの初期値は基本関係ない

/**
 * _app.pages.tsxをこれでラップすることで、
 * ほかのコンポーネントでuseContextを使ってモバイルかどうかを判定できるようにする。
 */
const MediaQueryProvider: FC<MediaQueryProviderProps> = ({ children }) => {
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const handleResize = useCallback(() => {
		setIsMobile(matchMedia('screen and (max-width: 48em)').matches);
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

	return <MediaQueryContext.Provider value={{ isMobile }}>{children}</MediaQueryContext.Provider>;
};

export default MediaQueryProvider;
