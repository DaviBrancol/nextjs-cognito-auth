// Modules Import
import React from 'react'
import '@testing-library/jest-dom'
import { cleanup, render, screen, waitFor } from '@testing-library/react'

// Application Import
import { Title } from './'

// /** @test {Component Title} */

describe('[Component] - Title', () => {
  afterEach(() => {
    cleanup()
  })

  it('should display a valid title', async () => {
    const title = 'Testing Title'
    render(<Title value={title} />)
    await waitFor(() => expect(screen.queryByText(title)).toBeInTheDocument())
  })
})
