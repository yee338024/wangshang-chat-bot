---
outline: deep
title: 发送好友文本信息
---

# 发送好友文本信息

用于通过本地 HTTP 协议向指定好友发送文本消息。

## 接口信息

- 接口名称：`发送好友文本信息`
- 请求方式：`POST`
- 请求地址：`http://127.0.0.1:2123`
- 协议：`HTTP/1.1`
- 实际接口路径：`/v1/friend/send-text-msg`

> 由于使用协议发送消息，发送成功后，需要重新进入聊天界面，才会显示信息。

## 请求示例

请求体统一通过本地协议入口转发，`url` 为真实接口路径，`params` 为接口参数。

```json
{
  "url": "/v1/friend/send-text-msg",
  "params": {
    "toUser": {
      "avatar": "0",
      "uid": 9573942,
      "nimId": 1411312758,
      "nickName": "F"
    },
    "content": "你好"
  }
}
```

## 请求参数

### 顶层参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `url` | `string` | 是 | 固定传 `/v1/friend/send-text-msg` |
| `params` | `object` | 是 | 发送消息所需参数对象 |

### `params` 参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `toUser` | `object` | 是 | 接收消息的好友信息 |
| `content` | `string` | 是 | 要发送的文本内容 |

### `params.toUser` 参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `avatar` | `string` | 否 | 好友头像标识，示例为 `0` |
| `uid` | `number` | 是 | 好友用户 ID |
| `nimId` | `number` | 是 | 好友 `nimId` |
| `nickName` | `string` | 否 | 好友昵称 |

## JavaScript 调用示例

```js
import axios from 'axios'

axios.post('http://127.0.0.1:2123', {
  url: '/v1/friend/send-text-msg',
  params: {
    toUser: {
      avatar: '0',
      uid: 9573942,
      nimId: 1411312758,
      nickName: 'F'
    },
    content: '你好'
  }
}).then((res) => {
  console.log(res.data)
})
```

## 返回说明

当前提供的示例响应内容如下：

```json
{
  "friendList": [
    {
      "uid": 5116872,
      "nickName": "Y",
      "initialPinyin": "#",
      "avatar": "0",
      "state": "FRIEND_STATE_GOOD",
      "onlineState": "ONLINE_STATE_ONLINE",
      "accountId": 467179336,
      "nimId": 1941814041,
      "markName": "///",
      "vipLevel": "VL_VIP_0",
      "vipIcon": "0",
      "isPretty": false,
      "accountState": "ACCOUNT_STATE_GOOD"
    }
  ],
  "blackList": [],
  "v": "0"
}
```

> 注意：这份返回示例看起来更像“好友列表”数据结构，与“发送好友文本信息”接口名不完全匹配。当前先按原始资料收录，实际返回内容请以本地抓包或调用结果为准。

## 字段参考

根据当前资料，请求时重点关注以下字段：

| 字段 | 说明 |
| --- | --- |
| `params.toUser.uid` | 目标好友 UID |
| `params.toUser.nimId` | 目标好友 NIM 标识 |
| `params.content` | 发送的文本消息 |

## 相关文档

- [开发文档](/usage)
- [WebSocket 文档](/websocket)
