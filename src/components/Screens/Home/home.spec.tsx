// Modules Import
import React from 'react'
import '@testing-library/jest-dom'
import { cleanup, render, screen, waitFor } from '@testing-library/react'

// Application Import
import { HomeScreen } from './'
import { ExampleProvider } from '@context/index'

// /** @test {Home Screen} */

const Mocking = () => {
  return (
    <ExampleProvider>
      <HomeScreen />
    </ExampleProvider>
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
