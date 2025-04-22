import { useColorScheme } from '@mui/material/styles'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

const ModeToggle = () => {
  const { mode, setMode } = useColorScheme()

  const toggleMode = () => setMode(mode === 'light' ? 'dark' : 'light')

  return (
    <div
      onClick={toggleMode}
      className='cursor-pointer'
    >
      {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon sx={{ color: '#F5F5F5' }} /> }
    </div>
  )
}

export default ModeToggle