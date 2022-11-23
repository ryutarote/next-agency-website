module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		letterSpacing: {
			tight: '-.015em',
		},
		extend: {
			height: {
				'half-screen': '50vh',
			},
			fontFamily: {
				mplus: ["'M PLUS Rounded 1c'", 'Verdana', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
