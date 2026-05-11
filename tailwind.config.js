const plugin = require('tailwindcss/plugin');

module.exports = {
    content: ['index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
            '3xl': '1920px',
            '4xl': '2560px',
        },
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.75rem',
            '4xl': '2rem',
            '5xl': '2.125rem',
            '6xl': '2.625rem',
            '7xl': '3rem',
            '8xl': '4.5rem',
        },
        colors: {
            blue: {
                DEFAULT: '#1A3160',
                mid: '#005A78',
                light: '#DFEBEB',
            },
            pink: '#ff49db',
            orange: '#ff7849',
            green: '#00B14F',
            'gray-dark': '#273444',
            gray: '#383E43',
            'gray-light': '#d3dce6',
            black: '#000000',
            white: '#FFFFFF',
            purple: {
                dark: '#302560',
                mid: '#642546'
            },
            transparent: {
                DEFAULT: 'transparent',
                80: 'rgba(38, 38, 52, 0.8)',
            },
            brown: {
                light: '#7a6d66',
                dark: '#563421',
                DEFAULT: '#473A33',
            },
        },
        fontFamily: {
            sans: ['Sanomat Grab Web Medium', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [
        plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
            const newUtilities = {
                '.horizontal-tb': {
                    writingMode: 'horizontal-tb',
                    '-webkit-writing-mode': 'horizontal-tb',
                    '-ms-writing-mode': 'horizontal-tb',
                },
                '.vertical-rl': {
                    writingMode: 'vertical-rl',
                    '-webkit-writing-mode': 'vertical-rl',
                    '-ms-writing-mode': 'vertical-rl',
                },
                '.vertical-lr': {
                    writingMode: 'vertical-lr',
                    '-webkit-writing-mode': 'vertical-lr',
                    '-ms-writing-mode': 'vertical-lr',
                },
            };
            addUtilities(newUtilities);
        }),
    ],
};
