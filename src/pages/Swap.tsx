import { Marquee } from '@/components/Marquee';
import SectionContainer from '@/components/SectionContainer';
import { Fade, Skeleton, Stack } from '@mui/material';
import { useLayoutEffect } from 'react';

export const Swap = () => {
  useLayoutEffect(() => {
    const initPolyswapApp = () => {
      window.InitPolyswapApp('polyswap-root', {
        marketer: 'Legion-Coin',
        defaultSlippage: 5,
        affiliateFee: 1.5,
        affiliateFeeRecipient: '0x05b42Ca23b82417F52a47B624A123B1037d4a03B',
        enableDarkMode: true,
        primaryColorDark: '#FEFAF6',
        overrides: {
          SwapCard: {
            sx: {
              backdropFilter: 'blur(15px)',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
            },
          },
        },
      });
    };

    if (window.InitPolyswapApp) {
      initPolyswapApp();
      return;
    }

    const script = document.createElement('script');
    script.src =
      'https://cdn.jsdelivr.net/npm/@polyswapai/widget@latest/bundles/polyswap-app.min.js';
    script.async = true;

    script.onload = initPolyswapApp;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Fade in>
      <div>
        <SectionContainer
          minHeight="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center">
          <Stack width="100%" alignItems="center" id="polyswap-root">
            <Skeleton
              variant="rectangular"
              height="454px"
              animation="wave"
              sx={{
                maxWidth: '418px',
                width: '100%',
                borderRadius: 2,
              }}
            />
          </Stack>
        </SectionContainer>
        <Marquee />
      </div>
    </Fade>
  );
};
