<template>
  <nav class="left">
    <ul>
      <li>
        <button
          class="text-xl font-bold p-3 my-2 outline-none hover:bg-blue-400 bg-opacity-40 rounded-full"
        >
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </button>
      </li>
      <li v-for="(item, i) in menu" :key="i">
        <nav-button :item="item" />
      </li>
      <li class="mt-4">
        <button class="w-full bg-blue-500 py-2 rounded-full focus:outline-none">
          Tweet
        </button>
      </li>
    </ul>
    <div class="nav-user-card">
      <div class="flex items-center">
        <img :src="$store.state.user.pp" />
        <div class="username">
          <span v-html="$store.state.user.name"></span>
          <span v-html="`@${$store.state.user.username}`"></span>
        </div>
      </div>
      <font-awesome-icon icon="ellipsis-h" />
    </div>
  </nav>
</template>

<script>
import NavButton from "./NavButton.vue";
export default {
  components: { NavButton },
  name: "Left",
  data: () => ({
    menu: [
      { name: "Anasayfa", to: "/", icon: "home" },
      { name: "Keşfet", to: "/explore", icon: "hashtag" },
      { name: "Bildirimler", to: "/notifications", icon: "bell" },
      { name: "Mesajlar", to: "/messages", icon: "envelope" },
      { name: "Yer İşaretleri", to: "/bookmarks", icon: "bookmark" },
      { name: "Listeler", to: "/lists", icon: "clipboard-list" },
      { name: "Profil", to: "/profile", icon: "user" },
    ],
  }),
};
</script>

<style lang="postcss">
.left {
  @apply flex w-1/5 h-screen px-3 sticky top-0 border-r flex-col justify-between;
}

.nav-user-card {
  @apply flex p-3 my-2 rounded-full items-center justify-between;
  &:hover {
    @apply bg-blue-400 opacity-40;
  }
  .username {
    @apply flex flex-col ml-2 w-12;
  }
  span:first-child {
    @apply truncate;
  }
  span:last-child {
    @apply text-sm text-gray-600;
  }
  img {
    @apply h-10 w-10 rounded-full object-contain;
  }
}
</style>
