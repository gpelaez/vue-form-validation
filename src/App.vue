<script setup>
import SignUpForm from './components/SignUpForm.vue';

const formSchema = {
  fields: [
    {
      label: 'Your Name',
      name: 'name',
      as: 'input',
    },
    {
      label: 'Your Email',
      name: 'email',
      as: 'input',
    },
    {
      label: 'Your Password',
      name: 'password',
      as: 'input',
      type: 'password'
    },
  ],
};
</script>

<template>

  <SignUpForm  />
</template>


