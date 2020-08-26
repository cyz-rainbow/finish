<template>
  <div>
    <header>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#39c894">
        <van-swipe-item>
          <img
            src="http://localhost:8080/%E8%AE%BE%E8%AE%A1%E5%9B%BE/%E5%88%87%E5%9B%BE/banner.jpg"
            alt
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="http://localhost:8080/%E8%AE%BE%E8%AE%A1%E5%9B%BE/%E5%88%87%E5%9B%BE/banner1.jpg"
            alt
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="http://localhost:8080/%E8%AE%BE%E8%AE%A1%E5%9B%BE/%E5%88%87%E5%9B%BE/banner2.jpg"
            alt
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="http://localhost:8080/%E8%AE%BE%E8%AE%A1%E5%9B%BE/%E5%88%87%E5%9B%BE/banner3.jpg"
            alt
          />
        </van-swipe-item>
      </van-swipe>
    </header>
    <section>
      <div class="section_div">
        <div style="background-color:#39c894" class="iconfont icon-case"></div>
        <div>装修方案</div>
      </div>
      <div class="section_div">
        <div style="background-color:#feb505" class="iconfont icon-pics"></div>
        <div>效果图</div>
      </div>
      <div class="section_div">
        <div style="background-color:#eed215" class="iconfont icon-designer"></div>
        <div>设计师</div>
      </div>
      <div class="section_div">
        <div style="background-color:#00b2b2" class="iconfont icon-construction-site"></div>
        <div>装修工地</div>
      </div>
      <div class="section_div">
        <div style="background-color:#1b9af7" class="iconfont icon-decorate"></div>
        <div>装修攻略</div>
      </div>
      <div class="section_div">
        <div style="background-color:#7b72e9" class="iconfont icon-bank"></div>
        <div>装修贷款</div>
      </div>
      <div class="section_div" @click="clickyue">
        <div style="background-color:#ff4351" class="iconfont icon-pencle"></div>
        <div>免费预约</div>
      </div>
      <div class="section_div" @click="clickbao">
        <div style="background-color:#fe8864" class="iconfont icon-ten"></div>
        <div>十秒报价</div>
      </div>
    </section>
    <div class="template_ge"></div>
    <footer>
      <div class="footer_qui_div">
        <div>
          <span style="font-size:0.4rem;padding: 0.2rem;border-left:0.07rem solid #39c894;">全屋装修</span>
          <span style="color: gray;font-size:0.25rem;">包设计、包主材、包水电、包施工</span>
        </div>
      </div>
      <div class="footer_swipt">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#39c894">
          <van-swipe-item>
            <img src="http://localhost:8080/设计图/切图/house_info.jpg" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img src="http://localhost:8080/设计图/切图/img1.jpg" alt />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="footer_zi">
        <span>
          <span class="iconfont icon-zero"></span>0增项，标准施工
        </span>
        <span>
          <span class="iconfont icon-protection-fill"></span>杜绝项目外包
        </span>
        <span>
          <span class="iconfont icon-price"></span>装修贷款
        </span>
      </div>
      <!-- 装修预约 -->
      <div class="template_ge"></div>
      <div class="footer_qui_div">
        <div>
          <span style="font-size:0.4rem;padding: 0.2rem;border-left:0.07rem solid #39c894;">装修预约</span>
          <span style="color: gray;font-size:0.25rem;">免费上门量房，设计方案满意为止</span>
        </div>
      </div>
      <div class="footer_index_house">
        <div class="section index-house bg-white">
          <input class="input-txt" type="text" id="district" placeholder="小区名" />
          <input class="input-txt" type="tel" id="tel" placeholder="手机号" />
          <input class="input-txt" type="text" id="acreage" placeholder="建筑面积" />
          <span class="mi">m²</span>
          <a href="javascript:;" class="btn btn-yellow btn-order tcenter">立即预约</a>
        </div>
      </div>
      <!-- 设计师 -->
      <div class="template_ge"></div>
      <div class="footer_qui_div">
        <div>
          <span style="font-size:0.4rem;padding: 0.2rem;border-left:0.07rem solid #39c894;">设计师</span>
        </div>
      </div>
      <div class="footer_shehsishi">
        <div class="footer_shehsishi_zuoyou">
          <div class="footer_shehsishi_img">
            <img
              src="http://localhost:8080/%E8%AE%BE%E8%AE%A1%E5%9B%BE/%E5%88%87%E5%9B%BE/loans/sheji1.jpg"
              alt
            />
          </div>
          <div style="font-size:0.4rem">吴飞柯</div>
          <div class="footer_shehsishi_sheji">优秀</div>
        </div>
        <div class="footer_shehsishi_zuoyou">
          <div class="footer_shehsishi_img">
            <img
              src="http://localhost:8080/%E8%AE%BE%E8%AE%A1%E5%9B%BE/%E5%88%87%E5%9B%BE/loans/sheji2.jpg"
              alt
            />
          </div>
          <div style="font-size:0.4rem">陈陆炎</div>
          <div class="footer_shehsishi_sheji">主任</div>
        </div>
        <div class="footer_shehsishi_zuoyou">
          <div class="footer_shehsishi_img">
            <img
              src="http://localhost:8080/%E8%AE%BE%E8%AE%A1%E5%9B%BE/%E5%88%87%E5%9B%BE/loans/sheji3.jpg"
              alt
            />
          </div>
          <div style="font-size:0.4rem">张海舰</div>
          <div class="footer_shehsishi_sheji">总监</div>
        </div>
        <div class="footer_shehsishi_zuoyou">
          <div class="footer_shehsishi_img">
            <img
              src="http://localhost:8080/%E8%AE%BE%E8%AE%A1%E5%9B%BE/%E5%88%87%E5%9B%BE/loans/sheji4.jpg"
              alt
            />
          </div>
          <div style="font-size:0.4rem">陈冲</div>
          <div class="footer_shehsishi_sheji">优秀</div>
        </div>
      </div>
      <div class="footer_huan_she">
        <div>
          换一换
          <span class="iconfont icon-change"></span>
        </div>
        <div>
          更多设计师
          <span class="iconfont icon-more"></span>
        </div>
      </div>
      <!-- 效果图 -->
      <div class="template_ge"></div>
      <div class="footer_qui_div">
        <div>
          <span style="font-size:0.4rem;padding: 0.2rem;border-left:0.07rem solid #39c894;">效果图</span>
        </div>
      </div>
      <div class="footer_shejitu">
        <img
          width="100%"
          src="http://localhost:8080/%E8%AE%BE%E8%AE%A1%E5%9B%BE/%E5%88%87%E5%9B%BE/case/shejitu1.jpg"
          alt
        />
        <img
          width="49%"
          height="150px"
          class="footer_img_tu footer_tu"
          src="http://localhost:8080/%E8%AE%BE%E8%AE%A1%E5%9B%BE/%E5%88%87%E5%9B%BE/case/shejitu2.jpg"
          alt
        />
        <img
          width="49%"
          height="150px"
          class="footer_img_tu"
          src="http://localhost:8080/%E8%AE%BE%E8%AE%A1%E5%9B%BE/%E5%88%87%E5%9B%BE/case/shejitu3.jpg"
          alt
        />
        <img
          width="49%"
          height="150px"
          class="footer_img_tu footer_tu"
          src="http://localhost:8080/%E8%AE%BE%E8%AE%A1%E5%9B%BE/%E5%88%87%E5%9B%BE/case/shejitu4.jpg"
          alt
        />
        <img
          width="49%"
          height="150px"
          class="footer_img_tu"
          src="http://localhost:8080/%E8%AE%BE%E8%AE%A1%E5%9B%BE/%E5%88%87%E5%9B%BE/case/shejitu5.jpg"
          alt
        />
      </div>
      <div class="footer_huan_she">
        <div>
          换一换
          <span class="iconfont icon-change"></span>
        </div>
        <div>
          更多效果图
          <span class="iconfont icon-more"></span>
        </div>
      </div>

      <!-- 工地直播 -->
      <div class="template_ge"></div>
      <div class="footer_qui_div">
        <div>
          <span style="font-size:0.4rem;padding: 0.2rem;border-left:0.07rem solid #39c894;">效果图</span>
        </div>
      </div>
      <div class="footer_shejitu">
        <img
          width="100%"
          style="margin-top: 0.3rem;"
          src="http://localhost:8080/设计图/切图/case/工地直播.jpg"
          alt
        />
      </div>
      <div class="footer_gongdi">重汽嘉泽苑7橦</div>
      <div class="footer_huan_she">
        <div>
          换一换
          <span class="iconfont icon-change"></span>
        </div>
        <div>
          更多效果图
          <span class="iconfont icon-more"></span>
        </div>
      </div>

      <!-- 工地直播 -->
      <div class="template_ge"></div>
      <div class="footer_qui_div">
        <div>
          <span style="font-size:0.4rem;padding: 0.2rem;border-left:0.07rem solid #39c894;">装修攻略</span>
        </div>
      </div>
      <div class="footer_zhibo">
        <img width="100%" src="http://localhost:8080/设计图/切图/case/设计.png" alt />
      </div>
      <div class="footer_huan_she">
        <div>
          换一换
          <span class="iconfont icon-change"></span>
        </div>
        <div>
          更多装修攻略
          <span class="iconfont icon-more"></span>
        </div>
      </div>

      <div class="footer_wenzi">
      <second />
      </div>
      <div class="footer_wenzi">
        <seconda/>
      </div>
    </footer>

    <div v-show="isimg" class="template_img">
      <i class="close" @click="isshow">
        <span class="iconfont icon-close"></span>
      </i>
    </div>
    <div class="template_top">
      <a href="#top">
        <span class="iconfont icon-top"></span>
      </a>
    </div>
  </div>
</template>
<script>
import second from "../components/seconds/second"
import seconda from "../components/seconds/seconda"
export default {
  components:{
    second,seconda
  },
  data() {
    return {
      isimg: true
    };
  },
  methods: {
    isshow() {
      this.isimg = false;
    },
    clickyue(){//点击跳转免费预约页面
      this.$router.push("/bespeak")
    },
    clickbao(){//点击跳转十秒报价页面
      this.$router.push("/seconds")
    }
  }
};
</script>

<style  scoped>
header {
  width: 100%;
  height: 3rem;
}
.my-swipe .van-swipe-item {
  color: #fff;
  text-align: center;
}
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 3rem;
}
.van-swipe__indicators {
  bottom: 0.5rem;
}
.van-swipe__indicator {
  background-color: gray;
}
section {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5rem;
}
.section_div {
  width: 1.8rem;
  height: 1.8rem;
  text-align: center;
  font-size: 0.3rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.iconfont {
  width: 1.2rem;
  height: 1.2rem;
  background-attachment: 50%;
  text-align: center;
  line-height: 1.2rem;
  border-radius: 50%;

  color: #fff;
  font-size: 0.8rem;
}
.template_ge {
  width: 100%;
  height: 0.25rem;
  background-color: rgb(216, 216, 216);
}
footer {
  width: 95%;
  margin: 0.2rem;
}
.footer_qui_div div {
  width: 100%;
}
.footer_swipt {
  width: 100%;
  height: 4rem;
  margin-top: 0.2rem;
}
.footer_swipt .my-swipe .van-swipe-item {
  line-height: 2.3rem;
}
.footer_swipt .my-swipe .van-swipe-item img {
  width: 100%;
  height: 4rem;
}
.footer_zi {
  width: 100%;
  height: 1.6rem;
  font-size: 0.25rem;
  line-height: 2rem;
  text-align: center;
}
.footer_zi span {
  padding: 0.08rem;
}
.footer_zi .iconfont {
  color: #39c894;
  font-size: 0.3rem;
}
.footer_index_house {
  width: 100%;
}
.section {
  position: relative;
  padding: 1% 3% 3% 3%;
  margin-bottom: 0.3rem;
}
.input-txt {
  width: 90%;
  height: 0.7rem;
  margin: 0 0 15px 5%;
  padding-left: 0.2rem;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  font-size: 14px;
}
.index-house .mi {
  position: absolute;
  top: 62%;
  transform: translateY(-50%);
  right: 8%;
  color: #999;
  font-size: 0.2rem;
}
.btn-order {
  width: 90%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  margin-left: 5%;
  display: inline-block;
  font-size: 14px;
}
.btn-yellow {
  background: #feb505;
  color: #fff;
}
.footer_shehsishi {
  width: 100%;
  height: 3.2rem;
  display: flex;
}
.footer_shehsishi_zuoyou {
  width: 1.5rem;
  height: 2.5rem;
  padding: 0.15rem;
  text-align: center;
}
.footer_shehsishi_img {
  width: 100%;
  height: 1.5rem;
}
.footer_shehsishi_img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.footer_shehsishi_sheji {
  width: 100%;
  height: 0.4rem;
  font-size: 0.3rem;
  background-color: #2bb281;
  color: #eaeaea;
  text-align: center;
  line-height: 0.4rem;
  margin-top: 0.1rem;
}
.footer_huan_she {
  width: 100%;
  height: 1rem;
  display: flex;
  margin-bottom: 0.5rem;
}
.footer_huan_she div {
  width: 50%;
  height: 1.1rem;
  border: 1px solid rgb(219, 219, 219);
  text-align: center;
  font-size: 0.4rem;
  color: #2bb281;
}
.footer_huan_she .iconfont {
  color: #2bb281;
  font-size: 0.4rem;
}
.footer_shejitu {
  width: 100%;
}
.footer_shejitu img {
  padding: 0;
}
.footer_tu {
  margin-right: 0.1rem;
}
.footer_img_tu {
  margin-top: -5px;
}
.footer_gongdi {
  width: 100%;
  height: 1rem;
  font-size: 0.35rem;
}
.footer_wenzi {
  width: 100%;
  font-size: 0.3rem;
  line-height: 0.8rem;
}
.template_img {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 1.5rem;
  background-color: #333333;
  background-image: url(http://localhost:8080/设计图/切图/case/quoten_bottom.png);
  background-size: 60% 60%;
  background-repeat: no-repeat;
  background-position: 1rem 0.2rem;
}
.close {
  width: 0.7rem;
  height: 0.7rem;
  display: inline-block;
  position: relative;
  top: -0.22rem;
  left: 0;
  background-color: red;
  border-radius: 0px 0px 30px 0px;
  color: #fff;
  font-size: 0.4rem;
  text-align: center;
}
.close .iconfont {
  position: fixed;
  bottom: 20px;
  left: -14px;
  line-height: 1rem;
  font-size: 0.4rem;
}
.template_top {
  position: fixed;
  bottom: 2rem;
  right: 0.3rem;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  text-align: center;
  line-height: 1rem;
  border: 1px solid gainsboro;
  background-color: #fff;
}
.template_top a .iconfont {
  color: rgb(199, 199, 199);
  font-size: 0.6rem;
}
</style>
