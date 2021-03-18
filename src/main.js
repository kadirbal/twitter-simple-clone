import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/tailwind.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBell,
  faBookmark,
  faClipboardList,
  faComment,
  faEllipsisH,
  faEnvelope,
  faHashtag,
  faHeart,
  faHome,
  faRetweet,
  faSearch,
  faShareSquare,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faHashtag,
  faBell,
  faEnvelope,
  faBookmark,
  faClipboardList,
  faUser,
  faEllipsisH,
  faHome,
  faRetweet,
  faHeart,
  faShareSquare,
  faComment,
  faTwitter,
  faSearch
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
