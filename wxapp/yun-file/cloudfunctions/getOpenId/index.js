// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  // 默认是 open-id 单一，
  console.log(event.userInfo);
  return event.userInfo;
}