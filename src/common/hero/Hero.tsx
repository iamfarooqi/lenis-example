import React, { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';
import useScreen from '@/hooks/useScreen';
import { vw } from '@/styles';

import IntroSection from './components/IntroSection';
import TitleElement from './components/TitleElement';
import VideoElement from './components/VideoElement';
import ScrollIndicator from './components/ScrollIndicator';

const Root = styled.section`
    ${vw([
      ['height', '400vh', '400vh', '300vh'],
    ])}
    width: 100%;
`;

const Container = styled(Parallax)`
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

interface HeroProps {
  videoPoster: string;
  videoSource: string;
  title: string;
  subtitle: string;
}
const Hero = (props: HeroProps) => {
  const {
 videoPoster, videoSource, title, subtitle,
} = props;
  const { windowHeight, isMobile } = useScreen();
  const [hasScrolled, setHasScrolled] = useState(false);

  const [progress, setProgress] = useState(0);
  const onProgressChange = (y: number) => setProgress(y);

  const containerStyles = () => {
    if (progress < 1) return ({ position: 'fixed' as 'fixed', top: '0' });
    return ({ position: 'absolute' as 'absolute', top: isMobile ? '200vh' : '300vh' });
  };

  const scrollIndicatorStyles = () => {
    if (progress < 0.5) return ({ opacity: 1 });
    return ({ opacity: 0 });
  };

  return (
    <Root>
      <Container
        startScroll={windowHeight}
        endScroll={windowHeight * (isMobile ? 2 : 3)}
        onProgressChange={onProgressChange}
        style={containerStyles()}
      >
        <IntroSection
          hasScrolled={hasScrolled}
          setHasScrolled={setHasScrolled}
        />
        <VideoElement
          poster={videoPoster}
          src={videoSource}
          hasScrolled={hasScrolled}
        />
        <TitleElement
          title={title}
          subtitle={subtitle}
        />
        <ScrollIndicator style={scrollIndicatorStyles()} />
      </Container>

    </Root>
  );
};

export default Hero;
