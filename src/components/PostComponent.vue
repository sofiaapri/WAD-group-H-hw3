<template>
  <article class="post">
    <header class="post-header">
      <img class="user" src="/images/icon.png" alt="avatar" />
      <span class="author">
        {{ post.author && post.author.name ? post.author.name : 'Unknown' }}
      </span>

      <span v-if="post.createdAt" class="date">
        {{ formattedDate }}
      </span>
    </header>

    <div class="post-content">
      <p>{{ post.body }}</p>

      <img
        v-if="post.imageUrl"
        class="post-image"
        :src="post.imageUrl"
        alt="Post image"
      />
    </div>

    <footer class="post-footer">
      <button class="like-btn" @click="likePost">
        <img class="like-icon" src="/images/like.png" alt="Like" />
        <span>{{ post.likes }}</span>
      </button>
    </footer>
  </article>
</template>

<script>
export default {
  name: "PostComponent",
  props: ["post"],
  computed: {
    formattedDate() {
      if (!this.post || !this.post.createdAt) return "";
      const d = new Date(this.post.createdAt);
      return d.toLocaleDateString("en-GB", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    },
  },
  methods: {
    likePost() {
      this.$store.commit("incrementLikes", this.post.id);
    },
  },
};
</script>
