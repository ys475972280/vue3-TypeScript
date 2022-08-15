import YSRequest from "../../index"
import { IDataType } from "../../types"
import { ISystemResult } from "./types"
export function getPageListData(url: string, queryInfo: any) {
  return YSRequest.post<IDataType<ISystemResult>>({
    url: url,
    data: queryInfo
  })
}
