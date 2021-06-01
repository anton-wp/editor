<template>
  <Form :formLogin="true"
    >Don't have an account?
    <router-link to="/register">Sign Up</router-link>.</Form
  >
</template>

<script>
import Form from "@/components/Login/Form";

export default {
  components: {
    Form,
  },
};
</script>


