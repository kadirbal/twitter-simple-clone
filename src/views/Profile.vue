<template>
  <div class="profile">
    <div class="p-4 flex border-b items-center">
      <font-awesome-icon icon="arrow-left" class="text-xl text-blue-600" />
      <div class="flex flex-col ml-4">
        <h2 class="text-xl font-bold">
          {{ $store.state.user.data.first_name }}
          {{ $store.state.user.data.last_name }}
        </h2>
        <span class="text-gray-400 text-xs"> 234 Tweet </span>
      </div>
    </div>
    <div class="static border w-full h-full">
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2020/12/02/00/56/mountains-5795880_960_720.jpg"
          class="h-48 w-full object-cover relative top-0 right-0"
        />
      </div>
      <div class="relative -top-16">
        <img
          :src="$store.state.user.data.avatar"
          class="rounded-full border-4 border-black mx-4 z-20 object-contain"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  components: {},
};
</script>
