import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/routes/**/*.{svelte,js,ts}'],
	theme: {
		container: {
			padding: '2rem',
			center: true,
			screens: {
				DEFAULT: '100%',
				sm: '640px',
				md: '768px'
			}
		}
	},
	daisyui: {
		logs: false
	},
	plugins: [require('daisyui')]
};
export default config;
