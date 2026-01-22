import React from 'react'
import { Layout, theme } from 'antd'

const { Header } = Layout

const HeaderComponent: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
      </Layout>
    </Layout>
  )
}

export default HeaderComponent
