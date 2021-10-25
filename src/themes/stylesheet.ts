import { createTheme } from '@mui/material'

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#ff0000',
    },
  },
  typography: {
    fontFamily: 'Nunito Sans, sans-serif',
    button: {
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 3,
  },
})
