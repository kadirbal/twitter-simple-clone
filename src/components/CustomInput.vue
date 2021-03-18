<template>
  <div class="custom-input">
    <font-awesome-icon icon="search" class="text-gray-800" />
    <input
      class="ml-4 w-full bg-transparent focus:outline-none"
      placeholder="Twitter'da Ara"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss">
.custom-input {
  @apply flex py-2 px-2 bg-gray-600 rounded-full items-center;
}
</style>
