---
outline: deep
title: 获取群成员列表
---

# 获取群成员列表

用于通过本地 HTTP 协议获取指定群组的成员列表。

## 接口信息

- 接口名称：`获取群成员列表`
- 请求方式：`POST`
- 请求地址：`http://127.0.0.1:2100`
- 协议：`HTTP/1.1`
- 实际接口路径：`/v1/group/get-group-members`

> 注意：这个接口使用的是 `2100` 端口，不是前面常见的 `2123`。

## 请求示例

```json
{
  "url": "/v1/group/get-group-members",
  "params": {
    "groupId": 1234567,
    "groupCloudId": "12345123456",
    "v": "0"
  }
}
```

## 请求参数

### 顶层参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `url` | `string` | 是 | 固定传 `/v1/group/get-group-members` |
| `params` | `object` | 是 | 接口业务参数 |

### `params` 参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `groupId` | `number` | 是 | 群组 ID |
| `groupCloudId` | `string` | 是 | 群云 ID |
| `v` | `string` | 否 | 版本标识，示例值为 `0` |

## JavaScript 调用示例

```js
import axios from 'axios'

axios.post('http://127.0.0.1:2100', {
  url: '/v1/group/get-group-members',
  params: {
    groupId: 1234567,
    groupCloudId: '12345123456',
    v: '0'
  }
}).then((res) => {
  console.log(res.data)
})
```

## 成功返回示例

```json
{
  "v": "0",
  "groupMemberInfo": [
    {
      "userId": 1234567,
      "groupRole": "GROUP_ROLE_OWNER",
      "userAvatar": "2617748225902147424",
      "userNick": "NG财高",
      "initialPinyin": "N",
      "groupMemberNick": "NG财高",
      "accountId": 0,
      "nimId": 2009362854,
      "isPretty": false,
      "vipLevel": "VL_VIP_4",
      "vipIcon": "0",
      "accountState": "ACCOUNT_STATE_GOOD",
      "entLevel": "ENT_LEVEL_0"
    },
    {
      "userId": 1234568,
      "groupRole": "GROUP_ROLE_ADMIN",
      "userAvatar": "3070549043284333880",
      "userNick": "狗子27二狗接单",
      "initialPinyin": "C",
      "groupMemberNick": "崔汐",
      "accountId": 0,
      "nimId": 1436936949,
      "isPretty": false,
      "vipLevel": "VL_VIP_3",
      "vipIcon": "0",
      "accountState": "ACCOUNT_STATE_GOOD",
      "entLevel": "ENT_LEVEL_0"
    },
    {
      "userId": 1234569,
      "groupRole": "GROUP_ROLE_ADMIN",
      "userAvatar": "8882753469592117555",
      "userNick": "狗子客服小柒",
      "initialPinyin": "G",
      "groupMemberNick": "郜古",
      "accountId": 0,
      "nimId": 1990739803,
      "isPretty": false,
      "vipLevel": "VL_VIP_3",
      "vipIcon": "0",
      "accountState": "ACCOUNT_STATE_GOOD",
      "entLevel": "ENT_LEVEL_0"
    }
  ],
  "groupCloudId": "12345123456",
  "groupAccount": "12345656",
  "isPretty": false
}
```

## 关键字段

| 字段 | 说明 |
| --- | --- |
| `groupMemberInfo` | 群成员列表 |
| `groupMemberInfo[].userId` | 成员用户 ID |
| `groupMemberInfo[].groupRole` | 成员群角色，如群主、管理员、普通成员 |
| `groupMemberInfo[].userNick` | 用户昵称 |
| `groupMemberInfo[].groupMemberNick` | 群昵称 |
| `groupMemberInfo[].nimId` | 即时通讯 NIM ID |
| `groupMemberInfo[].vipLevel` | 会员等级 |
| `groupMemberInfo[].accountState` | 账号状态 |
| `groupCloudId` | 当前群云 ID |
| `groupAccount` | 群账号标识 |

## 返回说明

- `groupMemberInfo` 数组中每一项代表一个群成员。
- `groupRole` 可用于区分群主、管理员和普通成员。
- 返回里同时带有 `groupCloudId` 和 `groupAccount`，便于后续继续调用群相关接口。
- 当前附带的 schema 校验内容与该接口返回结构不一致，像是其他接口的残留定义；实际解析请以本页的成功返回示例为准。

## 相关文档

- [开发文档](/usage)
- [获取群组信息](/get-group-info)
- [获取群组列表](/get-group-list)
