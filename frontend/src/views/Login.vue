<script setup>
import { ref } from "vue";
import auth from "@/auth";

// const { login } = useUserStore;
const credentials = ref({
  email: "",
  password: "",
});
const error = ref({ responseError: auth.user });
if (error.value.responseError.error) {
  error.value.responseError.error = "";
}

function login() {
  const creds = {
    email: credentials.value.email,
    password: credentials.value.password,
  };
  console.log(creds);
  auth.login(creds, "home");
}
</script>
<template>
  <div class="col-sm-4 col-sm-offset-4">
    <h2>Log In</h2>
    <p>Log in to your account.</p>
    <div class="alert alert-danger" v-if="error.responseError.error">
      <p>{{ error.responseError.error }}</p>
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="Enter your email"
        v-model.trim="credentials.email"
      />
    </div>
    <div class="form-group">
      <input
        type="password"
        class="form-control"
        placeholder="Enter your password"
        v-model.trim="credentials.password"
      />
    </div>
    <button @click="login()" class="btn btn-primary">Login</button>
  </div>
</template>
<style></style>
