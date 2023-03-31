'use client';

import { NextPage } from 'next';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

const commonStyle = { transition: 'all 0.3s ease-in-out' };

const Template: NextPage<{ children: ReactNode }> = ({ children }) => {
	const pathname = usePathname();
	const [style, setStyle] = useState({ opacity: 0, ...commonStyle });
	useEffect(() => {
		if (pathname) {
			setStyle({ opacity: 1, ...commonStyle });
		}
	}, [pathname]);

	return <div style={style}>{children}</div>;
};

export default Template;
