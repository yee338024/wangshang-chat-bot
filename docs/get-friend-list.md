---
outline: deep
title: 获取好友列表
---

# 获取好友列表

用于通过本地 HTTP 协议获取当前账号的好友列表和黑名单信息。

## 接口信息

- 接口名称：`获取好友列表`
- 请求方式：`POST`
- 请求地址：`http://127.0.0.1:2100`
- 协议：`HTTP/1.1`
- 实际接口路径：`/v1/friend/get-friend-list`

> 注意：这个接口使用的是 `2100` 端口，不是前面常见的 `2123`。

## 请求示例

```json
{
  "url": "/v1/friend/get-friend-list"
}
```

## 请求参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `url` | `string` | 是 | 固定传 `/v1/friend/get-friend-list` |

## JavaScript 调用示例

```js
import axios from 'axios'

axios.post('http://127.0.0.1:2100', {
  url: '/v1/friend/get-friend-list'
}).then((res) => {
  console.log(res.data)
})
```

## 成功返回示例

```json
{
  "friendList": [
    {
      "uid": 7031855,
      "nickName": "xxx",
      "initialPinyin": "A",
      "avatar": "7276167920044355384",
      "state": "FRIEND_STATE_GOOD",
      "onlineState": "ONLINE_STATE_ONLINE",
      "accountId": 488010400,
      "nimId": 1509193128,
      "markName": "",
      "vipLevel": "VL_VIP_0",
      "vipIcon": "0",
      "isPretty": false,
      "accountState": "ACCOUNT_STATE_GOOD"
    },
    {
      "uid": 2886983,
      "nickName": "32",
      "initialPinyin": "D",
      "avatar": "9034325946377988476",
      "state": "FRIEND_STATE_GOOD",
      "onlineState": "ONLINE_STATE_ONLINE",
      "accountId": 6726790,
      "nimId": 1338701480,
      "markName": "test",
      "vipLevel": "VL_VIP_0",
      "vipIcon": "0",
      "isPretty": false,
      "accountState": "ACCOUNT_STATE_GOOD"
    },
    {
      "uid": 9573942,
      "nickName": "F",
      "initialPinyin": "#",
      "avatar": "0",
      "state": "FRIEND_STATE_GOOD",
      "onlineState": "ONLINE_STATE_ONLINE",
      "accountId": 329003585,
      "nimId": 1411312758,
      "markName": "test",
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

## 失败返回示例

```json
{
  "code": 401,
  "msg": "无效的登陆凭证，请退出重新登录！",
  "line": 928,
  "file": "appx_context"
}
```

## 关键字段

| 字段 | 说明 |
| --- | --- |
| `friendList` | 好友列表 |
| `friendList[].uid` | 好友 UID |
| `friendList[].nickName` | 好友昵称 |
| `friendList[].markName` | 好友备注 |
| `friendList[].nimId` | 即时通讯 NIM ID |
| `friendList[].onlineState` | 在线状态 |
| `blackList` | 黑名单列表 |
| `v` | 版本或状态标识 |
| `code` | 错误码 |
| `msg` | 错误信息 |

## 返回说明

- `friendList` 返回完整好友列表。
- `blackList` 可用于同时获取黑名单数据。
- 当登录凭证失效时，可能返回 `401`，提示重新登录。

## 相关文档

- [开发文档](/usage)
- [获取好友信息](/get-friend-info)
- [获取黑名单信息](/get-black-list-info)
