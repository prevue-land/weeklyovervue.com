<script setup>
import { computed } from 'vue';
import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

const { frontmatter, theme } = useData();
const { Layout } = DefaultTheme;

const currentYear = new Date().getFullYear();
const articleDisplayDate = computed(() =>
  new Date(frontmatter.value.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
);
</script>

<template>
  <Layout>
    <template #page-top>
      <section id="article-start" v-if="frontmatter.type === 'article'">
        <h1>{{ frontmatter.title }}</h1>
        <p>&#128197; {{ articleDisplayDate }}</p>
      </section>
    </template>
  </Layout>
  <template v-if="frontmatter.home">
    <TheLatestArticles />
    <NewsletterSignup />
  </template>
  <footer>
    &copy; {{ currentYear }} Weekly OverVue. Powered by
    <a
      id="vitepress-link"
      href="https://vitepress.vuejs.org"
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
}

footer,
#article-start {
  text-align: center;
}

#vitepress-link {
  color: var(--c-black);
}
</style>
