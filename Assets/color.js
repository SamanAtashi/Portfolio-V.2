import React from 'react';

const color = (num = 0) => {
	let arr = ['.', ',', '’', '-', '/', '”', '“', ':'];
	return <span className="text-red-500">{arr[num]}</span>;
};

export default color;
