<template>
  <div>
    <HomeNav></HomeNav>
    <LoginNav></LoginNav>
    <Title></Title>
  </div>
</template>

<script>
import HomeNav from "../HomeNav.vue";
import LoginNav from "../result/LoginNav";
import Title from "./Title";
export default {
  components: {
    HomeNav,
    LoginNav,
    Title,
  },
};
</script>

<style></style>
