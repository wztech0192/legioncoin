import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { memo } from 'react';
import SectionContainer from './SectionContainer';

const MarqueeContainer = styled('div')({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  position: 'relative',
});

const MarqueeContent = styled('div')(() => ({
  display: 'inline-block',
  animation: 'marquee 40s linear infinite',
  '@keyframes marquee': {
    '0%': {
      transform: 'translateX(0)',
    },
    '100%': {
      transform: 'translateX(-50%)',
    },
  },
}));

const InnerContent = styled('div')({
  display: 'inline-block',
});
const items = [
  'Access Control Bypass',
  'Exploitation Techniques',
  'Backdoors',
  'Social Engineering',
  'Zero-Day Vulnerabilities',
  'Phishing Attacks',
  'SQL Injection',
  'Cross-Site Scripting (XSS)',
  'Malware Deployment',
  'Packet Sniffing',
  'Brute Force Attacks',
  'Man-in-the-Middle (MitM) Attacks',
];

export const Marquee = memo(() => {
  return (
    <SectionContainer>
      <MarqueeContainer>
        <MarqueeContent>
          <InnerContent>
            {items.map((item, index) => (
              <Typography component="span" key={index} pr={4}>
                *{item}*
              </Typography>
            ))}
          </InnerContent>
          <InnerContent>
            {items.map((item, index) => (
              <Typography component="span" key={index + items.length} pr={4}>
                {item}
              </Typography>
            ))}
          </InnerContent>
        </MarqueeContent>
      </MarqueeContainer>
    </SectionContainer>
  );
});
