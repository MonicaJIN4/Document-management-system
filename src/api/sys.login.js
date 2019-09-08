import request from '@/plugin/axios'

export function AccountLogin (data) {
  return request({
    // url:'login',
    url: '/ultraman/user/login?code='+data.code+'&password='+data.password,
    method: 'get',
    data
  })
}
