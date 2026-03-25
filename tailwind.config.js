/** @type {import('tailwindcss').Config} */
const colors = {
    primary: '#1E40AF', // dark blue
    secondary: '#F59E0B', // amber
    accent: '#10B981', // green
};

const tailwindConfig = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
      darkMode: 'class', // Enables dark mode with a 'dark' class
    theme: {
        extend: {
            colors,
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins : []
};

module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    darkMode: 'class', // Enables dark mode with a 'dark' class
    theme: {
        extend: {},
    },
    plugins: [],
};


export default tailwindConfig;

