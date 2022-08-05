import { createRouter, createWebHashHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

import localCache from "@/utils/cashe"

//从ts的角度 需要给routes一个类型注解,vue提供了route的类型
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/login.vue")
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/main/main.vue")
    // children: []--->根据userMenus来决定
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/not-found/not-found.vue")
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})
//导航守卫
router.beforeEach((to) => {
  console.log("to.path", to.path)
  const token = localCache.getCache("token")
  if (to.path !== "/login") {
    if (!token) {
      return "/login"
    }
  }
  // if (to.path === "/login") {
  //   if (!token) {
  //     return "/login"
  //   } else {
  //     return to.path
  //   }
  // }
})
export default router
