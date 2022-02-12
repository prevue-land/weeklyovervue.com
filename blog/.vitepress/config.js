import { defineConfig } from 'vitepress';

const navigationLinks = [
  {
    text: 'Articles',
    link: '/articles'
  },
  {
    text: 'RSS Feed',
    link: '/rss.xml'
  },
  {
    text: 'Contact',
    link: '/contact'
  },
  {
    text: 'Hashnode',
    link: 'https://weeklyovervue.hashnode.dev'
  },
  {
    text: 'Twitter',
    link: 'https://twitter.com/WeeklyOverVue'
  },
  {
    text: 'Github',
    link: 'https://github.com/weekly-overvue'
  }
];

export default defineConfig({
  title: 'Weekly OverVue',
  description:
    'Showcasing community Vue & Nuxt components in action every Sunday',
  themeConfig: {
    nav: navigationLinks
  }
});
