<template>
    <h2>Sign Up Form</h2>
    <DynamicForm :schema="formSchema" />
</template>
<script>
import DynamicForm from './DynamicForm.vue';

export default {
    components: {
        DynamicForm,
        DynamicForm
    },
    data: () => {
        const formSchema = {
            fields: [
                {
                    label: 'Your Name',
                    name: 'name',
                    as: 'input',
                    rules: 'required',
                    class: 'form-control',
                },
                {
                    label: 'Your Email',
                    name: 'email',
                    as: 'input',
                    rules: 'required|email',
                    class: 'form-control',
                },
                {
                    label: 'Your Password',
                    name: 'password',
                    as: 'input',
                    type: 'password',
                    rules: 'required|password',
                    class: 'form-control',
                },
            ],
        };
        return {
            formSchema,
        };
    },
};
</script>
  