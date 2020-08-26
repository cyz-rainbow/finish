<template>
  <div>
    <div class="sss"></div>
    <div class="content">
      <div class="cont_diva">
        <i class="iconfont icon-hot-line"></i>
        <span>服务热线:400-9977-658</span>
      </div>

      <div class="cont_divb">
        <p class="color">联系我们</p>
        <p>触屏版</p>
        <p>电脑版</p>
        <p>关于我们</p>
      </div>

      <hr />
      <div class="cont_divc">2016浙ICP备15033817号</div>
    </div>
  </div>
</template>

<style scoped>
/* @import url(); 引入css类 */
.sss {
  width: 100%;
  height: 0.2rem;
  background: rgb(230, 230, 230);
}
.content {

  width: 90%;
  margin: 10px auto;
  text-align: center;
  font-size: 0.29rem;
}
.cont_divb {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.cont_diva i,.color{
  color: green;
}
.cont_divc{
  color: #999;
}
</style>
