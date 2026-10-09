/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        extend: {
            colors: {
                background: { DEFAULT: '#0B1120', secondary: '#111827' },
                foreground: { DEFAULT: '#FFFFFF', secondary: '#D1D5DB' },
                primary: { DEFAULT: '#3B82F6', foreground: '#FFFFFF' },
                accent: { DEFAULT: '#06B6D4', foreground: '#FFFFFF' },
                muted: { DEFAULT: '#9CA3AF', foreground: '#9CA3AF' },
                card: { DEFAULT: '#111827', foreground: '#FFFFFF' },
                border: '#1F2937',
                input: '#1F2937',
                ring: '#3B82F6',
            },
            borderRadius: {
                DEFAULT: 'var(--radius)',
                card: '16px',
                xl: '20px',
                '2xl': '24px',
            },
            fontFamily: {
                sans: ['var(--font-plus-jakarta)', 'Plus Jakarta Sans', 'sans-serif'],
            },
            boxShadow: {
                'glow-blue': '0 0 30px rgba(59, 130, 246, 0.2)',
                'glow-cyan': '0 0 30px rgba(6, 182, 212, 0.2)',
                'card-dark': '0 4px 24px rgba(0, 0, 0, 0.4)',
                'card-hover': '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(59, 130, 246, 0.1)',
            },
            backgroundImage: {
                'gradient-blue-cyan': 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
                'gradient-dark': 'linear-gradient(135deg, #0B1120 0%, #111827 100%)',
                'gradient-card': 'linear-gradient(135deg, rgba(17,24,39,0.8) 0%, rgba(11,17,32,0.9) 100%)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
                'fade-in-up': 'fadeInUp 0.7s ease forwards',
                'fade-in': 'fadeIn 0.5s ease forwards',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};