<template>
  <router-link
    :to="item.to"
    exact-active-class="nav-button-active"
    class="nav-button"
    tag="button"
  >
    <font-awesome-icon :icon="item.icon" />

    <span class="px-4">
      {{ item.name }}
    </span>
  </router-link>
</template>

<script>
export default {
  name: "NavButton",
  props: ["item"],
};
</script>

<style lang="postcss">
.nav-button {
  @apply p-3 w-full  text-left my-2 focus:outline-none text-xl font-bold  rounded-full;
  &:hover {
    @apply outline-none bg-blue-400 text-blue-600 bg-opacity-40;
  }
  &-active {
    @apply p-3 text-blue-600 rounded-full;
  }
}
a {
  margin: 0;
  padding: 0;
}
</style>
