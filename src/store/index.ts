import { createStore, Store, useStore as useVuexStore } from "vuex"
import { IRootState, IStoreType } from "./types"
import login from "./login/login"
import system from "./main/system/system"
const store = createStore<IRootState>({
  state: () => {
    return {
      name: "chrisYs",
      age: 123
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login,
    system
  }
})
export function setupStore() {
  store.dispatch("login/loadLocalLogin")
}
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store
