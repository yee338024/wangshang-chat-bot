---
outline: deep
title: 群禁言设置
---

# 群禁言设置

用于通过本地 HTTP 协议开启或关闭整个群的禁言模式。

## 接口信息

- 接口名称：`群禁言设置`
- 请求方式：`POST`
- 请求地址：`http://127.0.0.1:2123`
- 协议：`HTTP/1.1`
- 实际接口路径：`/v1/group/set-group-mute`

## 请求示例

```json
{
  "url": "/v1/group/set-group-mute",
  "params": {
    "groupId": 14257,
    "muteMode": "MUTE_MEMBER"
  }
}
```

## 请求参数

### 顶层参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `url` | `string` | 是 | 固定传 `/v1/group/set-group-mute` |
| `params` | `object` | 是 | 接口业务参数 |

### `params` 参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `groupId` | `number` | 是 | 群组 ID |
| `muteMode` | `string` | 是 | 群禁言模式 |

### `muteMode` 可选值

| 值 | 说明 |
| --- | --- |
| `MUTE_NO` | 关闭禁言 |
| `MUTE_MEMBER` | 开启禁言 |

## JavaScript 调用示例

```js
import axios from 'axios'

axios.post('http://127.0.0.1:2123', {
  url: '/v1/group/set-group-mute',
  params: {
    groupId: 14257,
    muteMode: 'MUTE_MEMBER'
  }
}).then((res) => {
  console.log(res.data)
})
```

## 返回说明

当前资料中的成功响应示例为空，没有提供明确的返回体示例。

已知信息：

- 成功状态码示例为 `200`
- 失败状态码示例为 `404`
- 原始资料附带的响应 schema 与该接口并不匹配，像是其他接口的残留定义

因此在实际接入时，建议以本地真实调用结果为准。

## 接口说明

- 这个接口控制的是整个群的禁言模式，不是单个成员禁言。
- 当 `muteMode` 为 `MUTE_MEMBER` 时，可理解为开启群禁言。
- 当 `muteMode` 为 `MUTE_NO` 时，可理解为关闭群禁言。

## 相关文档

- [开发文档](/usage)
- [群成员禁言](/group-member-mute)
- [群成员取消禁言](/group-member-mute-cancel)
