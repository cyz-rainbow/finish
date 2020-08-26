<template>
  <div>
    <div class="wrap">
      <div class="middle">
        <img src="http://localhost:8080/设计图/切图/case/case.jpg" alt="" />
        <div class="button">
          <div class="Left">
            <span class="title">
              F1 &nbsp;现代简欧风格
            </span>
            <p class="hen">风格 <span style="color:#FFB506"> 混搭</span></p>
            <p class="heng">面积<span style="color:#FFB506">800~100万</span></p>
          </div>
          <div class="Right">
            <span> 以预约623条</span>
          </div>
        </div>
      </div>
      <div class="middle">
        <img src="http://localhost:8080/设计图/切图/case/case.jpg" alt="" />
        <div class="button">
          <div class="Left">
            <span class="title">
              F1 &nbsp;现代简欧风格
            </span>
            <p class="hen">风格 <span style="color:#FFB506"> 混搭</span></p>
            <p class="heng">面积<span style="color:#FFB506">800~100万</span></p>
          </div>
          <div class="Right">
            <span> 以预约623条</span>
          </div>
        </div>
      </div>
      <div class="middle">
        <img src="http://localhost:8080/设计图/切图/case/case.jpg" alt="" />
        <div class="button">
          <div class="Left">
            <span class="title">
              F1 &nbsp;现代简欧风格
            </span>
            <p class="hen">风格 <span style="color:#FFB506"> 混搭</span></p>
            <p class="heng">面积<span style="color:#FFB506">800~100万</span></p>
          </div>
          <div class="Right">
            <span> 以预约623条</span>
          </div>
        </div>
      </div>
      <!-- ================= -->
      <div class="Footer">
        <div class="left">1/4</div>
        <div class="right">下一页</div>
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
  height: 10rem;
  background: #f1f1f1;
}
.middle {
  margin-top: 0.1rem;
  width: 100%;
  height: 6rem;
  background: white;
}
.middle img {
  width: 100%;
  height: 4rem;
}
.title {
  font-size: 0.4rem;
  margin-left: 0.3rem;
}
.button {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.hen {
  font-size: 0.3rem;
  position: absolute;
  top: 0.8rem;
  left: 0.3rem;
}
.heng {
  font-size: 0.3rem;
  position: absolute;
  top: 0.8rem;
  left: 2rem;
}
.Right span {
  background: red;
  font-size: 0.4rem;
  border-top-left-radius: 0.8rem;
  border-bottom-left-radius: 0.8rem;
  text-align: center;
  background: #ff4351;
  color: white;
}
.Footer {
  height: 100%;
  height: 1rem;
  line-height: 1rem;
  display: flex;
}

.left {
  width: 50%;
  height: 1rem;
  text-align: center;
  background: white;
  font-size: 0.4rem;
}
.right {
  width: 50%;
  height: 1rem;
  background: #39c894;
  color: white;
  font-size: 0.4rem;
  text-align: center;
}
</style>
