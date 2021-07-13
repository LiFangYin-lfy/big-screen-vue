import Bottomleft from '@/components/bottom-left/bottom-left'
import Barchart from '@/components/bar-chart/bar-chart'
import Radarbox from '@/components/radar-box/radar-box'
export default {
    install(Vue) {
        // 基于Vue做任何事情（注册全局组件，指令，过滤器，挂载原型函数）
        Vue.component(Bottomleft.name, Bottomleft)
        Vue.component(Barchart.name, Barchart)
        Vue.component(Radarbox.name, Radarbox)
    }
}