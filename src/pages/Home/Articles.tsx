import SectionContainer from '@/components/SectionContainer';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';

const articles = [
  {
    image: 'https://legioncoin.exchange/images/full.jpg',
    date: 'November 21, 2011',
    title: 'people Guerilla Open Access Manifesto',
    src: 'https://archive.org/details/GuerillaOpenAccessManifesto',
  },
  {
    image: 'https://legioncoin.exchange/images/aaron_swartz.jpg',
    src: 'https://www.documentarytube.com/videos/anonymous-the-story-of-aaron-swartz/',
    date: 'December 20, 2022',
    title: 'ANONYMOUS – THE STORY OF AARON SWARTZ',
  },
];

export const Articles = () => {
  return (
    <SectionContainer id="articles">
      <Container maxWidth="lg">
        <Stack
          spacing={8}
          py={{
            xs: 8,
            sm: 16,
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
            Check out some articles
          </Typography>

          <div>
            <Grid container spacing={2} justifyContent="space-evenly">
              {articles.map(({ image, src, date, title }, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Button
                    component="a"
                    href={src}
                    target="_blank"
                    fullWidth={false}
                    sx={{ borderRadius: 4 }}>
                    <Stack spacing={2} alignItems="center">
                      <Box
                        component="img"
                        borderRadius={4}
                        boxShadow={2}
                        src={image}
                        height="300px"
                        sx={{
                          objectFit: 'cover',
                        }}
                        width="100%"
                      />
                      <div>
                        <Typography>{date}</Typography>
                        <Typography variant="h5">{title}</Typography>
                      </div>
                    </Stack>
                  </Button>
                </Grid>
              ))}
            </Grid>
          </div>
        </Stack>
      </Container>
    </SectionContainer>
  );
};
