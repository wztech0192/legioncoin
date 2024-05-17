import { Box, BoxProps } from '@mui/material';
import { PropsWithChildren } from 'react';

const SectionContainer = ({
  children,
  ...boxProps
}: PropsWithChildren<BoxProps>) => {
  return (
    <Box p={2} {...boxProps} zIndex={1} position="relative">
      {children}
    </Box>
  );
};

export default SectionContainer;
