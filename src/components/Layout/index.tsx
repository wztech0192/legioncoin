import { Outlet } from 'react-router-dom';
import AnimatedBackground from './AnimatedBackground';
import { Fab, Fade, Grow, useScrollTrigger } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import ScrollToHash from '../ScrollToHash';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = () => {
  const scrolled = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Fade in>
      <div>
        <AnimatedBackground />

        <Header scrolled={scrolled} />
        <ScrollToHash />
        <Outlet />
        <Footer />
        <Grow in={scrolled}>
          <Fab
            color="primary"
            sx={{ position: 'fixed', bottom: 16, right: 16 }}
            size="small"
            aria-label="scroll back to top"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>
            <KeyboardArrowUp />
          </Fab>
        </Grow>
      </div>
    </Fade>
  );
};
