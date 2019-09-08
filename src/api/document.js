import request from '@/plugin/axios'

// 文档管理主目录（树形结构）
export function List (data) {
  return request({
    url: '/ultraman/fileInfo/tree',
    method: 'post',
    data
  })
}
// 传入文件夹Id，返回该文件的子文件（文件夹）
export function SearchSubFile (id,data) {
  return request({
    url: '/ultraman/fileInfo/subFile?id='+id,
    method: 'get',
    data
  })
}
// 传入文件id，自动下载该文件
export function Download (data) {
  return request({
    url: '/ultraman/fileInfo/download?id='+data,
    method: 'get',
    data
  })
}
// 传入文件信息Id，返回该文件的路径
export function SearchFile (id,data) {
  return request({
    url: '/ultraman/fileInfo/filePathById?id='+id,
    method: 'get',
    data
  })
}
// 文档管理中的删除
export function DocDel (formData) {
  return request({
    url: '/ultraman/fileInfo/toRecycled?fileId='+formData,
    method: 'get',
    formData
  })
}


// 回收站中的删除
export function RecDel (data) {
  return request({
    url: '/ultraman/fileInfo/deleteFile?fileId='+data,
    method: 'get',
    data
  })
}
// 回收站中的复原
export function RecReturn (data) {
  return request({
    url: '/ultraman/fileInfo/leaveRecycled?fileId='+data,
    method: 'get',
    data
  })
}
// 显示回收站
export function Show (data) {
  return request({
    url: '/ultraman/fileInfo/showRecycled',
    method: 'post',
    data
  })
}