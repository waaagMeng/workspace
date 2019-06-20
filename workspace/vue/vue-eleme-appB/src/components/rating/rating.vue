<template>
  <div>
  <div class="rating">
    <div class="rating-left">
      <div class="left-score">{{rating.score}}</div>
      <p class="all">综合评分</p>
      <p class="rankRate">高于周边商家的{{rating.rankRate}}%</p>
    </div>
    <div class="rating-right">
      <div class="serviceScore">服务态度 <star :service="service"></star> {{rating.serviceScore}}</div>
      <div class="foodScore">商品评分 {{rating.foodScore}}</div>
      <div class="time">送达时间 <span>{{rating.deliveryTime}}分钟</span></div>
    </div>
  </div>
  </div>
</template>

<script>
import star from "@/components/star/star";
export default {
  name: "Rating",
  data() {
    return {
      rating: {},
    };
  },
  components: {
    star
  },
  computed: {
    serviceScore () {
      let service = this.rating.serviceScore
      return service
    }
  },
  created() {
    this.$http.get('https://www.easy-mock.com/mock/5ca457fa4767c3737055c895/example/vue-eleme-seller')
    .then(res => {
        console.log(res)
          this.rating = res.data.data
      })
  }
};
</script>

<style scoped>
.rating{
  display: flex;
}
  .rating-left{
    margin-top: 8px;
    /* float: left; */
    padding: 15px 10px;
    text-align: center;
    border-right: 1px solid #e6e6e6;
  }
  .left-score{
    color: #f78e16;
    font-size: 20px;
  }
  .rating-left .all {
    padding-top: 8px;
    font-size: 13px;
  }
  .rankRate{
    padding-top: 8px;
    font-size: 13px;
    color: #8a8d8f;
  }
  .rating-right{
    font-size: 14px;
    padding: 25px 15px;
  }
  .foodScore{
    padding-top: 10px;
  }
  .time{
    padding-top: 10px;
  }
  .time span{
    color: #8a9194;
    padding-left: 8px;
  }
</style>
