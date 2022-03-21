const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/*.{html,js}'],
	theme: {
		container: {
			center: true,
		},
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
