import React, { useRef, useEffect, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';
import useScreen from '@/hooks/useScreen';

const Root = styled(Parallax)`
  perspective: 300vh;
  height: 100%;
  width: 100%;
  z-index: -1;
`;

const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 16 / 9;
`;

interface VideoElementProps {
    poster: string;
    src: string;
    hasScrolled: boolean;
}

const VideoElement = (props: VideoElementProps) => {
  const { poster, src, hasScrolled } = props;
  const { windowHeight, isMobile } = useScreen();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);
  const onProgressChange = (y: number) => setProgress(y);

  useEffect(() => {
    if (videoRef.current) {
      if (hasScrolled) {
        videoRef.current.play();
      } else {
        videoRef.current.load();
      }
    }
  }, [videoRef, hasScrolled]);

  const videoStyles = () => {
    if (isMobile) return ({});
    return ({
      transform: `rotateX(${progress * -40}deg) scale(${1 - (progress * 0.5)})`,
      filter: `blur(${progress * 30}px)`,
    });
  };

  return (
    <Root
      startScroll={windowHeight * 2}
      endScroll={windowHeight * 3}
      onProgressChange={onProgressChange}
      opacity={[1, 0.5]}
    >
      <Video
        poster={poster}
        ref={videoRef}
        muted
        disablePictureInPicture
        playsInline
        style={videoStyles()}
      >
        <source src={src} />
      </Video>
    </Root>
  );
};

export default VideoElement;
