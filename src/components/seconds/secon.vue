<template>
  <div>
    <div class="sss"></div>
    <div class="seconds_cont">
      <p>我们可以为您提供</p>
      <van-divider>
        <img src="http://localhost:8080/%E8%AE%BE%E8%AE%A1%E5%9B%BE/%E5%88%87%E5%9B%BE/common/icon_title.png" width="10%" alt="">
      </van-divider>
    </div>

    <div>
      <van-grid :column-num="3">
        <van-grid-item>
          <div class="icon">
            <i class="iconfont icon-app"></i>
          </div>
          <div class="pa">产品系列</div>
          <div class="pb">半包、全包套餐、全屋定制及个性化升级</div>
        </van-grid-item>

        <van-grid-item>
          <div class="icon">
            <i class="iconfont icon-price"></i>
          </div>
          <div class="pa">产品系列</div>
          <div class="pb">半包、全包套餐、全屋定制及个性化升级</div>
        </van-grid-item>
        <van-grid-item>
          <div class="icon">
            <i class="iconfont icon-live"></i>
          </div>
          <div class="pa">产品系列</div>
          <div class="pb">半包、全包套餐、全屋定制及个性化升级</div>
        </van-grid-item>
        <van-grid-item>
          <div class="icon">
            <i class="iconfont icon-preferential"></i>
          </div>
          <div class="pa">产品系列</div>
          <div class="pb">半包、全包套餐、全屋定制及个性化升级</div>
        </van-grid-item>
        <van-grid-item>
          <div class="icon">
            <i class="iconfont icon-construction-site"></i>
          </div>
          <div class="pa">产品系列</div>
          <div class="pb">半包、全包套餐、全屋定制及个性化升级</div>
        </van-grid-item>
        <van-grid-item>
          <div class="icon">
            <i class="iconfont icon-protection"></i>
          </div>
          <div class="pa">产品系列</div>
          <div class="pb">半包、全包套餐、全屋定制及个性化升级</div>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  //事件处理器
  methods: {},
  // 计算属性
  computed: {},
  //侦听器
  watch: {},
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.sss {
  width: 100%;
  height: 0.2rem;
  background: rgb(230, 230, 230);
}
.seconds_cont {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 0.32rem;
}
.icon {
  width: 1.2rem;
  height: 1.2rem;
  border: 1px solid #39c894;
  border-radius: 50%;
  text-align: center;
  line-height: 0.8rem;
}
.icon i {
  font-size: 0.4rem;
  color: #39c894;
}
.pa {
  font-size: 0.27rem;
  margin: 0.12rem 0;
}
.pb {
  font-size: 0.2rem;
  text-align: center;
}
</style>
