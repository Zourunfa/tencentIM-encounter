<script setup lang="ts">
import { Card as ACard, Menu as AMenu, MenuItem as AMenuItem, Textarea as ATextarea } from 'ant-design-vue'
</script>

<template>
  <div class="chat-box">
    <a-card class="chat-card">
      <a-menu class="contacts-list" mode="inline">
        <a-menu-item key="3">Option 3</a-menu-item>
      </a-menu>

      <div class="chat-content">
        <div class="chat-message">
          <a-textarea class="textarea" placeholder="发消息" :auto-size="{ minRows: 2, maxRows: 5 }" />
        </div>
      </div>
    </a-card>
  </div>
</template>

<style scoped lang="scss">
.chat-box {
  display: flex;
  align-items: center;
  justify-self: center;
  height: 100%;
  :deep(.ant-card-body) {
    height: 100%;
    align-items: center;
  }
}

.chat-card {
  width: 100%;
  height: 100%;
}

.contacts-list {
  width: 300px;
  height: 100%;
  border: 1px solid #e8e8e8;
  margin-right: 20px;
}

.chat-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
  .caht-message {
    flex: 1;
    padding: 20px 0;
    overflow-y: scroll;
  }
  .textarea {
    border-radius: 5px;
  }
}
</style>
