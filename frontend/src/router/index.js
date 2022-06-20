import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import Profile from "@/views/Profile.vue";
import About from "@/views/About.vue";
import Haphazardly from "@/views/Haphazardly.vue";
import Myquotes from "@/views/Myquotes.vue";
import auth from "@/auth";

const router = createRouter({
  history: createWebHistory(/* import.meta.env.BASE_URL */),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        allowAnonymous: true,
      },
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        allowAnonymous: true,
      },
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup,
      meta: {
        allowAnonymous: true,
      },
    },
    {
      path: "/profile",
      name: "me",
      component: Profile,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {
        allowAnonymous: true,
      },
    },
    {
      path: "/haphazardly",
      name: "haphazardly",
      component: Haphazardly,
      meta: {
        allowAnonymous: true,
      },
    },
    {
      path: "/myquotes",
      name: "myquotes",
      component: Myquotes,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const jwt = localStorage.getItem("token");
    if (jwt) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.allowAnonymous)) {
    if (auth.user.authenticated) {
      next("/home");
      return;
    }
    next();
  } else {
    next();
  }
});



export default router;
