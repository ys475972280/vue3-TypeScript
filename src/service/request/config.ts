// 开发模式
type MODE = "dev"
const MODE = process.env["NODE_ENV"] as MODE
const BASE_URL = {
  development: "/api/",
  dev: "https://www.baidudev.com",
  test: "https://www.baidutest.com",
  production: "https://www.baidu.com"
}[MODE]

export { BASE_URL }
