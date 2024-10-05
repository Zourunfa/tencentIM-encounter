import 'pinia'
import { ITimCoreProps } from './store/plugins/TIM-plugin/type'
declare module 'pinia' {
  export interface DefineStoreOptionsBase<S, Store> {
    TIMOptions?: () => ITimCoreProps
  }

  export interface PiniaCustomProperties {
    // 通过使用 setter，我们可以同时允许字符串和引用
    // tim核心功能
    timCore: TIMCore
  }
}
