import { $get, $post } from './https';
let api = 'http://192.168.37.39:3000';

// 手机登录
export function telLogin(phone, password) {
    return $post(api, { phone: phone, password })
}
// 发送手机二维码
export function sendCode(phone) {
    return $post(api + '/captcha/sent', { phone, phone })
}