/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/tw-elements/dist/js/**/*.js"],
	theme: {
		container: {
			padding: {
				DEFAULT: "2rem",
				sm: "3rem",
				lg: "5rem",
				xl: "7rem",
				"2xl": "9rem",
			},
		},
	},
	plugins: [require("tw-elements/dist/plugin")],
};
