<template>
  <div>
    <div class="wrap">
      <div class="Left">
        <img src="http://localhost:8080/设计图/切图/logo.png" alt="" />
      </div>
      <div class="Right">
        <i class="iconfont icon-nav"></i>
        <p class="text">导航</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrap {
  width: 100%;
  height: 1.5rem;
  background: white;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  border-bottom: solid grey;
}
.Left img {
  width: 3rem;
  height: 1rem;
  padding-top: 0.2rem;
  padding-left: 0.2rem;
}
.Right {
  padding-right: 0.4rem;
  position: relative;
}
.text {
  font-size: 0.29rem;
  color: #9b9b9b;
  position: absolute;
  top: 0.7rem;
  left: 0rem;
}
.iconfont {
  color: #9b9b9b;
  font-size: 0.4rem;
}
</style>
