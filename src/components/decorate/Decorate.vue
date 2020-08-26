<template>
  <div class="decorate">
    <!-- 装修攻略 -->
    <div class="decorate_header">
      <input type="text" placeholder="搜索" class="decorate_header_text" />
      <input type="button" value="搜索" class="decorate_header_button" />
    </div>

    <div class="decorate_center">
      <div class="decorate_tabs">
        <ul>
          <li @click="onClick('装修前')" :class="{'active':(active==='装修前')}">装修前</li>
          <li @click="onClick('装修中')" :class="{'active':(active==='装修中')}">装修中</li>
          <li @click="onClick('装修后')" :class="{'active':(active==='装修后')}">装修后</li>
        </ul>
      </div>
      <div class="decorate_tabs_block_item">
        <div class="decorate_tabs_block" v-if="active==='装修前'">
          <ul>
            <li>
              <img src="http://localhost:8080/navitem/1.png" alt />
              <p>收房验房</p>
            </li>
            <li>
              <img src="http://localhost:8080/navitem/2.png" alt />
              <p>装修预算</p>
            </li>
            <li>
              <img src="http://localhost:8080/navitem/3.png" alt />
              <p>装修风水</p>
            </li>
            <li>
              <img src="http://localhost:8080/navitem/4.png" alt />
              <p>装修设计</p>
            </li>
          </ul>
        </div>
        <div class="decorate_tabs_block" v-if="active==='装修中'">
          <ul>
            <li>
              <img src="http://localhost:8080/navitem/5.png" alt />
              <p>材料选择</p>
            </li>
            <li>
              <img src="http://localhost:8080/navitem/6.png" alt />
              <p>水电工程</p>
            </li>
            <li>
              <img src="http://localhost:8080/navitem/7.png" alt />
              <p>泥木工程</p>
            </li>
            <li>
              <img src="http://localhost:8080/navitem/8.png" alt />
              <p>油漆工程</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="decorate_tabs_block" v-if="active==='装修后'">
        <ul>
          <li>
            <img src="http://localhost:8080/navitem/9.png" alt />
            <p>装修验房</p>
          </li>
          <li>
            <img src="http://localhost:8080/navitem/10.png" alt />
            <p>去污保洁</p>
          </li>
          <li>
            <img src="http://localhost:8080/navitem/11.png" alt />
            <p>软装搭配</p>
          </li>
          <li>
            <img src="http://localhost:8080/navitem/12.png" alt />
            <p>家居生活</p>
          </li>
        </ul>
      </div>
      <div class="decorate_tabs_btn">
        <button>了解装修流程</button>
      </div>
    </div>

    <div class="decorate_content">

      <div class="decorate_list">
        <div class="decorate_list_items" v-for="(item, index) in decorateList" :key="index">
          <div class="left">
            <img :src="item.img" alt />
          </div>
          <div class="right">
            <p>{{item.title}}</p>
            <div class="extra">
              <span><i class="iconfont icon-time"></i>{{item.date}}</span>
              <span><i class="iconfont icon-view"></i>{{item.look}}</span>
            </div>
          </div>

        </div>
      </div>
  <div class="decorate_content_btn">
        <button>换一批</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clickIndex: "装修前",
      active: "装修前",
      decorateList: [],
    };
  },
  mounted() {
    this.$axios
      .get("http://localhost:8080/decorate.json")
      .then((res) => {
        this.decorateList = res.data.list;
        console.log(res.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    onClick(index) {
      this.clickIndex = index;
      this.active = index;
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.decorate {
  background-color: #eee;
}
.decorate_header {
  height: 1rem;
  background-color: #eeeeee;
  width: 100%;
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;
}
.decorate_header_text {
  vertical-align: middle;
  width: 75%;
  text-indent: 0.1rem;
  height: 0.65rem;
  font-size: 0.3rem;
  border: 0.03rem solid #2bb281;
  box-sizing: border-box;
}
.decorate_header_button {
  width: 15%;
  font-size: 0.28rem;
  border: none;
  height: 0.65rem;
  background-color: #2bb281;
  color: white;
}
.active {
  border-bottom: 0.05rem solid #2bb281;
}
.decorate_tabs {
  width: 95%;
  margin: 0 auto;
  border-bottom: 0.03rem solid #eeeeee;
}
.decorate_tabs ul {
  display: flex;
  width: 100%;
  font-size: 0.3rem;
}
.decorate_tabs ul li {
  padding: 0.2rem 0.725rem;
}
.decorate_tabs_block {
  width: 100%;
  margin-top: 20px;
}
.decorate_tabs_block ul {
  width: 100%;
  justify-content: space-around;
  align-items: center;
  display: flex;
}
.decorate_tabs_block ul li {
  text-align: center;
  font-size: 0.3rem;
  /* width: 1.5rem; */
}
.decorate_tabs_block ul li img {
  width: 1.3rem;
}
.decorate_tabs_btn {
  border-bottom: 0.03rem solid #ffffff;
  width: 95%;
  margin: 0 auto;
  padding-bottom: 0.2rem;
}
.decorate_tabs_btn button {
  border: 0.02rem solid #2bb281;
  color: #39c893;
  width: 100%;
  height: 0.7rem;
  font-size: 0.32rem;
  background-color: #fff;
  border-radius: 0.12rem;
  outline: none;
}
.decorate_center {
  background-color: #fff;
}
.decorate_content{
  width: 100%;
  background-color: #fff;
}
.decorate_list {
  width: 95%;
  margin: 0.2rem auto;
  display: flex;
  flex-wrap: wrap;
}
.decorate_list_items {
  width: 100%;
  margin-top: 0.3rem;
  display: flex;
  border-bottom: .02rem solid #eeeeee;
}
.decorate_list_items .left {
  width: 33%;
  /* background-color: pink; */
}
.decorate_list_items .left img {
  width: 100%;
  height: 1.7rem;
}
.decorate_list_items .right {
  width: 65%;
  /* background-color: gray; */
}
.decorate_list_items .right p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  font-size: 0.4rem;
}
.decorate_list_items .right span{
  color: gray;
}
.extra{
  font-size: .3rem;
  margin-top: .6rem;
}
.decorate_content_btn{
 border-bottom: 0.03rem solid #ffffff;
  width: 95%;
  margin: 0 auto;
  padding-bottom: 0.2rem; 
}
.decorate_content_btn button{
   border: 0.02rem solid #eeeeee;
  color: #39c893;
  width: 100%;
  height: 0.7rem;
  font-size: 0.32rem;
  background-color: #fff;
  border-radius: 0.12rem;
  outline: none;
}
</style>