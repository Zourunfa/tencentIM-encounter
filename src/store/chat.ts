import { defineStore } from 'pinia'
import { TextMessageEvent } from './plugins/TIM-plugin/type'

export const useTIMStore = defineStore('chat', {
  TIMOptions() {
    return {
      SDKAppID: 1600055412,
    }
  },
  actions: {
    // 订阅接收功能
    subscribeMessage(event: TextMessageEvent) {},
  },
})
