import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/tailwind.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAlignLeft,
  faArrowLeft,
  faBell,
  faBookmark,
  faCalendar,
  faClipboardList,
  faCog,
  faComment,
  faEllipsisH,
  faEnvelope,
  faHashtag,
  faHeart,
  faHome,
  faImage,
  faImages,
  faRetweet,
  faSearch,
  faShareSquare,
  faSmile,
  faSun,
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
  faSearch,
  faSun,
  faImage,
  faImages,
  faAlignLeft,
  faSmile,
  faCalendar,
  faCog,
  faArrowLeft
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
