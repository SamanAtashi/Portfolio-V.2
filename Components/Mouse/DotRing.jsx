import React, { useContext } from 'react';
import useMousePosition from './useMousePosition';
import { MouseContext } from './mouse-context';

const DotRing = () => {
	// 1.
	const { cursorType, cursorChangeHandler } = useContext(MouseContext);

	const { x, y } = useMousePosition();
	return (
		<>
			{/* 2. */}
			<div
				style={{ left: `${x}px`, top: `${y}px` }}
				className={'myring ' + cursorType}
			></div>
			<div
				className={'dot ' + cursorType}
				style={{ left: `${x}px`, top: `${y}px` }}
			></div>
		</>
	);
};

export default DotRing;
