/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        darkBg: '#0a0a0a',      // Fundo quase preto (estilo Vercel)
        darkCard: '#111111',    // Fundo para áreas de destaque/cards
        darkBorder: '#333333',  // Linhas sutis de divisão
        textMain: '#EDEDED',    // Texto branco suave
        textMuted: '#A1A1AA',   // Texto cinza para subtítulos
        brandBlue: '#0070F3',   // Azul tech para links e CTAs
        success: '#10B981',     // Verde para "Prós"
        danger: '#EF4444',      // Vermelho para "Contras"
      }
    },
  },
  plugins: [],
}