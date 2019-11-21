import base from './rollup.config.base'
import pkg from '../package.json'

const config = Object.assign({}, base, {
  output: {
    name: 'vue-cat-image',
    file: pkg.module,
    format: 'es',
  },
})

export default config
