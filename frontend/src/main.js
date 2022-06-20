import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import auth from "./auth";
import axios from "axios";

/* axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("id_token"); */
auth.checkAuth();
const app = createApp(App);


app.use(router);

app.mount("#app");
