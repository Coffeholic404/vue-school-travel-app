<script>

</script>

<template>
  <!-- we use the router link tag for any internal link -->
  <router-link to="/">Home</router-link>
  <br>
  <router-link to="/about">About</router-link>
  <router-view>

  </router-view>
</template>

<!-- <style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #9a0845aa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->
