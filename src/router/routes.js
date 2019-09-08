import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

/**
 * 在主框架内显示
 */
const frameIn = [
  {
    path: '/',
    redirect: { name: 'index' },
    component: layoutHeaderAside,

    children: [ 
      // 首页
      {
        path: 'index',
        name: 'index',
        meta: {
          auth: true
        },
        component: _import('main/index')
      },
      // 演示页面--人事管理
      {
        path: 'personnel/page1',
        name: 'page1',
        meta: {
          title: '部门管理',
          auth: true
        },
        component: _import('personnel/page1')
      },
      {
        path: 'personnel/page2',
        name: 'page2',
        meta: {
          title: '员工管理',
          auth: true
        },
        component: _import('personnel/page2')
      },
      // 演示页面--文档管理
      {
        path: 'document/page1',
        name: 'page3',
        meta: {
          title: '文档管理',
          auth: true
        },
        component: _import('document/page1')
      },
      {
        path: 'document/page2',
        name: 'page4',
        meta: {
          title: '回收站',
          auth: true
        },
        component: _import('document/page2')
      },
      {
        path: 'document/page3',
        name: 'page5',
        meta: {
          title: '搜索',
          auth: true
        },
        component: _import('document/page3')
      },
       // 演示页面--系统管理
      {
        path: 'system/page1',
        name: 'page6',
        meta: {
          title: '角色管理',
          auth: true
        },
        component: _import('system/page1')
      },
      {
        path: 'system/page2',
        name: 'page7',
        meta: {
          title: '登录日志',
          auth: true
        },
        component: _import('system/page2')
      },
      {
        path: 'system/page3',
        name: 'page8',
        meta: {
          title: '菜单排序',
          auth: true
        },
        component: _import('system/page3')
      },
      {
        path: 'system/page4',
        name: 'page9',
        meta: {
          title: '操作日志',
          auth: true
        },
        component: _import('system/page4')
      },
      // 系统 前端日志
      {
        path: 'log',
        name: 'log',
        meta: {
          title: '前端日志',
          auth: true
        },
        component: _import('main/log')
      },
      // 刷新页面 必须保留
      {
        path: 'refresh',
        name: 'refresh',
        hidden: true,
        component: _import('main/function/refresh')
      },
      // 页面重定向 必须保留
      {
        path: 'redirect/:route*',
        name: 'redirect',
        hidden: true,
        component: _import('main/function/redirect')
      }
    ]
  }
]

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登录
  {
    path: '/login',
    name: 'login',
    component: _import('main/login')
  },
  // 注册
  {
    path: '/register',
    name: 'register',
    component: _import('main/register')
  }
]

/**
 * 错误页面
 */
const errorPage = [
  {
    path: '*',
    name: '404',
    component: _import('main/error/404')
  }
]

// 导出需要显示菜单的
export const frameInRoutes = frameIn

// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut,
  ...errorPage
]
