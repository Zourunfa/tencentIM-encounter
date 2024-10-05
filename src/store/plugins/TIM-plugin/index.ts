/**
 * 1.初始化im sdk
 * 2.登录
 * 3.收发信息
 * 4.注册tim实例
 * 5.返回pinia模块
 */

import { PiniaPluginContext } from 'pinia'
import TIMCore from './TIM-core'

export default function (context: PiniaPluginContext) {
  if (context.options.TIMOptions) {
    // 1初始化im sdk
    const timCore = new TIMCore(context.options.TIMOptions())

    // 在store写入属性
    context.store.timCore = timCore
  }
}
