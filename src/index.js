import DolphinImage from './DolphinImage.vue'

const plugin = {
  // eslint-disable-next-line no-undef
  version: VERSION,
  install(Vue) {
    Vue.component(DolphinImage.name, DolphinImage)
  },
}

export { DolphinImage }
export default plugin

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}
