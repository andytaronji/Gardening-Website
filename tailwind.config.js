/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // New Gardening Thyme Color Palette
        'forest-green': '#314528',
        'charcoal': '#252827',
        'sage': '#909c98',
        'sage-dark': '#7a8682',
        'cream': '#efebe2',
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
      },
      fontFamily: {
        // Use the next/font CSS variables (defined on <body>). These resolve to
        // e.g. `'Playfair Display', 'Playfair Display Fallback'` where the
        // Fallback is next/font's metric-adjusted (size-adjust/ascent-override)
        // local font — so the swap from fallback to the web font barely reflows,
        // keeping CLS near zero. Referencing the raw font name here instead would
        // fall back to a generic `serif`/`sans-serif` and cause large layout shift.
        'sans': ['var(--font-raleway)', 'sans-serif'],
        'serif': ['var(--font-playfair)', 'serif'],
        'cursive': ['var(--font-parisienne)', 'cursive'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
