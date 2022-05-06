/*
 * @Author: your name
 * @Date: 2022-02-26 19:20:13
 * @LastEditTime: 2022-05-04 09:52:22
 * @LastEditors: happy 997401767@qq.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_admin\src\utils\auth.js
 */
// import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}


