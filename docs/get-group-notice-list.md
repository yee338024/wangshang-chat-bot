---
outline: deep
title: 获取群公告列表
---

# 获取群公告列表

用于通过本地 HTTP 协议获取群公告相关数据。

## 接口信息

- 接口名称：`获取群公告列表`
- 请求方式：`POST`
- 请求地址：`http://127.0.0.1:2100`
- 协议：`HTTP/1.1`
- 实际接口路径：`/v1/group/top-notice`

> 注意：这个接口使用的是 `2100` 端口，不是前面常见的 `2123`。

## 请求示例

```json
{
  "url": "/v1/group/top-notice",
  "params": {
    "groupId": 1209672,
    "v": "0"
  }
}
```

## 请求参数

### 顶层参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `url` | `string` | 是 | 固定传 `/v1/group/top-notice` |
| `params` | `object` | 是 | 接口业务参数 |

### `params` 参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `groupId` | `number` | 是 | 群组 ID |
| `v` | `string` | 否 | 版本标识，示例值为 `0` |

## JavaScript 调用示例

```js
import axios from 'axios'

axios.post('http://127.0.0.1:2100', {
  url: '/v1/group/top-notice',
  params: {
    groupId: 1209672,
    v: '0'
  }
}).then((res) => {
  console.log(res.data)
})
```

## 当前返回示例

```json
{
  "v": "0",
  "groupMemberInfo": [
    {
      "userId": 9573942,
      "groupRole": "GROUP_ROLE_OWNER",
      "userAvatar": "0",
      "userNick": "F",
      "initialPinyin": "F",
      "groupMemberNick": "F",
      "accountId": 0,
      "nimId": 1411312758,
      "isPretty": false,
      "vipLevel": "VL_VIP_0",
      "vipIcon": "0",
      "accountState": "ACCOUNT_STATE_GOOD",
      "entLevel": "ENT_LEVEL_0"
    },
    {
      "userId": 8732991,
      "groupRole": "GROUP_ROLE_ADMIN",
      "userAvatar": "0",
      "userNick": "S",
      "initialPinyin": "S",
      "groupMemberNick": "S",
      "accountId": 0,
      "nimId": 2141459254,
      "isPretty": false,
      "vipLevel": "VL_VIP_0",
      "vipIcon": "0",
      "accountState": "ACCOUNT_STATE_GOOD",
      "entLevel": "ENT_LEVEL_0"
    },
    {
      "userId": 5116872,
      "groupRole": "GROUP_ROLE_ADMIN",
      "userAvatar": "0",
      "userNick": "Y",
      "initialPinyin": "#",
      "groupMemberNick": "///",
      "accountId": 0,
      "nimId": 1941814041,
      "isPretty": false,
      "vipLevel": "VL_VIP_0",
      "vipIcon": "0",
      "accountState": "ACCOUNT_STATE_GOOD",
      "entLevel": "ENT_LEVEL_0"
    }
  ],
  "groupCloudId": "44195942511",
  "groupAccount": "2516091539",
  "isPretty": false
}
```

## 资料差异说明

- 接口名称写的是“获取群公告列表”
- 实际请求路径是 `/v1/group/top-notice`
- 当前返回示例字段却是 `groupMemberInfo`，结构上更像群成员列表，而不是公告列表

因此这页先按原始资料收录，但实际解析请以真实调用结果为准。

## 临时字段参考

基于当前示例，能确认的字段只有：

| 字段 | 说明 |
| --- | --- |
| `v` | 版本或状态标识 |
| `groupCloudId` | 群云 ID |
| `groupAccount` | 群账号标识 |
| `isPretty` | 是否为靓号相关标识 |

## 返回说明

- 当前资料里的成功返回示例与接口名称明显不一致。
- 原始资料附带的 schema 也与该接口返回结构不匹配，像是其他接口的残留定义。
- 建议后续拿真实响应后，再把本页修正为最终版。

## 相关文档

- [开发文档](/usage)
- [获取群组信息](/get-group-info)
- [获取群成员列表](/get-group-members)
