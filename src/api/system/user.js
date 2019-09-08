import request from '@/plugin/axios'
// 系统管理：
//        用户管理

// 用户信息
export function List (data) {
  return request({
    url: '/ultraman/user/list',
    method: 'post',
    data
  })
}
// 用户信息分页
export function Page (data) {
  return request({
    url: '/ultraman/user/listByPage?page='+data.currentPage+'&rows='+data.pageSize,
    method: 'get',
    data
  })
}
// 删除用户信息
export function Del (data) {
  return request({
    url: '/ultraman/user/delete?id='+data,
    method: 'get',
    data
  })
}