import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../components/layout/layout.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/Home.vue"),
      },
      {
        path: "explore",
        name: "Explore",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/Explore.vue"),
      },
      {
        path: "notifications",
        name: "Notifications",
        component: () =>
          import(
            /* webpackChunkName: "notifications" */ "../views/Notifications.vue"
          ),
      },
      {
        path: "messages",
        name: "Messages",
        component: () =>
          import(/* webpackChunkName: "messages" */ "../views/Messages.vue"),
      },
      {
        path: "bookmarks",
        name: "Bookmarks",
        component: () =>
          import(/* webpackChunkName: "bookmarks" */ "../views/Bookmarks.vue"),
      },
      {
        path: "lists",
        name: "Lists",
        component: () =>
          import(/* webpackChunkName: "lists" */ "../views/Lists.vue"),
      },
      {
        path: ":username",
        name: "Profile",
        component: () =>
          import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
