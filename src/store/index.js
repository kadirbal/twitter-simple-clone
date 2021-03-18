import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    users: [],
    recommentedUsers: [],
  },
  mutations: {
    SET_USERS: (state, users) => (state.users = users),
    SET_USER: (state, user) => (state.user = user),
    SET_RECOMMENTED_USER: (state, user) => {
      state.recommentedUsers.push(user);
    },
  },
  actions: {
    async fetchUser({ commit }, { id, mutation }) {
      const user = await (
        await fetch(`https://reqres.in/api/users/${id}`)
      ).json();
      commit(`${mutation}`, user);
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
