const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'examples/index.js',
      title: 'examples'
    }
  },
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  }

})
