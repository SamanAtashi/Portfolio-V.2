import React from 'react';

const color = (num = 0) => {
	let arr = ['.', ',', '’', '-', '/', '”', '“', ':'];
	return <span className="text-Tertiary_Light">{arr[num]}</span>;
};

export default color;
