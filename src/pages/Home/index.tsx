import { Landing } from './Landing';
import { About } from './About';
import { Articles } from './Articles';
import { Fade } from '@mui/material';
import { Marquee } from '@/components/Marquee';

export const Home = () => {
  return (
    <Fade in>
      <div>
        <Landing />
        <Marquee />
        <About />
        <Articles />
      </div>
    </Fade>
  );
};
