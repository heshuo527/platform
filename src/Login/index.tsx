import { setToken } from '@/utils/auth'
import { Button, Checkbox, Form, Input, type FormProps } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/store/auth'

export default function App() {
  const navigate = useNavigate()
  const authStore = useAuthStore()
  type FieldType = {
    username?: string
    password?: string
    remember?: string
  }

  const onFinish: FormProps<FieldType>['onFinish'] = values => {
    console.log('Success:', values)
    authStore.setAuth('123', { id: 1, name: 'Admin', roles: ['admin'] })
    navigate('/', { replace: true })
  }

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="账户"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="密码"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
          <Checkbox>记住我</Checkbox>
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
