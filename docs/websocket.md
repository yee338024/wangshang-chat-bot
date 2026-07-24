---
outline: deep
title: WebSocket 文档
---

# WebSocket 文档

本文档整理 `聊天websocket` 的接入方式、事件类型和消息示例，仅保留实际调用与解析需要的内容，不展示无关的记录字段。

## 基本信息

- 名称：`聊天websocket`
- 类型：`websocket2`
- 连接地址：`ws://127.0.0.1:1500`

## 连接说明

客户端连接到上述地址后，即可持续接收聊天事件推送。消息体统一为 `JSON` 格式。

推荐在客户端实现以下能力：

- 自动重连：最多 `5` 次
- 重连间隔：`5000ms`
- 证书校验：当前配置为关闭校验

## 事件列表

当前已知消息事件如下：

| 事件名 | 说明 |
| --- | --- |
| `new-team-msg` | 新群组消息 |
| `new-msg` | 新好友消息 |

## 新群组消息

当收到群消息时，服务端会推送 `new-team-msg` 事件。

```json
{
  "event": "new-team-msg",
  "payload": {
    "scene": "1",
    "to": "28378141389",
    "from": "1713879190",
    "fromClientType": "4",
    "fromDeviceId": "6b01be1f1190f932889ec9144e6b2232",
    "fromNick": "1f0975918788df2b625e97b5bcf6360b",
    "time": "1752424778623",
    "type": "100",
    "body": "",
    "attach": "{\"b\":\"CamB8gC0WNEBEUnhc2gAAAAAGV2FUTeuNnqbIlTJcGORRxNHtdRxcqVBUzOoI8eW_6K1EG3k-1tin9mShP-jvHU6tAm5cA777tuOPiz39tygn342eacHpUSWM-SFindSvg_Q2B2me3dFBykyu4chRRww7aO0rPqjqZ3TAToQIqlRz5hbH0AO-kAp7f3OnQ\",\"upload_tag\":\"nim_default_im\"}",
    "idClient": "f6d09df1-6007-11f0-9f53-a3225e568098",
    "idServer": "1904424831051419090",
    "resend": "0",
    "userUpdateTime": "1748214195247",
    "pushContent": "",
    "apnsForcePush": "0",
    "needUpdateSession": "1",
    "__clientExt": "{\"statistics\":{\"apiCallingTime\":1752424778393,\"attachUploadDuration\":0,\"sendTime\":1752424778396}}\n",
    "isHistoryable": "1",
    "isRoamingable": "1",
    "isSyncable": "1",
    "cc": "1",
    "isPushable": "1",
    "isOfflinable": "1",
    "isUnreadable": "1",
    "needPushNick": "1",
    "attachContent": {
      "from": {
        "id": 7624237
      },
      "to": {
        "id": 993306
      },
      "createdAt": {
        "seconds": "1752424777"
      },
      "msgDevice": "Desktop",
      "msgSession": "MSG_KIND_GROUP",
      "msgVersion": 2,
      "content": {
        "data": "欢迎xxx进群"
      }
    }
  }
}
```

### 关键字段

| 字段 | 说明 |
| --- | --- |
| `event` | 事件名，固定为 `new-team-msg` |
| `payload.scene` | 会话场景，`1` 通常表示群聊 |
| `payload.to` | 接收方标识 |
| `payload.from` | 发送方标识 |
| `payload.time` | 消息时间戳，毫秒 |
| `payload.type` | 消息类型 |
| `payload.attach` | 附加原始字符串 |
| `payload.attachContent` | 已解析的扩展内容 |
| `payload.attachContent.content.data` | 实际业务文案 |

## 新好友消息

当收到好友消息时，服务端会推送 `new-msg` 事件。

```json
{
  "event": "new-msg",
  "payload": {
    "scene": "0",
    "to": "1941814041",
    "from": "1411312758",
    "fromClientType": "1",
    "fromDeviceId": "d8e322ad-7308-43ba-b02b-681c3513cd0b",
    "fromNick": "d850152d719976da7d421ff0d2b1b9fe",
    "time": "1752424919490",
    "type": "100",
    "attach": "{\"b\":\"CYc84QTYWEgCEdfhc2gAAAAAGWd3_zrIZtwUImBfxvVOPMfl8M67KsJegaLm-KRWqYf7CbI6mlFPDsfcdhbAfxPGPEbK6H038exR3iyfeiQoYZMWkrZGx4Ze7bYDCBV8XoJuJd2PerE-R_swcCJRFoYEbwQ_OxE9smTYGVIwm_HzgqeZkpEOOhCj3vGw3wQZyjygP6PQO97Y\"}",
    "idClient": "6272bf34f8a741c4b088cb7a853be49d",
    "idServer": "14943162405847",
    "userUpdateTime": "1751369015221",
    "needUpdateSession": "1",
    "delete": "0",
    "__clientExt": "{\"statistics\":{\"apiCallingTime\":1752424919443,\"sendTime\":1752424919450}}",
    "isHistoryable": "1",
    "isRoamingable": "1",
    "isSyncable": "1",
    "cc": "1",
    "isPushable": "1",
    "isOfflinable": "1",
    "isUnreadable": "1",
    "needPushNick": "1",
    "attachContent": {
      "from": {
        "id": 9573942,
        "name": "F",
        "avatar": "0"
      },
      "to": {
        "id": 5116872,
        "name": "Y",
        "avatar": "0"
      },
      "createdAt": {
        "seconds": "1752424919"
      },
      "msgDevice": "Android",
      "msgSession": "MSG_KIND_P2P",
      "msgVersion": 2,
      "idClient": "6272bf34f8a741c4b088cb7a853be49d",
      "idServer": "0",
      "content": {
        "data": "。。"
      }
    }
  }
}
```

### 关键字段

| 字段 | 说明 |
| --- | --- |
| `event` | 事件名，固定为 `new-msg` |
| `payload.scene` | 会话场景，`0` 通常表示私聊 |
| `payload.to` | 接收方标识 |
| `payload.from` | 发送方标识 |
| `payload.time` | 消息时间戳，毫秒 |
| `payload.type` | 消息类型 |
| `payload.attachContent.from` | 发送方资料 |
| `payload.attachContent.to` | 接收方资料 |
| `payload.attachContent.content.data` | 实际消息内容 |

## 前端接入示例

```js
const socket = new WebSocket('ws://127.0.0.1:1500')

socket.onopen = () => {
  console.log('WebSocket 已连接')
}

socket.onmessage = (event) => {
  const message = JSON.parse(event.data)

  if (message.event === 'new-team-msg') {
    console.log('收到群消息', message.payload)
  }

  if (message.event === 'new-msg') {
    console.log('收到好友消息', message.payload)
  }
}

socket.onclose = () => {
  console.log('WebSocket 已关闭')
}
```

## 说明

- 文档已移除无关的记录字段，仅保留接入和解析需要的内容。
- 示例中的 `attach` 为字符串，`attachContent` 为更适合业务解析的对象结构。
- 如果本地端口会变化，请以软件实际显示的端口为准。
