import SectionContainer from '@/components/SectionContainer';
import { Container, Stack, Typography } from '@mui/material';

export const About = () => {
  return (
    <SectionContainer id="about" bgcolor="rgba(10,10,20,0.4)">
      <Container maxWidth="md">
        <Stack
          spacing={2}
          py={{
            xs: 8,
            sm: 18,
          }}>
          <Typography
            typography={{
              xs: 'h3',
              sm: 'h2',
            }}
            align="center"
            sx={{
              fontWeight: '700 !important',
            }}>
            LegionCoinSOL
          </Typography>
          <br />
          <Typography align="center" variant="h6">
            Legion Coin, run by Anons, donating 10% of any revenue to help Anons
            in trouble, legal costs, help while kidnapped by the tryants who
            rule. Crypto for the good of humanity, not the wealth of scammers.
            Beware, we do not forgive, we do not forget. Expect us
          </Typography>
        </Stack>
      </Container>
    </SectionContainer>
  );
};
