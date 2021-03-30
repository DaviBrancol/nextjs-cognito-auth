// Modules Import
import React from 'react'
import '@testing-library/jest-dom'
import { cleanup, render, screen, waitFor } from '@testing-library/react'

// Application Import
import { HomeScreen } from './'
import { AuthProvider } from '@context/index'
import { BrancolProvider } from '@brancol-ui/react'

// /** @test {Home Screen} */

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      push: jest.fn(),
    }
  },
}))

const Mocking = () => {
  return (
    <BrancolProvider>
      <AuthProvider>
        <HomeScreen />
      </AuthProvider>
    </BrancolProvider>
  )
}

describe('[Screen] - Home', () => {
  afterEach(() => {
    cleanup()
  })

  it('should display its title', async () => {
    render(<Mocking />)
    await waitFor(() => expect(screen.queryByText('Welcome to your new App')).toBeDefined())
  })

  it('should display its caption', async () => {
    render(<Mocking />)
    await waitFor(() =>
      expect(
        screen.queryByText("I'm sure you are going to build something incredible!")
      ).toBeDefined()
    )
  })

  it('should display the app logo', async () => {
    const { findByTestId } = render(<Mocking />)
    const logo = findByTestId('app-logo')

    await waitFor(() => expect(logo).toBeDefined())
  })
})
