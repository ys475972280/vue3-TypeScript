<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/logo.svg" alt="" class="img" />
      <span class="title" v-if="!isCollapse">Vue3+Ts</span>
    </div>
    <el-menu
      :default-active="defaultValue"
      class="el-menu-vertical"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :collapse="isCollapse"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!--二级菜单-->
        <template v-if="item.type === 1">
          <!--二级菜单的可以展开标题-->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon>
                <DocumentCopy />
              </el-icon>
              <!-- <el-icon v-if="item.icon" :class="item.icon"></el-icon>-->
              <span>{{ item.name }}</span>
            </template>
            <!-- 遍历里面的item-->
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item
                :index="subItem.id + ''"
                @click="handleMenuClick(subItem)"
              >
                <i v-if="subItem.icon" :class="subItem.icon"></i>
                <span>{{ subItem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!--一级菜单-->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue"
import { DocumentCopy } from "@element-plus/icons-vue"
import { useRouter, useRoute } from "vue-router"
import { useStore } from "@/store"
import { pathMapToMenu } from "@/utils/map-menus"
export default defineComponent({
  components: {
    DocumentCopy
  },
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    //store
    const store = useStore()
    const userMenus = computed(() => store.state.login.userMenus)
    //route
    const router = useRouter()
    const route = useRoute()
    const currentPath = route.path
    //data
    const menu = pathMapToMenu(userMenus.value, currentPath)
    const defaultValue = ref(menu.id + "")
    //event handle
    const handleMenuClick = (item: any) => {
      router.push({
        path: item.url ?? "/not-found"
      })
    }
    return {
      userMenus,
      handleMenuClick,
      defaultValue
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: #fff;
    }
  }
  .el-menu {
    border-right: none;
  }
  //目录
  .el-sub-menu {
    background-color: #001529 !important;
    //二级菜单(默认背景)
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-sub-menu__title {
    background-color: #001529 !important;
  }

  //  hover时高亮
  .el-menu-item :hover {
    color: #fff !important;
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
