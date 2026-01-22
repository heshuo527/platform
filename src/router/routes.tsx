import type { RouteObject } from 'react-router-dom'
import { AreaChartOutlined, UserOutlined } from '@ant-design/icons'
import React, { lazy } from 'react'

export type AppRouteObject = RouteObject & {
  meta?: {
    title?: string
    icon?: React.ReactNode
    hidden?: boolean
  }
  children?: AppRouteObject[]
}

const BlankLayout = lazy(() => import('@/Layout/BlankLayout'))
const BaseLayout = lazy(() => import('@/Layout/BaseLayout'))
const Login = lazy(() => import('@/Login'))
const Dashboard = lazy(() => import('@/pages/Dashboard'))
const User = lazy(() => import('@/pages/user'))
const AuthGuard = lazy(() => import('@/Layout/AuthGuard'))

export const routes: AppRouteObject[] = [
  {
    element: <BlankLayout />,
    children: [
      {
        path: '/login',
        element: <Login />,
        meta: {
          hidden: true,
        },
      },
    ],
  },
  {
    element: <AuthGuard />,
    children: [
      {
        element: <BaseLayout />,
        children: [
          {
            path: '/',
            element: <Dashboard />,
            meta: {
              icon: <AreaChartOutlined />,
              title: '首页',
            },
          },
          {
            path: 'user',
            element: <User />,
            meta: {
              icon: <UserOutlined />,
              title: '用户',
            },
          },
        ],
      },
    ],
  },
]
