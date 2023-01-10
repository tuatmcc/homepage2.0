import { FC, useEffect, useState } from 'react';

export const UrlAnimation: FC = () => {
	const sentence = '-We-are-Micro-Computer-Club!!-Welcome!!';
	const [count, setCount] = useState<number>(1);
	useEffect(() => {
		if (count >= sentence.length) return;
		setTimeout(() => {
			location.hash = sentence.slice(0, count);
			setCount(count + 1);
		}, 100);
	}, [count]);
	return <></>;
};
