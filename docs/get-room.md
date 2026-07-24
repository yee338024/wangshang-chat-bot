---
outline: deep
title: 获取聊天室信息
---

# 获取聊天室信息

用于通过本地 HTTP 协议查询当前聊天室或音视频房间信息。

## 接口信息

- 接口名称：`获取聊天室信息`
- 请求方式：`POST`
- 请求地址：`http://127.0.0.1:2123`
- 协议：`HTTP/1.1`
- 实际接口路径：`/v1/rtc/get_room`

## 请求示例

```json
{
  "url": "/v1/rtc/get_room",
  "params": {
    "uid": 14257,
    "id": 14257
  }
}
```

## 请求参数

### 顶层参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `url` | `string` | 是 | 固定传 `/v1/rtc/get_room` |
| `params` | `object` | 是 | 接口业务参数 |

### `params` 参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `uid` | `number` | 是 | 当前用户或查询主体 ID |
| `id` | `number` | 是 | 房间 ID |

## JavaScript 调用示例

```js
import axios from 'axios'

axios.post('http://127.0.0.1:2123', {
  url: '/v1/rtc/get_room',
  params: {
    uid: 14257,
    id: 14257
  }
}).then((res) => {
  console.log(res.data)
})
```

## 成功返回示例

```json
{
  "id": "0",
  "cid": "0",
  "createdBy": 0,
  "createdAt": "0",
  "receiver": 0,
  "gid": 0,
  "token": null,
  "forbidUid": [],
  "screenNimId": 0
}
```

## 关键字段

| 字段 | 说明 |
| --- | --- |
| `id` | 房间 ID |
| `cid` | 房间关联标识 |
| `createdBy` | 房间创建者 ID |
| `createdAt` | 房间创建时间 |
| `receiver` | 接收方 ID |
| `gid` | 群组 ID |
| `token` | 房间访问令牌 |
| `forbidUid` | 禁止进入或受限用户 ID 列表 |
| `screenNimId` | 屏幕共享相关 NIM ID |

## 返回说明

- 当房间不存在或尚未初始化时，示例里很多字段可能为 `0` 或 `null`。
- `token` 为房间访问令牌，接入时建议仅在必要场景下使用和传递。
- 当前附带的 schema 校验内容与该接口返回结构不一致，像是其他接口的残留定义；实际解析请以本页的成功返回示例为准。

## 相关文档

- [开发文档](/usage)
- [群成员禁言](/group-member-mute)
