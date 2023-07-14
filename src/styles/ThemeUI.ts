import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    common: {
      black: '#0C0D0F',
      white: '#FFFFFF',
    },
    primary: {
      main: '#F83600',
    },
    secondary: {
      main: '#F8B602',
    },
    error: {
      main: '#EB5757',
    },
    warning: {
      main: '#E8590C',
    },
    info: {
      main: '#2D9CDB',
    },
    success: {
      main: '#23DB42',
    },
    grey: {
      50: '#F5F5F5',
      100: '#E9ECEF',
      200: '#DEE2E6',
      300: '#DBDBDB',
      400: '#A4ACB4',
      500: '#A098AE',
      600: '#64666B',
      700: '#424449',
      800: '#1D1E21',
      900: '#141518',
    },
  },
  typography: {
    fontFamily: ['IBM Plex Sans', 'sans-serif'].join(','),
    h1: {
      fontFamily: ['IBM Plex Sans', 'sans-serif'].join(','),
      fontSize: '4rem',
      fontWeight: 'bold',
    },
    h2: {
      fontFamily: ['IBM Plex Sans', 'sans-serif'].join(','),
      fontSize: '3rem',
      fontWeight: 'bold',
    },
    h3: {
      fontFamily: ['IBM Plex Sans', 'sans-serif'].join(','),
      fontSize: '2.5rem',
      fontWeight: 'bold',
    },
    h4: {
      fontFamily: ['IBM Plex Sans', 'sans-serif'].join(','),
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    h5: {
      fontFamily: ['IBM Plex Sans', 'sans-serif'].join(','),
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    h6: {
      fontFamily: ['IBM Plex Sans', 'sans-serif'].join(','),
      fontSize: '1.25rem',
      fontWeight: 'bold',
    },
    subtitle1: {
      fontFamily: ['Open Sans', 'Arial', 'Helvetica', 'sans-serif'].join(','),
      fontSize: '1rem',
      fontWeight: 'bold',
    },
    subtitle2: {
      fontFamily: ['Open Sans', 'Arial', 'Helvetica', 'sans-serif'].join(','),
      fontSize: '0.875rem',
      fontWeight: 'bold',
    },
    body1: {
      fontFamily: ['Open Sans', 'Arial', 'Helvetica', 'sans-serif'].join(','),
      fontSize: '1rem',
    },
    body2: {
      fontFamily: ['Open Sans', 'Arial', 'Helvetica', 'sans-serif'].join(','),
      fontSize: '0.875rem',
    },
    button: {
      fontFamily: ['IBM Plex Sans', 'sans-serif'].join(','),
      fontSize: '1rem',
      textTransform: 'none',
      fontWeight: 'bold',
    },
    caption: {
      fontFamily: ['IBM Plex Sans', 'sans-serif'].join(','),
      fontSize: '0.75rem',
    },
    overline: {
      fontFamily: ['IBM Plex Sans', 'sans-serif'].join(','),
      fontSize: '0.75rem',
      textTransform: 'uppercase',
    },
  },
})

export default theme
