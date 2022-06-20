<script setup>
import { ref } from "vue";
import axios from "axios";

let header = ref("Home works !");
let quote = ref(null);

async function getQuote() {
  try {
    const res = await axios.get("http://localhost:3001/api/random-quote");
    quote.value = res.data;
    console.log(quote.value);
  } catch (error) {
    console.log(error.message);
  }
}
</script>
<template>
  <div class="col-sm-6 col-sm-offset-3">
    <h1>{{ header }}</h1>
    <h1>Get Your Quote!</h1>
    <button @click="getQuote" class="btn btn-primary">Get a Quote</button>
    <div class="quote-area" v-if="quote">
      <h2>
        <blockquote>{{ quote }}</blockquote>
      </h2>
    </div>
  </div>
</template>
<style></style>
