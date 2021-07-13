<template>
  <div class="radio" ref="main" style="height: 100%"></div>
</template>

<script>
export default {
  name: 'radar-box',
  data() {
    return {

    }
  },
  components: {

  },
  created() {

  },
  mounted() {
    this.radarinit()
  },
  methods: {
    radarinit() {
      var chartDom = this.$refs.main;
      var myChart = this.$echarts.init(chartDom);
      var option;

      option = {
        color: ['#f17624', '#f8c201', '#4472c4', '#a1a1a1'],
        tooltip: {},
        legend: {
          show: false,
          data: ['课堂管理', '效果呈现', '特色加分', '政治引领', '教学内容', '教学方式']
        },
        radar: {
          indicator: [
            { name: '销售（Sales）', max: 100 },
            { name: '管理（Administration）', max: 100 },
            { name: '信息技术（Information Technology）', max: 100 },
            { name: '客服（Customer Support）', max: 100 },
            { name: '研发（Development）', max: 100 },
            { name: '市场（Marketing）', max: 100 }
          ],
          name: {
            color: '#b2b2b2',
          },
          axisLine: {
            show: false,
          },
          splitArea: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#666',
              opacity: '0.5'
            },
          },

        },
        series: [{
          name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          data: [
            {
              value: [42, 62, 20, 35, 50, 98],
              name: '课堂管理 Budget）'
            },
            {
              value: [22, 12, 52, 73, 30, 81],
              name: '效果呈现 Spending）'
            }, {
              value: [42, 32, 24, 61, 88, 16],
              name: '特色加分 Budget）'
            },
            {
              value: [52, 72, 23, 96, 40, 60],
              name: '政治引领 Spending）'
            }
          ]
        }]
      };

      option && myChart.setOption(option);
    },
  },
  beforeDestroy() {

  }
}

</script>

<style scoped lang='scss'>
</style>