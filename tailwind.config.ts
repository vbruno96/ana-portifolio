import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      pink: '#EAC5DD',
      purple: '#9376B1',
      blue: '#3D2683',
      brown: '#A9948F',
      white: '#FFF',
      black: '#141313',
      'off-white': '#EFECE3',
    },
    fontSize: {
      xs: ['0.75rem', '1.375rem'],
      sm: ['0.875rem', '150%'],
      base: ['1rem', '150%'],
      lg: ['1.125rem', '150%'],
      xl: ['1.75rem', '3.5rem'],
      '2xl': ['1.75rem', '3.5rem'],
      '3xl': ['1.875rem', '3rem'],
      '4xl': ['2.5rem', '2.5rem'],
      '5xl': ['3rem', '3.5rem'],
      '6xl': ['4.1875rem', '5.625rem'],
    },
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        ibm: ['var(--font-ibm-plex-sans)'],
      },
    },
  },
  plugins: [],
}
export default config
