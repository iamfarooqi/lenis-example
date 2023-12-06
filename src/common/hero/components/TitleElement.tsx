import React, { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';
import useScreen from '@/hooks/useScreen';
import { vw } from '@/styles';

const Root = styled(Parallax)`
    position: absolute;
    text-align: center;
`;

const TitleWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Title = styled.h1`
    white-space: nowrap;
    will-change: transform;
`;

const SubtitleWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 80px));
`;

const Subtitle = styled.h2`
    opacity: 0;
    ${vw([['width', 1000, 700, 300]])}
`;

interface TitleElementProps {
  title: string;
  subtitle: string;
}

const TitleElement = (props: TitleElementProps) => {
  const { title, subtitle } = props;
  const { windowHeight } = useScreen();
  const [progress, setProgress] = useState(0);
  const onProgressChange = (y: number) => setProgress(y);

  // Changes the value from pixels to a
  // percentage of the total parallax region.
  // Note: 1.75 is the max upper bound
  const pxToPercent = (px: number) => (px / (windowHeight * 1.75));

  // Normalizes the progress value to a value between 0 and 1
  const normalizedProgress = (lowerPercent: number, upperPercent: number) => (
    (progress - pxToPercent(lowerPercent)) / pxToPercent(upperPercent - lowerPercent));

  // Helper function to get the progress variables
  const getProgressVars = (lowerPx: number, upperPx: number) => ({
    lower: pxToPercent(lowerPx),
    upper: pxToPercent(upperPx),
    normalized: normalizedProgress(lowerPx, upperPx),
  });

  const titleStyles = () => {
    const { upper, normalized } = getProgressVars(0, windowHeight * 0.25);
    if (progress <= upper) {
      return ({
        transform: `translateY(calc(80px * ${normalized}))`,
        opacity: 1 - normalized,
      });
    }
    return ({
      transform: 'translateY(80px)',
      opacity: 0,
    });
  };

  const subtitleStyles = () => {
    const {
      lower: enterLower,
      upper: enterUpper,
      normalized: enterNormalized,
    } = getProgressVars(windowHeight * 0.25, windowHeight * 0.75);
    const {
      lower: exitLower,
      normalized: exitNormalized,
    } = getProgressVars(windowHeight * 1.5, windowHeight * 1.75);

    // Before Animation Starts
    if (enterLower >= progress) {
      return ({
        transform: 'translateY(80px)',
        opacity: 0,
      });
    }
    // Enter Animation
    if (enterLower < progress && progress <= enterUpper) {
      return ({
        transform: `translateY(calc(80px * ${enterNormalized}))`,
        opacity: enterNormalized,
      });
    }
    // Pause between Enter & Exit Animation
    if (enterUpper < progress && progress <= exitLower) {
      return ({
        transform: 'translateY(80px)',
        opacity: 1,
      });
    }
    // Exit Animation
    return ({
      transform: `translateY(calc(80px * ${1 - exitNormalized}))`,
      opacity: 1 - exitNormalized,
    });
  };

  return (
    <Root
      startScroll={windowHeight * 0.75}
      endScroll={windowHeight * 2.25}
      onProgressChange={onProgressChange}
    >
      <TitleWrapper>
        <Title style={titleStyles()}>{title}</Title>
      </TitleWrapper>
      <SubtitleWrapper>
        <Subtitle style={subtitleStyles()}>
          {subtitle}
        </Subtitle>
      </SubtitleWrapper>
    </Root>
  );
};

export default TitleElement;
