---
outline: deep
title: 获取群组信息
---

# 获取群组信息

用于通过本地 HTTP 协议查询指定群组的详细信息和当前用户在群内的状态。

## 接口信息

- 接口名称：`获取群组信息`
- 请求方式：`POST`
- 请求地址：`http://127.0.0.1:2123`
- 协议：`HTTP/1.1`
- 实际接口路径：`/v1/group/get-group-info`

## 请求示例

```json
{
  "url": "/v1/group/get-group-info",
  "params": {
    "groupId": 14257,
    "v": "0"
  }
}
```

## 请求参数

### 顶层参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `url` | `string` | 是 | 固定传 `/v1/group/get-group-info` |
| `params` | `object` | 是 | 接口业务参数 |

### `params` 参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `groupId` | `number` | 是 | 群组 ID |
| `v` | `string` | 否 | 版本标识，示例值为 `0` |

## JavaScript 调用示例

```js
import axios from 'axios'

axios.post('http://127.0.0.1:2123', {
  url: '/v1/group/get-group-info',
  params: {
    groupId: 14257,
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
  "groupInfo": {
    "name": "xxx群",
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
| `groupInfo.name` | 群名称 |
| `groupInfo.groupId` | 群组 ID |
| `groupInfo.memberCount` | 群成员数量 |
| `groupInfo.groupMuteMode` | 群禁言模式 |
| `groupInfo.groupPrivateChat` | 是否允许群内私聊 |
| `groupInfo.fileMode` | 是否允许文件功能 |
| `groupInfo.nicknameMode` | 是否开启群昵称模式 |
| `me.role` | 当前账号在群内角色 |
| `me.isMute` | 当前账号是否被禁言 |
| `delNoticeIds` | 已删除的群公告 ID 列表 |

## 返回说明

- `groupInfo` 中包含群基础资料、入群限制、文件模式、昵称模式等群设置。
- `me` 字段表示当前登录账号在该群中的状态，而不是任意群成员状态。
- 当前附带的 schema 校验内容与该接口返回结构不一致，像是其他接口的残留定义；实际解析请以本页的成功返回示例为准。

## 相关文档

- [开发文档](/usage)
- [获取聊天室信息](/get-room)
- [群成员禁言](/group-member-mute)
