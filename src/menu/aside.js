// 菜单 侧边栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '人事管理',
    icon: 'folder-o',
    children: [
      { path: '/personnel/page1', title: '部门管理' },
      { path: '/personnel/page2', title: '员工管理' }
    ]
  },
  {
    title: '文档管理',
    icon: 'folder-o',
    children: [
      { path: '/document/page1', title: '文档管理' },
      { path: '/document/page2', title: '回收站' },
      { path: '/document/page3', title: '搜索' }
    ]
  },
  {
    title: '系统管理',
    icon: 'folder-o',
    children: [
      { path: '/system/page1', title: '角色管理' },
      { path: '/system/page2', title: '登录日志' },
      { path: '/system/page3', title: '菜单排序' },
      { path: '/system/page4', title: '操作日志' }
    ]
  }
]
