/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			one: ["JetBrains Mono"],
		},
		extend: {},
		colors: {
			brand1: "#EBEBEB",
			brand2: "#090816",
			brand3: "#5D50FF",
		},
	},
	plugins: [],
};
