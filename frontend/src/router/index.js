import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import Profile from "@/views/Profile.vue";
import About from "@/views/About.vue";
import Haphazardly from "@/views/Haphazardly.vue"

const router = createRouter({
  history: createWebHistory(/* import.meta.env.BASE_URL */),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup,
    },
    {
      path: "/profile",
      name: "me",
      component: Profile,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/haphazardly",
      name: "haphazardly",
      component: Haphazardly,
    }
  ],
});

export default router;
