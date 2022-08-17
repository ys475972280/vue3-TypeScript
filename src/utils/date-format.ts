import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"

dayjs.extend(utc)
const DATE_TIME_FORMAT = "YYYY-MM-DD HH:mm:ss"

export function formatUtcString(
  uctString: string,
  format: string = DATE_TIME_FORMAT
) {
  return dayjs.utc(uctString).format(format)
}
//时间戳
export function formatTimestamp(
  timestamp: number,
  format: string = DATE_TIME_FORMAT
) {
  console.log("调用dayjs相关时间戳转换的方法")
}
