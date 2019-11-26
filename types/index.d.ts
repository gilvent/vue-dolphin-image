import Vue, { PluginObject, PluginFunction } from 'vue'

export class DolphinImagePlugin implements PluginObject<{}> {
  install: PluginFunction<{}>
  static install(pVue: typeof Vue, options?: {} | undefined): void
}

export class DolphinImage extends Vue {}
