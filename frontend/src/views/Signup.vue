<script setup>
import { ref } from "vue";
import auth from "../auth";

let credentials = ref({
  email: "",
  password: "",
  confirmPassword: "",
});
const error = ref({ responseError: auth.user });
if (error.value.responseError.error) {
  error.value.responseError.error = "";
}

function signup() {
  if (credentials.value.password != credentials.value.confirmPassword) {
    error.value.responseError.error =
      "You first Passwords is not similar with 2nd password. Please enter same password in both";

    return;
  }
  let creds = {
    email: credentials.value.email,
    password: credentials.value.password,
  };

  auth.signup(creds, "login");
  // error.value.responseError.user.error = ""
}
</script>
<template>
  <div class="col-sm-4 col-sm-offset-4">
    <h2>Sign Up</h2>
    <p>Sign up for a free account.</p>
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
    <div class="form-group">
      <input
        type="password"
        class="form-control"
        placeholder="Confirm your password"
        v-model.trim="credentials.confirmPassword"
      />
    </div>
    <button @click="signup()" class="btn btn-primary">Sign up</button>
  </div>
</template>
<style></style>
