module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			my_dark: '#2c3531',
			my_teal_1: '#116466',
			my_teal_2: '#d1e8e2',
			my_peach_1: '#d9b08c',
			my_peach_2: '#ffcb9a',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
