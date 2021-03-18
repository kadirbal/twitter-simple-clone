<template>
  <div class="profile">
    <div class="p-4 flex border-b items-center">
      <button @click="$router.go(-1)" class="focus:outline-none">
        <font-awesome-icon icon="arrow-left" class="text-xl text-blue-600" />
      </button>
      <div class="flex flex-col ml-4">
        <h2 class="text-xl font-bold">
          {{ $store.state.user.data.first_name }}
          {{ $store.state.user.data.last_name }}
        </h2>
        <span class="text-gray-400 text-xs"> 234 Tweet </span>
      </div>
    </div>
    <img
      src="https://cdn.pixabay.com/photo/2020/12/02/00/56/mountains-5795880_960_720.jpg"
      class="h-48 w-full object-cover relative top-0 right-0"
    />
    <div class="flex justify-between">
      <img
        :src="$store.state.user.data.avatar"
        class="rounded-full border-4 border-black mx-4 object-contain relative -mt-16"
      />
      <div>
        <button
          class="border border-white rounded-full focus:outline-none p-2 mr-4 mt-4"
        >
          Profili düzenle
        </button>
      </div>
    </div>
    <div class="px-4">
      <h2 class="text-xl font-bold">
        {{ $store.state.user.data.first_name }}
        {{ $store.state.user.data.last_name }}
      </h2>
      <span class="text-gray-400">
        @{{ $store.state.user.data.email.split("@")[0] }}
      </span>
    </div>
    <div class="px-4 py-2">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi mollitia
        facilis nobis nisi, nam dolorum deserunt dicta quaerat ipsa quia iusto,
        quis consequatur molestiae quam molestias adipisci quibusdam voluptates
        ratione?
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  components: {},
};
</script>
