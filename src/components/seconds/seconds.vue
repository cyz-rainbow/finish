<template>
  <div class="seconds">
    <div class="seconds_img">
      <img
        src="http://localhost:8080/%E8%AE%BE%E8%AE%A1%E5%9B%BE/%E5%88%87%E5%9B%BE/10quoted.jpg"
        alt=""
      />
    </div>

    <div class="seconds_cont">
      <p>房先森10S报价</p>
      <van-divider>
        <img src="http://localhost:8080/%E8%AE%BE%E8%AE%A1%E5%9B%BE/%E5%88%87%E5%9B%BE/common/icon_title.png" width="10%" alt="">
      </van-divider>
    </div>

    <div class="seconds_content">
      <div class="seconds_content_divA">
        <input type="text" placeholder="请填写建筑面积" value="80" />
        <span>平米</span>
      </div>
      <select name="现代" id="">
        <option value="">现代</option>
        <option value="">美式</option>
        <option value="">中式</option>
        <option value="">地中海</option>
        <option value="">欧式</option>
      </select>
      <div class="seconds_content_divB">
        <div>
          <button>-</button>
          <input type="text" value="2" />
          <span>室</span>
          <button>+</button>
        </div>

        <div>
          <button>-</button>
          <input type="text" value="1" />
          <span>厅</span>
          <button>+</button>
        </div>
      </div>

      <div class="seconds_content_divC">
        <div>
          <button>-</button>
          <input type="text" value="1" />
          <span>厨房</span>
          <button>+</button>
        </div>

        <div>
          <button>-</button>
          <input type="text" value="1" />
          <span>卫</span>
          <button>+</button>
        </div>

        <div>
          <button>-</button>
          <input type="text" value="1" />
          <span>阳台</span>
          <button>+</button>
        </div>
      </div>
      <button class="btn">立即报价</button>
    </div>
    <br>
    <secon />
    <second />
    <seconda />
  </div>
</template>
<script>
import secon from "./secon";
import second from "./second";
import seconda from "./seconda";
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
.seconds_img {
  width: 100%;
}
.seconds_img img {
  width: 100%;
}
.seconds_cont {
  width: 90%;
  margin: 0 auto;
  text-align: center;
}
.seconds_cont p {
  font-size: 0.32rem;
}
.seconds_content {
  width: 90%;
  margin: 0 auto;
}
.seconds_content .btn {
  width: 100%;
  height: 0.7rem;
  line-height: 0.7rem;
  background-color: #39c894;
  color: #fff;
  font-size: 14px;
  text-align: center;
  margin: 0 auto;
  border: 0;
}

.seconds_content_divA {
  width: 100%;
  position: relative;
}
.seconds_content_divA input {
  width: 99%;
  height: 0.4rem;
  padding: 0.1rem 0;
  font-size: 0.25rem;
  border: 1px solid rgb(226, 225, 225);
}
.seconds_content_divA span {
  font-size: 0.28rem;
  position: absolute;
  right: 1%;
  bottom: 15%;
}
.seconds_content select {
  width: 100%;
  border: 1px solid rgb(238, 238, 238);
  height: 0.7rem;
}
.seconds_content_divB {
  margin-top: 0.4rem;
  display: flex;
  justify-content: space-between;
}
.seconds_content_divB div {
  width: 48%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.27rem;
  position: relative;
}
.seconds_content_divB div input {
  width: 100%;
  height: 0.67rem;
  border: 1px solid rgb(233, 233, 233);
}
.seconds_content_divB div span {
  position: absolute;
  right: 0.6rem;
}
.seconds_content_divB div button {
  background: rgb(233, 233, 233);
  height: 0.8rem;
  border: 0;
}

.seconds_content_divC {
  margin-top: 0.4rem;
  display: flex;
  justify-content: space-between;
}

.seconds_content_divC div {
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.27rem;
  position: relative;
}
.seconds_content_divC div input {
  width: 100%;
  border: 1px solid rgb(233, 233, 233);
  height: 0.67rem;
}
.seconds_content_divC div span {
  position: absolute;
  right: 0.6rem;
}
.seconds_content_divC div button {
  background: rgb(233, 233, 233);
  border: 0;
  height: 0.8rem;
}
</style>
