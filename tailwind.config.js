/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            lineHeight: {

                '1': '20px',
            }
        },

        container: {
            center: true,
            padding: '2rem'
        }
    },
    plugins: [require('@tailwindcss/typography'), ],
}