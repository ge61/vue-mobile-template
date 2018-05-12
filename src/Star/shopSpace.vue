<template>
  <div class="shop">
    <div class="top">

    </div>
    <div class="title">
      <span class="name">名次</span>
      <span>用户</span>
      <span>算力值</span>
    </div>
    <div class="items">
      <div class="item">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {
    document.title = '算力榜单'
  }
}
</script>
<style lang="scss" scoped>
  .top{
    background-image: url('./../../static/list-bg.png');
    width: 375px;
    height: 149px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .name{
    margin-right: 32px;
  }
  .shop{
    background-color: #fff;
  }
  .title{
    background-color: #fcfcfc;
    border-bottom: 1px solid #fafafa;
    padding-left: 16px;
    padding-right: 16px;
    font-size: 13px;
    color: #BBB;
    line-height: 30px;
    height: 30px;
    span{
      float: left;
      &:last-child{
        float: right;
      }
    }
  }
</style>
