<script setup>
import { computed } from 'vue';
import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

const { frontmatter, theme } = useData();
const { Layout } = DefaultTheme;

const currentYear = new Date().getFullYear();
</script>

<template>
  <Layout></Layout>
  <template v-if="frontmatter.home">
    <TheLatestArticles />
    <NewsletterSignup />
  </template>
  <footer>
    &copy; {{ currentYear }} Weekly OverVue. Powered by
    <a
      id="vitepress-link"
      href="https://vitepress.vuejs.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Vitepress
    </a>
  </footer>
</template>

<style scoped>
footer {
  background-color: var(--c-brand);
  color: var(--c-black);
  padding: 1rem;
  text-align: center;
}

#vitepress-link {
  color: var(--c-black);
}
</style>
