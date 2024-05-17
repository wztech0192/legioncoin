import { Box, useTheme } from '@mui/material';
import Effect from 'vanta/dist/vanta.trunk.min';
import { memo, useEffect, useLayoutEffect, useRef } from 'react';

const AnimatedBackground = memo(() => {
  const theme = useTheme();

  const vantaRef = useRef<typeof Effect>();

  useLayoutEffect(() => {
    try {
      const vantaEffect = Effect({
        el: '#animated-bg',
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        color: 0x45984e,
        backgroundColor: theme.palette.background.default,
        spacing: 1,
        chaos: 2.0,
      });
      vantaRef.current = vantaEffect;
      return () => {
        vantaEffect.destroy();
      };
    } catch (e) {
      console.error(e);
    }
  }, [theme.palette.background.default]);

  useEffect(() => {
    let lastMoveTime = 0;
    let calculatedValue = 1;
    const gracePeriod = 500; // milliseconds before shrinking
    let isMoving = false;
    let graceTimeout: NodeJS.Timeout | null = null;

    const handleMove = (e: Event): void => {
      const speed = e.type === 'scroll' ? 0.04 : 0.02;
      const currentTime = Date.now();
      if (lastMoveTime !== 0) {
        isMoving = true;
        calculatedValue = Math.min(calculatedValue + speed, 30);
        // Reset the grace period timeout
        if (graceTimeout) {
          clearTimeout(graceTimeout);
        }
        graceTimeout = setTimeout(() => {
          isMoving = false;
        }, gracePeriod);
      }

      lastMoveTime = currentTime;
    };

    const updateCalculatedValue = () => {
      if (!isMoving) {
        calculatedValue = Math.max(calculatedValue - 0.02, 2);
      }

      // Update the chaos value
      //  vantaRef.current.options.chaos = calculatedValue;
      vantaRef.current.options.chaos = calculatedValue;

      // Update the displayed value (for debugging or visualization purposes)
      const valueElement = document.getElementById('calculatedValue');
      if (valueElement) {
        valueElement.textContent = `Chaos Value: ${calculatedValue.toFixed(2)}`;
      }

      requestAnimationFrame(updateCalculatedValue);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('scroll', handleMove);
    requestAnimationFrame(updateCalculatedValue);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('scroll', handleMove);
      if (graceTimeout) {
        clearTimeout(graceTimeout);
      }
    };
  }, []);
  return (
    <>
      <Box
        id="animated-bg"
        width="100%"
        height="100vh"
        position="fixed"
        top={0}
        left={0}
      />
      <Box
        sx={{
          backdropFilter: 'blur(2px)',
        }}
        width="100%"
        height="100vh"
        position="fixed"
        top={0}
        left={0}
      />
    </>
  );
});

export default AnimatedBackground;
