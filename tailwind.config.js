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
        // Gardening Thyme — Visual Identity System v1.0
        // Brand tokens (use these for new work). Two greens, five neutrals,
        // low chroma + high contrast. Green is punctuation, never a flood.
        'forest': '#2C3F2E',     // primary — headings, nav, footer, CTA
        'moss': '#5A6E4C',       // secondary — eyebrows, links, hover
        'sage-tint': '#D7DDC9',  // tint — section fills, chips, image mats
        'ink': '#1C1D18',        // body text
        'stone': '#7C7A6E',      // captions, muted
        'mist': '#E3DFD5',       // borders
        'paper': '#EDEAE2',      // page canvas
        'cloud': '#FCFBF7',      // cards, surfaces
        // Legacy aliases — remapped to their nearest brand value so existing
        // class names cascade to the new palette without a sitewide rename.
        // `sage` keeps a mid-lightness sage-green so accents that sit on dark
        // surfaces stay legible (brand moss is too dark for that role).
        'forest-green': '#2C3F2E', // -> forest
        'charcoal': '#1C1D18',     // -> ink
        'sage': '#9BA98C',         // soft sage-green, low chroma, dual-surface safe
        'sage-dark': '#7C8A6E',
        'cream': '#EDEAE2',        // -> paper
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
        // e.g. `'Bodoni Moda', 'Bodoni Moda Fallback'` where the Fallback is
        // next/font's metric-adjusted (size-adjust/ascent-override) local font —
        // so the swap from fallback to the web font barely reflows, keeping CLS
        // near zero. Referencing the raw font name here instead would fall back
        // to a generic `serif`/`sans-serif` and cause large layout shift.
        'sans': ['var(--font-hanken)', 'system-ui', 'sans-serif'],   // body / interface
        'serif': ['var(--font-bodoni)', 'Georgia', 'serif'],          // display / headings
      },
      borderRadius: {
        // Brand: 4px radius everywhere. `rounded`/`rounded-md` now map to it.
        DEFAULT: '4px',
        md: '4px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
