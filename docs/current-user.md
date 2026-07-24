---
outline: deep
title: 获取当前用户信息
---

# 获取当前用户信息

用于通过本地 HTTP 协议获取当前登录账号的完整资料信息。

## 接口信息

- 接口名称：`获取当前用户信息`
- 请求方式：`POST`
- 请求地址：`http://127.0.0.1:2123`
- 协议：`HTTP/1.1`
- 实际接口路径：`/v1/current-user`

## 请求示例

该接口无需额外参数，请求体中只需要传入目标接口路径。

```json
{
  "url": "/v1/current-user"
}
```

## 请求参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `url` | `string` | 是 | 固定传 `/v1/current-user` |

## JavaScript 调用示例

```js
import axios from 'axios'

axios.post('http://127.0.0.1:2123', {
  url: '/v1/current-user'
}).then((res) => {
  console.log(res.data)
})
```

## 成功返回示例

```json
{
  "uid": 5116872,
  "nickName": "Y",
  "avatar": "0",
  "nimId": 1941814041,
  "nimToken": "aAPOu3vARB4ZOSrhm3YBX7FCg-cRRY2Q-zfSv03B10E",
  "accountId": 467179336,
  "token": "9Nl0JUXRG6WOnkhjzO6ma9-wUU2gyL_ak5ZvkS722VOV59Ansuf7ztDACLzgyTaH1xgFjXeDxPEQNWNQZnoGrFM7HIlCS0gSV3_kXhTjMWJFZtgasasmo-dD7N2HgRJ6rCUsfF54xH8hDWmoWWCvkYqS3fmupz2m8R4SIxFSO8pjayNoEof1noI",
  "accountState": "ACCOUNT_STATE_GOOD",
  "accountType": "ACCOUNT_MEMBER",
  "phone": {
    "countryCode": 86,
    "nationalNumber": "18359691755",
    "maskedNationalNumber": "183*****755"
  },
  "email": "",
  "isPretty": false,
  "userPrettyIcon": "2326811774861881283",
  "groupPrettyIcon": "4760560110923308736",
  "level": "VL_VIP_0",
  "vipIcon": "0",
  "vipExpireTime": "0",
  "vipBackgroundImage": "0",
  "shopDiscountRatio": 0,
  "isBan": false,
  "banTime": 0,
  "banReason": "",
  "banTempId": "0",
  "banTempKey": "",
  "isAppealed": false,
  "customerServerNimId": 0,
  "jwtToken": "CAEQyKe4AhgJIJW40yYowJf3wfbg_ukU.VhdgW6-W6L9EsWcYtaAv4iAExvlDugal9_Wa3amZfWdZyWCJi6MO8OXMaWan4lWKEQrF4U5t73cjY2f3mZJIDg",
  "groupId": 0,
  "groupToken": "",
  "key": "",
  "entLevel": "ENT_LEVEL_0",
  "entIcon": "0",
  "entExpireTime": "0"
}
```

## 关键字段

| 字段 | 说明 |
| --- | --- |
| `uid` | 当前用户 UID |
| `nickName` | 当前用户昵称 |
| `avatar` | 头像标识 |
| `nimId` | 即时通讯账号 ID |
| `nimToken` | 即时通讯令牌 |
| `accountId` | 账户 ID |
| `token` | 当前账号业务令牌 |
| `accountState` | 账号状态 |
| `accountType` | 账号类型 |
| `phone.maskedNationalNumber` | 脱敏手机号 |
| `level` | 会员等级 |
| `jwtToken` | JWT 令牌 |

## 返回说明

- `phone` 字段包含国家码、原始手机号和脱敏手机号。
- `nimToken`、`token`、`jwtToken` 均属于敏感登录凭据，接入时建议仅服务端使用，不要暴露到前端页面。
- 当前附带的 schema 校验内容与该接口返回结构不一致，像是其他接口的残留定义；实际解析请以本页的成功返回示例为准。

## 相关文档

- [开发文档](/usage)
- [发送好友文本信息](/send-friend-text-msg)
- [WebSocket 文档](/websocket)
