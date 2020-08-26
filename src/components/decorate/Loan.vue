<template>
  <div>
      <!-- 装修贷款 -->
      <div class="Loan-header">
        <img src="http://m.sirfang.com/assets/image/decoration/loans.jpg" alt="">
        <img src="http://m.sirfang.com/assets/image/decoration/p1.png" alt="">
      </div>
      <div class="Loan-center">
        <p>
          <input type="text" placeholder="小区名">
        
        <p>
          <input type="tel" placeholder="手机号">
        </p>
        <p>
          <input type="text" placeholder="建筑面积">
        </p>
        <p>
          <input type="button" class="btn"  value="立刻预约">
        </p>
      </div>
      <div class="Loan-content">
        <img src="http://m.sirfang.com/assets/image/decoration/p2.png" alt="">
        <img src="http://localhost:8080/navitem/13.png" alt="">
        <img src="http://m.sirfang.com/assets/image/decoration/p3.png" alt="">
        <img src="http://m.sirfang.com/assets/image/decoration/p4.png" alt="">
        <img src="http://m.sirfang.com/assets/image/decoration/p5.png" alt="">
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
.Loan-header{
  width: 100%;
}
.Loan-header img{
  width: 100%;
}
.Loan-center{
  text-align: center;
}
.Loan-center input{
  font-size: .4rem;
   text-indent: 0.1rem;
  height: 0.7rem;
  font-size: 0.3rem;
  width: 85%;
  border: 0.02rem solid #eeeeee;
  border-radius: .12rem;
}
.btn{
  background-color: #FEB505;
  color: white;
}
.Loan-content{
  width: 100%;
}
.Loan-content img{
width: 100%;
}
</style>