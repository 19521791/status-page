import { CssBaseline } from '@mui/material'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import theme from './theme'
import { DEFAULT_MODE } from '@utils/constants'
import Content from './Content'

const MainLayout = () => {
  return (
    <>
      <CssVarsProvider
        theme={theme}
        defaultMode={DEFAULT_MODE}
        colorSchemeSelector="class"
      >
        <CssBaseline />
        <Content />
      </CssVarsProvider>
    </>
  )
}

export default MainLayout
