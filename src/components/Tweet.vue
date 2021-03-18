<template>
  <div class="tweet">
    <!-- <div class="user">
      <img class="user-avatar" :src="tweet.avatar" />
    </div> -->
    <img class="user-avatar" :src="tweet.avatar" />
    <div class="tweet-content">
      <div class="user-info">
        <span>{{ tweet.first_name }} {{ tweet.last_name }}</span>
        <span class="ml-1 text-gray-400"
          >@{{ tweet.first_name[0] }}{{ tweet.last_name[0] }}</span
        >
        <span class="ml-1 text-gray-400">· 1d</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit at,
        accusamus labore reiciendis perferendis cum quo soluta quisquam optio a
        enim voluptatem est eligendi similique rerum aliquid nisi esse!
      </p>
      <div class="flex justify-between mt-2">
        <button v-for="(item, i) in tweetActions" :key="i">
          <button class="focus:outline-none">
            <font-awesome-icon
              :icon="item.icon"
              :class="`text-gray-600 hover:${item.color}`"
              text
            />
          </button>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tweet",
  props: ["tweet"],
  data: () => ({
    tweetActions: [
      /* ['', '', ''] */
      {
        icon: "comment",
        color: "text-blue-400",
      },
      {
        icon: "retweet",
        color: "text-green-400",
      },
      {
        icon: "heart",
        color: "text-red-400",
      },
      {
        icon: "share-square",
        color: "text-blue-400",
      },
    ],
  }),
};
</script>

<style lang="postcss">
.tweet {
  @apply flex p-4 border-b;
  &-content {
    @apply ml-2;
  }
}

.user {
  @apply flex;
  &-avatar {
    @apply h-12 w-12 object-contain rounded-full;
  }
}
</style>
