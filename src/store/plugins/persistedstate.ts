import { PiniaPlugin, PiniaPluginContext } from 'pinia'

// 插件方法，有几个方法执行几次
export function persistedstate(context: PiniaPluginContext) {
  // 每次state发生变化的时候 都要保存在localStorage

  context.store.$subscribe(
    (_store, state) => {
      console.log(_store, state)

      // 根据模块名 那个模块的state 保存到localStorage
      const currentState = JSON.parse(localStorage.getItem(context.store.$id) || '{}').toString
      //  把数据放在pinia对应模块
      context.store.$patch(currentState)

      localStorage.setItem(_store.storeId, JSON.stringify(state))
    },
    {
      // 组件卸载依赖还在
      detached: true,
    }
  )
}
