<template>
  <div id="app">
    <HeaderComponent />

    <div class="layout">
      <div class="sidebar"></div>

      <main class="content">
        <router-view />
      </main>

      <div class="sidebar"></div>
    </div>

    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>