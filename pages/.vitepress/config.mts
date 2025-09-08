import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Practical Logic notebook",
  description: "CLP(FD) exploratory, using OCaml->JS",
  base: "/practical-logic/",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Solver', link: '/utop' },
      { text: 'About', link: '/about' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Math background', link: '/math' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kevindamm/practical-logic' }
    ]
  }
})
