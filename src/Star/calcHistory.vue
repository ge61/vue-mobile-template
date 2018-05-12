<template>
  <div class="history">
    <div class="item" v-for="(item,index) in 5" :key="index">
      <div>
        <div class="p1">每日登陆</div>
        <div class="time">时间2018年</div>
      </div>
      <div class="p2">+1</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: [
      ]
    }
  },
  mounted () {
    document.title = '算力获取记录'
  }
}
</script>
<style scoped>
.p1{
  font-size: 14px;
  color: #444444;
}
.p2{
  font-size: 16px;
  color: #444444;
}
.time{
  font-size: 12px;
  color: #BBBBBB;
  margin-top: 8px;
}
.item{
  display: flex;
  box-sizing: border-box;
  padding-left: 16px;
  padding-right: 16px;
  height: 66px;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #fafafa;
  justify-content: space-between;
  align-items: center;
}
.item:last-child{
  border-bottom: none;
}
.history{
  box-sizing: border-box;
  padding-top: 8px;
  min-height: 667px;
  background-color: #fafafa;
}
</style>
