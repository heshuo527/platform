// src/store/auth.ts
import { create } from 'zustand'

type User = {
  id: number
  name: string
  roles: string[]
}

type AuthState = {
  token: string | null
  user: User | null
  setAuth: (token: string, user: User) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>(set => ({
  token: localStorage.getItem('token'),
  user: null,

  getToken: () => {
    return localStorage.getItem('token')
  },

  setAuth: (token, user) => {
    localStorage.setItem('token', token)
    set({ token, user })
  },

  logout: () => {
    localStorage.removeItem('token')
    set({ token: null, user: null })
  },
}))
