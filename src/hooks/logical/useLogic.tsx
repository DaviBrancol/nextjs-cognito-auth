import { useState } from 'react'

export function useLogic(onConfirm: (data) => void = null) {
  const [isOpen, setOpen] = useState(false)
  const [hasError, setHasError] = useState(false)

  function getState() {
    return {
      isOpen,
      hasError,
    }
  }

  return { isOpen, setOpen, hasError, setHasError, onConfirm, getState }
}
