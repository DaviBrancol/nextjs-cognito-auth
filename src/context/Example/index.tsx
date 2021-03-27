import React, { useState, createContext, useEffect } from 'react'
import { sleep } from '@lib/index'

const ExampleContext = createContext(null)

export function ExampleProvider(props) {
  const [isLoading, setLoading] = useState(true)
  const [examples, setExamples] = useState(null)

  async function mountPage() {
    await sleep(3000)
    setLoading(false)
  }

  useEffect(() => {
    mountPage()
  }, [])

  return (
    <ExampleContext.Provider
      value={{
        state: {
          isLoading,
          examples,
        },
        operations: {
          setExamples,
        },
      }}
      {...props}
    />
  )
}

export function useExample() {
  const context = React.useContext(ExampleContext)
  if (context === undefined) {
    throw new Error(`useExample must be used within a ExampleProvider`)
  }
  return context
}
