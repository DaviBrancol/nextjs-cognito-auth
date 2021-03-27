// Modules Import
import React from 'react'
import '@testing-library/jest-dom'
import { cleanup, render, waitFor } from '@testing-library/react'

// Application Import
import { MainLayout } from './'
import { ExampleProvider } from '@context/index'

// /** @test {Main Layout} */

const Mocking = () => {
  return (
    <ExampleProvider>
      <MainLayout />
    </ExampleProvider>
  )
}

describe('[Layout] - Main Layout', () => {
  afterEach(() => {
    cleanup()
  })

  it('should be in loading stage', async () => {
    const { findByTestId } = render(<Mocking />)

    const loadingContent = findByTestId('loading-container')

    await waitFor(() => expect(loadingContent).toBeDefined())
  })

  it('should be in loaded stage', async () => {
    jest.mock('@context/Example', () => ({
      useExample: () => ({
        isLoading: false,
      }),
    }))
    const { findByTestId } = render(<Mocking />)

    const loadedContent = findByTestId('loaded-container')

    await waitFor(() => expect(loadedContent).toBeDefined())
  })
})
