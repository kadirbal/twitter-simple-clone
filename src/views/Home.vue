<template>
  <div class="home">
    <div class="p-4 flex justify-between border-b items-center">
      <h2 class="text-xl font-bold">Anasayfa</h2>
      <font-awesome-icon icon="sun" class="text-xl text-blue-600" />
    </div>
    <div class="p-4 border-b flex">
      <img
        :src="$store.state.user.data.avatar"
        class="h-12 w-12 object-contain rounded-full"
      />
      <div class="flex w-full flex-col">
        <textarea
          class="bg-transparent ml-2 w-full border-b focus:border-opacity-100"
          placeholder="Neler oluyor?"
        />
        <div class="flex py-4 justify-between items-center">
          <div>
            <button
              v-for="(item, i) in [
                'image',
                'images',
                'align-left',
                'smile',
                'calendar',
              ]"
              :key="i"
              class="mx-2 focus:outline-none"
            >
              <font-awesome-icon :icon="item" class="text-blue-600" />
            </button>
          </div>
          <button
            class="bg-blue-600 px-6 py-2 rounded-full focus:outline-none font-bold"
          >
            Tweetle
          </button>
        </div>
      </div>
    </div>
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

  methods: {},
};
</script>
