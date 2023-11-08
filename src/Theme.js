import { createTheme } from '@mui/material/styles';

// Create the theme outside the component to avoid re-creation on each render
const baseTheme = createTheme({
    palette: {
      ochre: {
        main: '#E3D026',
        light: '#E9DB5D',
        dark: '#A29415',
        contrastText: '#242105',
      },
    },
    // ...add other customizations
  });
  
  const theme = createTheme(baseTheme, {
    components: {
      MuiButton: {
        styleOverrides: {
          outlined: {
            color: baseTheme.palette.common.black, // Set text color to black
            border: `1px solid ${baseTheme.palette.common.black}`,
            '&:hover': {
              color: baseTheme.palette.common.white, // Set text color to white on hover
              border: `1px solid ${baseTheme.palette.common.white}`, // Set border color to white on hover
              backgroundColor: baseTheme.palette.common.black, // Set background to black on hover
            },
          },
        },
      },
    },
  });

  export default theme;