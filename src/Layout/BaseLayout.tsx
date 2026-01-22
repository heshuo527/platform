import React, { Suspense, useState } from 'react'
import { Breadcrumb, Layout, theme } from 'antd'
import { Outlet } from 'react-router-dom'
import SiderComponent from './components/Sider'
import { LeftOutlined } from '@ant-design/icons'

const { Header, Content, Footer, Sider } = Layout

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        trigger={<LeftOutlined />}
        collapsible
        collapsed={collapsed}
        onCollapse={value => setCollapsed(value)}
      >
        <SiderComponent />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }} items={[{ title: 'User' }, { title: 'Bill' }]} />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default App
