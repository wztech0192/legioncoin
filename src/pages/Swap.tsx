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

        affiliateFeeRecipient: '0x5163593B9512C57b7F5f8ebc7c12B34615cdE49E',
        affiliateFeeRecipientByChains: {
          8451113: '7P4CPEx9C51FegAHVy87jP7YrvuejmQEeRJ7uzjyq3rA',
        },
        enableDarkMode: true,
        primaryColorDark: '#c8ffcf',
        chainId: 8451113,
        defaultSelectedTokenByChains: {
          137: {
            defaultOutputToken: '0xb7486718ea21C79BBd894126f79F504fd3625f68',
          },
          8451113: {
            defaultOutputToken: '9hX5qubXT56uhtDWuUqiYLu5eFfrBi3YizfX4nFPmqk',
          },
        },
        fontFamily: '"Exo"',
        overrides: {
          Card: {
            sx: {
              backdropFilter: 'blur(15px)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
        showSwapRouteCard: true,
        showPriceComparisonCard: true,
        showTokenInfoCard: true,
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
          pt={{
            xs: '75px',
            md: '15rem',
          }}>
          <Stack width="100%" alignItems="center" id="polyswap-root">
            <Skeleton
              variant="rounded"
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
