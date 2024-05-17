import {
  Box,
  Button,
  IconButton,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Telegram } from '@mui/icons-material';
import logoSrc from '@/assets/logo.png';

const StyledBoxBar = styled(Box)(() => ({
  transition: '0.3s ease-in-out',
  zIndex: 2,
  width: '100%',
  position: 'fixed',
  backdropFilter: 'blur(2px)',
}));

const StyledImage = styled('img')({
  transition: '0.3s ease-in-out',
});

export const Header = ({ scrolled }: { scrolled: boolean }) => {
  return (
    <StyledBoxBar bgcolor={scrolled ? 'rgba(0,0,0, 0.85)' : 'transparent'}>
      <Stack direction="row" spacing={2} p={1} alignItems="center">
        <IconButton color="inherit" component={NavLink} to="/" sx={{ p: 0 }}>
          <StyledImage
            src={logoSrc}
            alt="Legion Coin"
            width={scrolled ? '48px' : '68px'}
            height={scrolled ? '48px' : '68px'}
          />
        </IconButton>
        <Typography fontWeight="bold" display={{ xs: 'none', sm: 'inline' }}>
          LegionCoin
        </Typography>
        <Box flexGrow="1" />
        <Button
          size="large"
          component={NavLink}
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}>
          <b>HOME</b>
        </Button>
        <Button
          size="large"
          component={NavLink}
          to="/#about"
          onClick={() => {
            const element = document.getElementById('about');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }}>
          <b>ABOUT</b>
        </Button>
        <Button
          size="large"
          component={NavLink}
          to="/swap"
          onClick={() => {
            window.scrollTo({ top: 0 });
          }}>
          <b>SWAP</b>
        </Button>
        <Box flexGrow="1" />
        <Button
          startIcon={<Telegram />}
          component="a"
          target="_blank"
          size="large"
          sx={{
            display: {
              xs: 'none',
              sm: 'inline-flex',
            },
          }}
          href="https://t.me/LegionCoinSOL">
          Telegram
        </Button>
        <IconButton
          sx={{
            display: {
              xs: 'inline-flex',
              sm: 'none',
            },
          }}
          component="a"
          target="_blank"
          href="https://t.me/LegionCoinSOL">
          <Telegram />
        </IconButton>
      </Stack>
    </StyledBoxBar>
  );
};
