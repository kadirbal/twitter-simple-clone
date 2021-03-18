import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    users: [],
  },
  mutations: {
    SET_USERS: (state, users) => (state.users = users),
    SET_USER: (state, user) => (state.user = user),
  },
  actions: {
    async fetchUser({ commit }) {
      const user = await (await fetch("https://reqres.in/api/users/2")).json();
      commit("SET_USER", user);
    },
    async fetchUsers({ commit }, { page }) {
      const users = await (
        await fetch(`https://reqres.in/api/users?page=${page}`)
      ).json();

      commit("SET_USERS", users);
    },
  },
  modules: {},
});
