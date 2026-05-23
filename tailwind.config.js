/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        verde:   { DEFAULT: '#1a3a2a', m: '#2a5a3a', c: '#4a7a5a', p: '#eaf3de' },
        rosa:    { DEFAULT: '#B5706A', e: '#8C4A46', c: '#E8C5BC', p: '#FAF7F4' },
        borda:   '#d3d1c7',
        texto:   '#2c2c2a',
        cinza:   '#888780',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['"Jost"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
