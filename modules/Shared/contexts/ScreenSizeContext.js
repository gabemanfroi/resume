import { createContext, useEffect, useState } from 'react';

export const ScreenSizeContext = createContext({});

export function ScreenSizeProvider({ children }) {
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

  return (
    <ScreenSizeContext.Provider value={{ screenSize }}>
      {children}
    </ScreenSizeContext.Provider>
  );

}