<script setup>
import { ref } from "vue";
import auth from "@/auth";

let header = ref("Home works !");
let quote = ref(null);
// const { login } = useUserStore;
const credentials = ref({
  description: "",
  creator: "",
});

const error = ref({ responseError: auth.user });
if (error.value.responseError.error) {
  error.value.responseError.error = "";
}

const quotes = ref({
  todos: auth.getQuotes(),
});
console.log(quotes);
function add() {
  const creds = {
    description: credentials.value.description,
    creator: localStorage.getItem("userId"),
  };
  console.log(creds);
  auth.addQuote(creds);
}
</script>
<template>
  <div class="col-sm-4 col-sm-offset-4">
    <h2>My quotes !</h2>
    <p>Find all your quotes.</p>
    <div class="alert alert-danger" v-if="error.responseError.error">
      <p>{{ error.responseError.error }}</p>
    </div>

    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="Enter your quote for today"
        v-model.trim="credentials.description"
      />
    </div>
    <button @click="add()" class="btn btn-primary">Add</button>
  </div>

  <div v-for="item in quotes.todos" :key="item._id">
    <p>{{ item.description }}</p>
  </div>
</template>
<style></style>
