import "bootstrap/dist/css/bootstrap.min.css"

import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { Field, Form, defineRule } from "vee-validate";


defineRule("required", (value) => {
  if (!value || !value.length) {
    return "This field is required";
  }
  return true;
});
defineRule("email", (value) => {
  // Field is empty, should pass
  if (!value || !value.length) {
    return true;
  }
  // Check if email
  if (!/^[\w\.\-\,\+]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
    return "This field must be a valid email";
  }
  return true;
});


defineRule("password", (value) => {
    // Field is empty, should pass
    if (!value || !value.length) {
      return true;
    }
    // Check if email
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value)) {
      return "Password is invalid, should contain at least one capital letter, at least one lower case letter, and at least one number";
    }
    return true;
  });
createApp(App)
.use(Field)
.use(Form)
.mount("#app");

import "bootstrap/dist/js/bootstrap.js"
