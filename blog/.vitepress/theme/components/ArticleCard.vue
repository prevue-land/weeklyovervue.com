<script setup>
const props = defineProps({
  id: String,
  title: String,
  date: Number,
  description: String,
  cover: String,
  link: String
});

const displayDate = new Date(props.date).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
</script>

<template>
  <a class="article-container" :href="props.link">
    <article>
      <img :src="props.cover" :alt="`Cover image of ${props.title}`" />
      <div class="content">
        <h3>{{ props.title }}</h3>
        <p>{{ props.description }}</p>
        <small>&#128197; {{ displayDate }}</small>
      </div>
    </article>
  </a>
</template>

<style scoped>
h3 {
  margin-top: 0 !important;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
}

article {
  background-color: #fff;
  color: var(--c-black);
  text-align: center;
  border-radius: 0.75rem;
  transition: 0.5s;
}

article:hover {
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
  transform: scale(1.03);
}

.content {
  padding: 1rem;
}
</style>
