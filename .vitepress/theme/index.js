import DefaultTheme from 'vitepress/theme';

import Layout from './Layout.vue';
import './custom.css';

import AboutSection from './components/home/AboutSection.vue';
import TheLatestArticles from './components/home/TheLatestArticles.vue';
import NewsletterSignup from './components/home/NewsletterSignup.vue';

export default {
  ...DefaultTheme,
  Layout,
  NotFound: () => 'Looks like this page does not exist',
  enhanceApp({ app }) {
    app.component('AboutSection', AboutSection);
    app.component('TheLatestArticles', TheLatestArticles);
    app.component('NewsletterSignup', NewsletterSignup);
  }
};
