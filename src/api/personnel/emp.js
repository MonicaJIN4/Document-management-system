import request from '@/plugin/axios'
// 人事管理：
//        员工管理

// 员工信息
export function List (data) {
  return request({
    url: '/ultraman/emp/list',
    method: 'post',
    data
  })
}
// 员工信息分页
export function Page (data) {
  return request({
    url: '/ultraman/emp/listByPage?page='+data.currentPage+'&rows='+data.pageSize,
    method: 'get',
    data
  })
}
// 删除员工信息
export function Del (data) {
  return request({
    url: '/ultraman/emp/delete?id='+data,
    method: 'get',
    data
  })
}
// 按id查询
export function SearchById (id,data) {
  return request({
    url: '/ultraman/emp/findById?id='+id,
    method: 'get',
    data
  })
}