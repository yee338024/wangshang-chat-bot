---
outline: deep
title: 获取黑名单信息
---

# 获取黑名单信息

用于通过本地 HTTP 协议查询黑名单相关数据。

## 接口信息

- 接口名称：`获取黑名单信息`
- 请求方式：`POST`
- 请求地址：`http://127.0.0.1:2123`
- 协议：`HTTP/1.1`
- 当前资料中的接口路径：`/v1/friend/friend-black-setting`

## 请求示例

```json
{
  "url": "/v1/friend/friend-black-setting",
  "params": {
    "uid": 5116872,
    "pullBlack": true
  }
}
```

## 请求参数

### 顶层参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `url` | `string` | 是 | 当前资料中给出的路径为 `/v1/friend/friend-black-setting` |
| `params` | `object` | 是 | 接口业务参数 |

### `params` 参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `uid` | `number` | 是 | 目标好友 UID |
| `pullBlack` | `boolean` | 是 | 当前示例中为 `true` |

## JavaScript 调用示例

```js
import axios from 'axios'

axios.post('http://127.0.0.1:2123', {
  url: '/v1/friend/friend-black-setting',
  params: {
    uid: 5116872,
    pullBlack: true
  }
}).then((res) => {
  console.log(res.data)
})
```

## 当前返回示例

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

## 资料差异说明

- 接口名称写的是“获取黑名单信息”
- 但请求路径和请求体仍然是 `/v1/friend/friend-black-setting`
- `params.pullBlack` 也还是一个执行拉黑动作的参数

所以这份资料和接口名称并不完全一致。当前页面先按原始资料收录，实际接入时建议以真实调用结果为准。

## 临时字段参考

| 字段 | 说明 |
| --- | --- |
| `friendList` | 好友列表 |
| `blackList` | 黑名单列表 |
| `v` | 版本或状态标识 |
| `code` | 错误码 |
| `msg` | 错误信息 |

## 相关文档

- [开发文档](/usage)
- [拉黑好友](/friend-black-setting)
- [取消拉黑好友](/friend-black-cancel)
