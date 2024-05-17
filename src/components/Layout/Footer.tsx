import { Divider, Stack, Typography } from '@mui/material';
import SectionContainer from '../SectionContainer';

export const Footer = () => {
  return (
    <SectionContainer p={0} bgcolor="rgba(0,0,0, 0.85)">
      <Stack spacing={1} p={1}>
        <Stack justifyContent="center" alignItems="center" p={4} spacing={4}>
          <Typography variant="h6">We do not forgive</Typography>
          <Typography variant="h6">We do not forget</Typography>
          <Typography variant="h6">We do Legion</Typography>
          <Typography variant="h6">Expect us!</Typography>
        </Stack>
        <Divider />
        <Typography variant="body2">© 2024. All Rights Reserved.</Typography>
      </Stack>
    </SectionContainer>
  );
};
