/** @type {import('tailwindcss').Config} */
export default {
content: [
"./app/**/*.{ts,tsx}",
"./components/**/*.{ts,tsx}",
"./content/**/*.{md,mdx}"
],
theme: {
extend: {
container: { center: true, padding: { DEFAULT: "1rem", md: "1.25rem" }, screens: { lg: "1120px" } },
boxShadow: {
card: "0 6px 30px -12px rgba(0,0,0,.15)",
}
}
},
plugins: []
};