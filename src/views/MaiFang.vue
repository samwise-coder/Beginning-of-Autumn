<template>
  <div>
    <h1>房租涨幅：400/3600={{ increase }}</h1>
    <h1>租金累计：{{ rent(1.2, 1.05, 10) }}</h1>
    <h1>未来房价:{{ futurePrice(100, 1.1, 5) }}</h1>
    <h1>已知房价算涨幅：{{ getIncrease(1.7, 3.2, 5) }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      res: null,
      increase: null,
    };
  },
  created() {
    this.increase = (400 / 3600).toFixed(2);
    this.res = 1.2 * Math.pow(1.05, 10).toFixed(6);
  },
  methods: {
    rent(base, increase, years) {
      //等比数列求和
      let Sn = 0;
      Sn = (base * (1 - Math.pow(increase, years))) / (1 - increase);
      return Sn.toFixed(2);
    },
    futurePrice(base, increase, years) {
      let Price = 0;
      Price = base * Math.pow(increase, years);
      return Price.toFixed(2);
    },
    getIncrease(base, nowPrice, years) {
      let increase = 0;
      increase = Math.pow(nowPrice / base, 1 / years) - 1;
      return increase.toFixed(2);
    },
  },
};
</script>

<style>
</style>