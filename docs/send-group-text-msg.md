---
outline: deep
title: 发送群文本信息
---

# 发送群文本信息

用于通过本地 HTTP 协议向指定群组发送文本消息。

## 接口信息

- 接口名称：`发送群文本信息`
- 请求方式：`POST`
- 请求地址：`http://127.0.0.1:2100`
- 协议：`HTTP/1.1`
- 实际接口路径：`/v1/group/send-text-msg`

> 注意：这个接口使用的是 `2100` 端口，不是前面常见的 `2123`。

## 请求示例

```json
{
  "url": "/v1/group/send-text-msg",
  "params": {
    "toGroup": {
      "groupId": 1209672,
      "groupAvatar": "4705126988267006141",
      "groupName": "群名称",
      "groupCloudId": "28378141389"
    },
    "content": "你好"
  }
}
```

## 请求参数

### 顶层参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `url` | `string` | 是 | 建议传 `/v1/group/send-text-msg` |
| `params` | `object` | 是 | 发送群消息所需参数对象 |

### `params` 参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `toGroup` | `object` | 是 | 目标群组信息 |
| `content` | `string` | 是 | 要发送的文本内容 |

### `params.toGroup` 参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `groupId` | `number` | 是 | 群组 ID |
| `groupAvatar` | `string` | 否 | 群头像标识 |
| `groupName` | `string` | 否 | 群名称 |
| `groupCloudId` | `string` | 否 | 群云 ID |

## JavaScript 调用示例

```js
import axios from 'axios'

axios.post('http://127.0.0.1:2100', {
  url: '/v1/group/send-text-msg',
  params: {
    toGroup: {
      groupId: 1209672,
      groupAvatar: '4705126988267006141',
      groupName: '群名称',
      groupCloudId: '28378141389'
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

> 注意：这份返回示例看起来更像“好友列表”数据结构，与“发送群文本信息”接口名不完全匹配。当前先按原始资料收录，实际返回内容请以本地抓包或调用结果为准。

## 资料差异说明

- `request.body.raw` 中的路径是 `/v1/group/send-text-msg`
- `raw_parameter` 中的 `url` 示例却写成了 `/v1/team/send-text-msg`

当前文档采用的是 `raw` 中更完整、且与接口名称一致的 `/v1/group/send-text-msg`。如果你后面确认实际可用路径不同，再一起修正文档即可。

## 字段参考

| 字段 | 说明 |
| --- | --- |
| `params.toGroup.groupId` | 目标群组 ID |
| `params.toGroup.groupCloudId` | 目标群云 ID |
| `params.content` | 发送的文本消息 |

## 相关文档

- [开发文档](/usage)
- [获取群组列表](/get-group-list)
- [获取群组信息](/get-group-info)
