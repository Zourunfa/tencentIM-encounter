// img 核心功能
import TencentCloudChat from '@tencentcloud/chat'
import TIMUploadPlugin from 'tim-upload-plugin'
// import TIMPushAndroidConfig from './timpush-configs.json' // IM控制台 > 推送管理 > 接入设置下载配置文件
import { ITimCoreProps } from './type'
export default class TIMCore {
  constructor(props: ITimCoreProps) {
    this.initTimSdk(props.SDKAppID)
  }

  private initTimSdk = (SDKAppID: number) => {
    let options = {
      SDKAppID: SDKAppID, // 接入时需要将0替换为您的即时通信 IM 应用的 SDKAppID
    }
    // 创建 SDK 实例，`TIM.create()`方法对于同一个 `SDKAppID` 只会返回同一份实例
    let chat = TencentCloudChat.create(options) // SDK 实例通常用 chat 表示

    chat.setLogLevel(0) // 普通级别，日志量较多，接入时建议使用
    // chat.setLogLevel(1); // release 级别，SDK 输出关键信息，生产环境时建议使用

    // 注册腾讯云即时通信 IM 上传插件
    chat.registerPlugin({ 'tim-upload-plugin': TIMUploadPlugin })
  }
}
