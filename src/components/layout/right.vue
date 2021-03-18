<template>
  <div class="right">
    <custom-input />
    <ul class="bg-gray-800 mt-4 rounded-2xl trending">
      <li class="py-2">
        <div class="flex items-center justify-between p-3">
          <h2>İlgini çekebilecek gündemler</h2>
          <font-awesome-icon icon="cog" class="text-blue-400" />
        </div>
      </li>
      <li v-for="(item, i) in trends" :key="i">
        <div class="flex flex-col p-3">
          <span class="text-xs text-gray-400 my-1">
            {{ item.first }}
          </span>
          <span> #{{ item.trend }} </span>
          <span class="text-xs text-gray-400"> {{ item.count }} Tweet </span>
        </div>
      </li>
    </ul>
    <ul class="bg-gray-800 mt-4 rounded-2xl recommended-follows">
      <li>
        <h2 class="text-lg font-bold">Kimi takip etmeli</h2>
      </li>
      <li v-for="(item, i) in $store.state.recommentedUsers" :key="i">
        <div class="flex justify-between">
          <div class="flex">
            <img
              class="h-12 w-12 object-contain rounded-full"
              :src="item.data.avatar"
            />
            <div class="flex flex-col ml-2">
              <span>
                {{ item.data.first_name }} {{ item.data.last_name }}
              </span>
              <span class="text-gray-500 text-sm">
                @{{ item.data.email.split("@")[0] }}
              </span>
            </div>
          </div>
          <button class="bg-white text-black rounded-full px-2 py-1">
            Takip et
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import CustomInput from "../CustomInput";
export default {
  name: "Left",
  components: { CustomInput },
  data: () => ({
    trends: [
      {
        first: "Türkiye konumunda gündemde",
        trend: "The Blacklist",
        count: 2131,
      },
      {
        first: "Türkiye konumunda gündemde",
        trend: "The 100",
        count: 2131,
      },
      {
        first: "Türkiye konumunda gündemde",
        trend: "Raised by Wolves",
        count: 2131,
      },
      {
        first: "Türkiye konumunda gündemde",
        trend: "Person of Interes",
        count: 2131,
      },
      {
        first: "Türkiye konumunda gündemde",
        trend: "Fringe",
        count: 2131,
      },
    ],
  }),
};
</script>

<style lang="postcss">
.right {
  width: 350px;
  @apply h-screen p-3 sticky top-0 border-l;
}
.trending,
.recommended-follows {
  li {
    &:not(:last-child) {
      @apply border-b;
    }
  }
}
.recommended-follows {
  li {
    @apply p-3;
  }
}
</style>
