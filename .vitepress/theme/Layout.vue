<script setup>
import { computed } from 'vue';
import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

const { frontmatter, theme } = useData();
const { Layout } = DefaultTheme;

const currentYear = new Date().getFullYear();
const noScrollPage = computed(
  () => !frontmatter.value.title || frontmatter.value.title === 'Contact'
);
</script>

<template>
  <Layout></Layout>
  <template v-if="frontmatter.home">
    <TheLatestArticles />
    <NewsletterSignup />
  </template>
  <footer :class="{ 'no-scroll-page': noScrollPage }">
    &copy; {{ currentYear }} Maciej Pędzich. Powered by
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

.no-scroll-page {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
}

#vitepress-link {
  color: var(--c-black);
}
</style>
