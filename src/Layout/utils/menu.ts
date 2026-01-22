import type React from 'react'
import type { AppRouteObject } from '../../router/routes'

interface MenuItem {
  key: string
  label: string
  icon?: React.ReactNode
  children?: MenuItem[]
}

export function generateMenu(routes: AppRouteObject[], parentPath = ''): MenuItem[] {
  return routes
    .filter(route => !route.meta?.hidden && route.path)
    .map(route => {
      const fullPath = route.path === '/' ? '/' : `${parentPath}/${route.path}`.replace(/\/+/g, '/')

      const menu: MenuItem = {
        key: fullPath,
        label: route.meta?.title || '',
        icon: route.meta?.icon,
      }

      if (route.children?.length) {
        menu.children = generateMenu(route.children, fullPath)
      }

      return menu
    })
}
