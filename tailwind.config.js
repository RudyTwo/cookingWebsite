import defaultTheme from 'tailwindcss/defaultTheme'
const FormKitVariants = require('@formkit/themes/tailwindcss')

export default {
  theme: {
    extend: {
      colors: {
        primary: defaultTheme.colors.green
      },
      animation: {
        'quickPulse': 'pulse 0.5s'
      },
    }
  },
  content: [
    './src/**/*.{html,js,vue}',
    './node_modules/@formkit/themes/dist/tailwindcss/genesis/index.cjs',
  ],
  plugins: [FormKitVariants],
}
