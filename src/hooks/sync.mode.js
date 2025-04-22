import { useEffect } from 'react'
import { useColorScheme } from '@mui/material'

export const useSyncMuiMode = () => {
  const { setMode } = useColorScheme()

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'mui-mode') {
        setMode(e.newValue || 'light')
      }
    }

    window.addEventListener('storage', handleStorageChange)

    const savedMode = localStorage.getItem('mui-mode')
    if (savedMode) setMode(savedMode)

    return () => window.removeEventListener('storage', handleStorageChange)
  }, [setMode])
}