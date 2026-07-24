---
outline: deep
title: 获取应用设置
---

# 获取应用设置

用于通过本地 HTTP 协议获取当前账号的应用设置、消息策略、隐私开关以及系统限制配置。

## 接口信息

- 接口名称：`获取应用设置`
- 请求方式：`POST`
- 请求地址：`http://127.0.0.1:2123`
- 协议：`HTTP/1.1`
- 实际接口路径：`/v1/settings/query-app-settings`

## 请求示例

该接口无需额外参数，请求体中只需要传入目标接口路径。

```json
{
  "url": "/v1/settings/query-app-settings"
}
```

## 请求参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `url` | `string` | 是 | 固定传 `/v1/settings/query-app-settings` |

## JavaScript 调用示例

```js
import axios from 'axios'

axios.post('http://127.0.0.1:2123', {
  url: '/v1/settings/query-app-settings'
}).then((res) => {
  console.log(res.data)
})
```

## 成功返回示例

```json
{
  "profiles": {
    "base": {
      "gender": "GENDER_UNKNOWN",
      "birthday": "1970-01-01T00:00:00Z",
      "address": {
        "country": "",
        "province": "",
        "area": "",
        "city": "",
        "line1": "",
        "line2": ""
      },
      "description": "",
      "explain": ""
    },
    "legal": {
      "docs": []
    },
    "ring": {
      "notify": true,
      "p2p": true,
      "group": true,
      "voice": ""
    },
    "custom": {
      "custom": {}
    }
  },
  "p2pMessage": {
    "map": {}
  },
  "groupMessage": {
    "map": {}
  },
  "top": {},
  "p2pNick": {
    "arr": {
      "1338701480": "大蛇",
      "1411312758": "？？？"
    }
  },
  "friendClass": {
    "arr": []
  },
  "friendMap": {
    "userData": {}
  },
  "groupSetting": {
    "groupRemark": {},
    "memberRemark": {}
  },
  "uid": 5116872,
  "nickName": "Y",
  "avatar": "0",
  "group": true,
  "qrCode": true,
  "idCard": true,
  "communication": true,
  "searchableAccount": true,
  "searchableMobile": false,
  "onlinePolicy": "ONLINE_POLICY_ON",
  "friendPolicy": "FRIEND_NEED_APPROVAL",
  "merchantGroupPolicy": "MERCHANT_GROUP_OFF",
  "groupInvitationPolicy": "GROUP_ASK_JOIN",
  "isAutoReply": false,
  "replyMsg": "selectIdx:1 content:{key:1 value:\"你好，稍等一会儿，马上回来！\"} content:{key:2 value:\"工作中，请勿打扰。\"} content:{key:3 value:\"我去吃饭了，一会儿再联系\"}",
  "groupShakes": {},
  "onlineState": "ONLINE_STATE_ONLINE",
  "friendDisturb": {
    "arr": {}
  },
  "notShakeState": false,
  "v": "0",
  "momentSetting": {
    "background": "0"
  },
  "sessionHide": {},
  "groupHelperSetting": null,
  "isTempChat": true,
  "groupHelperState": true,
  "forbidAddFriend": false,
  "noticeDisturb": {
    "arr": {}
  },
  "customerServiceDisturb": {
    "arr": {}
  },
  "isReadUnderageConsumptionReminder": false,
  "sysSetting": {
    "createGroupLimit": 1,
    "joinGroupLimit": 100,
    "friendClassLimit": 16,
    "commonGroupLimit": 500,
    "supperGroupLimit": 2000,
    "supremeGroupLimit": 5000,
    "commonGroupAdminLimit": 10,
    "supperGroupAdminLimit": 20,
    "supremeGroupAdminLimit": 20,
    "friendNum": 2000
  },
  "cardNo": "",
  "realName": "",
  "securityEducationPopup": false,
  "certStatus": "WOA_STATUS_UNKNOWN",
  "isCertExpired": false,
  "iosReviewConfig": "C_DISABLED",
  "generalBg": "0",
  "momentConfig": {
    "uid": 5116872,
    "feedTtl": 0,
    "pinnedFids": []
  },
  "audioVideoOpen": false
}
```

## 关键字段

| 字段 | 说明 |
| --- | --- |
| `profiles.ring.notify` | 是否开启通知提醒 |
| `profiles.ring.p2p` | 是否开启私聊铃声 |
| `profiles.ring.group` | 是否开启群聊铃声 |
| `searchableAccount` | 是否允许通过账号搜索 |
| `searchableMobile` | 是否允许通过手机号搜索 |
| `onlinePolicy` | 在线状态策略 |
| `friendPolicy` | 加好友策略 |
| `groupInvitationPolicy` | 群邀请策略 |
| `isAutoReply` | 是否开启自动回复 |
| `replyMsg` | 自动回复内容配置 |
| `onlineState` | 当前在线状态 |
| `groupHelperState` | 群助手开关 |
| `sysSetting.friendNum` | 好友数量上限 |
| `sysSetting.commonGroupLimit` | 普通群人数上限 |
| `audioVideoOpen` | 音视频开关状态 |

## 返回说明

- `profiles` 下包含基础资料、合法资料、铃声配置和自定义配置。
- `p2pNick.arr` 保存私聊备注昵称映射。
- `groupSetting` 中保存群备注和群成员备注信息。
- `sysSetting` 中是各类系统限制和容量配置，适合做客户端能力判断。
- 当前附带的 schema 校验内容与该接口返回结构不一致，像是其他接口的残留定义；实际解析请以本页的成功返回示例为准。

## 相关文档

- [开发文档](/usage)
- [获取当前用户信息](/current-user)
- [WebSocket 文档](/websocket)
