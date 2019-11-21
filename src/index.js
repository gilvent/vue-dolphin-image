import CatImage from './CatImage.vue'

const plugin = {
  // eslint-disable-next-line no-undef
  version: VERSION,
  install(Vue) {
    Vue.component(CatImage.name, CatImage)
  },
}

export { CatImage }
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
