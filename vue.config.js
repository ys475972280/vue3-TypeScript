//const path = require("path") //如果是使用函数 或者链式的时候需要引入
const AutoImport = require("unplugin-auto-import/webpack")
const Components = require("unplugin-vue-components/webpack")
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers")
module.exports = {
  //  1.配置方式一: CLI提供的属性
  //outputDir: "./build",
  //  2.配置方式二：和webpack属性完全一致，最后会进行合并
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components"
      }
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
  // configureWebpack: (config) => {
  //    config.resolve.alias = {
  //      "@": path.resolve(__dirname, "src"),
  //      components: "@/components"
  //    }
  //    config.plugins = [
  //      AutoImport({
  //        resolvers: [ElementPlusResolver()]
  //      }),
  //      Components({
  //        resolvers: [ElementPlusResolver()]
  //      })
  //    ]
  // }
  //  3.配置方式三 -通过链式调用
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set("@", path.resolve(__dirname, "src"))
  //     .set("components", "@/components")
  // }
}
