<template>
  <div class="layout">
    <Left />
    <Content />
    <Right />
  </div>
</template>

<script>
import Left from "./left";
import Right from "./right";
import Content from "./content";
export default {
  name: "Layout",
  components: { Left, Right, Content },
};
</script>

<style lang="postcss">
.layout {
  @apply container mx-auto flex;
}
</style>
