<template>
  <div class="calcList">
    <div class="top">
      <div class="top-title">我的钱包余额</div>
      <div class="top-count">188.88</div>
    </div>
    <div class="content">
      <span class="content-title">可兑换</span>
      <div class="content-center">
        <div class="item">
          <div>
            <img class="item-icon" src="./../../static/btc.png" alt="">
          </div>
          <div class="item-name">BTC</div>
          <div class="item-value">100HQT=? BTC</div>
          <div class="item-state">即将开放</div>
        </div>
        <div class="item">
          <div>
            <img class="item-icon" src="./../../static/ETH.png" alt="">
          </div>
          <div class="item-name">ETH</div>
          <div class="item-value">100HQT=? ETH</div>
          <div class="item-state">即将开放</div>
        </div>
        <div class="item">
          <div>
            <img class="item-icon" src="./../../static/LTC.png" alt="">
          </div>
          <div class="item-name">LTC</div>
          <div class="item-value">100HQT=? LTC</div>
          <div class="item-state">即将开放</div></div>
        <div class="item">
          <div>
            <img class="item-icon" src="./../../static/EOS.png" alt="">
          </div>
          <div class="item-name">EOS</div>
          <div class="item-value">100HQT=? EOS</div>
          <div class="item-state">即将开放</div>
        </div>
        <div class="item">
          <div>
            <img class="item-icon" src="./../../static/NEO.png" alt="">
          </div>
          <div class="item-name">NEO</div>
          <div class="item-value">100HQT=? NEO</div>
          <div class="item-state">即将开放</div>
        </div>
        <div class="item">
          <div>
            <img class="item-icon" src="./../../static/ONT.png" alt="">
          </div>
          <div class="item-name">ONT</div>
          <div class="item-value">100HQT=? ONT</div>
          <div class="item-state">即将开放</div>
        </div>
        <div class="item">
          <div>
            <img class="item-icon" src="./../../static/PNT.png" alt="">
          </div>
          <div class="item-name">PNT</div>
          <div class="item-value">100HQT=? PNT</div>
          <div class="item-state">即将开放</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {
    document.title = '基地商城'
  }
}
</script>
<style scoped>
.item-icon{
  width: 24px;
  height: 24px;
  margin-top: 14px;
}
.item-name{
  font-size: 15px;
  color: #444;
  margin-top: 10px;
}
.item-value{
  font-size: 11px;
  color: #999;
  margin-top: 4px;
}
.item-state{
  margin-left: auto;
  margin-right: auto;
  margin-top: 6px;
  width: 64px;
  line-height: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: #ddd;
  font-size: 11px;
  color: #FFFFFF;
}
.content-center{
  border-top: 0.5px solid #fafafa;
  margin-top: 16px;
  box-sizing: border-box;
}
.item{
  width: 114px;
  height: 117.2px;
  border-right: 1px solid #fafafa;
  border-bottom: 1px solid #fafafa;
  box-sizing: border-box;
  float: left;
  text-align: center;
}
.item:nth-child(3n) {
  border-right: none;
}
.content-title{
  font-size: 15px;
  color: #444444;
  padding-left: 16px;
}
.top-title{
  font-size: 13px;
  color: #FFFFFF;
}
.top-title::before{
  content: '';
  display: inline-block;
  width: 13px;
  height: 13px;
  background-size: 13px 13px;
  background-image: url('./../../static/icon-coin.png');
  vertical-align: middle;
  margin-right: 3px;
}
.top-count{
  font-size: 36px;
  color: #FFFFFF;
  margin-top: 8px;
}
.top-count::after{
  display: inline-block;
  content: 'HQT';
  font-size: 15px;
  color: #FFFFFF;
  margin-left: 4px;
  vertical-align: middle;
}
p{
  margin: 0;
}
.content{
  width: 343px;
  height: 421px;
  background-color: #fff;
  margin-left: 16px;
  padding-top: 16px;
  box-sizing: border-box;
  border-radius: 8px;
}
.calcList{
  min-height: 667px;
  padding-top: 16px;
  background-color: #fafafa;
}
.top{
  width: 343px;
  height: 130px;
  margin-left: 16px;
  background-image: url('./../../static/wallet-bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 8px;
  padding-top: 32px;
  padding-left: 24px;
  box-sizing: border-box;
}
</style>
