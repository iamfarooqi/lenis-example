import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';

import { ReactComponent as LogoSVG } from '@/assets/images/global/logo.svg';
import BackgroundImg from '@/assets/images/hero/background.png';
import useScreen from '@/hooks/useScreen';
import { vw } from '@/styles';

const Root = styled(Parallax)`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
`;

const Background = styled.div`
    position: absolute;
    top: 0;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url(${BackgroundImg});
    width: 100vw;
    height: 100%;
    background-size: cover;
`;

const Logo = styled(LogoSVG)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.95;
    ${vw([
      ['width', 400, 200, 150],
      ['height', 400, 200, 150],
    ])}
`;

interface IntroSectionProps {
  hasScrolled: boolean;
  setHasScrolled: (hasScrolled: boolean) => void;
}

const IntroSection = (props: IntroSectionProps) => {
  const { hasScrolled, setHasScrolled } = props;
  const { windowHeight } = useScreen();

  const onProgressChange = (progress: number) => {
    if (progress > 0) {
      if (!hasScrolled) setHasScrolled(true);
      return;
    }
    setHasScrolled(false);
  };

  return (
    <Root
      startScroll={0}
      endScroll={windowHeight / 2}
      scale={[1, 3]}
      opacity={[1, 0]}
      onProgressChange={onProgressChange}
    >
      <Background />
      <Logo />
    </Root>
  );
};

export default IntroSection;
