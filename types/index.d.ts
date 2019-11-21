import Vue, { PluginObject, PluginFunction } from 'vue'

export class CatImagePlugin implements PluginObject<{}> {
  install: PluginFunction<{}>
  static install(pVue: typeof Vue, options?: {} | undefined): void
}

export class CatImage extends Vue {}
