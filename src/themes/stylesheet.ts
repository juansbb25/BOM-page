import { createTheme } from '@mui/material'

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#480ca8',
      light: '#4895ef',
      dark: '#560bad',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f72585',
    },
    info: {
      main: '#4cc9f0',
    },
  },
  typography: {
    h3: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 700,
    },
  },
})
