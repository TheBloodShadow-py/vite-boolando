import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faHeart, faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faUser, faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

library.add([faHeart, faUser, faCartArrowDown, faHeartRegular]);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
