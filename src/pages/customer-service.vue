<script setup lang="ts">
import { Card as ACard, Menu as AMenu, MenuItem as AMenuItem, Textarea as ATextarea } from 'ant-design-vue'
import { ref } from 'vue'
const chatInfo = ref([
  {
    text: 'sdasdas11',
    flow: 'in',
  },
  {
    text: '11asds',
    flow: 'out',
  },
  {
    text: '11',
    flow: 'out',
  },
  {
    text: '11',
    flow: 'out',
  },
])
</script>

<template>
  <div class="chat-box">
    <a-card class="chat-card">
      <a-menu class="contacts-list" mode="inline">
        <a-menu-item key="3">Option 3</a-menu-item>
      </a-menu>

      <div class="chat-content">
        <div class="chat-message">
          <div class="chat-item" :class="{ 'chat-item-out': item.flow === 'out' }" v-for="item in chatInfo">
            <div class="chat-item-content">
              <div :class="{ triangle: item.flow === 'in', triangle_tow: item.flow !== 'in' }"></div>

              <div :class="{ triangle: item.flow === 'in', fill_tow: item.flow !== 'in' }"></div>
              {{ item.text }}
            </div>
          </div>
        </div>
        <a-textarea class="textarea" placeholder="发消息" :auto-size="{ minRows: 2, maxRows: 5 }" />
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
    display: flex;
  }
}

.chat-item-out {
  justify-content: flex-end;
  .caht-item-content {
    margin-right: 10px;
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
  position: relative;
  .caht-message {
    flex: 1;
    padding: 20px 0;
    overflow-y: scroll;
  }
  .textarea {
    border-radius: 5px;
    position: absolute;
    bottom: 20px;
  }
}
.chat-item {
  display: flex;
  .chat-item-content {
    position: relative;
    padding: 10px 6px;
    margin-top: 10px;
    margin-left: 10px;
    border-radius: 5px;
    word-break: break-all;
    background-color: skyblue;
    color: white;
  }
}
.triangle_tow,
.triangle {
  position: absolute;
  top: 15px;
  border: 1px solid #e8e8e8;
  margin-right: 20px;
}
.triangle {
}

.fill_tow {
  position: absolute;
  top: 15px;
  border-width: 10px;
  border: 1px solid #e8e8e8;
}
</style>
