<template>
  <div class="home">
    <tweet
      v-for="(item, i) in $store.state.users.data"
      :tweet="item"
      :key="i"
    />
    <tweet
      v-for="(item, i) in $store.state.users.data"
      :tweet="item"
      :key="i"
    />
    <!-- <tweet
      v-for="(item, i) in $store.state.users.data"
      :tweet="item"
      :key="i"
    /> -->
  </div>
</template>

<script>
import Tweet from "../components/Tweet.vue";
export default {
  components: { Tweet },
  name: "Home",
  async created() {
    await this.$store.dispatch("fetchUser");
    await this.$store.dispatch("fetchUsers", { page: 1 });
  },
  methods: {},
};
</script>
