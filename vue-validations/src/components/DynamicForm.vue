<template>
  <Form class="needs-validation">
    <div
      v-for="{ as, name, label, children, ...attrs } in schema.fields"
      :key="name"
      class="form-floating mb-3"
    >
        <Field  :name="name" v-bind="attrs" v-slot="{ field, meta, errorMessage }" >
          <input v-bind="field" :name="name" :id="name" :class="{'is-invalid': (!meta.valid && meta.touched ), 'form-control': true}" />
          <span ng-if="errorMessage" class="invalid-feedback">{{ errorMessage }}</span>
        </Field>
        <label :for="name">{{ label }}</label>
    </div>
    <button>Submit</button>
  </Form>
</template>
<script>
import { Form, Field, ErrorMessage, validate } from 'vee-validate';
export default {
  name: 'DynamicForm',
  components: {
    Form,
    Field,
    ErrorMessage
  },
  props: {
    schema: {
      type: Object,
      required: true,
    },
  },
};
</script>