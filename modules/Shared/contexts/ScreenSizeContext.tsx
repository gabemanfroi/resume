import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

interface ScreenSizeInterface {
  screenSize: number;
}

const screenSizeInterface: ScreenSizeInterface = {
  screenSize: 1024,
};

const ScreenSizeContext = createContext<ScreenSizeInterface>(screenSizeInterface);

interface ScreenSizeProviderInterface {
  children: React.ReactNode
}

export const ScreenSizeProvider: React.FC<ScreenSizeProviderInterface> = ({ children }) => {
  const [screenSize, setScreenSize] = useState(1024);

  useEffect(() => {
    updateSize();
    window.addEventListener('resize', updateSize);
    return function cleanup() {
      window.removeEventListener('resize', updateSize);
    };
  });

  function updateSize() {
    setScreenSize(window.innerWidth);
  }

  useEffect(() => {
    setScreenSize(window?.innerWidth);
  }, []);

  const value = useMemo(() => ({ screenSize }), [screenSize]);

  return (
    <ScreenSizeContext.Provider value={value}>
      {children}
    </ScreenSizeContext.Provider>
  );

}

export const useScreenSize = () => useContext(ScreenSizeContext)
