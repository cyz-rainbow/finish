<template>
  <div>
    <div class="seconds_img">
      <img
        src="http://localhost:8080/%E8%AE%BE%E8%AE%A1%E5%9B%BE/%E5%88%87%E5%9B%BE/banner1.jpg"
        alt=""
      />
    </div>

    <div class="seconds_cont">
      <p>预约房先森服务</p>
      <van-divider>
        <img
          src="http://localhost:8080/%E8%AE%BE%E8%AE%A1%E5%9B%BE/%E5%88%87%E5%9B%BE/common/icon_title.png"
          width="10%"
          alt=""
        />
      </van-divider>

      <div class="seconds_cont_div">
        <input type="text" placeholder="小区名" />
        <input type="text" placeholder="手机号" />
        <input type="text" placeholder="建筑面积" />
        <button class="btn">立即预约</button>
      </div>
    </div>

    <div class="seconds_conts">
      <p>我们是谁，我们如何与众不同?</p>
      <van-divider>
        <img
          src="http://localhost:8080/%E8%AE%BE%E8%AE%A1%E5%9B%BE/%E5%88%87%E5%9B%BE/common/icon_title.png"
          width="10%"
          alt=""
        />
      </van-divider>
      <img
        src="http://localhost:8080/%E8%AE%BE%E8%AE%A1%E5%9B%BE/%E5%88%87%E5%9B%BE/2.png"
        width="100%"
        alt=""
      />
    </div>
    <div class="sss"></div>
    <secon />

    <div class="seconds_cont">
      <br />
      <p>我们是谁，我们如何与众不同?</p>
      <van-divider>
        <img
          src="http://localhost:8080/%E8%AE%BE%E8%AE%A1%E5%9B%BE/%E5%88%87%E5%9B%BE/common/icon_title.png"
          width="10%"
          alt=""
        />
      </van-divider>

      <div class="swipe">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img
              src="http://localhost:8080/%E8%AE%BE%E8%AE%A1%E5%9B%BE/%E5%88%87%E5%9B%BE/banner.jpg"
              width="100%"
            />
          </van-swipe-item>
          <van-swipe-item>
            <img
              src="http://localhost:8080/%E8%AE%BE%E8%AE%A1%E5%9B%BE/%E5%88%87%E5%9B%BE/banner2.jpg"
              width="100%"
            />
          </van-swipe-item>
          <van-swipe-item>
            <img
              src="http://localhost:8080/%E8%AE%BE%E8%AE%A1%E5%9B%BE/%E5%88%87%E5%9B%BE/banner3.jpg"
              width="100%"
            />
          </van-swipe-item>
          <van-swipe-item>
            <img
              src="http://localhost:8080/%E8%AE%BE%E8%AE%A1%E5%9B%BE/%E5%88%87%E5%9B%BE/banner1.jpg"
              width="100%"
            />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>

    <second />
    <seconda />
  </div>
</template>
<script>
import secon from "../seconds/secon";
import second from "../seconds/second";
import seconda from "../seconds/seconda";
export default {
  components: {
    secon,
    second,
    seconda,
  },
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
.swipe {
  padding: 1rem 0;
}
.seconds_img {
  width: 100%;
}
.seconds_img img {
  width: 100%;
}
.seconds_cont {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 0.32rem;
  /* background: #999; */
}
.seconds_cont_div {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}
.seconds_cont_div input {
  width: 100%;
  height: 0.7rem;
  border: 1px solid rgb(223, 223, 223);
  margin-top: 0.3rem;
  border-radius: 0.2rem;
  color: rgb(235, 230, 230);
  font-size: 0.2rem;
}
.btn {
  width: 100%;
  height: 0.7rem;
  margin-top: 0.3rem;
  font-size: 0.25rem;
  border-radius: 0.2rem;
  background: orange;
  border: 0;
  color: #fff;
}

.seconds_conts {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 0.32rem;
  background: rgb(240, 240, 240);
}
.sss {
  width: 100%;
  height: 0.1rem;
  background: rgb(230, 230, 230);
}
</style>
