<template>
  <div class="content">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Content",
};
</script>

<style lang="postcss">
.content {
  @apply w-full px-4;
}
</style>
