---
outline: deep
title: 群成员禁言
---

# 群成员禁言

用于通过本地 HTTP 协议对指定群成员执行禁言操作。

## 接口信息

- 接口名称：`群成员禁言`
- 请求方式：`POST`
- 请求地址：`http://127.0.0.1:2123`
- 协议：`HTTP/1.1`
- 实际接口路径：`/v1/group/set-member-mute`

## 请求示例

```json
{
  "url": "/v1/group/set-member-mute",
  "params": {
    "groupId": 14257,
    "userId": 123,
    "min": 60
  }
}
```

## 请求参数

### 顶层参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `url` | `string` | 是 | 固定传 `/v1/group/set-member-mute` |
| `params` | `object` | 是 | 接口业务参数 |

### `params` 参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `groupId` | `number` | 是 | 群组 ID |
| `userId` | `number` | 是 | 需要禁言的用户 ID |
| `min` | `number` | 是 | 禁言时长，单位为分钟 |

## JavaScript 调用示例

```js
import axios from 'axios'

axios.post('http://127.0.0.1:2123', {
  url: '/v1/group/set-member-mute',
  params: {
    groupId: 14257,
    userId: 123,
    min: 60
  }
}).then((res) => {
  console.log(res.data)
})
```

## 成功返回示例

```json
{
  "v": "0",
  "groupInfo": {
    "name": "NG狗子群恶狗争霸赛",
    "qrCode": "0",
    "ty": "BUSINESS",
    "state": "EXISTENCE",
    "memberCount": 919,
    "avatar": "9088350867446423082",
    "desc": "",
    "groupAccount": "6244435627",
    "noticeSetting": {
      "topId": "0",
      "newId": "0"
    },
    "groupId": 14257,
    "groupCloudId": "12055725493",
    "groupSalt": "0",
    "groupMuteMode": "MUTE_MEMBER",
    "groupPrivateChat": false,
    "expireTime": "2024-02-10T01:49:06Z",
    "fileMode": true,
    "nicknameMode": true,
    "wordCheck": true,
    "limitType": "NEED",
    "enterSource": {
      "byGroupId": true,
      "byScanCode": true,
      "byInvite": true,
      "byGroupName": true
    },
    "createdAt": "2022-09-04T18:44:15Z",
    "isPretty": false,
    "groupProtect": false,
    "GroupAvChatMode": true,
    "topContent": ""
  },
  "selfNickName": "潘适",
  "me": {
    "isMute": false,
    "muteEndTime": null,
    "role": "GROUP_ROLE_MEMBER",
    "selfNickName": "潘适",
    "groupType": "COMMON"
  },
  "delNoticeIds": [
    "519",
    "30347",
    "120122",
    "120168",
    "150301",
    "150383",
    "180072",
    "210105",
    "210345",
    "210420",
    "240302",
    "751681",
    "874867"
  ],
  "topContent": ""
}
```

## 关键字段

| 字段 | 说明 |
| --- | --- |
| `params.groupId` | 群组 ID |
| `params.userId` | 目标群成员 ID |
| `params.min` | 禁言时长，单位分钟 |
| `groupInfo.groupMuteMode` | 群禁言模式 |
| `groupInfo.memberCount` | 群成员数量 |
| `me.role` | 当前账号在群内角色 |
| `delNoticeIds` | 已删除的群公告 ID 列表 |

## 返回说明

- 成功后返回最新的群信息、当前用户在群内状态以及公告相关数据。
- 这份示例返回里 `me.isMute` 显示的是当前账号状态，并不直接表示目标成员的禁言结果；目标成员是否已禁言建议以实际群状态或后续查询接口结果为准。
- 当前附带的 schema 校验内容与该接口返回结构不一致，像是其他接口的残留定义；实际解析请以本页的成功返回示例为准。

## 相关文档

- [开发文档](/usage)
- [群成员取消禁言](/group-member-mute-cancel)
