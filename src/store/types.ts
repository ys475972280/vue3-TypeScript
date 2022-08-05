import { ILoginState } from "./login/types"

export interface IRootState {
  name: string
  age: number
}

export interface IRoutWithModule {
  login: ILoginState
}

export type IStoreType = IRootState & IRoutWithModule
