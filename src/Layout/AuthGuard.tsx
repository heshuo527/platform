import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '@/store/auth'

export default function AuthGuard() {
  const token = useAuthStore(state => state.token)
  console.log('🚀 ~ AuthGuard ~ token:', token)

  if (!token) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}
