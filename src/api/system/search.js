import request from '@/plugin/axios'
// 系统管理：
//        搜索

export function Search (filename,type,owner,data) {
  return request({
    url: '/ultraman/fileInfo/queryFile?fileType='+type+'&fileName='+filename+'&fileOwner='+owner,
    method: 'get',
    data
  })
}