<script setup lang="ts">
import { Layout as ALayout, LayoutContent as ALayoutContent, LayoutHeader as ALayoutHeader, Button as AButton, LayoutSider as ALayoutSider, Menu as AMenu, MenuItem as AMenuItem } from 'ant-design-vue'
import { ref } from 'vue'
import { UserOutlined, VideoCameraOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
const selectedKeys = ref<string[]>(['1'])
const collapsed = ref<boolean>(false)
import { useRouter } from 'vue-router'
const $router = useRouter()
const handleLoginOut = () => {
  $router.push('/login')
}
</script>

<template>
  <div>
    <a-layout class="layout-container" id="components-layout-demo-custom-trigger">
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
        <div class="logo" />
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
          <a-menu-item @click="() => $router.push('/home')" key="home">
            <user-outlined />
            <span>首页</span>
          </a-menu-item>
          <a-menu-item @click="() => $router.push('/customer-service')" key="customer-service">
            <video-camera-outlined />
            <span>客服</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
          <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
          <a-button type="link" @click="handleLoginOut">登出</a-button>
        </a-layout-header>
        <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<style scoped>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}

.layout-container {
  height: 100vh;
}
</style>
