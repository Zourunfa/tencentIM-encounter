export interface ITimCoreProps {
  SDKAppID: number
}

export interface ITimCoreLoginParams {
  userID: string
  userSig: string
}

export interface ITextPayload {
  type: string
}

export interface TextMessageEvent {
  name: string
  data: TextMessageEventData[]
}

export interface TextMessageEventData {
  payload: ITextPayload
}
