import router from "@/router";
import axios from "axios";
import { ref } from "vue";

const API_URL = "http://localhost:3001/";
const LOGIN_URL = API_URL + "api/user/login";
const SIGNUP_URL = API_URL + "api/user/signup";
const QOUTES_URL = API_URL + "api/todos";

let user = ref({
  authenticated: false,
  userId: "",
  token: "",
  tokenTimer: "",
  authStatusListener: "",
  error: "",
});

const quote = ref({
  todos: [],
});

function signup(creds, redirect) {
  axios
    .post(SIGNUP_URL, creds)
    .then(function (response) {
      // localStorage.setItem("token", response.data.token);

      // user.value.authenticated = true;

      if (redirect) {
        router.push({ name: redirect });
      }
    })
    .catch(function (err) {
      user.value.error = err.response.data;
    });
}

function login(creds, redirect) {
  axios
    .post(LOGIN_URL, creds)
    .then(function (response) {
      console.log("res", response);
      const token = response.data.token;
      // token = token;
      console.log("token", token);
      if (token) {
        const expiresInDuration = response.data.expiresIn;
        setAuthTimer(expiresInDuration);
        user.value.authenticated = true;
        user.value.userId = response.data.userId;
        // user.value.authStatusListener.next(true);
        const now = new Date();
        const expirationDate = new Date(
          now.getTime() + expiresInDuration * 1000
        );
        console.log("expera", expirationDate);
        saveAuthData(token, expirationDate, response.data.userId);
        // router.navigate(["/"]);
        if (redirect) {
          router.push({ name: redirect });
        }
      }
      /* localStorage.setItem("token", response.data.token);

      user.value.authenticated = true;

      if (redirect) {
        router.push({ name: redirect });
      } */
    })
    .catch(function (err) {
      user.value.error = err.response.data;
    });
}

function logout() {
  localStorage.removeItem("token");
  user.value.authenticated = false;
}

function checkAuth() {
  const jwt = localStorage.getItem("token");
  if (jwt) {
    user.value.authenticated = true;
  } else {
    user.value.authenticated = false;
  }
}

function getAuthHeader() {
  return {
    // Authorization: "Bearer " + localStorage.getItem("token"),
  };
}
function setAuthTimer(duration) {
  console.log("Setting timer: " + duration);
  user.value.tokenTimer = setTimeout(() => {
    logout();
  }, duration * 1000);
}
function saveAuthData(token, expirationDate, userId) {
  localStorage.setItem("token", token);
  localStorage.setItem("expiration", expirationDate.toISOString());
  localStorage.setItem("userId", userId);
}

function addQuote(creds) {
  axios
    .post(QOUTES_URL, creds)
    .then(function (response) {
    })
    .catch(function (err) {
      user.value.error = err.response.data;
    });
}

async function getQuotes() {
  try {
    const res = await axios.get(QOUTES_URL);
    quote.value = res.data.todos;
    console.log('rer',res.data.todos);
  } catch (error) {
    console.log(error.message);
  }
}

export default {
  user,
  login,
  signup,
  logout,
  checkAuth,
  getAuthHeader,
  addQuote,
  getQuotes,
};
