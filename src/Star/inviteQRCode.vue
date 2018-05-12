<template>
  <div class="iqrcode">
    <p class="p1">您的邀请码</p>
    <input class="p2" v-model="msg" disabled/>
    <p class="p3">剩余邀请次数3次</p>
    <p class="p4">仅限内测一万名创世用户有邀请资格</p>
    <div class="btn"
      v-clipboard:copy="msg + 'ada'"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError"
    >复制邀请码</div>
    <div class="qr-code"></div>
    <p class="p5">扫码下载火球APP</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '121'
    }
  },
  mounted () {
    document.title = '邀请码'
  },
  methods: {
    onCopy () {
      alert('copy success')
    },
    onError () {
      alert('error')
    }
  }
}
</script>
<style lang="" scoped>
.p5{
  font-size: 14px;
  color: #C8BEAF;
  text-align: center;
  margin-top: 8px;
}
.qr-code{
  width: 111px;
  height: 111px;
  margin-top: 40px;
  margin-left: 132px;
  background-color: #FFC03E;
}
p{
  margin:0;
}
.p1{
  margin-top: 167px;
  text-align: center;
  font-size: 14px;
  color: #FF9500;
}
.p2{
  text-align: center;
  color: #FF9500;
  font-size: 60px;
  margin-top: 16px;
  background-color: transparent;
  border: none;
  max-width: 343px;
}
.p3{
  text-align: center;
  color: #FF9500;
  font-size: 16px;
  margin-top: 16px;
}
.p4{
  font-size: 12px;
  color: #C8BEAF;
  text-align: center;
  margin-top: 11px;
}
.btn{
  margin-top: 16px;
  background-image: linear-gradient(-230deg, #FD8400 0%, #FFC03E 100%);
  box-shadow: 0 2px 4px 0 rgba(255,149,0,0.16);
  border-radius: 4px;
  font-size: 16px;
  color: #FFFFFF;
  width: 139px;
  text-align: center;
  height: 36px;
  margin-left: 118px;
  line-height: 36px;
}
.iqrcode{
  width: 375px;
  height: 604px;
  background-image: url('./../../static/qr-bg.png');
  background-size: 375px 604px;
  background-repeat: no-repeat;
  overflow: hidden;
}
</style>
