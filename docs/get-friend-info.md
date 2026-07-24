---
outline: deep
title: 获取好友信息
---

# 获取好友信息

用于通过本地 HTTP 协议查询指定好友的资料信息。

## 接口信息

- 接口名称：`获取好友信息`
- 请求方式：`POST`
- 请求地址：`http://127.0.0.1:2123`
- 协议：`HTTP/1.1`
- 实际接口路径：`/v1/friend/get-friend-info`

## 请求示例

```json
{
  "url": "/v1/friend/get-friend-info",
  "params": {
    "showTempChat": false,
    "uid": 5116872
  }
}
```

## 请求参数

### 顶层参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `url` | `string` | 是 | 固定传 `/v1/friend/get-friend-info` |
| `params` | `object` | 是 | 接口业务参数 |

### `params` 参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `showTempChat` | `boolean` | 否 | 是否显示临时会话相关信息 |
| `uid` | `number` | 是 | 目标好友 UID |

## JavaScript 调用示例

```js
import axios from 'axios'

axios.post('http://127.0.0.1:2123', {
  url: '/v1/friend/get-friend-info',
  params: {
    showTempChat: false,
    uid: 5116872
  }
}).then((res) => {
  console.log(res.data)
})
```

## 成功返回示例

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

## 关键字段

| 字段 | 说明 |
| --- | --- |
| `params.uid` | 目标好友 UID |
| `params.showTempChat` | 是否查询临时会话相关信息 |
| `friendList` | 好友信息列表 |
| `friendList[].uid` | 好友 UID |
| `friendList[].nickName` | 好友昵称 |
| `friendList[].nimId` | 即时通讯 NIM ID |
| `friendList[].markName` | 好友备注名 |
| `friendList[].onlineState` | 在线状态 |
| `blackList` | 黑名单列表 |

## 返回说明

- 当前示例返回是 `friendList` 数组，即使只查单个好友，也仍然用列表结构承载。
- `blackList` 可配合判断该好友是否处于黑名单相关状态。
- 当前附带的 schema 与返回结构是匹配的，可直接参考示例字段进行解析。

## 相关文档

- [开发文档](/usage)
- [拉黑好友](/friend-black-setting)
- [取消拉黑好友](/friend-black-cancel)
