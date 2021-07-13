<template>
  <div id="container" ref="main" style="height='6.25rem'"></div>
</template>

<script>
export default {
  name: 'bottom-left',
  data() {
    return {

    }
  },
  components: {

  },
  created() {

  },
  mounted() {
    this.$nextTick(function () {
      this.getinit()
    })
  },
  methods: {
    getinit() {
      var dom = this.$refs.main
      var myChart = this.$echarts.init(dom);
      var titles = ['高校别思政教师人数统计', '普通本科', '高职院校', '独立院校'];
      var option = {};
      option = {
        //分别设置标题居中主要代码
        title: [
          {
            text: titles[0],
            left: 'center',
            textStyle: {
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 24,
            }
          },
          {
            text: titles[1],
            left: '16.33%',
            top: '28%',
            textAlign: 'center',
            textStyle: {
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 18,
            }
          },
          {
            text: titles[2],
            left: '49.46%',
            top: '28%',
            textAlign: 'center',
            textStyle: {
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 18,
            }
          },
          {
            text: titles[3],
            left: '82.67%',
            top: '28%',
            textAlign: 'center',
            textStyle: {
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 18,
            }
          }

        ],
        grid: [
          { x: '10%', y: '50%' },
          { x: '10%', y: '50%' },
          { x: '10%', y: '50%' },
          { x: '10%', y: '50%' },
          { x: '10%', y: '30%' },
          { x2: '16.67%', y2: '30%' },
          { x2: '50%', y2: '30%' },
          { x2: '83.33%', y2: '30%' }
        ],
        legend: {
          top: '7%',
          textStyle: {
            color: '#a9a9a9',
            fontSize: 14,
            padding: [4, 0, 0, 0]
          }
        },
        tooltip: {
          trigger: 'item',
        },
        dataset: {
          source: [
            ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
            ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
            ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4],
            ['Chejese Coca', 24.1, 67.2, 75, 85.4],
            ['Cheejse Coca', 24.1, 67.2, 75, 86.4],
            ['Cheee Coca', 24.1, 65.2, 75, 86.4],
            ['Ceese Coca', 24.1, 67.2, 55, 86.4],
            ['Chee Coca', 25.1, 67.2, 75, 86.4],
            ['eese Coca', 24.1, 67.2, 75, 86.4],
            ['Cheesej Coca', 54.1, 67.2, 75, 56.4],
            ['Chese Coca', 24.1, 57.2, 75, 86.4],
            ['hese Coca1', 54.1, 67.2, 75, 56.4],
            ['aheee Coca', 24.1, 65.2, 75, 86.4],
            ['aeese Coca', 214.1, 67.2, 55, 86.4],
            ['ahee Coca', 215.1, 67.2, 75, 86.4],
            ['aese Coca', 214.1, 67.2, 75, 86.4],
            ['aheesej Coca', 154.1, 67.2, 75, 56.4],
            ['ahese Coca', 124.1, 57.2, 75, 86.4],
            ['aese Coca1', 154.1, 67.2, 75, 56.4],
          ]
        },
        xAxis: [{
          type: 'category',
          nameTextStyle: {
            color: '#fff',
            fontSize: 14,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            margin: 16,
            rotate: -45,
            color: '#fff',
            fontSize: 14,
            interval: 0,//代表显示所有x轴标签显示
          }
        }
          // , {
          //   type: 'value',
          //   axisLine: {
          //     onZero: false,
          //     onZeroAxisIndex: 1,
          //     lineStyle: {
          //       color: '#ff0000',
          //       width: 6,
          //     }
          //   },
          //   position: 'bottom',
          //   offset: -100,
          // }
        ],
        yAxis: [
          {
            type: 'value',
            name: '专业别思政教师人员',
            min: 0,
            max: 500,
            interval: 50,
            "splitLine": {     //网格线
              "show": false,
              lineStyle: {
                color: '#636363',
                opacity: '0.5'
              }
            },

            axisLabel: {
              color: '#eee',
              formatter: '{value}'
            },
            axisLine: {
              show: true,
            },
            nameLocation: 'middle',
            nameTextStyle: {
              color: '#eee',
            },
            nameGap: 50,
          },
          {
            type: 'value',
            name: '师生比',
            min: 0,
            max: 1400,
            interval: 200,
            "splitLine": {     //网格线
              "show": true,
              lineStyle: {
                color: '#636363',
                opacity: '0.5'
              }
            },
            axisLine: {
              show: true
            },
            axisTick: {       //y轴刻度线
              "show": true
            },
            nameLocation: 'middle',
            nameTextStyle: {
              color: '#eee',
            },
            nameGap: 50,
            axisLabel: {
              color: '#eee',
              formatter: '{value}'
            },

          }
        ],
        series: [
          {
            type: 'bar',
            barWidth: 10,
            stack: 'overlap',
            barGap: '-100%',
          },
          {
            type: 'bar',
            stack: 'overlap',
          },
          {
            type: 'bar',
            stack: 'overlap',
          },
          {
            type: 'bar',
            stack: 'overlap',
          },
          {
            type: 'line',
            itemStyle: {
              color: "rgba(22, 225, 232, 1)",
              borderWidth: 6,
            },
            lineStyle: {
              color: "rgba(22, 225, 232, 1)",
              width: 6,
            },
            yAxisIndex: 1,
            markLine: {
              silent: true,
              symbol: 'none',//去掉箭头
              lineStyle: {
                color: '#ff0000',
                width: '4',
                type: 'solid'
              },
              label: {
                show: false,
              },
              emphasis: {
                label: {
                  lineStyle: {
                    color: '#fff',
                    width: '8',
                    type: 'solid'
                  },
                  show: true,
                  formatter: '警戒线'
                },
              },
              data: [{
                yAxis: 250     //这儿定义基准线的数值为多少
              }],
            },
            data: [141.1, 186.5, 324.1, 250, 241.1, 146.5, 324.1, 142, 221.1, 326.5, 124.1, 340, 126.5, 121.1, 142, 311.1, 426.5, 524.1, 710]
          },
          {
            name: '普通本科',
            type: 'pie',
            radius: ['20%', '30%'],
            center: ['16.67%', '30%'],
            avoidLabelOverlap: false,
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            toolbox: {
              show: true
            },
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: false,
                color: '#fff',
                fontSize: '34',
                fontWeight: 'bold',
              }
            },
            labelLine: {
              show: false
            },
            data: [{
              value: 135,
              name: '视频广告'
            }, {
              value: 1048,
              name: '百度'
            }, {
              value: 651,
              name: '谷歌'
            }, {
              value: 147,
              name: '必应'
            }, {
              value: 102,
              name: '其他'
            }]
          },
          {
            name: '高职院校',
            type: 'pie',
            radius: ['20%', '30%'],
            center: ['50%', '30%'],
            legendHoverLink: false, //移入leged不显示在中间
            textAlign: "center",

            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            toolbox: {
              show: true
            },
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: false,
                color: '#fff',
                fontSize: '34',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            avoidLabelOverlap: false,
            data: [{
              value: 135,
              name: '视频广告'
            }, {
              value: 148,
              name: '百度'
            }, {
              value: 251,
              name: '谷歌'
            }, {
              value: 147,
              name: '必应'
            }, {
              value: 102,
              name: '其他'
            }]
          },
          {
            name: '独立院校',
            type: 'pie',
            radius: ['20%', '30%'],
            center: ['83.33%', '30%'],
            avoidLabelOverlap: false,
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            toolbox: {
              show: true
            },
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: false,
                color: '#fff',
                fontSize: '34',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [{
              value: 135,
              name: '视频广告'
            }, {
              value: 248,
              name: '百度'
            }, {
              value: 251,
              name: '谷歌'
            }, {
              value: 147,
              name: '必应'
            }, {
              value: 102,
              name: '其他'
            }]
          }
        ]
      };
      myChart.on('updateAxisPointer', function (event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
          var dimension = xAxisInfo.value + 1;
          myChart.setOption({
            series: {
              id: 'pie',
              label: {
                formatter: '{b}: {@[' + dimension + ']} ({d}%)'
              },
              encode: {
                value: dimension,
                tooltip: dimension
              }
            }
          });
        }
      });
      myChart.setOption(option);
    },
  },
  beforeDestroy() {

  }
}

</script>

<style scoped lang='scss'>
#container {
  padding: 0.2rem 0.2rem 0;
  height: 6.5rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
}
</style>