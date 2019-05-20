// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const got = require('got')
let appid = 'wxf7aaa7c8e3830690';
let secret = '244a03c994c602d37d262e2e70d68184';
let msgCheckUrl = 'https://api.weixin.qq.com/wxa/msg_sec_check?access_token=';
// 云函数入口函数
let tokenUrl = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid= ' + appid + '&secret' + secret;
// https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxf7aaa7c8e3830690&secret=244a03c994c602d37d262e2e70d68184
exports.main = async (event, context) => {
  //令牌许可
  // let tokenResponse = await got(tokenUrl);
  // console.log(tokenResponse);
  // let token = JSON.parse(tokenResponse.body).access_token;
  // console.log(token);
  // let checkResponse = await got(msgCheckUrl + token,{
  //   body: JSON.stringify({
  //     content:event.text
  //   })
  // });
  // console.log(checkResponse)
  // return checkResponse.body;
  return event.a + event.b;
}