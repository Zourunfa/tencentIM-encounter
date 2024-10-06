import { defineStore } from 'pinia'
import { TextMessageEvent } from './plugins/TIM-plugin/type'

export const useTIMStore = defineStore('chat', {
  state() {
    return {
      conversationList: [],
    }
  },
  TIMOptions() {
    return {
      SDKAppID: 1600055412,
    }
  },
  actions: {
    // 订阅接收功能
    subscribeMessage(event: TextMessageEvent) {},

    // 获取会话列表(sdk准备完成之后调用)
    async getSessionList() {
      debugger
      this.conversationList = await this.timCore.tim.getConversationList()
      console.log(this.conversationList, '---会话列表数据')
    },
  },
})
