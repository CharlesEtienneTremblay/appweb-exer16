import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Exercice 16",
  description: "Revue de code documentée",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Commentaires', link: '/charlesetienne-tremblay' }
    ],

    sidebar: [
      {
        text: 'Commentaires',
        items: [
          { text: 'Corrections du professeur', link: '/charlesetienne-tremblay#commentaires-du-professeur' },
          { text: 'Commentaires personnels', link: '/charlesetienne-tremblay#commentaires-personnels'}
        ]
      }
    ]
  }
})
