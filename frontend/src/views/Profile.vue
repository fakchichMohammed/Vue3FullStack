<script setup>
import { ref } from "vue";

const userInfo = ref({
  firstname: "Mohammed",
  lastname: "Fakchich",
  email: "",
  number: "",
});

function saveProfile() {
  console.log("TODO");
}
</script>
<template>
  <div class="container rounded bg-white mt-5">
    <div class="row">
      <div class="col-md-4 border-right">
        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
          <img
            class="rounded-circle mt-5"
            src="https://i.imgur.com/0eg0aG0.jpg"
            width="90"
          /><span class="font-weight-bold">Mohammed fakchich</span
          ><span class="text-black-50">jmed@med.com</span
          ><span>United States</span>
        </div>
      </div>
      <div class="col-md-8">
        <div class="p-3 py-5">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <div class="d-flex flex-row align-items-center back">
              <i class="fa fa-long-arrow-left mr-1 mb-1"></i>
              <router-link :to="{ name: 'home' }"
                ><h6>Back to home</h6></router-link
              >
            </div>
            <h6 class="text-right">Edit Profile</h6>
          </div>
          <div class="row mt-2">
            <div class="col-md-6">
              <input
                type="text"
                class="form-control"
                placeholder="first name"
                v-model="userInfo.firstname"
              />
            </div>
            <div class="col-md-6">
              <input
                type="text"
                class="form-control"
                v-model="userInfo.lastname"
                placeholder="last name"
              />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-6">
              <input
                type="text"
                class="form-control"
                placeholder="Email"
                value="john_doe12@bbb.com"
              />
            </div>
            <div class="col-md-6">
              <input
                type="text"
                class="form-control"
                v-model="userInfo.number"
                placeholder="Phone number"
              />
            </div>
          </div>

          <!--  <div class="row mt-3 form-group">
            <div class="col-md-6">
              <input
                type="password"
                class="form-control"
                placeholder="New password"
                v-model="userInfo.password"
              />
            </div>
            <div class="col-md-6">
              <input
                type="text"
                class="form-control"
                value="043958409584095"
                placeholder="Account Number"
              />
            </div>
          </div> -->
          <div class="mt-5 text-right">
            <button
              class="btn btn-primary profile-button"
              type="button"
              @click="saveProfile"
            >
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
img {
  border-radius: 133px;
}

span {
  display: block;
  padding: 0.5em;
}
.row {
  padding: 1em;
}
</style>
