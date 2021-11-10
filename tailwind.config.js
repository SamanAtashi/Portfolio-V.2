module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./Components/**/*.{js,ts,jsx,tsx}',
		'./Components/Projects/**/*.{js,ts,jsx,tsx}',
		'./Components/About/**/*.{js,ts,jsx,tsx}',
		'./Assets/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.js',
		'./Components/**/*.jsx',
		'./Components/Projects/**/*.jsx',
		'./Components/About/**/*.jsx',
		'./Assets/**/*.js',
		'./src/Components/**/*.{js,ts,jsx,tsx}',
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/Assets/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
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
				Bodoni: [
					'Bodoni Moda',
					' Helvetica',
					'Arial',
					'sans-serif',
				],
			},
			margin: {
				'10vw': '10vw',
			},
			padding: {
				'5%': '5%',
				'10vw': '10vw',
			},
			height: {
				'100vh': '100vh',
				'1px': '1px',
			},
			minHeight: {
				'100vh': '100vh',
			},
			width: {
				'100vh': '100vh',
			},
			scale: {
				11: '-1',
				12: '1',
			},
			inset: {
				'4%': '4%',
				'2.5%': '2.5%',
				'3.5%': '3.5%',
			},
			dropShadow: {
				'3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
			},
			letterSpacing: {
				0.3: '0.3rem',
			},
			fontSize: {
				'17vw': '17vw',
				'10vw': '10vw',
				'1.2rem': '1.2rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('tailwind-scrollbar-hide')],
};
