---
title: Articles
description: All Weekly OverVue articles published to date
---

<script setup>
import articles from './articles.json';
</script>

<h1>Articles</h1>
<div class="articles-grid">
  <ArticleCard
    v-for="article in articles"
    :key="article.id"
    v-bind="article"
  />
</div>

<style scoped>
h1 {
  margin-bottom: 1.5rem;
  text-align: center;
}

.article-container {
  max-width: 28.25rem;
}
</style>
