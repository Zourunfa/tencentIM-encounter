import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state() {
    return {
      age: 18,
      name: 'af',
    }
  },
  getters: {
    doubleAge: state => state.age * 2,
    // 如果要在getters中调用其他的计算属性
    // 不能使用箭头函数
    // 必须让this指向当前实例
    getNameAndAge(state) {
      return state.name + state.age
    },
    getAaddAge() {
      return (num: number) => this.age + num
    },
  },
  actions: {
    saveName(name: string) {
      this.name = name
      console.log(this.name)
    },
  },
})
