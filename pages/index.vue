<template>
  <section class="container">
    <div class="page-wrapper">
      <h1 class="title">simple-list-posts</h1>
      <h2 class="subtitle">Nuxt.js project</h2>
      <posts-list />
    </div>
  </section>
</template>

<script>
import PostsList from "~/components/PostsList.vue";

export default {
  components: {
    PostsList
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  max-width: 1160px;
}
.title {
  text-align: center;
  font-size: 1.9rem;
  text-transform: uppercase;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.subtitle {
  text-align: center;
  margin-bottom: 0.3rem;
}
</style>

