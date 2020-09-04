import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);


import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";
Vue.component("Loading", Loading);

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
