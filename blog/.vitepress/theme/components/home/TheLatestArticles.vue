<script setup>
import articles from '../../../../articles.json';

const data = articles.slice(0, 3);
</script>

<template>
  <section id="the-latest-articles" class="home-section">
    <h1>The latest articles</h1>
    <div class="articles-grid">
      <div></div>
      <ArticleCard
        v-for="article in data"
        :key="article.title"
        v-bind="article"
      />
      <div></div>
    </div>
  </section>
</template>

<style scoped>
h1 {
  margin-top: 0;
  margin-bottom: 1.5rem;
}

#the-latest-articles {
  background-color: #f95738;
}
</style>
