// Modules Import
import React, { useState, createContext, useEffect } from 'react'
import { Auth } from 'aws-amplify'
import { useRouter } from 'next/router'

// Application Import
import { CognitoUser } from '@typings/index'
import { getCognitoErrorMessage } from '@lib/index'

const AuthContext = createContext(null)

export function AuthProvider(props) {
  const [isLoading, setLoading] = useState<boolean>(true)
  const [isSubmitting, setSubmitting] = useState<boolean>(false)
  const [user, setUser] = useState<CognitoUser>(null)
  const router = useRouter()

  const whitelist = ['/login', '/register']

  async function moveToLogin() {
    await router.push('/login')
  }

  async function moveToRegister() {
    await router.push('/register')
  }

  async function moveToDashboard() {
    await router.push('/')
  }

  async function redirectUser(user: CognitoUser) {
    if (user && whitelist.includes(router.pathname)) {
      await moveToRegister()
    } else if (!user && !whitelist.includes(router.pathname)) {
      await moveToLogin()
    }
    setLoading(false)
  }

  async function getUser() {
    try {
      const user = await Auth.currentAuthenticatedUser()
      setUser(user)
      redirectUser(user)
    } catch (err) {
      redirectUser(null)
    }
  }

  async function login({ username, password }) {
    setSubmitting(true)
    try {
      const { data } = await Auth.signIn(username, password)
      console.log(data)
      await moveToDashboard()
    } catch (e) {
      const errorMessage = getCognitoErrorMessage(e)
      console.log(errorMessage)
      console.log(JSON.stringify(e))
    }
    setSubmitting(false)
  }

  async function register({ name, email, password }) {
    setSubmitting(true)
    try {
      const data = await Auth.signUp({
        username: email,
        password,
        attributes: { email, name },
      })
      console.log(data)
      await moveToLogin()
    } catch (e) {
      const errorMessage = getCognitoErrorMessage(e)
      console.error(JSON.stringify(e))
      console.error(errorMessage)
    }
    setSubmitting(false)
  }

  async function logout() {
    await Auth.signOut()
    moveToLogin()
  }

  useEffect(() => {
    if (isLoading) {
      getUser()
    }
  }, [isLoading])

  return (
    <AuthContext.Provider
      value={{
        state: {
          isLoading,
          isSubmitting,
          user,
        },
        operations: {
          login,
          register,
          moveToLogin,
          moveToRegister,
          moveToDashboard,
          setSubmitting,
          logout,
        },
      }}
      {...props}
    />
  )
}

export function useAuth() {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`)
  }
  return context
}
