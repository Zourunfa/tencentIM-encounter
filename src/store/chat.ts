import { defineStore } from 'pinia'

export const useTIMStore = defineStore('chat', {
  TIMOptions() {
    return {
      SDKAppID: 1600055412,
    }
  },
})
