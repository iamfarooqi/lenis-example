import React, { useEffect } from 'react';
import Home from '@/pages/Home';
import useLenis from '@/hooks/useLenis';

const App = () => {
  useLenis();
  useEffect(() => {
    // Prevent scroll restoration on refresh
    window.history.scrollRestoration = 'manual';
  }, []);
  return (
    <Home />
  );
};

export default App;
