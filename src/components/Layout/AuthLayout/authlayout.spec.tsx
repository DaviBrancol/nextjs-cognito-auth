// Modules Import
import React from 'react'
import '@testing-library/jest-dom'
import { cleanup, render, waitFor } from '@testing-library/react'

// Application Import
import { AuthLayout } from './'
import { AuthProvider } from '@context/index'
import { BrancolProvider } from '@brancol-ui/react'

// /** @test {Main Layout} */

const Mocking = () => {
  return (
    <BrancolProvider>
      <AuthProvider>
        <AuthLayout />
      </AuthProvider>
    </BrancolProvider>
  )
}

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      push: jest.fn(),
    }
  },
}))

describe('[Layout] - Auth Layout', () => {
  afterEach(() => {
    cleanup()
  })

  it('should be in loading stage', async () => {
    const { findByTestId } = render(<Mocking />)

    const loadingContent = findByTestId('auth-loading-container')

    await waitFor(() => expect(loadingContent).toBeDefined())
  })

  it('should be in loaded stage', async () => {
    jest.mock('@context/Auth', () => ({
      useAuth: () => ({
        state: {
          isLoading: false,
        },
      }),
    }))
    const { findByTestId } = render(<Mocking />)

    const loadedContent = findByTestId('auth-loaded-container')

    await waitFor(() => expect(loadedContent).toBeDefined())
  })
})
