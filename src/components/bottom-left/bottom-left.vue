<template>
  <div id="container" ref="main" style="height='8.25rem'"></div>
</template>

<script>
export default {
  name: 'bottom-left',
  data() {
    return {
      // naems:['马克思主义基本原理概论','毛泽东思想和中国特色社会主义理论体系概论','思想道德修养与法律基础','形势与政','中国近现代史纲要'],
      titlelist: [{ name: '马克思概论', value: '', kc: 'mks' }, { name: '毛概论', value: '', kc: 'mzd' }, { name: '思想基础', value: '', kc: 'sxd' }, { name: '形势与政', value: '', kc: 'xsy' }, { name: '中国近现代史', value: '', kc: 'zgj' }],
      titlelist2: [{ name: '马克思概论', value: '', kc: 'mks' }, { name: '毛概论', value: '', kc: 'mzd' }, { name: '思想基础', value: '', kc: 'sxd' }, { name: '形势与政', value: '', kc: 'xsy' }, { name: '中国近现代史', value: '', kc: 'zgj' }],
      titlelist3: [{ name: '马克思概论', value: '', kc: 'mks' }, { name: '毛概论', value: '', kc: 'mzd' }, { name: '思想基础', value: '', kc: 'sxd' }, { name: '形势与政', value: '', kc: 'xsy' }, { name: '中国近现代史', value: '', kc: 'zgj' }],
      benke: [],
      duli: [],
      gaozhi: [],
      inforX: '',
      linebenke: [],
      lineduli: [],
      linegaozhi: [],
      perY: {},
      ratStadard: '',
      ratY: {},
      roundbenke: [],
      roundduli: [],
      roundgaozhi: [],
      barchart: [],
      linechart: [],
      source: [],
      conBenke: [],
      consDuli: [],
      conGaozhi: [],
    }
  },
  components: {

  },
  created() {
    this.gethandle()
  },
  mounted() {

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
          { x: '10%', y: '50%' },
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
          source: this.source
        },
        xAxis: [{
          type: 'category',
          nameTextStyle: {
            color: '#fff',
            fontSize: 14,
            height: 100,
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
          //   , {
          //   type: 'value',
          //   nameGap: 150,
          //   name: '独立院校',
          //   nameLocation: 'center',
          //   nameTextStyle: {
          //     color: '#fff',
          //     verticalAlign: 'middle'
          //   },
          //   axisLine: {
          //     onZero: false,
          //     onZeroAxisIndex: 1,
          //     lineStyle: {
          //       color: '#ff0000',
          //       width: 6,
          //     }
          //   },
          //   position: 'bottom',
          //   // offset: 100,
          // }
        ],
        yAxis: [
          {
            type: 'value',
            name: '专业别思政教师人员',
            min: 0,
            max: 400,
            interval: 20,
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
            max: this.ratY.max,
            interval: 100,
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
            data: this.linechart
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
            data: this.conBenke
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
            data: this.conGaozhi
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
            data: this.consDuli
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
    async gethandle() {
      try {
        const { data: { data } } = await this.$http.post('index/index/teacherInfor')
        console.log(data);
        let datat = JSON.parse(JSON.stringify(data))
        this.benke = datat.cylinder.benke
        this.duli = datat.cylinder.duli
        this.gaozhi = datat.cylinder.gaozhi
        this.inforX = datat.inforX
        this.linebenke = datat.line.benke
        this.lineduli = datat.line.duli
        this.linegaozhi = datat.line.gaozhi
        this.perY = datat.perY
        this.ratStadard = datat.ratStadard
        this.ratY = datat.ratY
        // this.roundbenke = datat.round.benke
        this.roundduli = datat.round.duli
        this.roundgaozhi = datat.round.gaozhi
        this.barchart = [...datat.cylinder.benke, ...datat.cylinder.duli, ...datat.cylinder.gaozhi]
        this.linechart = [...datat.line.benke, ...datat.line.duli, ...datat.line.gaozhi]
        this.source = this.barchart.map((item) => {
          return [item['name'], item['mks'], item['mzd'], item['sid'], item['sxd'], item['xsy'], item['zgj']]
        })
        this.consDuli = this.aryint(this.titlelist, datat.round.duli)
        this.conGaozhi = this.aryint(this.titlelist2, datat.round.gaozhi)
        this.conBenke = this.aryint(this.titlelist3, datat.round.benke)
        this.$nextTick(function () {
          this.getinit()
        })
      } catch (err) {
        console.log(err);
      }
    },
    aryint(lit, onj) {
      let art = [...lit], list = onj;
      console.log(list);
      for (let item of art) {
        if (item.kc == 'mks') {
          item.value = list['mks']
        } else if (item.kc == 'mzd') {
          item.value = list['mzd']
        } else if (item.kc == 'xsy') {
          item.value = list['xsy']
        } else if (item.kc == 'sxd') {
          item.value = list['sxd']
        } else if (item.kc == 'zgj') {
          item.value = list['zgj']
        }
      }
      return art
    },
  },
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