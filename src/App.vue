<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  async created() {
    await this.$store.dispatch("fetchUser", { id: 1, mutation: "SET_USER" });
    await this.$store.dispatch("fetchUser", {
      id: 7,
      mutation: "SET_RECOMMENTED_USER",
    });
    await this.$store.dispatch("fetchUser", {
      id: 8,
      mutation: "SET_RECOMMENTED_USER",
    });
    await this.$store.dispatch("fetchUser", {
      id: 9,
      mutation: "SET_RECOMMENTED_USER",
    });
    await this.$store.dispatch("fetchUsers", { page: 1 });
  },
};
</script>
<style lang="postcss">
html {
  @apply bg-black text-white;
}
</style>
