<template>
  <div>
    <div class="wrap">
      <van-row type="flex" justify="space-between">
        <van-col span="6">
          <span class="title"> 类型</span> <i class="iconfont icon-down"></i
        ></van-col>
        <van-col span="6">
          <span class="title"> 风格</span> <i class="iconfont icon-down"></i
        ></van-col>
        <van-col span="6">
          <span class="title"> 面积</span> <i class="iconfont icon-down"></i
        ></van-col>
        <van-col span="6">
          <span class="title"> 价格</span> <i class="iconfont icon-down"></i
        ></van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrap {
  width: 100%;
  height: 1.2rem;
  margin-top: 1.2rem;
  color: #999999;
}
.title {
  font-size: 0.4rem;
  color: #999999;
}
</style>
