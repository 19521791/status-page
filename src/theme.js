// theme.js
import { cyan, deepOrange, orange, teal } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  colorSchemeSelector: 'class',
  cssVarPrefix: 'mui',

  colorSchemes: {
    light: {
      palette: {
        background: {
          default: '#f1f5f9',
          paper: '#F5F5F5',
          header: '#ffffff',
          sidebar: '#ffffff',
          content: '#ffffff',
          statusBlock: '#f1f5f9',
          addServiceBtn: '#000000',
          modal: '#F5F5F5',
          hover: '#ECFEFF'
        },
        text: {
          primary: '#334155',
          secondary: '#334155',
          addServiceBtn: '#ffffff'
        }
      }
    },
    dark: {
      palette: {
        background: {
          default: '#1e2a32',
          paper: '#ffffff',
          header: '#3d4d56',
          sidebar: '#34444d',
          content: '#2a3a44',
          statusBlock: '#4d6666',
          addServiceBtn: '#F5F5F5',
          modal: '#334155',
          hover: '#ffffff3d'
        },
        text: {
          primary: '#ffffff',
          secondary: '#ffffff',
          addServiceBtn: '#000000'
        }
      }
    }
    // dark: {
    //   palette: {
    //     background: {
    //       default: '#1a242e',
    //       paper: '#ffffff',
    //       header: '#39434d',
    //       sidebar: '#2e3842',
    //       content: '#26323d',
    //       statusBlock: '#4d6666'
    //     },
    //     text: {
    //       primary: '#d9e2e6'
    //     }
    //   }
    // }
  }
})

export default theme
