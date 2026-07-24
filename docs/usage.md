---
outline: deep
title: 使用说明
---

# 使用说明

本文档介绍如何查看本地协议端口，以及如何通过 `HTTP` 和 `WebSocket` 接入旺商接口。

## 查看协议端口

打开软件后，在 `设置` -> `端口信息` 中查看当前端口：

- `HTTP 协议`：用于常规请求，例如发送消息、获取群组信息
- `WebSocket 协议`：用于接收新消息，包括群组消息和好友消息

![端口信息](/assets/active.png)

## HTTP 请求示例

下面是一个基础的请求方式，向本地协议服务发起调用：

```javascript
axios.post('http://127.0.0.1:2123', {
  url: '', // 这里填写旺商接口 URL
  params: {
    // 这里填写具体参数
  }
}).then((res) => {
  if (res.data.code && res.data.code !== 200) {
    // code 存在且不等于 200 时表示请求失败
    alert(res.data.msg)
  } else {
    console.log(res.data)
  }
})
```

### 调用说明

1. 请求地址中的 `2123` 需要替换为你在软件中看到的 `HTTP` 端口。
2. `url` 字段填写要调用的接口路径，例如 `/v1/group/get-group-list`。
3. `params` 字段填写该接口所需参数。

## 常用 HTTP 接口文档

- [发送好友文本信息](/send-friend-text-msg)
- [获取当前用户信息](/current-user)
- [获取应用设置](/query-app-settings)

## 好友接口文档

- [获取黑名单信息](/get-black-list-info)
- [获取好友信息](/get-friend-info)
- [拉黑好友](/friend-black-setting)
- [取消拉黑好友](/friend-black-cancel)

## 群聊接口文档

- [获取群公告列表](/get-group-notice-list)
- [发送群文本信息](/send-group-text-msg)
- [群禁言设置](/set-group-mute)
- [获取群成员列表](/get-group-members)
- [获取群组列表](/get-group-list)
- [获取群组信息](/get-group-info)
- [获取聊天室信息](/get-room)
- [群成员禁言](/group-member-mute)
- [群成员取消禁言](/group-member-mute-cancel)

## 旺商接口列表

以下为当前整理出的常用接口列表。理论上这些接口都可以调用，但部分接口的具体传参方式仍需结合实际调用或逆向结果确认。

::: details 展开查看接口列表
```javascript
{
  updateSession: "/v1/user/update-session",
  refreshToken: " /v1/user/RefreshToken",
  login: "/v1/user/login",
  logout: "/v1/user/logout",
  anonSendCode: "/v1/verify/sms-anon",
  loginDeviceChange: "/v1/user/login_device_change",
  sendCode: "/v1/verify/sms",
  register: "/v1/user/register",
  setAvatar: "/v1/settings/avatar",
  setSelfNickName: "/v1/settings/self-nick-name",
  queryAppSetting: "/v1/settings/query-app-settings",
  getReplyState: "/v1/user/get-auto-replies-online-state",
  setAutoReply: "/v1/settings/set-auto-reply",
  getSysSetting: "/v1/settings/get-system-setting",
  setRingP2p: "/v1/settings/ring-p2p",
  setRingGroup: "/v1/settings/ring-group",
  setNotifyState: "/v1/settings/set-notify-state",
  getFriendList: "/v1/friend/get-friend-list",
  setSessionTop: "/v1/settings/set-session-top",
  setAudioVideoChat: "/v1/settings/audio-video-chat",
  setFriendRTC: "/v1/user/set-friend-audio-video-chat",
  getFriendPermission: "/v1/user/get-friend-permission",
  setFriendPermission: "/v1/user/set-friend-permission",
  delFriend: "/v1/friend/del-friend",
  addBlack: "/v1/friend/friend-black-setting",
  modifyPwd: "/v1/settings/password",
  verify: "/v1/verify/verify",
  getChangeDevice: "v1/user/get-change-device-verify",
  getBlackList: "/v1/friend/get-black-list",
  setBlack: "/v1/friend/friend-black-setting",
  p2pSearch: "/v1/settings/p2p-search",
  p2pVerify: "/v1/settings/p2p-verify",
  groupVerify: "/v1/settings/group-verify",
  setFriendRemark: "/v1/friend/friend-set-remark",
  searchConversation: "/v1/friend/search-conversation",
  addFriendApply: "/v1/friend/add-friend-apply",
  getFriendApplyList: "/v1/friend/friend-apply-list",
  dealFriendApply: "/v1/friend/friend-apply-handler",
  addFriendClass: "/v1/friend/add-friend-class",
  delFriendClass: "/v1/friend/del-friend-class",
  getFriendClass: "/v1/friend/get-friend-class",
  updateFriendClass: "/v1/friend/update-friend-class",
  setFriendClass: "/v1/friend/friend-set-class",
  setFriendTop: "/v1/friend/set-friend-top",
  setBackground: "/v1/friend/set-background",
  setFriendNotice: "/v1/friend/set-friend-notice",
  getSensitiveWords: "/v1/settings/get-sensitive-words",
  getFriendInfo: "/v1/friend/get-friend-info",
  createGroup: "/v1/group/create",
  getGroupInfoLite: "/v1/group/GetGroupInfoLite",
  searchGroup: "/v1/group/SearchGroup",
  dismissGroup: "/v1/group/group-dismiss",
  getTopNotice: "/v1/group/top-notice",
  addGroupNotice: "/v1/group/add-notice",
  updateGroupNotice: "/v1/group/notice-opt",
  delGroupNotice: "/v1/group/notice-del",
  getNoticeList: "/v1/group/notice-list",
  getNoticeInfo: "/v1/group/notice-info",
  getNoiceReaderList: "/v1/group/notice-reader-list",
  setNoticeRead: "/v1/group/set-notice-read",
  getGroupInfo: "/v1/group/get-group-info",
  addGroupManage: "/v1/group/add-group-manage",
  delGroupManage: "/v1/group/del-group-manage",
  addGroupMember: "/v1/group/add-group-member",
  removeGroupMember1: "/v1/group/del-group-member-through-chat",
  removeGroupMember: "/v1/group/remove-group-member",
  removeMemberInGroup: "/v1/group/remove-member-in-group",
  removeManagerInGroup: "/v1/group/remove-manager-in-group",
  getGroupMembers: "/v1/group/get-group-members",
  getGroupMemberInfo: "/v1/group/get-group-member-info",
  applyJoinGroup: "/v1/group/apply-join-group",
  getGroupApplyList: "/v1/group/get-group-apply-list",
  SetGroupTop: "/v1/group/SetGroupTop",
  setGroupShake: "/v1/group/set-group-shake",
  setGroupMute: "/v1/group/set-group-mute",
  setMemberRemark: "/v1/group/set-member-remark",
  setGroupRemark: "/v1/group/set-group-remark",
  setGroupAvatar: "/v1/group/set-group-avatar",
  setGroupName: "/v1/group/set-group-name",
  setMemberNickname: "/v1/group/set-member-nickname",
  setNoticeMode: "/v1/group/set-notice-mode",
  getApplyLogs: "/v1/group/get-apply-logs",
  groupMemberInvite: "/v1/group/group-member-invite",
  groupManageApply: "/v1/group/group-manage-apply",
  groupUpdate: "/v1/group/group-upgrade",
  getNimGroup: "/v1/group/get-nim-group",
  getNimUserGroups: "/v1/group/get-nim-user-groups",
  groupTransfer: "/v1/group/group-transfer",
  getGroupHistoryMessage: "/v1/group/get-group-history-message",
  getGroupList: "/v1/group/get-group-list",
  setNicknameMode: "/v1/group/set-nickname-mode",
  setEnterLimit: "/v1/group/set-enter-limit",
  setFileMode: "/v1/group/set-file-mode",
  setGroupCallChat: "/v1/group/set-audio-video-chat",
  setCheckWordMode: "/v1/group/set-check-word-mode",
  setMemberMute: "/v1/group/set-member-mute",
  memberNuteCancel: "/v1/group/member-mute-cancel",
  SetGroupMemberUnMute: "/v1/group/SetGroupMemberUnMute",
  setSearchMode: "/v1/group/set-search-mode",
  setPrivateChat: "/v1/group/set-private-chat",
  leaveGroup: "/v1/group/leave-group",
  setRedEnvelopeSettings: "/v1/group/set-red-envelope-settings",
  getGid: "/v1/group/get-gid",
  getGroupMembership: "/v1/group/get-group-membership",
  groupInfoText: "/v1/group/group-info-ext",
  getEnterLimit: "/v1/group/get-enter-limit",
  getGroupInfoService: "/v1/group/get-group-info-service",
  updateGroupUserMuteService: "/v1/group/update-group-user-mute-service",
  messageRollback: "/v1/group/message-rollback",
  GetGroupCloudForService: "/v1/group/GetGroupCloudForService",
  groupNumLimit: "/v1/group/group-num-limit",
  groupHelperList: "/v1/group/group-helper-list",
  activationSuperGroup: "/v1/group/activation-supergroup",
  groupExist: "/v1/group/exist",
  getGroupByAccount: "/v1/group/get-group-by-account",
  userExistGroup: "/v1/group/user-exist-group",
  delApplyLogs: "/v1/group/del-apply-logs",
  getGroupQrcode: "/v1/qr-code/get-qrcode",
  groupMuteMember: "/v1/plugins/group-mute-member",
  getLineGroup: "/v1/settings/get-line-group",
  imageCheck: "/v1/user/image-check",
  addCollect: "/v1/collect/add-collect",
  delCollect: "/v1/collect/del-collect",
  getCollects: "/v1/collect/get-collects",
  stickerSets: "/v1/user/sticker-sets",
  getStickerInfo: "/v1/user/get-sticker-set-info",
  addSticker: "/v1/user/add-sticker-set",
  delSticker: "/v1/user/del-sticker-set",
  stickerSetAdds: "/v1/user/sticker-set-adds",
  addStickerCollect: "/v1/user/add-sticker-collect",
  stickerCollects: "/v1/user/sticker-collects",
  delStickerCollect: "/v1/user/del-sticker-collects",
  moveStickerCollect: "/v1/user/collected-sticker-move-to-first",
  getReportDetail: "/v1/report/get-report-detail",
  setSessionHide: "/v1/settings/set-session-hide",
  getMomentSetting: "/v1/settings/get-moment-setting",
  changeMomentBg: "/v1/settings/change-moment-setting-background",
  addFeed: "/v1/moment/add_feed",
  delFeed: "/v1/moment/del_feed",
  addComment: "/v1/moment/add_comment",
  delComment: "/v1/moment/del_comment",
  addLike: "/v1/moment/add_like",
  delLike: "/v1/moment/del_like",
  updateFeedAuth: "/v1/moment/update_feed_auth",
  updateFeedAuthorize: "/v1/moment/update_feed_authorize",
  updateMomentAuth: "/v1/moment/update_moment_auth",
  clearCommentMsg: "/v1/moment/clear_comment_msgs",
  setBgPhoto: "/v1/moment/set_bg_photo",
  incrFeedCount: "/v1/moment/incr_feed_count",
  getMomentAuth: "/v1/moment/get_moment_auth",
  getUnreadInfo: "/v1/moment/get_unread_info",
  getFeeds: "/v1/moment/get_feeds",
  getUserFeeds: "/v1/moment/get_user_feeds",
  getFeed: "/v1/moment/get_feed",
  getFeedActuralAuthFriends: "/v1/moment/get_feed_actual_auth_friends",
  getCommentMsgs: "/v1/moment/get_comment_msgs",
  getLastFeedPhotos: "/v1/moment/get_last_feed_photos",
  setMomentConfig: "/v1/moment/set_moment_config",
  pinFeed: "/v1/moment/pin_feed",
  getOfficicalFeedDraft: "/v1/moment/get_official_feed_draft",
  saveOfficicalFeedDraft: "/v1/moment/save_official_feed_draft",
  pubOfficialFeed: "/v1/moment/pub_official_feed",
  getVipPrivilege: "/v1/vip/get-vip-privilege",
  prettyNumberNotifyInfo: "/v1/user/pretty-number-notify-info",
  addToGroupHelper: "/v1/settings/add-to-group-helper",
  delFromGroupHelper: "/v1/settings/del-from-group-helper",
  setGroupHelperState: "/v1/settings/set-group-helper-state",
  groupHelpList: "/v1/group/group-helper-list",
  getSysNoticeList: "v1/notice/get_notice_list",
  getRtcNewRoom: "/v1/rtc/new_room",
  getRtcRoom: "/v1/rtc/get_room",
  getRoomToken: "/v1/rtc/get_room_token",
  delRtcRoom: "/v1/rtc/del_room",
  delRoomMember: "/v1/rtc/del_room_member",
  setRoomMemberForbid: "v1/rtc/set_room_member_forbid",
  handleNotify: "v1/rtc/handle_notify",
  getUserAudioVideoState: "v1/rtc/get_user_audio_video_state",
  startScreenShare: "v1/rtc/start_room_screen_share",
  closeScreenShare: "v1/rtc/close_room_screen_share",
  getScreenShare: "v1/rtc/get_room_screen_share",
  setGroupTopMsg: "v1/group/set-group-top-msg",
  removeGroupTopMsg: "v1/group/remove-group-top-msg",
  getEnterpriseOwner: "/v1/enterprise/get_owner",
  getEnterpriseGoods: "/v1/enterprise/get_goods",
  addEnterpriseOrder: "/v1/enterprise/add_order",
  getStaffList: "/v1/enterprise/get_staffs",
  addStaff: "/v1/enterprise/add_staff",
  delStaff: "/v1/enterprise/del_staff",
  getSummary: "/v1/enterprise/get_summary",
  getSummaryFieldSorts: "/v1/enterprise/get_summary_field_sorts",
  updateSummaryFieldSort: "/v1/enterprise/update_summary_field_sort",
  getStaffSummary: "/v1/enterprise/get_staff_summary",
  getStaffChats: "/v1/enterprise/get_staff_chats",
  getStaffChatMsgs: "/v1/enterprise/get_staff_chat_msgs",
  getBindOrders: "/v1/enterprise/get_bind_orders",
  updateBindOrder: "/v1/enterprise/update_bind_order",
  activeStaff: "/v1/enterprise/active_staff",
  getAgreement: "/v1/settings/get-agreement"
}
```
:::

## WebSocket 协议

`WebSocket` 协议用于接收聊天消息推送，当前已经补充为独立文档页，包含连接地址、事件类型与完整消息示例：

- [WebSocket 文档](/websocket)

当前主要事件：

1. `new-msg`：好友消息
2. `new-team-msg`：群组消息

最小事件结构如下：

```json
{
  "event": "new-msg",
  "payload": {
    "scene": "0",
    "to": "1941814041",
    "from": "1411312758",
    "fromClientType": "1"
  }
}
```
