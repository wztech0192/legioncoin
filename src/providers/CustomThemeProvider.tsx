import React from 'react';
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { darkTheme, globalStyle } from '../theme';

export const CustomThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyle} />
      {children}
    </ThemeProvider>
  );
};
