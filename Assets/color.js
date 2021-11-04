import React from 'react';

const color = (num = 0) => {
	let arr = ['.', ',', '’', '-', '/', '”', '“', ':'];
	return <span className="colored">{arr[num]}</span>;
};

export default color;
