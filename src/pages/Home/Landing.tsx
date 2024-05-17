import SectionContainer from '@/components/SectionContainer';
import { Stack, Typography } from '@mui/material';

export const Landing = () => {
  return (
    <SectionContainer>
      <Stack
        height="100vh"
        alignItems="center"
        justifyContent="center"
        spacing={4}>
        <Typography
          typography={{
            xs: 'h3',
            sm: 'h2',
            md: 'h1',
          }}
          align="center"
          sx={{
            fontWeight: '700 !important',
          }}>
          Legion Coin DeFi Aggregator
        </Typography>
        <Typography
          typography={{
            xs: 'h4',
            md: 'h2',
          }}
          align="center"
          sx={{
            fontWeight: '500 !important',
          }}>
          Where the Collective Get Best Value
        </Typography>
      </Stack>
    </SectionContainer>
  );
};
