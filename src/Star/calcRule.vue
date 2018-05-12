<template>
  <div class="calcRule">
    <img class="title" src="./../../static/calc-title.png" alt="算力说明">
    <div class="content">
      <img class="whatiscalc" src="./../../static/what-is-calc.png" alt="">
      <p>算力是用户在火球基地获取矿子等奖励的评估标准，一般来说，用户获取获取的矿子数量等于当前所有用户算力中的占比，也就是用户算力越高，获得的矿子越多。</p>
      <p>通过参与火球基地的奖励活动，完成相应的任务也可以增加算力，如每日登陆，邀请好友等。</p>
      <p>除算力外，还有一些其他因子影响挖宝效率，矿工可自行探索</p>
    </div>
    <div class="tip">
      <p class="tip-title">Tips</p>
      <p class="tip-title">算力也可能会降低：挖到的宝藏不及时领取，或者长期不登录的用户，算力将会逐渐减少。</p>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {
    document.title = '算力说明'
  }
}
</script>
<style lang="scss" scoped>
.whatiscalc{
  width: 231px;
  height: 15px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 34px;
  display: block;
}
.tip{
  margin-top: 10px;
}
.tip-title{
  font-size: 12px;
  color: #FF9500;
  letter-spacing: 0;
  line-height: 22px;
  margin: 0;
  padding-left: 16px;
  padding-right: 16px;
  box-sizing: border-box;
}
.title{
  width: 100%;
  height: 175px;
}
.calcRule{
  width: 375px;
  background-color: #23255D;
  min-height: 667px;
}
.content{
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  border: 1px solid #ff9500;
  border-radius: 8px;
  width: 343px;
  height: 305px;
  margin-left: auto;
  margin-right: auto;
  p{
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: justify;
    line-height: 22px;
  }
}
</style>
