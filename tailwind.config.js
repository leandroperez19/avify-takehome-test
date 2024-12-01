/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontSize: {
                tiny: "10px",
            },
            spacing: {
                4.5: "18.5px",
            },
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            extraScreen: "1200px",
            xxlScreen: "1400px",
        },
    },
    plugins: [],
};
