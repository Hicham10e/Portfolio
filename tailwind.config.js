/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                bg: {
                    DEFAULT: 'var(--bg-primary)',
                    secondary: 'var(--bg-secondary)',
                },
                primary: {
                    DEFAULT: 'var(--color-primary)',
                    glow: 'var(--color-primary-glow)',
                },
                secondary: {
                    DEFAULT: 'var(--color-secondary)',
                    glow: 'var(--color-secondary-glow)',
                },
                glass: {
                    DEFAULT: 'var(--glass-bg)',
                    border: 'var(--glass-border)',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Space Grotesk', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
