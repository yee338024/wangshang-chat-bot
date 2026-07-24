---
outline: deep
title: 获取群组列表
---

# 获取群组列表

用于通过本地 HTTP 协议获取当前账号的群组列表，包括自己创建的群和已加入的群。

## 接口信息

- 接口名称：`获取群组列表`
- 请求方式：`POST`
- 请求地址：`http://127.0.0.1:2100`
- 协议：`HTTP/1.1`
- 实际接口路径：`/v1/group/get-group-list`

> 注意：这个接口使用的是 `2100` 端口，不是前面常见的 `2123`。

## 请求示例

```json
{
  "url": "/v1/group/get-group-list"
}
```

## 请求参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `url` | `string` | 是 | 固定传 `/v1/group/get-group-list` |

## JavaScript 调用示例

```js
import axios from 'axios'

axios.post('http://127.0.0.1:2100', {
  url: '/v1/group/get-group-list'
}).then((res) => {
  console.log(res.data)
})
```

## 成功返回示例

```json
{
  "owner": [
    {
      "groupId": 1209672,
      "groupAvatar": "2063322584163870062",
      "groupName": "测试",
      "groupCloudId": "44195942511",
      "groupType": "COMMON",
      "groupState": "EXISTENCE",
      "groupAccount": "2516091539",
      "isPretty": false,
      "groupMemberNum": 3,
      "me": {
        "isMute": false,
        "muteEndTime": "0001-01-01T00:00:00Z",
        "role": "GROUP_ROLE_OWNER",
        "selfNickName": ""
      }
    }
  ],
  "member": [
    {
      "groupId": 1265636,
      "groupAvatar": "7490655477202900297",
      "groupName": "痕迹传媒zt55s.top",
      "groupCloudId": "40421609612",
      "groupType": "COMMON",
      "groupState": "EXISTENCE",
      "groupAccount": "8217931793",
      "isPretty": false,
      "groupMemberNum": 398,
      "me": {
        "isMute": false,
        "muteEndTime": "0001-01-01T00:00:00Z",
        "role": "GROUP_ROLE_MEMBER",
        "selfNickName": ""
      }
    }
  ],
  "v": "0",
  "vipLevel": "VL_VIP_0",
  "previousLevel": "VL_VIP_0",
  "vipExpireTime": "0",
  "freeActivationCount": 0,
  "freeActivationSupremeCount": 0
}
```

## 关键字段

| 字段 | 说明 |
| --- | --- |
| `owner` | 当前账号作为群主的群列表 |
| `member` | 当前账号作为成员加入的群列表 |
| `owner[].groupId` | 群组 ID |
| `owner[].groupName` | 群名称 |
| `owner[].groupMemberNum` | 群成员数量 |
| `owner[].me.role` | 当前账号在群中的角色 |
| `member[].me.isMute` | 当前账号在该群中是否被禁言 |
| `v` | 版本或状态标识 |
| `vipLevel` | 当前会员等级 |
| `freeActivationCount` | 免费激活次数 |

## 返回说明

- `owner` 和 `member` 分别表示“我创建的群”和“我加入的群”。
- 每个群对象里的 `me` 字段表示当前登录账号在该群里的状态。
- 这个接口返回里还包含会员等级和免费激活次数等附加信息。
- 当前附带的 schema 校验内容与该接口返回结构不一致，像是其他接口的残留定义；实际解析请以本页的成功返回示例为准。

## 相关文档

- [开发文档](/usage)
- [获取群组信息](/get-group-info)
