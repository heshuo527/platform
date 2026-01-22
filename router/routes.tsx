import type { RouteObject } from 'react-router-dom'
import { lazy } from 'react'

const BlankLayout = lazy(() => import('../src/Layout/BlankLayout'))
const BaseLayout = lazy(() => import('../src/Layout/BaseLayout'))
const Login = lazy(() => import('../src/Login'))
const Dashboard = lazy(() => import('../src/pages/Dashboard'))

export const routes: RouteObject[] = [
  {
    element: <BlankLayout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
  {
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
    ],
  },
]
