import { ILoginState } from "./login/types"
import { ISystemState } from "@/store/main/system/types"

export interface IRootState {
  name: string
  age: number
}

export interface IRoutWithModule {
  login: ILoginState
  system: ISystemState
}

export type IStoreType = IRootState & IRoutWithModule
