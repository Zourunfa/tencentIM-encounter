// img 核心功能
import TencentCloudChat, { ChatSDK } from '@tencentcloud/chat'
import TIMUploadPlugin from 'tim-upload-plugin'
// import TIMPushAndroidConfig from './timpush-configs.json' // IM控制台 > 推送管理 > 接入设置下载配置文件
import { ITextPayload, ITimCoreLoginParams, ITimCoreProps } from './type'

export default class TIMCore {
  public tim: ChatSDK | undefined
  public userID: string = ''
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

    this.tim = chat
  }

  public async timLogin(options: ITimCoreLoginParams) {
    // 登录SDK
    await this.tim?.login(options)
    this.userID = options.userID

    this.bindTIMEvent()
  }

  // 绑定监听事件
  private bindTIMEvent() {
    this.tim?.on(TencentCloudChat.EVENT.SDK_READY, () => this.handleSDKReady, this)
  }

  private handleSDKReady() {
    console.log('SDK Ready')
    debugger
    this.tim?.on(TencentCloudChat.EVENT.MESSAGE_RECEIVED, () => this.handleMessageReceived)
  }
  // 接受消息
  private handleMessageReceived(event: any) {
    debugger
    console.log(event, '----接受到一条消息')
    this.messageReceived(event)
  }

  // 对外暴露接受消息的方法
  public messageReceived(event: any) {
    console.log(event, '----接受到一条消息')
  }
  // 获得消息类型
  private getMessageOptions(userID: string, payload: ITextPayload) {
    return this.tim?.createTextMessage({
      to: userID,
      conversationType: TencentCloudChat.TYPES.CONV_C2C,
      // 消息优先级，用于群聊。如果某个群的消息超过了频率限制，后台会优先下发高优先级的消息
      // priority: TencentCloudChat.TYPES.MSG_PRIORITY_NORMAL,
      payload,
      // 如果您发消息需要已读回执，需购买旗舰版套餐，并且创建消息时将 needReadReceipt 设置为 true
      needReadReceipt: true,
      // 消息自定义数据（云端保存，会发送到对端，程序卸载重装后还能拉取到）
      // cloudCustomData: 'your cloud custom data'
    })
  }

  // 发送消息
  public async sendMessage(userID: string, payload: ITextPayload) {
    const messageOption = this.getMessageOptions(userID, payload)
    await this.tim?.sendMessage(messageOption!)

    console.log('发送成功')
  }
}
