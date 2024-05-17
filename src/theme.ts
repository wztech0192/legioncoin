import { createTheme, Theme } from '@mui/material/styles';

/**
 * Handles global theme
 * @see https://mui.com/material-ui/customization/theming/
 */

export const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FEFAF6',
    },
    background: {
      default: '#000000',
    },
  },
  typography: {
    allVariants: {
      fontFamily: '"Exo"',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
    },
  },
});

export const globalStyle = (theme: Theme) => ({
  'html, body': {
    margin: 0,
    height: '0%',
    backgroundColor: theme.palette.background.default,
  },
});
