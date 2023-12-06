import { useState, useEffect } from 'react';
import { useParallaxController } from 'react-scroll-parallax';
import appConfig from '../config/app.config';

const useScreen = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [isMobile, setIsMobile] = useState(false);
  const parallaxController = useParallaxController();

  const onResize = () => {
    setWindowHeight(window.innerHeight);

    if (window.innerWidth < appConfig.mediaQuery.tablet) setIsMobile(true);
    else setIsMobile(false);

    parallaxController.update();
  };

  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);
    return (() => {
      window.removeEventListener('resize', onResize);
    });
  }, []);

  return {
    windowHeight,
    isMobile,
  };
};

export default useScreen;
