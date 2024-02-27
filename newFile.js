/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            'primary': '#222',
            'second': '#f6f6f2',
            'dark': '#000',
            'transparan': '0, 0, 0, 0.1',
            'shadow': '#444',
            'light': '#fff',
            'gray': '#777',
            'success': '#14574E',
            'danger': 'crimson',
        },
        extend: {
            boxShadow: {
                'box': '0.5rem 0.5rem #14574E, -0.5rem -0.5rem #777',
                'sxl': '0px 6px 8px rgba(19, 19, 19, .7)'
            }
        },
    },
    plugins: [],
};
