import request from '@/plugin/axios'
// 人事管理：
//        部门管理

// 部门信息
export function List (data) {
  return request({
    url: '/ultraman/dept/list',
    method: 'post',
    data
  })
}
// 部门信息分页
export function Page (data) {
  return request({
    url: '/ultraman/dept/listByPage?page='+data.currentPage+'&rows='+data.pageSize,
    method: 'get',
    data
  })
}
// 删除部门信息
export function Del (data) {
  return request({
    url: '/ultraman/dept/delete?id='+data,
    method: 'get',
    data
  })
}
// 增加部门信息
export function Add (data) {
  return request({
    url: '/ultraman/dept/save?dept_name='+data.dept_name+'&dept_masterid='+data.dept_masterid+'&dept_loc='+data.dept_loc,
    method: 'get',
    data
  })
}