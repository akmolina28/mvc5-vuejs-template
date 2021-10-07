<template>
  <div>
    <h1>{{ message }}</h1>
    <input v-model="message" type="text" />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      message: 'Hello from Vue!',
    };
  },
  computed: {
    upperMessage() {
      return this.message.toUpperCase();
    },
  },
};
</script>
