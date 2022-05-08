/* eslint-disable */

module.exports = {
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			colors: {
				background: {
					500: "#16161A",
				},
				brand: {
					400: "#7F5AF0",
				}
			},
		},
		fontFamily: {
			"sans": ["Poppins", "Helvetica", "Arial", "sans-serif"],
			"roboto": ["Roboto", "Helvetica", "Arial", "sans-serif"],
			"ubuntu": ["Ubuntu", "Helvetica", "Arial", "sans-serif"],
		}
	},
	plugins: [
		require("tailwind-scrollbar")
	],
};
