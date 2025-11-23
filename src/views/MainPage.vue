<template>
  <div class="main-page">
    <h1>Main Page</h1>

    <button @click="reset">Reset All Likes</button>

    <div class="posts">
      <PostComponent
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </div>
  </div>
</template>

<script>
import PostComponent from "../components/PostComponent.vue"
export default {
  name: "MainPage",
  components: { PostComponent },
  computed: {
      posts() {
      return this.$store.state.posts;
    }
  },
  methods: {
    reset() {
      this.$store.commit("resetLikes")
    }
  }
};
</script>