module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			Gray_1: '#000000',
			Gray_2: '#101313',
			Gray_3: '#657070',
			Gray_4: '#99a2a2',
			Primary: '#003c3c',
			Primary_Light: '#195555',
			Secondary: '#b4d2c8',
			Secondary_Light: '#daf8ee',
			Tertiary: '#b4bd32',
			Tertiary_Light: '#dae358',
		},
		fontFamily: {
			Montserratss: [
				'Montserrat',
				'Helvetica',
				'Arial',
				'sans-serif',
			],
			Bodoni: ['Bodoni Moda', ' Helvetica', 'Arial', 'sans-serif'],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};