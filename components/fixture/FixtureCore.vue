<template>
  <div>
    <HomeNav></HomeNav>
    <LoginNav></LoginNav>
    <Ttitle></Ttitle>
  </div>
</template>

<script>
import HomeNav from "../HomeNav";
import LoginNav from "./LoginNav";
import Ttitle from "./Ttitle";
export default {
  components: {
    LoginNav,
    HomeNav,
    Ttitle,
  },
};
</script>

<style></style>
