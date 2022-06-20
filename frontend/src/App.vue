<script setup>
import { ref } from "vue";
import auth from "@/auth";

const user = ref({
  user: auth.user,
});

function logout() {
  auth.logout();
}
</script>
<template>
  <nav class="navbar navbar-default">
    <div class="container">
      <ul class="nav navbar-nav">
        <li><router-link :to="{ name: 'home' }">Home</router-link></li>
        <li v-if="!user.user.authenticated">
          <router-link :to="{ name: 'login' }">Login</router-link>
        </li>
        <li v-if="!user.user.authenticated">
          <router-link :to="{ name: 'signup' }">Sign up</router-link>
        </li>
        <li v-if="user.user.authenticated">
          <router-link :to="{ name: 'me' }">My profile</router-link>
        </li>
        <!-- <li v-if="user.user.authenticated">
          <p>Welcome</p>
        </li> -->
        <li class="nav navbar-nav navbar-right" v-if="user.user.authenticated">
          <router-link :to="{ name: 'login' }" @click="logout"
            >Logout</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
  <div class="container">
    <router-view></router-view>
  </div>
</template>
