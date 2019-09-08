import request from '@/plugin/axios'
// 系统管理：
//        日志管理

// 日志信息
export function List (data) {
  return request({
    url: '/ultraman/log/list',
    method: 'post',
    data
  })
}
// 日志信息分页
export function Page (data) {
  return request({
    url: '/ultraman/log/listByPage?page='+data.currentPage+'&rows='+data.pageSize,
    method: 'get',
    data
  })
}
// 删除日志信息
export function Del (data) {
  return request({
    url: '/ultraman/log/delete?id='+data,
    method: 'get',
    data
  })
}
