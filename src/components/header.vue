<template>
  <div class="header">
    <button @click="goBack()">退出</button>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>
