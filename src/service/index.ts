// service 统一出口
import YSRequest from "./request"
import { BASE_URL } from "./request/config"
const ysRequest = new YSRequest({
  baseURL: BASE_URL
})
export default ysRequest
