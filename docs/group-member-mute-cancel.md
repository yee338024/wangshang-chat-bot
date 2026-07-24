---
outline: deep
title: 群成员取消禁言
---

# 群成员取消禁言

用于通过本地 HTTP 协议取消指定群成员的禁言状态。

## 接口信息

- 接口名称：`群成员取消禁言`
- 请求方式：`POST`
- 请求地址：`http://127.0.0.1:2123`
- 协议：`HTTP/1.1`
- 实际接口路径：`/v1/group/member-mute-cancel`

## 请求示例

```json
{
  "url": "/v1/group/member-mute-cancel",
  "params": {
    "groupId": 14257,
    "userId": 123
  }
}
```

## 请求参数

### 顶层参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `url` | `string` | 是 | 固定传 `/v1/group/member-mute-cancel` |
| `params` | `object` | 是 | 接口业务参数 |

### `params` 参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `groupId` | `number` | 是 | 群组 ID |
| `userId` | `number` | 是 | 需要取消禁言的用户 ID |

## JavaScript 调用示例

```js
import axios from 'axios'

axios.post('http://127.0.0.1:2123', {
  url: '/v1/group/member-mute-cancel',
  params: {
    groupId: 14257,
    userId: 123
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
    "name": "群名称",
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
  "selfNickName": "群主昵称",
  "me": {
    "isMute": false,
    "muteEndTime": null,
    "role": "GROUP_ROLE_MEMBER",
    "selfNickName": "群主昵称",
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
| `v` | 版本或状态标识，示例为 `0` |
| `groupInfo.groupId` | 群组 ID |
| `groupInfo.groupMuteMode` | 群禁言模式 |
| `groupInfo.memberCount` | 群成员数量 |
| `me.isMute` | 当前账号在群内是否处于禁言状态 |
| `me.muteEndTime` | 当前账号禁言结束时间 |
| `me.role` | 当前账号在群内角色 |
| `delNoticeIds` | 已删除的群公告 ID 列表 |

## 返回说明

- 成功后返回最新的群信息、当前用户在群内状态以及公告相关数据。
- `me.isMute` 为 `false` 时，可理解为当前示例里禁言状态已解除。
- 当前附带的 schema 校验内容与该接口返回结构不一致，像是其他接口的残留定义；实际解析请以本页的成功返回示例为准。

## 相关文档

- [开发文档](/usage)
- [获取应用设置](/query-app-settings)
