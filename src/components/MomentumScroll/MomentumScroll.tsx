import { FC, ReactNode } from 'react';

type MomentumScrollProps = {
	pageHeight: string | number;
	children: ReactNode;
	currentY: number;
	speed?: number;
};

export const MomentumScroll: FC<MomentumScrollProps> = ({ pageHeight, children, currentY }) => {
	return (
		<div style={{ height: pageHeight, width: '100%' }}>
			<div
				style={{
					width: '100%',
					position: 'fixed',
					height: pageHeight,
					transform: `translateY(-${currentY}px)`,
				}}
			>
				{children}
			</div>
		</div>
	);
};
