/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.{html,css,js}'],
	theme: {
		extend: {
			colors: {
				primary: '#FFCC29',
				secondary: '#2086BF',
			},
			fontFamily: {
				'sans-serif': ['"Nunito Sans"', 'sans-serif'],
			},
		},
	},
	plugins: [
		'tailwindcss',
		'autoprefixer',
		'postcss-nested',
		'postcss-import',
		'postcss-preset-env',
	],
};
