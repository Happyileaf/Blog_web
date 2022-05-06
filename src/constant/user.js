/*
 * @Author: your name
 * @Date: 2022-03-04 15:31:18
 * @LastEditTime: 2022-05-06 11:33:44
 * @LastEditors: happy 997401767@qq.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_admin\src\constant\user.js
 */

export const USER_STATUS = [
  { key: 0, display_name: '冻结' },
  { key: 1, display_name: '激活' }
]

export const USER_STATUS_KV = KV(USER_STATUS)

export const education = [
  'Bachelor CMU',
  'Master CIT',
  'Dr MIT'
]
export const skills = [
  { name: 'HTML5', process: 60 },
  { name: 'CSS3', process: 60 },
  { name: 'Javascript', process: 60 }
]

export const socialAccount = [
  { platform: 'QQ', account: '123456', avatar: 'https://img2.baidu.com/it/u=2251201040,4120245779&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500' },
  { platform: 'WeChat', account: '123456', avatar: 'https://img2.baidu.com/it/u=2251201040,4120245779&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500' },
  { platform: 'Tictok', account: '123456', avatar: 'https://img2.baidu.com/it/u=2251201040,4120245779&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500' }]
export const userInfo = [{
  user_id: 20,
  username: 'Happy',
  roles: ['user'],
  status: 1,
  avatar: 'https://img2.baidu.com/it/u=2251201040,4120245779&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
  introduction: 'happy',
  company: 'microsoft',
  location: 'China',
  email: 'admin@test.com',
  website: 'admin@test.com',
  socialAccount: socialAccount,
  education: education,
  skills: skills
}]

function KV(obj) {
  return obj.reduce((acc, cur) => {
    acc[cur.key] = cur.display_name
    return acc
  }, {})
}
