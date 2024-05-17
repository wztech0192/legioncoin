import SectionContainer from '@/components/SectionContainer';
import { useMetadata } from '@/providers/MetadataContextProvider';
import {
  Box,
  Button,
  Container,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';

export const Articles = () => {
  const metadata = useMetadata();
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
              {!metadata.isLoaded && (
                <>
                  <Grid item xs={12} sm={6} md={4}>
                    <Skeleton width="100%" height="300px" variant="rounded" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Skeleton width="100%" height="300px" variant="rounded" />
                  </Grid>
                </>
              )}
              {metadata.articles.map(({ image, src, date, title }, index) => (
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
