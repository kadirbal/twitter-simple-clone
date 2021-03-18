<template>
  <nav class="left">
    <ul>
      <li>
        <button>Kuş</button>
      </li>
      <li v-for="(item, i) in menu" :key="i" class="">
        <button class="p-3 text-lg w-full text-left border my-2">
          {{ item.name }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Left",
  data: () => ({
    menu: [
      { name: "Anasayfa", to: "/" },
      { name: "Keşfet", to: "/" },
      { name: "Bildirimler", to: "/" },
      { name: "Mesajlar", to: "/" },
      { name: "Yer İşaretleri", to: "/" },
      { name: "Listeler", to: "/" },
      { name: "Profil", to: "/" },
    ],
  }),
};
</script>

<style lang="postcss">
.left {
  @apply w-1/5 h-screen px-3 sticky top-0 border-r;
}
</style>
