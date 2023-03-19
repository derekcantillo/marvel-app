/** @type {import('tailwindcss').Config} */
/* eslint-disable global-require */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: false,
	theme: {
		extend: {
			screens: {
				desktop: '1200px',
				table: '880px',
				mobile: '480px'
			},
			colors: {
				primary: '#05bcb3',
				secondary: '#ffb003',
				gray: '#ececec'
			},
			fontFamily: {
				title: ['Thin 100','normal']
			}
		}
	},
	plugins: [
		require('@tailwindcss/custom-forms'),
		require('@tailwindcss/line-clamp')
	]
}
