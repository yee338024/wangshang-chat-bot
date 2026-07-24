---
outline: deep
title: 取消拉黑好友
---

# 取消拉黑好友

用于通过本地 HTTP 协议将指定好友从黑名单中移除。

## 接口信息

- 接口名称：`取消拉黑好友`
- 请求方式：`POST`
- 请求地址：`http://127.0.0.1:2123`
- 协议：`HTTP/1.1`
- 实际接口路径：`/v1/friend/friend-black-setting`

## 请求示例

```json
{
  "url": "/v1/friend/friend-black-setting",
  "params": {
    "uid": 5116872,
    "pullBlack": false
  }
}
```

## 请求参数

### 顶层参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `url` | `string` | 是 | 固定传 `/v1/friend/friend-black-setting` |
| `params` | `object` | 是 | 接口业务参数 |

### `params` 参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `uid` | `number` | 是 | 目标好友 UID |
| `pullBlack` | `boolean` | 是 | 是否拉黑好友 |

### `pullBlack` 说明

| 值 | 说明 |
| --- | --- |
| `true` | 拉黑好友 |
| `false` | 取消拉黑 |

## JavaScript 调用示例

```js
import axios from 'axios'

axios.post('http://127.0.0.1:2123', {
  url: '/v1/friend/friend-black-setting',
  params: {
    uid: 5116872,
    pullBlack: false
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
| `params.uid` | 目标好友 UID |
| `params.pullBlack` | 取消拉黑时固定传 `false` |
| `friendList` | 好友列表 |
| `blackList` | 黑名单列表 |
| `code` | 错误码 |
| `msg` | 错误信息 |

## 返回说明

- 这个接口与“拉黑好友”使用同一个路径，核心区别是 `pullBlack` 取值不同。
- 当前成功示例返回的是 `friendList` 和 `blackList` 结构，适合操作后直接刷新好友数据。
- 当登录凭证失效时，可能返回 `401`，提示重新登录。

## 相关文档

- [开发文档](/usage)
- [拉黑好友](/friend-black-setting)
