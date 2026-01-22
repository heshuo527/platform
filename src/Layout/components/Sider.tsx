import { useNavigate, useLocation } from 'react-router-dom'
import { routes } from '../../router/routes'
import { generateMenu } from '../utils/menu'
import { Menu } from 'antd'

export default function Sider() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  // TODO: 需要优化
  const baseLayoutRoutes = routes[1].children[0].children
  const menuList = generateMenu(baseLayoutRoutes || [])

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={['/']}
      selectedKeys={pathname === '/' ? ['/'] : [pathname]}
      mode="inline"
      items={menuList.map(item => ({
        ...item,
        onClick: () => navigate(item.key),
        style: {
          fontWeight: pathname === item.key ? 'bold' : 'normal',
        },
      }))}
    />
  )
}
